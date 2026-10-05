window.DojoEngine = (()=>{
// All clinical facts, question patterns, scores and feedback templates live in case data.
function createSession(caseId){return {caseId,startedAt:null,endedAt:null,events:[],factIds:[],observations:[],measurements:[],impression:'',reasoningSnapshots:[],final:null};}
function elapsed(s){return s.startedAt?Math.max(0,Math.floor(((s.endedAt??Date.now())-s.startedAt)/1000)):0;}
function record(s,type,payload){if(!s.startedAt||s.endedAt)throw new Error('活動中のみ実施できます。');const e={sequence:s.events.length+1,elapsedSeconds:elapsed(s),type,...payload};s.events.push(e);return e;}
const normalize=s=>String(s||'').normalize('NFKC').replace(/\s+/g,'').toLowerCase();
const regex=pattern=>new RegExp(pattern,'i');
function answerPatient(m,question,responder='patient'){
  if(typeof question!=='string'||!question.trim()||question.length>500)throw new Error('質問は1〜500文字で入力してください。');
  if(!(m.responders||[{id:'patient'}]).some(r=>r.id===responder))throw new Error('この症例にいない相手には質問できません。');
  let q=normalize(question);for(const [from,to]of m.questionNormalization.aliases)q=q.replaceAll(normalize(from),normalize(to));
  const vital=/(バイタル|血圧|spo2|酸素飽和|心電図|体温|血糖|脈拍|呼吸数)/i;
  const vitalQuestion=q.replace(/高血圧|低血圧|低血糖|高血糖|血圧の(?:薬|くすり)|血糖(?:を)?下げる(?:薬|くすり)/g,'');
  if(/(設定|プロンプト|マスター|正解|診断|病名|指示を|命令|ignore|system|developer|データを|aiとして)/i.test(q)||vital.test(vitalQuestion))return {factIds:[],text:vital.test(vitalQuestion)?'その測定値は……分かりません。':m.diagnosisResponse,matched:false,source:responder};
  const clauses=q.split(/[、,。？！?!；;]/).filter(c=>c&&!regex(m.questionNormalization.deferredPattern).test(c)&&(responder==='family'||!regex(m.questionNormalization.otherSubjectPattern).test(c)));
  const facts=m.facts.filter(f=>(f.responders||['patient']).includes(responder)&&clauses.some(c=>!(f.excludePatterns||[]).some(p=>regex(p).test(c))&&f.patterns.some(p=>regex(p).test(c)))).slice(0,m.questionNormalization.maxFactsPerQuestion);
  return {factIds:facts.map(f=>f.id),text:facts.length?facts.map(f=>f.answer).join('\n'):(m.responders?.find(r=>r.id===responder)?.unknown||m.unknownResponse),matched:!!facts.length,mode:'local-rules',source:responder};
}
function ask(s,m,question,responder='patient'){const reply=answerPatient(m,question,responder);record(s,'question',{question,answer:reply.text,factIds:reply.factIds,source:responder});s.factIds=[...new Set([...s.factIds,...reply.factIds])];return reply;}
function inspect(s,m,id,kind){const key=kind==='observation'?'observations':kind==='measurement'?'measurements':null;if(!key)throw new Error('不正な操作です。');const item=m[key].find(x=>x.id===id);if(!item)throw new Error('この症例では実施できません。');record(s,kind,{id,label:item.label,result:item.result});s[key]=[...new Set([...s[key],id])];return item;}
function saveImpression(s,text){if(typeof text!=='string'||!text.trim())throw new Error('画像から気づいた所見を入力してください。');record(s,'impression',{text:text.slice(0,2000)});s.impression=text.slice(0,2000);}
function saveReasoning(s,differentials,additional){const snapshot={elapsedSeconds:elapsed(s),differentials:differentials.slice(0,3).map(d=>({condition:d.condition.trim().slice(0,150),reason:d.reason.trim().slice(0,2000)})),additional:additional.slice(0,1000),factIds:[...s.factIds],observations:[...s.observations],measurements:[...s.measurements]};record(s,'reasoning',{snapshot});s.reasoningSnapshots.push(snapshot);return snapshot;}
function conditionKey(text,m){const s=normalize(text);if(/(ではない|じゃない|否定|考えない|除外済|なし|無し|ないと思)/.test(s))return null;return m.conditionPatterns.find(c=>regex(c.pattern).test(s))?.key||null;}
function at(context,path){return path.split('.').reduce((v,k)=>v?.[k],context);}
function positive(text,pattern){return String(text||'').split(/[。\n；;、,]/).some(s=>regex(pattern).test(s)&&!/(未測定|未確認|測定していない|観察していない|確認していない|聞いていない|不明|なし|不要|していません|行っていません)/.test(s));}
function ruleMatches(rule,context,m){
  const {session:s,final:f}=context;
  if(rule.all)return rule.all.every(r=>ruleMatches(r,context,m));if(rule.any)return rule.any.some(r=>ruleMatches(r,context,m));if(rule.not)return !ruleMatches(rule.not,context,m);
  if(rule.fact)return s.factIds.includes(rule.fact);if(rule.observation)return s.observations.includes(rule.observation);if(rule.measurement)return s.measurements.includes(rule.measurement);
  if(rule.text){const r=rule.text,t=at(context,r.path);return r.positive?positive(t,r.pattern):regex(r.pattern).test(String(t||''));}
  if(rule.equals)return at(context,rule.equals.path)===rule.equals.value;
  if(rule.length)return String(at(context,rule.length.path)||'').trim().length>=rule.length.min;
  if(rule.includes)return (at(context,rule.includes.path)||[]).includes(rule.includes.value);
  if(rule.oneOf)return rule.oneOf.values.includes(at(context,rule.oneOf.path));
  if(rule.primary)return conditionKey(f.diagnosis,m)===m.primaryConditionKey;
  if(rule.lethalCount!==undefined){const keys=new Set((f.differentials||[]).map(d=>conditionKey(d.condition,m)).filter(k=>m.lethalConditionKeys.includes(k)));return keys.size>=rule.lethalCount;}
  if(rule.reasonCount)return (f.differentials||[]).filter(d=>d.condition.trim()&&d.reason.trim().length>=rule.reasonCount.minLength).length>=rule.reasonCount.min;
  throw new Error('未対応の採点ルールです。');
}
function evaluate(s,m,final){
  const context={session:s,final};const checks=m.scoring.rules.map(r=>{const passed=ruleMatches(r.when,context,m);return {id:r.id,area:r.area,label:r.label,points:r.points,earned:passed?r.points:0,passed,evidence:passed?String(r.evidencePath?at(context,r.evidencePath):'活動記録・入力から確認'):'未確認・基準未達'};});
  const totals=Object.fromEntries(Object.keys(m.rubric).filter(k=>k!=='criticalCap').map(area=>[area,checks.filter(c=>c.area===area).reduce((n,c)=>n+c.earned,0)]));
  const critical=m.scoring.criticalRules.filter(r=>ruleMatches(r.when,context,m)).map(r=>r.message),warnings=m.scoring.warnings.filter(r=>ruleMatches(r.when,context,m)).map(r=>r.message);
  const rawScore=Object.values(totals).reduce((a,b)=>a+b,0),score=critical.length?Math.min(rawScore,m.rubric.criticalCap):rawScore;
  const missingQuestions=m.educator.keyFacts.filter(k=>!s.factIds.includes(k.id)).map(k=>{const f=m.facts.find(f=>f.id===k.id);return f.label+(f.responders?.length===1&&f.responders[0]==='family'?'（家族へ確認）':'');}),missingObservations=checks.filter(c=>c.area==='observation'&&!c.passed).map(c=>c.label);
  const t=m.feedbackTemplates;return {score,rawScore,totals,checks,critical,warnings,good:checks.filter(c=>c.passed&&c.area!=='handover').map(c=>c.label+t.confirmed).slice(0,6),missingQuestions,missingObservations,bias:ruleMatches({lethalCount:1},context,m)?t.biasMultiple:t.biasSingle,nextTask:critical.length?t.nextCritical:missingQuestions.length?t.nextMissing.replace('{items}',missingQuestions.slice(0,2).join('・')):t.nextComplete};
}
function validateSavedSession(s,m){
  if(!s||s.caseId!==m.id||!Number.isFinite(s.startedAt)||s.startedAt<=0||s.startedAt>Date.now()+60000||s.endedAt!==null&&(!Number.isFinite(s.endedAt)||s.endedAt<s.startedAt)||typeof s.impression!=='string'||s.impression.length>2000)return false;
  for(const [key,catalog]of [['factIds','facts'],['observations','observations'],['measurements','measurements']])if(!Array.isArray(s[key])||s[key].length>m[catalog].length||s[key].some(id=>!m[catalog].some(item=>item.id===id)))return false;
  if(!Array.isArray(s.events)||s.events.length>500||s.events.some(e=>!e||typeof e.type!=='string'||!Number.isFinite(e.elapsedSeconds))||!Array.isArray(s.reasoningSnapshots)||s.reasoningSnapshots.length>100)return false;
  if(s.events.some(e=>e.type==='question'&&(typeof e.question!=='string'||typeof e.answer!=='string'||!Array.isArray(e.factIds)||e.factIds.some(id=>!m.facts.some(f=>f.id===id))||!(m.responders||[{id:'patient'}]).some(r=>r.id===(e.source||'patient')))))return false;
  for(const x of s.reasoningSnapshots)if(!x||!Number.isFinite(x.elapsedSeconds)||!Array.isArray(x.differentials)||x.differentials.some(d=>!d||typeof d.condition!=='string'||typeof d.reason!=='string')||!['factIds','observations','measurements'].every(k=>Array.isArray(x[k])))return false;
  if(s.endedAt&&(!s.final||typeof s.final.reason!=='string'||typeof s.final.handover!=='string'||typeof s.final.diagnosis!=='string'||!Array.isArray(s.final.treatments)||!Array.isArray(s.final.differentials)||s.final.differentials.some(d=>!d||typeof d.condition!=='string'||typeof d.reason!=='string')))return false;
  return true;
}

return {createSession,elapsed,record,normalize,answerPatient,ask,inspect,saveImpression,saveReasoning,conditionKey,ruleMatches,evaluate,validateSavedSession};
})();
