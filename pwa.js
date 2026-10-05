(()=>{
  const el=id=>document.getElementById(id);
  let registration,installPrompt;
  const message=text=>{el('offline-status').textContent=text;};
  async function checkCache(){
    const worker=navigator.serviceWorker?.controller||registration?.active;
    if(!worker)return;
    const channel=new MessageChannel();
    const timeout=setTimeout(()=>message('保存状態を確認できません。通信できる場所で再度開いてください。'),8000);
    channel.port1.onmessage=event=>{clearTimeout(timeout);channel.port1.close();message(event.data.complete?'全5症例を保存済み。次回からオフラインで訓練できます。':'保存が不完全です。通信できる場所で「再確認」を押してください。');};
    worker.postMessage({type:'CACHE_STATUS'},[channel.port2]);
  }
  el('install-help').addEventListener('click',()=>el('install-dialog').showModal());
  el('close-install').addEventListener('click',()=>el('install-dialog').close());
  el('offline-recheck').addEventListener('click',async()=>{if(!registration)return;message('保存状態を確認しています…');try{await registration.update();await checkCache();}catch{await checkCache();}});
  window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;el('install-app').hidden=false;});
  el('install-app').addEventListener('click',async()=>{if(!installPrompt)return;await installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;el('install-app').hidden=true;});
  window.addEventListener('appinstalled',()=>{el('install-app').hidden=true;});
  el('update-app').addEventListener('click',()=>{if(!registration?.waiting)return;registration.waiting.postMessage({type:'SKIP_WAITING'});});
  if(location.protocol==='file:'){message('PCのローカル版です。スマートフォンのオフライン保存はHTTPS公開版で利用できます。');el('offline-recheck').hidden=true;}
  else if('serviceWorker' in navigator&&window.isSecureContext){
    message('全5症例を端末に保存しています。初回は通信を切らずにお待ちください…');
    let updating=false;if(navigator.serviceWorker.controller)checkCache();
    navigator.serviceWorker.addEventListener('controllerchange',()=>{if(updating)location.reload();else checkCache();});
    navigator.serviceWorker.register('./sw.js',{scope:'./'}).then(async reg=>{
      registration=reg;
      const update=()=>{el('update-app').hidden=false;updating=true;};
      if(reg.waiting)update();
      reg.addEventListener('updatefound',()=>{const worker=reg.installing;worker?.addEventListener('statechange',()=>{if(worker.state==='installed'&&navigator.serviceWorker.controller)update();if(worker.state==='redundant')message('端末への保存に失敗しました。通信できる場所で再度開いてください。');});});
      await navigator.serviceWorker.ready;await checkCache();
    }).catch(()=>{if(navigator.serviceWorker.controller)checkCache();else message('オフライン保存が利用できません。通信中は訓練できます。ブラウザー設定をご確認ください。');});
  }else{message('この環境ではオフライン保存を利用できません。HTTPSのURLをSafariまたはChromeで開いてください。');el('offline-recheck').hidden=true;}
  const publicURL=()=>{if(location.protocol!=='https:'||['localhost','127.0.0.1'].includes(location.hostname))return null;return new URL('index.html',location.href).href;};
  el('share-app').addEventListener('click',()=>{
    const url=publicURL();el('share-url').value=url||'';el('share-note').textContent=url?'このリンクをLINEやメールへ貼り付けて共有できます。訓練記録は共有されません。':'現在は公開前の確認用です。HTTPSで公開すると、ここに共有URLとQRコードが表示されます。';
    el('copy-link').disabled=!url;el('native-share').disabled=!url;el('save-qr').disabled=!url;el('qr-image').hidden=!url;
    if(url){const qr=qrcode(0,'M');qr.addData(url);qr.make();el('qr-image').src=qr.createDataURL(6,24);}
    el('share-dialog').showModal();
  });
  el('close-share').addEventListener('click',()=>el('share-dialog').close());
  el('copy-link').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(el('share-url').value);el('share-note').textContent='リンクをコピーしました。LINEやメールへ貼り付けてください。';}catch{el('share-url').focus();el('share-url').select();el('share-note').textContent='URLを長押ししてコピーしてください。';}});
  el('native-share').addEventListener('click',async()=>{if(!navigator.share){el('copy-link').click();return;}try{await navigator.share({title:'救急隊員道場',url:el('share-url').value});}catch{}});
  el('save-qr').addEventListener('click',()=>{const a=document.createElement('a');a.href=el('qr-image').src;a.download='救急隊員道場_QR.gif';a.click();});
})();
