window.DOJO_CASES = [
  {
    "schemaVersion": 2,
    "id": "ACS-001",
    "title": "症例01：60歳代男性・胸痛",
    "category": "胸痛",
    "difficulty": "初級",
    "reviewStatus": "教育担当者・指導医による監修前の仮想症例",
    "patient": {
      "age": 68,
      "sex": "男性",
      "location": "自宅居間",
      "image": "assets-patients-ACS-001-scene-photo.png",
      "personality": "質問されないと詳細を話さない。胸の苦しさで短い返答。",
      "images": [
        {
          "id": "scene-photo",
          "label": "現場接触・写真調",
          "src": "assets-patients-ACS-001-scene-photo.png",
          "alt": "架空の68歳男性。座位で胸に手を添え、苦悶表情、額の汗、やや蒼白な顔色。"
        }
      ]
    },
    "dispatch": "60歳代男性、胸が苦しい。自宅居間。",
    "timeModel": "現場接触時点の固定症例。病状や発症時刻は経過時間によって変化しない。",
    "spontaneous": "胸が……苦しいんです……。",
    "unknownResponse": "そのことは……よく分かりません。",
    "diagnosisResponse": "原因は……私には分かりません。胸が苦しいんです……。",
    "facts": [
      {
        "id": "chief",
        "label": "主訴",
        "patterns": [
          "どうしました",
          "どうされました",
          "何が.*(つら|辛|苦)",
          "具合.*どう",
          "症状を教",
          "どこか.*(具合|つらい)",
          "どうしたの"
        ],
        "answer": "胸が……苦しいんです……。",
        "category": "chief",
        "expectedQuestions": [
          "主訴について教えてください"
        ],
        "synonyms": [
          "どこか.*(具合|つらい)",
          "どうしたの"
        ]
      },
      {
        "id": "onset",
        "label": "発症時刻",
        "patterns": [
          "いつから",
          "何時から",
          "何時ごろ",
          "何時頃",
          "発症.*(時刻|時間|いつ)",
          "いつ.*(始|痛|苦)",
          "どのくらい前",
          "痛くなった.*いつ",
          "苦しくなった.*いつ",
          "いつ.*(から|ごろ|頃)",
          "発症",
          "何時",
          "始まった.*いつ",
          "何分.*前",
          "どれくらい前",
          "痛くなり始め"
        ],
        "answer": "1時間くらい前からです……。",
        "category": "onset",
        "expectedQuestions": [
          "痛くなったのはいつですか？",
          "いつから胸が苦しいですか？"
        ],
        "synonyms": [
          "痛くなった.*いつ",
          "苦しくなった.*いつ",
          "いつ.*(から|ごろ|頃)",
          "発症",
          "何時",
          "始まった.*いつ",
          "何分.*前",
          "どれくらい前",
          "痛くなり始め"
        ]
      },
      {
        "id": "pattern",
        "label": "発症様式",
        "patterns": [
          "突然",
          "急に",
          "徐々",
          "だんだん",
          "どのように.*(始|苦しく)",
          "発症.*(様式|仕方)",
          "始まり方",
          "じわじわ",
          "少しずつ",
          "いきなり",
          "急激"
        ],
        "answer": "最初は少し変な感じで……だんだん苦しくなってきました……。",
        "category": "pattern",
        "expectedQuestions": [
          "突然始まりましたか？",
          "徐々に苦しくなりましたか？"
        ],
        "synonyms": [
          "じわじわ",
          "少しずつ",
          "いきなり",
          "急激"
        ]
      },
      {
        "id": "peak",
        "label": "最大強度までの経過",
        "patterns": [
          "最初.*(一番|いちばん|最大|強)",
          "最大.*(強|痛)",
          "一番.*いつ",
          "いちばん.*いつ",
          "ピーク"
        ],
        "answer": "最初から一番強かったわけではなくて……だんだん強くなりました……。",
        "category": "peak",
        "expectedQuestions": [
          "最初から一番強かったですか？"
        ],
        "synonyms": []
      },
      {
        "id": "location",
        "label": "痛みの部位",
        "patterns": [
          "どこ.*(痛|苦)",
          "痛.*(どこ|場所|部位)",
          "胸のどの"
        ],
        "answer": "胸の真ん中あたりです……。",
        "category": "location",
        "expectedQuestions": [
          "痛みの部位について教えてください"
        ],
        "synonyms": []
      },
      {
        "id": "quality",
        "label": "症状の性状",
        "patterns": [
          "どんな.*(痛|感じ|苦)",
          "どのような.*(痛|感じ)",
          "性状",
          "圧迫",
          "締め付",
          "しめつけ",
          "チクチク",
          "刺す",
          "どういう.*(痛|感じ)",
          "どんなふう",
          "締めつけ",
          "締め付け"
        ],
        "answer": "胸を……押さえつけられる感じです……。",
        "category": "quality",
        "expectedQuestions": [
          "どんな痛みですか？"
        ],
        "synonyms": [
          "どういう.*(痛|感じ)",
          "どんなふう",
          "締めつけ",
          "締め付け"
        ]
      },
      {
        "id": "severity",
        "label": "苦しさの程度",
        "patterns": [
          "10.*(段階|点|どれ)",
          "何点",
          "程度.*(痛|苦)",
          "どのくらい.*(痛|苦)",
          "痛みの強さ"
        ],
        "answer": "10が一番つらいなら……7くらいです……。",
        "category": "severity",
        "expectedQuestions": [
          "苦しさの程度について教えてください"
        ],
        "synonyms": []
      },
      {
        "id": "radiation",
        "label": "放散",
        "patterns": [
          "広が",
          "ひろが",
          "放散",
          "左肩",
          "肩.*(痛|違和)",
          "胸以外.*痛",
          "ほか.*(痛|場所)",
          "他.*(痛|場所)",
          "肩.*(重|違和感)"
        ],
        "answer": "左の肩の方にも……重い感じがあります……。",
        "category": "radiation",
        "expectedQuestions": [
          "他の場所にも痛みが広がりますか？"
        ],
        "synonyms": [
          "ほか.*(痛|場所)",
          "他.*(痛|場所)",
          "肩.*(重|違和感)"
        ]
      },
      {
        "id": "back",
        "label": "背部症状",
        "patterns": [
          "背中",
          "背部"
        ],
        "answer": "背中は……痛くありません……。",
        "category": "back",
        "expectedQuestions": [
          "背部症状について教えてください"
        ],
        "synonyms": []
      },
      {
        "id": "breath",
        "label": "呼吸困難",
        "patterns": [
          "息.*(苦|しづら|しにく)",
          "呼吸.*(苦|つら|辛)",
          "息切れ",
          "呼吸困難",
          "息苦し",
          "呼吸しづら",
          "息はどう"
        ],
        "answer": "少し……息も苦しいです……。",
        "category": "breath",
        "expectedQuestions": [
          "呼吸困難について教えてください"
        ],
        "synonyms": [
          "息苦し",
          "呼吸しづら",
          "息はどう"
        ]
      },
      {
        "id": "sweat",
        "label": "冷汗の自覚",
        "patterns": [
          "汗",
          "発汗"
        ],
        "answer": "冷たい汗が……出てきました……。",
        "category": "sweat",
        "expectedQuestions": [
          "冷汗の自覚について教えてください"
        ],
        "synonyms": []
      },
      {
        "id": "nausea",
        "label": "嘔気・嘔吐",
        "patterns": [
          "吐き気",
          "吐いた",
          "嘔吐",
          "嘔気",
          "気持ち悪",
          "むかむか",
          "ムカムカ",
          "吐きそう"
        ],
        "answer": "少し気持ち悪いです……。吐いてはいません……。",
        "category": "nausea",
        "expectedQuestions": [
          "嘔気・嘔吐について教えてください"
        ],
        "synonyms": [
          "むかむか",
          "ムカムカ",
          "吐きそう"
        ]
      },
      {
        "id": "history",
        "label": "既往歴",
        "patterns": [
          "持病",
          "既往",
          "今まで.*病気",
          "治療.*(病気|疾患)",
          "高血圧",
          "糖尿病",
          "普段.*(通院|治療)",
          "病気.*(あります|ある)",
          "これまで.*病気"
        ],
        "answer": "血圧が高いのと……糖尿病があります……。",
        "category": "history",
        "expectedQuestions": [
          "持病はありますか？"
        ],
        "synonyms": [
          "普段.*(通院|治療)",
          "病気.*(あります|ある)",
          "これまで.*病気"
        ]
      },
      {
        "id": "medication",
        "label": "内服",
        "patterns": [
          "薬",
          "くすり",
          "内服",
          "服薬",
          "飲んで.*(薬|くすり)",
          "飲んでいるもの",
          "飲まれている"
        ],
        "answer": "血圧と糖尿病の薬を飲んでいます……。名前は……覚えていません……。",
        "category": "medication",
        "expectedQuestions": [
          "普段飲んでいる薬はありますか？"
        ],
        "synonyms": [
          "飲んで.*(薬|くすり)",
          "飲んでいるもの",
          "飲まれている"
        ],
        "excludePatterns": [
          "^(?:お)?薬のアレルギー",
          "^(?:お)?薬.*(アレルギー|副作用).*あります"
        ]
      },
      {
        "id": "allergy",
        "label": "アレルギー",
        "patterns": [
          "アレルギー",
          "アレルギ"
        ],
        "answer": "アレルギーは……ありません……。",
        "category": "allergy",
        "expectedQuestions": [
          "薬のアレルギーはありますか？"
        ],
        "synonyms": []
      },
      {
        "id": "trigger",
        "label": "発症時の状況",
        "patterns": [
          "何を.*(して|され)",
          "きっかけ",
          "発症時.*状況",
          "運動中",
          "安静時"
        ],
        "answer": "家で座ってテレビを見ていた時です……。",
        "category": "trigger",
        "expectedQuestions": [
          "発症時の状況について教えてください"
        ],
        "synonyms": []
      },
      {
        "id": "duration",
        "label": "持続・増悪軽快",
        "patterns": [
          "ずっと",
          "続いて",
          "持続",
          "治ま",
          "おさま",
          "良くな",
          "楽になる"
        ],
        "answer": "ずっと苦しいです……。座って休んでも……よくなりません……。",
        "category": "duration",
        "expectedQuestions": [
          "持続・増悪軽快について教えてください"
        ],
        "synonyms": []
      },
      {
        "id": "syncope",
        "label": "失神",
        "patterns": [
          "気を失",
          "失神",
          "意識を失",
          "倒れ"
        ],
        "answer": "気を失ったことは……ありません……。",
        "category": "syncope",
        "expectedQuestions": [
          "失神について教えてください"
        ],
        "synonyms": []
      },
      {
        "id": "fever",
        "label": "発熱",
        "patterns": [
          "熱は",
          "発熱",
          "熱が"
        ],
        "answer": "熱が出た感じは……ありません……。",
        "category": "fever",
        "expectedQuestions": [
          "発熱について教えてください"
        ],
        "synonyms": []
      },
      {
        "id": "trauma",
        "label": "外傷の病歴",
        "patterns": [
          "けが",
          "怪我",
          "ぶつけ",
          "外傷"
        ],
        "answer": "けがは……していません……。",
        "category": "trauma",
        "expectedQuestions": [
          "外傷の病歴について教えてください"
        ],
        "synonyms": []
      },
      {
        "id": "prior",
        "label": "同様症状の経験",
        "patterns": [
          "初めて",
          "以前.*(同じ|似た)",
          "今まで.*(こんな|同じ)",
          "前にも"
        ],
        "answer": "こんな苦しさは……初めてです……。",
        "category": "prior",
        "expectedQuestions": [
          "同様症状の経験について教えてください"
        ],
        "synonyms": []
      },
      {
        "id": "leg",
        "label": "下肢の症状",
        "patterns": [
          "足.*(腫|はれ|痛)",
          "脚.*(腫|痛)",
          "下肢.*(腫|痛)",
          "むくみ"
        ],
        "answer": "足の腫れや痛みは……ありません……。",
        "category": "leg",
        "expectedQuestions": [
          "下肢の症状について教えてください"
        ],
        "synonyms": []
      },
      {
        "id": "immobility",
        "label": "血栓リスクの病歴",
        "patterns": [
          "長時間.*(移動|座)",
          "長い.*(飛行|移動)",
          "手術",
          "寝たきり",
          "入院"
        ],
        "answer": "最近、手術や入院はしていません……。長い移動も……していません……。",
        "category": "immobility",
        "expectedQuestions": [
          "血栓リスクの病歴について教えてください"
        ],
        "synonyms": []
      },
      {
        "id": "name",
        "label": "架空氏名",
        "patterns": [
          "お名前",
          "名前を",
          "氏名"
        ],
        "answer": "佐藤……健一です……。",
        "category": "name",
        "expectedQuestions": [
          "架空氏名について教えてください"
        ],
        "synonyms": []
      },
      {
        "id": "age",
        "label": "年齢",
        "patterns": [
          "何歳",
          "おいくつ",
          "年齢"
        ],
        "answer": "68歳です……。",
        "category": "age",
        "expectedQuestions": [
          "年齢について教えてください"
        ],
        "synonyms": []
      }
    ],
    "observations": [
      {
        "id": "general",
        "label": "全身",
        "result": "椅子に座位。胸に手を添えている。苦悶様だが呼びかけに応答できる。"
      },
      {
        "id": "face",
        "label": "顔貌",
        "result": "顔色はやや蒼白。眉間を寄せ、額に発汗がある。"
      },
      {
        "id": "consciousness",
        "label": "意識",
        "result": "覚醒している。氏名・場所・状況を適切に答え、JCS 0相当。"
      },
      {
        "id": "respiration",
        "label": "呼吸",
        "result": "呼吸はやや速く、短い文章で返答する。著明な左右差は観察上認めない。呼吸数とSpO₂は別途測定が必要。"
      },
      {
        "id": "skin",
        "label": "皮膚",
        "result": "触れると皮膚は冷たく湿潤している。冷汗を認める。"
      },
      {
        "id": "pupils",
        "label": "瞳孔",
        "result": "瞳孔は左右とも3 mm。対光反射あり。"
      },
      {
        "id": "neuro",
        "label": "麻痺",
        "result": "顔面・上肢・下肢に明らかな左右差や麻痺を認めない。"
      },
      {
        "id": "trauma",
        "label": "外傷",
        "result": "視認できる範囲に外傷を認めない。"
      },
      {
        "id": "abdomen",
        "label": "腹部",
        "result": "腹部は平坦、軟。本人に確認しながら触診した範囲で圧痛を認めない。"
      },
      {
        "id": "limbs",
        "label": "四肢",
        "result": "下肢に明らかな腫脹や左右差を認めない。橈骨動脈を左右とも触知する。"
      },
      {
        "id": "position",
        "label": "体位",
        "result": "本人は椅子での座位を保っている。姿勢だけでは病態を確定できない。"
      }
    ],
    "measurements": [
      {
        "id": "bp",
        "label": "血圧",
        "value": "168/96",
        "unit": "mmHg",
        "result": "右上腕血圧 168/96 mmHg。単回測定値。",
        "dashboard": true
      },
      {
        "id": "pulse",
        "label": "脈拍",
        "value": "108",
        "unit": "回/分",
        "result": "脈拍 108回/分、整。",
        "dashboard": true
      },
      {
        "id": "rr",
        "label": "呼吸数",
        "value": "24",
        "unit": "回/分",
        "result": "呼吸数 24回/分。",
        "dashboard": true
      },
      {
        "id": "spo2",
        "label": "SpO₂",
        "value": "92",
        "unit": "% / 室内気",
        "result": "SpO₂ 92%、室内気。測定状態を確認した値。",
        "dashboard": true
      },
      {
        "id": "temperature",
        "label": "体温",
        "value": "36.5",
        "unit": "℃",
        "result": "体温 36.5℃。",
        "dashboard": true
      },
      {
        "id": "glucose",
        "label": "血糖",
        "value": "146",
        "unit": "mg/dL",
        "result": "血糖 146 mg/dL。",
        "dashboard": true
      },
      {
        "id": "ecg",
        "label": "12誘導心電図",
        "value": "所見あり",
        "unit": "模擬所見",
        "result": "【教育用の模擬所見】II・III・aVF誘導にST上昇、I・aVL誘導にST低下を認める。波形画像ではなく所見テキスト。これのみで他の致死的病態を除外しない。",
        "dashboard": false
      },
      {
        "id": "bilateral",
        "label": "左右血圧",
        "value": "差 4",
        "unit": "mmHg / 収縮期",
        "result": "右 168/96、左 164/94 mmHg。明らかな左右差なし。左右差がなくても大動脈解離は除外できない。",
        "dashboard": false
      }
    ],
    "treatments": [
      {
        "id": "rest",
        "label": "安静・負担の少ない体位を保持"
      },
      {
        "id": "monitor",
        "label": "呼吸循環・心電図の継続監視と再評価"
      },
      {
        "id": "oxygen",
        "label": "酸素投与の適応を評価し、地域プロトコルに従う"
      },
      {
        "id": "mc",
        "label": "地域プロトコルに従いMC・医療機関へ連絡"
      },
      {
        "id": "aed",
        "label": "急変に備え、除細動器などを準備"
      }
    ],
    "rubric": {
      "observation": 20,
      "interview": 25,
      "urgency": 20,
      "reasoning": 15,
      "transport": 10,
      "handover": 10,
      "criticalCap": 59
    },
    "educator": {
      "condition": "急性冠症候群（下壁ST上昇を伴う設定）",
      "differentials": [
        "急性大動脈症候群",
        "肺血栓塞栓症",
        "緊張性気胸"
      ],
      "keyFacts": [
        {
          "id": "onset",
          "points": 4
        },
        {
          "id": "pattern",
          "points": 4
        },
        {
          "id": "peak",
          "points": 2
        },
        {
          "id": "quality",
          "points": 3
        },
        {
          "id": "radiation",
          "points": 3
        },
        {
          "id": "breath",
          "points": 2
        },
        {
          "id": "history",
          "points": 3
        },
        {
          "id": "medication",
          "points": 2
        },
        {
          "id": "allergy",
          "points": 2
        }
      ],
      "criticalRules": [
        "胸痛の致死的鑑別を1つも挙げていない",
        "緊急度を高いと判断していない",
        "呼吸観察またはSpO₂測定が欠け、呼吸状態の評価が不十分"
      ],
      "teaching": "典型的なACSを疑う情報が揃うが、病名が合っていても致死的鑑別の検討と呼吸循環評価を省略しない。陰性所見1つで解離・肺塞栓等を除外しない。",
      "sources": [
        {
          "title": "日本循環器学会 急性冠症候群ガイドライン（2018年改訂版）",
          "url": "https://www.j-circ.or.jp/cms/wp-content/uploads/2018/11/JCS2018_kimura.pdf"
        },
        {
          "title": "JRCガイドライン2025 ECC補遺",
          "url": "https://www.jrc-cpr.org/jrcgl2025_ecc/"
        }
      ]
    },
    "questionNormalization": {
      "aliases": [
        [
          "アレルギィ",
          "アレルギー"
        ],
        [
          "しめ付け",
          "締め付け"
        ],
        [
          "飲み薬",
          "内服薬"
        ]
      ],
      "deferredPattern": "(後で|あとで|まだ聞か|今は聞か|尋ねない|質問しない)",
      "maxFactsPerQuestion": 7,
      "otherSubjectPattern": "家族|ご家族|父|母|兄|弟|姉|妹|夫|妻|お子|子供|子ども"
    },
    "conditionPatterns": [
      {
        "key": "acs",
        "pattern": "急性冠|acs|心筋梗塞|不安定狭心"
      },
      {
        "key": "aorta",
        "pattern": "大動脈|解離"
      },
      {
        "key": "pe",
        "pattern": "肺.*塞栓|肺.*血栓|(^|[^a-z])pe([^a-z]|$)"
      },
      {
        "key": "tension",
        "pattern": "緊張性.*気胸"
      }
    ],
    "primaryConditionKey": "acs",
    "lethalConditionKeys": [
      "aorta",
      "pe",
      "tension"
    ],
    "scoring": {
      "rules": [
        {
          "id": "score-1",
          "area": "observation",
          "label": "画像から第一印象を記録",
          "points": 2,
          "when": {
            "all": [
              {
                "length": {
                  "path": "session.impression",
                  "min": 6
                }
              },
              {
                "text": {
                  "path": "session.impression",
                  "pattern": "汗|蒼白|顔色|苦悶|眉|座|椅子",
                  "positive": false
                }
              }
            ]
          },
          "evidencePath": "session.impression"
        },
        {
          "id": "score-2",
          "area": "observation",
          "label": "意識を観察",
          "points": 2,
          "when": {
            "observation": "consciousness"
          }
        },
        {
          "id": "score-3",
          "area": "observation",
          "label": "呼吸を観察",
          "points": 2,
          "when": {
            "observation": "respiration"
          }
        },
        {
          "id": "score-4",
          "area": "observation",
          "label": "皮膚を観察",
          "points": 2,
          "when": {
            "observation": "skin"
          }
        },
        {
          "id": "score-5",
          "area": "observation",
          "label": "左右血圧を比較",
          "points": 4,
          "when": {
            "measurement": "bilateral"
          }
        },
        {
          "id": "measurement-spo2",
          "area": "observation",
          "label": "SpO₂を測定",
          "points": 3,
          "when": {
            "measurement": "spo2"
          }
        },
        {
          "id": "measurement-ecg",
          "area": "observation",
          "label": "12誘導心電図を確認",
          "points": 5,
          "when": {
            "measurement": "ecg"
          }
        },
        {
          "id": "score-6",
          "area": "interview",
          "label": "発症時刻を質問",
          "points": 4,
          "when": {
            "fact": "onset"
          }
        },
        {
          "id": "score-7",
          "area": "interview",
          "label": "発症様式を質問",
          "points": 4,
          "when": {
            "fact": "pattern"
          }
        },
        {
          "id": "score-8",
          "area": "interview",
          "label": "最大強度までの経過を質問",
          "points": 2,
          "when": {
            "fact": "peak"
          }
        },
        {
          "id": "score-9",
          "area": "interview",
          "label": "症状の性状を質問",
          "points": 3,
          "when": {
            "fact": "quality"
          }
        },
        {
          "id": "score-10",
          "area": "interview",
          "label": "放散を質問",
          "points": 3,
          "when": {
            "fact": "radiation"
          }
        },
        {
          "id": "score-11",
          "area": "interview",
          "label": "呼吸困難を質問",
          "points": 2,
          "when": {
            "fact": "breath"
          }
        },
        {
          "id": "score-12",
          "area": "interview",
          "label": "既往歴を質問",
          "points": 3,
          "when": {
            "fact": "history"
          }
        },
        {
          "id": "score-13",
          "area": "interview",
          "label": "内服を質問",
          "points": 2,
          "when": {
            "fact": "medication"
          }
        },
        {
          "id": "score-14",
          "area": "interview",
          "label": "アレルギーを質問",
          "points": 2,
          "when": {
            "fact": "allergy"
          }
        },
        {
          "id": "score-15",
          "area": "urgency",
          "label": "高い緊急度を判断",
          "points": 12,
          "when": {
            "equals": {
              "path": "final.urgency",
              "value": "high"
            }
          },
          "evidencePath": "final.urgency"
        },
        {
          "id": "score-16",
          "area": "urgency",
          "label": "収集した危険所見を判断根拠に記載",
          "points": 4,
          "when": {
            "any": [
              {
                "all": [
                  {
                    "any": [
                      {
                        "observation": "skin"
                      },
                      {
                        "fact": "sweat"
                      }
                    ]
                  },
                  {
                    "text": {
                      "path": "final.reason",
                      "pattern": "冷汗",
                      "positive": true
                    }
                  }
                ]
              },
              {
                "all": [
                  {
                    "observation": "face"
                  },
                  {
                    "text": {
                      "path": "final.reason",
                      "pattern": "蒼白",
                      "positive": true
                    }
                  }
                ]
              },
              {
                "all": [
                  {
                    "fact": "quality"
                  },
                  {
                    "text": {
                      "path": "final.reason",
                      "pattern": "圧迫|押さえ",
                      "positive": true
                    }
                  }
                ]
              },
              {
                "all": [
                  {
                    "measurement": "ecg"
                  },
                  {
                    "text": {
                      "path": "final.reason",
                      "pattern": "ST上昇",
                      "positive": true
                    }
                  }
                ]
              },
              {
                "all": [
                  {
                    "measurement": "spo2"
                  },
                  {
                    "text": {
                      "path": "final.reason",
                      "pattern": "(spo2|SpO₂|酸素飽和).{0,12}92|低酸素",
                      "positive": true
                    }
                  }
                ]
              }
            ]
          },
          "evidencePath": "final.reason"
        },
        {
          "id": "score-17",
          "area": "urgency",
          "label": "呼吸の評価・測定を根拠に説明",
          "points": 4,
          "when": {
            "all": [
              {
                "observation": "respiration"
              },
              {
                "measurement": "spo2"
              },
              {
                "text": {
                  "path": "final.reason",
                  "pattern": "低酸素|呼吸|息|spo2|SpO₂|92",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.reason"
        },
        {
          "id": "score-18",
          "area": "reasoning",
          "label": "最も疑う病態をACSと判断",
          "points": 5,
          "when": {
            "primary": true
          },
          "evidencePath": "final.diagnosis"
        },
        {
          "id": "score-19",
          "area": "reasoning",
          "label": "致死的鑑別を1つ挙げる",
          "points": 3,
          "when": {
            "lethalCount": 1
          }
        },
        {
          "id": "score-20",
          "area": "reasoning",
          "label": "異なる致死的鑑別を2つ挙げる",
          "points": 3,
          "when": {
            "lethalCount": 2
          }
        },
        {
          "id": "score-21",
          "area": "reasoning",
          "label": "2候補以上に根拠を記載",
          "points": 4,
          "when": {
            "reasonCount": {
              "min": 2,
              "minLength": 12
            }
          }
        },
        {
          "id": "score-22",
          "area": "transport",
          "label": "安静と体位への配慮",
          "points": 2,
          "when": {
            "includes": {
              "path": "final.treatments",
              "value": "rest"
            }
          }
        },
        {
          "id": "score-23",
          "area": "transport",
          "label": "継続監視・再評価",
          "points": 2,
          "when": {
            "includes": {
              "path": "final.treatments",
              "value": "monitor"
            }
          }
        },
        {
          "id": "score-24",
          "area": "transport",
          "label": "適応評価・MC連絡",
          "points": 2,
          "when": {
            "any": [
              {
                "includes": {
                  "path": "final.treatments",
                  "value": "mc"
                }
              },
              {
                "all": [
                  {
                    "measurement": "spo2"
                  },
                  {
                    "includes": {
                      "path": "final.treatments",
                      "value": "oxygen"
                    }
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "score-25",
          "area": "transport",
          "label": "迅速な搬送方針",
          "points": 2,
          "when": {
            "equals": {
              "path": "final.transport",
              "value": "rapid"
            }
          }
        },
        {
          "id": "score-26",
          "area": "transport",
          "label": "対応機能を踏まえた搬送先選定",
          "points": 2,
          "when": {
            "oneOf": {
              "path": "final.destination",
              "values": [
                "cardiac",
                "emergency"
              ]
            }
          }
        },
        {
          "id": "score-27",
          "area": "handover",
          "label": "年齢と主訴",
          "points": 1,
          "when": {
            "all": [
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "68|６８|60歳代|60代|六十",
                  "positive": true
                }
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "胸|胸部",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "score-28",
          "area": "handover",
          "label": "確認した発症時刻",
          "points": 1,
          "when": {
            "all": [
              {
                "fact": "onset"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "1時間|一時間|約60分|約６０分",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "score-29",
          "area": "handover",
          "label": "確認した重要所見",
          "points": 1,
          "when": {
            "all": [
              {
                "any": [
                  {
                    "observation": "skin"
                  },
                  {
                    "fact": "sweat"
                  }
                ]
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "冷汗|発汗",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "score-30",
          "area": "handover",
          "label": "測定した血圧",
          "points": 1,
          "when": {
            "all": [
              {
                "any": [
                  {
                    "measurement": "bp"
                  },
                  {
                    "measurement": "bilateral"
                  }
                ]
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "168\\s*[／/・]\\s*96",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "score-31",
          "area": "handover",
          "label": "測定したSpO₂",
          "points": 1,
          "when": {
            "all": [
              {
                "measurement": "spo2"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "(spo2|SpO₂|酸素飽和).{0,12}92",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "score-32",
          "area": "handover",
          "label": "測定した呼吸数・脈拍",
          "points": 1,
          "when": {
            "all": [
              {
                "measurement": "rr"
              },
              {
                "measurement": "pulse"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "呼吸.{0,8}24",
                  "positive": true
                }
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "(脈拍|心拍).{0,8}108",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "score-33",
          "area": "handover",
          "label": "確認した既往歴",
          "points": 1,
          "when": {
            "all": [
              {
                "fact": "history"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "高血圧",
                  "positive": true
                }
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "糖尿病",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "score-34",
          "area": "handover",
          "label": "病態推論を伝達",
          "points": 1,
          "when": {
            "text": {
              "path": "final.handover",
              "pattern": "ACS|急性冠|心筋梗塞",
              "positive": true
            }
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "score-35",
          "area": "handover",
          "label": "対応の実施・未実施・予定を区別して伝達",
          "points": 2,
          "when": {
            "text": {
              "path": "final.handover",
              "pattern": "(安静|監視|モニタ|酸素|MC|連絡|体位|除細動).{0,25}(実施|保持|継続|開始|未実施|予定|実施してい|行ってい)|(?:実施|開始).{0,12}(安静|監視|モニタ|酸素)",
              "positive": false
            }
          },
          "evidencePath": "final.handover"
        }
      ],
      "criticalRules": [
        {
          "id": "lethal",
          "when": {
            "not": {
              "lethalCount": 1
            }
          },
          "message": "胸痛の致死的鑑別を1つも挙げていません。最終病名が合っていても、早期に判断を閉じないことが重要です。"
        },
        {
          "id": "urgency",
          "when": {
            "not": {
              "equals": {
                "path": "final.urgency",
                "value": "high"
              }
            }
          },
          "message": "この症例の緊急度を「高い」と判断していません。冷汗・胸部症状・呼吸状態を合わせて再評価してください。"
        },
        {
          "id": "respiration",
          "when": {
            "any": [
              {
                "not": {
                  "observation": "respiration"
                }
              },
              {
                "not": {
                  "measurement": "spo2"
                }
              }
            ]
          },
          "message": "呼吸観察またはSpO₂測定が未実施です。呼吸状態の評価が不十分なまま最終判断しています。"
        }
      ],
      "warnings": [
        {
          "when": {
            "all": [
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "168\\s*[／/]\\s*96",
                  "positive": true
                }
              },
              {
                "not": {
                  "any": [
                    {
                      "measurement": "bp"
                    },
                    {
                      "measurement": "bilateral"
                    }
                  ]
                }
              }
            ]
          },
          "message": "血圧の値を申し送っていますが、測定記録がありません。未確認の情報を既知の事実として伝えないでください。"
        },
        {
          "when": {
            "all": [
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "(spo2|SpO₂|酸素飽和).{0,12}92",
                  "positive": true
                }
              },
              {
                "not": {
                  "measurement": "spo2"
                }
              }
            ]
          },
          "message": "SpO₂の値を申し送っていますが、測定記録がありません。未確認の情報を既知の事実として伝えないでください。"
        },
        {
          "when": {
            "all": [
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "呼吸.{0,8}24",
                  "positive": true
                }
              },
              {
                "not": {
                  "measurement": "rr"
                }
              }
            ]
          },
          "message": "呼吸数の値を申し送っていますが、測定記録がありません。未確認の情報を既知の事実として伝えないでください。"
        },
        {
          "when": {
            "all": [
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "(脈拍|心拍).{0,8}108",
                  "positive": true
                }
              },
              {
                "not": {
                  "measurement": "pulse"
                }
              }
            ]
          },
          "message": "脈拍の値を申し送っていますが、測定記録がありません。未確認の情報を既知の事実として伝えないでください。"
        }
      ]
    },
    "feedbackTemplates": {
      "confirmed": "：記録から確認できています。",
      "biasMultiple": "複数の致死的鑑別が記録されています。陰性所見だけで除外せず、検討の根拠を振り返ってください。",
      "biasSingle": "ACSへ判断が固定された可能性があります。記載不足だけで認知バイアスを断定せず、アンカリング・早期閉鎖を振り返ってください。",
      "nextCritical": "次回は呼吸循環の評価と致死的鑑別の確認を、病名の確定より前に行ってください。",
      "nextMissing": "次回は「{items}」を自分の言葉で確認してください。",
      "nextComplete": "次回は各鑑別を支持する情報と否定できない理由を、申し送りで簡潔に伝えてください。"
    },
    "number": "01",
    "preview": "自宅居間。胸の苦しさを訴える男性。",
    "focus": "第一印象・胸部症状・鑑別",
    "responders": [
      {
        "id": "patient",
        "label": "傷病者",
        "unknown": "そのことは……よく分かりません。"
      }
    ],
    "caseVersion": 1,
    "sceneCaption": "架空傷病者・事前生成の写真調画像 / 静止画",
    "destinations": [
      {
        "id": "cardiac",
        "label": "緊急の循環器評価・冠動脈治療に対応できる医療機関"
      },
      {
        "id": "emergency",
        "label": "救命救急・循環器診療に対応できる医療機関"
      },
      {
        "id": "nearest",
        "label": "診療機能にかかわらず最寄りの医療機関"
      },
      {
        "id": "clinic",
        "label": "かかりつけ診療所"
      }
    ],
    "diagnosisSuggestions": [
      "急性冠症候群",
      "急性大動脈症候群",
      "肺血栓塞栓症",
      "緊張性気胸",
      "急性心不全",
      "心膜炎",
      "消化器疾患",
      "筋骨格性疼痛"
    ],
    "analyticsItems": [
      {
        "id": "history",
        "kind": "factIds",
        "itemId": "history"
      },
      {
        "id": "medication",
        "kind": "factIds",
        "itemId": "medication"
      }
    ]
  },
  {
    "schemaVersion": 2,
    "caseVersion": 1,
    "id": "HF-001",
    "number": "02",
    "title": "症例02：70歳代男性、息が苦しい",
    "category": "呼吸困難",
    "difficulty": "初級",
    "preview": "自宅寝室。70歳代男性、息が苦しい",
    "focus": "呼吸の評価・体位・背景",
    "reviewStatus": "教育担当者・指導医による監修前の仮想症例",
    "patient": {
      "age": 76,
      "sex": "男性",
      "location": "自宅寝室",
      "image": "assets-patients-HF-001-scene-photo.png",
      "personality": "質問された情報だけを短く答える。",
      "images": [
        {
          "id": "scene-photo",
          "label": "現場接触・写真調",
          "src": "assets-patients-HF-001-scene-photo.png",
          "alt": "上体を起こし、前かがみで苦悶の表情を示す高齢男性。"
        }
      ],
      "imageAlt": "上体を起こし、前かがみで苦悶の表情を示す高齢男性。"
    },
    "sceneCaption": "架空傷病者・事前生成の写真調画像 / 静止画",
    "dispatch": "70歳代男性、息が苦しい。自宅寝室。",
    "timeModel": "現場接触時点の固定症例。時計・病状・測定値は経過時間によって変化しない。",
    "spontaneous": "息が……苦しいんです……。",
    "unknownResponse": "そのことは……よく分かりません。",
    "diagnosisResponse": "原因は……私には分かりません。",
    "questionNormalization": {
      "aliases": [
        [
          "アレルギィ",
          "アレルギー"
        ],
        [
          "しめ付け",
          "締め付け"
        ],
        [
          "飲み薬",
          "内服薬"
        ]
      ],
      "deferredPattern": "(後で|あとで|まだ聞か|今は聞か|尋ねない|質問しない)",
      "maxFactsPerQuestion": 7,
      "otherSubjectPattern": "家族|ご家族|父|母|兄|弟|姉|妹|夫|妻|お子|子供|子ども"
    },
    "responders": [
      {
        "id": "patient",
        "label": "傷病者",
        "unknown": "今は……うまく説明できません。"
      }
    ],
    "facts": [
      {
        "id": "chief",
        "category": "chief",
        "label": "主訴",
        "patterns": [
          "どうしました",
          "どうされ",
          "具合",
          "何が.*つら",
          "症状を"
        ],
        "expectedQuestions": [
          "主訴について教えてください"
        ],
        "synonyms": [
          "どうしました",
          "どうされ",
          "具合",
          "何が.*つら",
          "症状を"
        ],
        "answer": "息が……苦しいです……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "onset",
        "category": "onset",
        "label": "発症・経過",
        "patterns": [
          "いつ",
          "何時",
          "発症",
          "どのくらい前"
        ],
        "expectedQuestions": [
          "発症・経過について教えてください"
        ],
        "synonyms": [
          "いつ",
          "何時",
          "発症",
          "どのくらい前"
        ],
        "answer": "昨日から息切れが増えて……2時間くらい前から、じっとしていても苦しいです……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "pattern",
        "category": "pattern",
        "label": "発症様式",
        "patterns": [
          "突然",
          "急に",
          "徐々",
          "だんだん",
          "始まり方"
        ],
        "expectedQuestions": [
          "発症様式について教えてください"
        ],
        "synonyms": [
          "突然",
          "急に",
          "徐々",
          "だんだん",
          "始まり方"
        ],
        "answer": "だんだん……苦しくなってきました……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "orthopnea",
        "category": "orthopnea",
        "label": "体位による変化",
        "patterns": [
          "横にな",
          "横に寝",
          "寝ると",
          "仰向け",
          "体位",
          "座ると"
        ],
        "expectedQuestions": [
          "体位による変化について教えてください"
        ],
        "synonyms": [
          "横にな",
          "横に寝",
          "寝ると",
          "仰向け",
          "体位",
          "座ると"
        ],
        "answer": "横になると……もっと苦しくて……座っている方が、まだ楽です……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "severity",
        "category": "severity",
        "label": "会話・活動への影響",
        "patterns": [
          "どのくらい.*苦",
          "歩け",
          "話せ",
          "会話",
          "程度",
          "強さ"
        ],
        "expectedQuestions": [
          "会話・活動への影響について教えてください"
        ],
        "synonyms": [
          "どのくらい.*苦",
          "歩け",
          "話せ",
          "会話",
          "程度",
          "強さ"
        ],
        "answer": "歩くと……つらいです……。長く話すのも……苦しいです……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "chest",
        "category": "chest",
        "label": "胸部症状",
        "patterns": [
          "胸.*(痛|苦|圧迫)",
          "胸痛"
        ],
        "expectedQuestions": [
          "胸部症状について教えてください"
        ],
        "synonyms": [
          "胸.*(痛|苦|圧迫)",
          "胸痛"
        ],
        "answer": "胸の痛みは……ありません……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "edema",
        "category": "edema",
        "label": "むくみ・体重変化",
        "patterns": [
          "むく",
          "浮腫",
          "足.*腫",
          "体重"
        ],
        "expectedQuestions": [
          "むくみ・体重変化について教えてください"
        ],
        "synonyms": [
          "むく",
          "浮腫",
          "足.*腫",
          "体重"
        ],
        "answer": "3日くらい前から……両足がむくんで……体重が2キロほど増えました……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "history",
        "category": "history",
        "label": "既往歴",
        "patterns": [
          "持病",
          "既往",
          "病気",
          "高血圧"
        ],
        "expectedQuestions": [
          "既往歴について教えてください"
        ],
        "synonyms": [
          "持病",
          "既往",
          "病気",
          "高血圧"
        ],
        "answer": "高血圧があって……前にも心臓の具合で入院しました……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "medication",
        "category": "medication",
        "label": "内服",
        "patterns": [
          "薬",
          "くすり",
          "内服",
          "服薬"
        ],
        "expectedQuestions": [
          "内服について教えてください"
        ],
        "synonyms": [
          "薬",
          "くすり",
          "内服",
          "服薬"
        ],
        "answer": "血圧の薬と……尿を出す薬です……。名前は覚えていません……。",
        "responders": [
          "patient"
        ],
        "excludePatterns": [
          "^(?:お)?薬.*アレルギー"
        ]
      },
      {
        "id": "allergy",
        "category": "allergy",
        "label": "アレルギー",
        "patterns": [
          "アレルギ"
        ],
        "expectedQuestions": [
          "アレルギーについて教えてください"
        ],
        "synonyms": [
          "アレルギ"
        ],
        "answer": "アレルギーは……ありません……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "fever",
        "category": "fever",
        "label": "発熱・咳",
        "patterns": [
          "熱",
          "発熱",
          "咳",
          "せき"
        ],
        "expectedQuestions": [
          "発熱・咳について教えてください"
        ],
        "synonyms": [
          "熱",
          "発熱",
          "咳",
          "せき"
        ],
        "answer": "熱が出た感じは……ありません……。少し咳が出ます……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "legpain",
        "category": "legpain",
        "label": "片脚の痛み",
        "patterns": [
          "片足",
          "片脚",
          "脚.*痛"
        ],
        "expectedQuestions": [
          "片脚の痛みについて教えてください"
        ],
        "synonyms": [
          "片足",
          "片脚",
          "脚.*痛"
        ],
        "answer": "片方の足だけが痛い……ということはありません……。",
        "responders": [
          "patient"
        ]
      }
    ],
    "observations": [
      {
        "id": "general",
        "label": "全身",
        "result": "ベッド端で上体を起こし、前かがみ。呼びかけに反応する。"
      },
      {
        "id": "face",
        "label": "顔貌",
        "result": "表情は不安・苦悶様。額に汗がある。"
      },
      {
        "id": "consciousness",
        "label": "意識",
        "result": "覚醒、状況を理解し短い返答。JCS 0相当。"
      },
      {
        "id": "respiration",
        "label": "呼吸",
        "result": "速い呼吸。短い句で返答し、長い会話が難しい。呼吸数・SpO₂は測定が必要。"
      },
      {
        "id": "lungs",
        "label": "呼吸音",
        "result": "教育用聴診所見：両側下肺野に湿性ラ音。これだけで病態を確定しない。"
      },
      {
        "id": "skin",
        "label": "皮膚",
        "result": "皮膚はやや冷たく、発汗あり。"
      },
      {
        "id": "limbs",
        "label": "四肢",
        "result": "両下腿に圧痕性浮腫。明らかな左右差なし。"
      },
      {
        "id": "position",
        "label": "体位",
        "result": "傷病者は上体を起こした体位を好む。無理に仰臥位へ変えない。"
      }
    ],
    "measurements": [
      {
        "id": "bp",
        "label": "血圧",
        "value": "184/106",
        "unit": "mmHg",
        "result": "血圧 184/106 mmHg",
        "dashboard": true
      },
      {
        "id": "pulse",
        "label": "脈拍",
        "value": "118",
        "unit": "回/分",
        "result": "脈拍 118 回/分",
        "dashboard": true
      },
      {
        "id": "rr",
        "label": "呼吸数",
        "value": "32",
        "unit": "回/分",
        "result": "呼吸数 32 回/分",
        "dashboard": true
      },
      {
        "id": "spo2",
        "label": "SpO₂",
        "value": "86",
        "unit": "% / 室内気",
        "result": "SpO₂ 86%、室内気。測定状態を確認した模擬値。",
        "dashboard": true
      },
      {
        "id": "temperature",
        "label": "体温",
        "value": "36.6",
        "unit": "℃",
        "result": "体温 36.6 ℃",
        "dashboard": true
      },
      {
        "id": "ecg",
        "label": "12誘導心電図",
        "value": "洞性頻脈",
        "unit": "模擬所見",
        "result": "教育用所見：洞性頻脈。明らかなST上昇は設定されていない。他の病態を除外しない。",
        "dashboard": false
      }
    ],
    "treatments": [
      {
        "id": "rest",
        "label": "安静と本人が呼吸しやすい体位への配慮"
      },
      {
        "id": "monitor",
        "label": "呼吸循環・意識の継続監視と再評価"
      },
      {
        "id": "mc",
        "label": "地域プロトコルに従いMC・医療機関へ連絡"
      },
      {
        "id": "oxygen",
        "label": "酸素投与・呼吸補助の適応を地域プロトコルに従って評価"
      }
    ],
    "rubric": {
      "observation": 20,
      "interview": 25,
      "urgency": 20,
      "reasoning": 15,
      "transport": 10,
      "handover": 10,
      "criticalCap": 59
    },
    "educator": {
      "keyFacts": [
        {
          "id": "onset",
          "points": 4
        },
        {
          "id": "pattern",
          "points": 2
        },
        {
          "id": "orthopnea",
          "points": 4
        },
        {
          "id": "severity",
          "points": 2
        },
        {
          "id": "chest",
          "points": 2
        },
        {
          "id": "edema",
          "points": 3
        },
        {
          "id": "history",
          "points": 3
        },
        {
          "id": "medication",
          "points": 3
        },
        {
          "id": "allergy",
          "points": 2
        }
      ],
      "sources": [
        {
          "title": "日本心臓財団：心不全の症状",
          "url": "https://www.jhf.or.jp/topics/2021/008150/"
        }
      ],
      "condition": "急性心不全（架空症例の設定）",
      "differentials": [
        "急性冠症候群",
        "肺血栓塞栓症",
        "肺炎・重症感染症"
      ],
      "teaching": "呼吸状態・体位・経過・背景を合わせて判断する。心不全らしい所見だけでACSや肺塞栓などを除外しない。",
      "criticalRules": [
        "この架空症例の危険所見に対して緊急度を過小評価しています。観察・測定・病歴を合わせて再評価してください。",
        "呼吸困難症例で呼吸観察またはSpO₂測定が未実施です。呼吸不全の認識を確認してください。"
      ]
    },
    "feedbackTemplates": {
      "confirmed": "：記録から確認できています。",
      "biasMultiple": "重篤な鑑別が記録されています。各候補の根拠と、除外できない情報を確認してください。",
      "biasSingle": "最も疑う病態だけに判断を固定した可能性があります。記載不足から認知バイアスを断定せず、重篤な鑑別と確認の順序を振り返ってください。",
      "nextCritical": "次回は呼吸循環の評価と致死的鑑別の確認を、病名の確定より前に行ってください。",
      "nextMissing": "次回は「{items}」を自分の言葉で確認してください。",
      "nextComplete": "次回は確認した情報の出所と、鑑別を支持する根拠を申し送りで簡潔に伝えてください。"
    },
    "scoring": {
      "rules": [
        {
          "id": "HF-001-score-0",
          "area": "observation",
          "label": "画像から第一印象を記録",
          "points": 4,
          "when": {
            "all": [
              {
                "length": {
                  "path": "session.impression",
                  "min": 6
                }
              },
              {
                "text": {
                  "path": "session.impression",
                  "pattern": "前かがみ|座|上体|汗|苦悶",
                  "positive": false
                }
              }
            ]
          }
        },
        {
          "id": "HF-001-score-1",
          "area": "observation",
          "label": "意識を観察",
          "points": 2,
          "when": {
            "observation": "consciousness"
          }
        },
        {
          "id": "HF-001-score-2",
          "area": "observation",
          "label": "呼吸を観察",
          "points": 4,
          "when": {
            "observation": "respiration"
          }
        },
        {
          "id": "HF-001-score-3",
          "area": "observation",
          "label": "呼吸音を確認",
          "points": 3,
          "when": {
            "observation": "lungs"
          }
        },
        {
          "id": "HF-001-score-4",
          "area": "observation",
          "label": "皮膚・四肢を確認",
          "points": 2,
          "when": {
            "all": [
              {
                "observation": "skin"
              },
              {
                "observation": "limbs"
              }
            ]
          }
        },
        {
          "id": "HF-001-score-5",
          "area": "observation",
          "label": "SpO₂を測定",
          "points": 3,
          "when": {
            "measurement": "spo2"
          }
        },
        {
          "id": "HF-001-score-6",
          "area": "observation",
          "label": "呼吸数を測定",
          "points": 2,
          "when": {
            "measurement": "rr"
          }
        },
        {
          "id": "HF-001-score-7",
          "area": "interview",
          "label": "発症・経過を確認",
          "points": 4,
          "when": {
            "fact": "onset"
          }
        },
        {
          "id": "HF-001-score-8",
          "area": "interview",
          "label": "発症様式を確認",
          "points": 2,
          "when": {
            "fact": "pattern"
          }
        },
        {
          "id": "HF-001-score-9",
          "area": "interview",
          "label": "体位による変化を確認",
          "points": 4,
          "when": {
            "fact": "orthopnea"
          }
        },
        {
          "id": "HF-001-score-10",
          "area": "interview",
          "label": "会話・活動への影響を確認",
          "points": 2,
          "when": {
            "fact": "severity"
          }
        },
        {
          "id": "HF-001-score-11",
          "area": "interview",
          "label": "胸部症状を確認",
          "points": 2,
          "when": {
            "fact": "chest"
          }
        },
        {
          "id": "HF-001-score-12",
          "area": "interview",
          "label": "むくみ・体重変化を確認",
          "points": 3,
          "when": {
            "fact": "edema"
          }
        },
        {
          "id": "HF-001-score-13",
          "area": "interview",
          "label": "既往歴を確認",
          "points": 3,
          "when": {
            "fact": "history"
          }
        },
        {
          "id": "HF-001-score-14",
          "area": "interview",
          "label": "内服を確認",
          "points": 3,
          "when": {
            "fact": "medication"
          }
        },
        {
          "id": "HF-001-score-15",
          "area": "interview",
          "label": "アレルギーを確認",
          "points": 2,
          "when": {
            "fact": "allergy"
          }
        },
        {
          "id": "HF-001-score-16",
          "area": "urgency",
          "label": "高い緊急度を判断",
          "points": 12,
          "when": {
            "equals": {
              "path": "final.urgency",
              "value": "high"
            }
          },
          "evidencePath": "final.urgency"
        },
        {
          "id": "HF-001-score-17",
          "area": "urgency",
          "label": "確認した重要所見を判断根拠に記載",
          "points": 4,
          "when": {
            "all": [
              {
                "measurement": "spo2"
              },
              {
                "text": {
                  "path": "final.reason",
                  "pattern": "86|低酸素",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.reason"
        },
        {
          "id": "HF-001-score-18",
          "area": "urgency",
          "label": "観察と測定を結びつけて判断",
          "points": 4,
          "when": {
            "all": [
              {
                "observation": "respiration"
              },
              {
                "measurement": "rr"
              },
              {
                "text": {
                  "path": "final.reason",
                  "pattern": "呼吸|32|会話|息",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.reason"
        },
        {
          "id": "HF-001-score-19",
          "area": "reasoning",
          "label": "最も疑う病態を記載",
          "points": 5,
          "when": {
            "primary": true
          },
          "evidencePath": "final.diagnosis"
        },
        {
          "id": "HF-001-score-20",
          "area": "reasoning",
          "label": "重篤な鑑別を1つ挙げる",
          "points": 3,
          "when": {
            "lethalCount": 1
          }
        },
        {
          "id": "HF-001-score-21",
          "area": "reasoning",
          "label": "異なる重篤な鑑別を2つ挙げる",
          "points": 3,
          "when": {
            "lethalCount": 2
          }
        },
        {
          "id": "HF-001-score-22",
          "area": "reasoning",
          "label": "2候補以上に根拠を記載",
          "points": 4,
          "when": {
            "reasonCount": {
              "min": 2,
              "minLength": 12
            }
          }
        },
        {
          "id": "HF-001-score-23",
          "area": "transport",
          "label": "症例に応じた安静・体位・気道への配慮",
          "points": 2,
          "when": {
            "includes": {
              "path": "final.treatments",
              "value": "rest"
            }
          }
        },
        {
          "id": "HF-001-score-24",
          "area": "transport",
          "label": "継続監視と再評価",
          "points": 2,
          "when": {
            "includes": {
              "path": "final.treatments",
              "value": "monitor"
            }
          }
        },
        {
          "id": "HF-001-score-25",
          "area": "transport",
          "label": "プロトコルに従った適応評価・MC連絡",
          "points": 2,
          "when": {
            "includes": {
              "path": "final.treatments",
              "value": "mc"
            }
          }
        },
        {
          "id": "HF-001-score-26",
          "area": "transport",
          "label": "迅速な搬送方針",
          "points": 2,
          "when": {
            "equals": {
              "path": "final.transport",
              "value": "rapid"
            }
          }
        },
        {
          "id": "HF-001-score-27",
          "area": "transport",
          "label": "必要機能を踏まえた搬送先選定",
          "points": 2,
          "when": {
            "oneOf": {
              "path": "final.destination",
              "values": [
                "specialist",
                "emergency"
              ]
            }
          }
        },
        {
          "id": "HF-001-score-28",
          "area": "handover",
          "label": "年齢と主訴",
          "points": 1,
          "when": {
            "all": [
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "76|70歳代|70代",
                  "positive": true
                }
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "呼吸困難|息|呼吸",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "HF-001-score-29",
          "area": "handover",
          "label": "発症・増悪の経過",
          "points": 1,
          "when": {
            "all": [
              {
                "fact": "onset"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "昨日|2時間",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "HF-001-score-30",
          "area": "handover",
          "label": "体位による症状変化",
          "points": 1,
          "when": {
            "all": [
              {
                "fact": "orthopnea"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "横|仰臥|座位|起坐",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "HF-001-score-31",
          "area": "handover",
          "label": "測定したSpO₂",
          "points": 1,
          "when": {
            "all": [
              {
                "measurement": "spo2"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "(spo2|SpO₂|酸素飽和).{0,12}86",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "HF-001-score-32",
          "area": "handover",
          "label": "測定した呼吸数・脈拍",
          "points": 1,
          "when": {
            "all": [
              {
                "measurement": "rr"
              },
              {
                "measurement": "pulse"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "呼吸.{0,8}32",
                  "positive": true
                }
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "(脈拍|心拍).{0,8}118",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "HF-001-score-33",
          "area": "handover",
          "label": "測定した血圧",
          "points": 1,
          "when": {
            "all": [
              {
                "measurement": "bp"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "184[/／]106",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "HF-001-score-34",
          "area": "handover",
          "label": "既往と内服",
          "points": 1,
          "when": {
            "all": [
              {
                "fact": "history"
              },
              {
                "fact": "medication"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "高血圧|入院|薬",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "HF-001-score-35",
          "area": "handover",
          "label": "病態推論",
          "points": 1,
          "when": {
            "text": {
              "path": "final.handover",
              "pattern": "心不全|肺水腫",
              "positive": true
            }
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "HF-001-score-36",
          "area": "handover",
          "label": "対応の実施・未実施・予定を区別して伝達",
          "points": 2,
          "when": {
            "text": {
              "path": "final.handover",
              "pattern": "(安静|体位|気道|監視|モニタ|MC|連絡|経口|酸素).{0,25}(実施|保持|継続|開始|未実施|予定|避け|禁止|行わない)",
              "positive": false
            }
          },
          "evidencePath": "final.handover"
        }
      ],
      "criticalRules": [
        {
          "id": "urgency",
          "when": {
            "not": {
              "equals": {
                "path": "final.urgency",
                "value": "high"
              }
            }
          },
          "message": "この架空症例の危険所見に対して緊急度を過小評価しています。観察・測定・病歴を合わせて再評価してください。"
        },
        {
          "id": "respiration",
          "when": {
            "any": [
              {
                "not": {
                  "observation": "respiration"
                }
              },
              {
                "not": {
                  "measurement": "spo2"
                }
              }
            ]
          },
          "message": "呼吸困難症例で呼吸観察またはSpO₂測定が未実施です。呼吸不全の認識を確認してください。"
        }
      ],
      "warnings": [
        {
          "when": {
            "all": [
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "(spo2|SpO₂).{0,12}86",
                  "positive": true
                }
              },
              {
                "not": {
                  "measurement": "spo2"
                }
              }
            ]
          },
          "message": "SpO₂の値を伝えていますが測定記録がありません。未確認の値を既知の事実として申し送らないでください。"
        }
      ]
    },
    "sceneText": "自宅寝室。傷病者は上体を起こしています。呼吸状態と背景を確認してください。",
    "primaryConditionKey": "hf",
    "lethalConditionKeys": [
      "acs",
      "pe",
      "infection"
    ],
    "conditionPatterns": [
      {
        "key": "hf",
        "pattern": "心不全|肺水腫"
      },
      {
        "key": "acs",
        "pattern": "急性冠|acs|心筋梗塞"
      },
      {
        "key": "pe",
        "pattern": "肺.*塞栓|肺.*血栓"
      },
      {
        "key": "infection",
        "pattern": "肺炎|感染"
      }
    ],
    "diagnosisSuggestions": [
      "急性心不全",
      "急性冠症候群",
      "肺血栓塞栓症",
      "肺炎・重症感染症"
    ],
    "destinations": [
      {
        "id": "specialist",
        "label": "急性呼吸循環不全の初期対応と循環器診療が可能な医療機関"
      },
      {
        "id": "emergency",
        "label": "必要な初期対応・専門診療へ連携できる救命救急医療機関"
      },
      {
        "id": "nearest",
        "label": "診療機能にかかわらず最寄りの医療機関"
      },
      {
        "id": "clinic",
        "label": "かかりつけ診療所"
      }
    ],
    "analyticsItems": [
      {
        "id": "history",
        "kind": "factIds",
        "itemId": "history"
      },
      {
        "id": "medication",
        "kind": "factIds",
        "itemId": "medication"
      }
    ]
  },
  {
    "schemaVersion": 2,
    "caseVersion": 1,
    "id": "ABD-001",
    "number": "03",
    "title": "症例03：50歳代女性、お腹が痛く吐いている",
    "category": "腹痛",
    "difficulty": "初級",
    "preview": "自宅居間。50歳代女性、お腹が痛く吐いている",
    "focus": "腹部所見・病歴・循環評価",
    "reviewStatus": "教育担当者・指導医による監修前の仮想症例",
    "patient": {
      "age": 56,
      "sex": "女性",
      "location": "自宅居間",
      "image": "assets-patients-ABD-001-scene-photo.png",
      "personality": "質問された情報だけを短く答える。",
      "images": [
        {
          "id": "scene-photo",
          "label": "現場接触・写真調",
          "src": "assets-patients-ABD-001-scene-photo.png",
          "alt": "腹部に手を添えて苦悶の表情を示す女性。"
        }
      ],
      "imageAlt": "腹部に手を添えて苦悶の表情を示す女性。"
    },
    "sceneCaption": "架空傷病者・事前生成の写真調画像 / 静止画",
    "dispatch": "50歳代女性、お腹が痛く吐いている。自宅居間。",
    "timeModel": "現場接触時点の固定症例。時計・病状・測定値は経過時間によって変化しない。",
    "spontaneous": "お腹が……痛いです……。",
    "unknownResponse": "そのことは……よく分かりません。",
    "diagnosisResponse": "原因は……私には分かりません。",
    "questionNormalization": {
      "aliases": [
        [
          "アレルギィ",
          "アレルギー"
        ],
        [
          "しめ付け",
          "締め付け"
        ],
        [
          "飲み薬",
          "内服薬"
        ]
      ],
      "deferredPattern": "(後で|あとで|まだ聞か|今は聞か|尋ねない|質問しない)",
      "maxFactsPerQuestion": 7,
      "otherSubjectPattern": "家族|ご家族|父|母|兄|弟|姉|妹|夫|妻|お子|子供|子ども"
    },
    "responders": [
      {
        "id": "patient",
        "label": "傷病者",
        "unknown": "今は……うまく説明できません。"
      }
    ],
    "facts": [
      {
        "id": "chief",
        "category": "chief",
        "label": "主訴",
        "patterns": [
          "どうしました",
          "どうされ",
          "具合",
          "症状を"
        ],
        "expectedQuestions": [
          "主訴について教えてください"
        ],
        "synonyms": [
          "どうしました",
          "どうされ",
          "具合",
          "症状を"
        ],
        "answer": "お腹が……痛くて……吐いています……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "onset",
        "category": "onset",
        "label": "発症時刻",
        "patterns": [
          "いつ",
          "何時",
          "発症",
          "どのくらい前"
        ],
        "expectedQuestions": [
          "発症時刻について教えてください"
        ],
        "synonyms": [
          "いつ",
          "何時",
          "発症",
          "どのくらい前"
        ],
        "answer": "6時間くらい前からです……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "location",
        "category": "location",
        "label": "痛みの部位",
        "patterns": [
          "どこ",
          "場所",
          "部位"
        ],
        "expectedQuestions": [
          "痛みの部位について教えてください"
        ],
        "synonyms": [
          "どこ",
          "場所",
          "部位"
        ],
        "answer": "お腹の真ん中あたりから……全体が張って痛いです……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "quality",
        "category": "quality",
        "label": "症状の性状・経過",
        "patterns": [
          "どんな",
          "性状",
          "波",
          "ずっと",
          "突然",
          "だんだん",
          "強さ"
        ],
        "expectedQuestions": [
          "症状の性状・経過について教えてください"
        ],
        "synonyms": [
          "どんな",
          "性状",
          "波",
          "ずっと",
          "突然",
          "だんだん",
          "強さ"
        ],
        "answer": "締め付けられるような痛みが波のように来て……だんだん強くなっています……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "vomiting",
        "category": "vomiting",
        "label": "嘔吐の回数・内容",
        "patterns": [
          "吐",
          "嘔吐",
          "嘔気",
          "気持ち悪"
        ],
        "expectedQuestions": [
          "嘔吐の回数・内容について教えてください"
        ],
        "synonyms": [
          "吐",
          "嘔吐",
          "嘔気",
          "気持ち悪"
        ],
        "answer": "4回吐きました……。緑がかったものです……。血は見ていません……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "bowel",
        "category": "bowel",
        "label": "排便・排ガス",
        "patterns": [
          "便",
          "排便",
          "ガス",
          "おなら",
          "下痢"
        ],
        "expectedQuestions": [
          "排便・排ガスについて教えてください"
        ],
        "synonyms": [
          "便",
          "排便",
          "ガス",
          "おなら",
          "下痢"
        ],
        "answer": "昨日から……便もおならも出ていません……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "surgery",
        "category": "surgery",
        "label": "腹部手術歴",
        "patterns": [
          "手術",
          "お腹.*切",
          "開腹"
        ],
        "expectedQuestions": [
          "腹部手術歴について教えてください"
        ],
        "synonyms": [
          "手術",
          "お腹.*切",
          "開腹"
        ],
        "answer": "20年ほど前に……帝王切開を受けました……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "history",
        "category": "history",
        "label": "既往歴・内服",
        "patterns": [
          "持病",
          "既往",
          "病気",
          "薬",
          "内服"
        ],
        "expectedQuestions": [
          "既往歴・内服について教えてください"
        ],
        "synonyms": [
          "持病",
          "既往",
          "病気",
          "薬",
          "内服"
        ],
        "answer": "高血圧で薬を飲んでいます……。名前は分かりません……。",
        "responders": [
          "patient"
        ],
        "excludePatterns": [
          "^(?:お)?薬.*アレルギー"
        ]
      },
      {
        "id": "allergy",
        "category": "allergy",
        "label": "アレルギー",
        "patterns": [
          "アレルギ"
        ],
        "expectedQuestions": [
          "アレルギーについて教えてください"
        ],
        "synonyms": [
          "アレルギ"
        ],
        "answer": "アレルギーは……ありません……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "dizziness",
        "category": "dizziness",
        "label": "ふらつき",
        "patterns": [
          "ふら",
          "めまい",
          "立つと"
        ],
        "expectedQuestions": [
          "ふらつきについて教えてください"
        ],
        "synonyms": [
          "ふら",
          "めまい",
          "立つと"
        ],
        "answer": "立とうとすると……ふらっとします……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "pregnancy",
        "category": "pregnancy",
        "label": "妊娠の可能性・月経",
        "patterns": [
          "妊娠",
          "月経",
          "生理"
        ],
        "expectedQuestions": [
          "妊娠の可能性・月経について教えてください"
        ],
        "synonyms": [
          "妊娠",
          "月経",
          "生理"
        ],
        "answer": "4年前に月経がなくなりました……。妊娠しているとは思っていません……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "fever",
        "category": "fever",
        "label": "発熱",
        "patterns": [
          "熱",
          "発熱"
        ],
        "expectedQuestions": [
          "発熱について教えてください"
        ],
        "synonyms": [
          "熱",
          "発熱"
        ],
        "answer": "熱が出た感じは……ありません……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "back",
        "category": "back",
        "label": "背部痛",
        "patterns": [
          "背中",
          "腰",
          "背部"
        ],
        "expectedQuestions": [
          "背部痛について教えてください"
        ],
        "synonyms": [
          "背中",
          "腰",
          "背部"
        ],
        "answer": "背中や腰の痛みは……ありません……。",
        "responders": [
          "patient"
        ]
      }
    ],
    "observations": [
      {
        "id": "general",
        "label": "全身",
        "result": "ソファで上体を少し起こし、腹部を押さえる。苦悶様で会話は可能。"
      },
      {
        "id": "face",
        "label": "顔貌",
        "result": "顔色はやや蒼白、苦悶様。"
      },
      {
        "id": "consciousness",
        "label": "意識",
        "result": "氏名・場所・状況を適切に答える。JCS 0相当。"
      },
      {
        "id": "respiration",
        "label": "呼吸",
        "result": "やや速い呼吸。会話可能。測定で呼吸数・SpO₂を確認する。"
      },
      {
        "id": "skin",
        "label": "皮膚",
        "result": "皮膚は冷たく、やや湿潤。"
      },
      {
        "id": "abdomen",
        "label": "腹部",
        "result": "腹部膨満。全体に圧痛を認める。明らかな板状硬は設定されていない。所見単独で重篤な病態を除外しない。"
      },
      {
        "id": "limbs",
        "label": "四肢・末梢循環",
        "result": "橈骨動脈はやや弱い。毛細血管再充満は約3秒の設定。"
      },
      {
        "id": "position",
        "label": "体位",
        "result": "本人が苦痛の少ない体位を保つ。嘔吐に備え気道・誤嚥への配慮が必要。"
      }
    ],
    "measurements": [
      {
        "id": "bp",
        "label": "血圧",
        "value": "90/58",
        "unit": "mmHg",
        "result": "血圧 90/58 mmHg",
        "dashboard": true
      },
      {
        "id": "pulse",
        "label": "脈拍",
        "value": "116",
        "unit": "回/分",
        "result": "脈拍 116 回/分",
        "dashboard": true
      },
      {
        "id": "rr",
        "label": "呼吸数",
        "value": "24",
        "unit": "回/分",
        "result": "呼吸数 24 回/分",
        "dashboard": true
      },
      {
        "id": "spo2",
        "label": "SpO₂",
        "value": "97",
        "unit": "% / 室内気",
        "result": "SpO₂ 97 % / 室内気",
        "dashboard": true
      },
      {
        "id": "temperature",
        "label": "体温",
        "value": "36.8",
        "unit": "℃",
        "result": "体温 36.8 ℃",
        "dashboard": true
      },
      {
        "id": "glucose",
        "label": "血糖",
        "value": "128",
        "unit": "mg/dL",
        "result": "血糖 128 mg/dL",
        "dashboard": true
      }
    ],
    "treatments": [
      {
        "id": "rest",
        "label": "苦痛の少ない体位・嘔吐時の気道と誤嚥への配慮"
      },
      {
        "id": "monitor",
        "label": "呼吸循環・意識の継続監視と再評価"
      },
      {
        "id": "mc",
        "label": "地域プロトコルに従いMC・医療機関へ連絡"
      },
      {
        "id": "nooral",
        "label": "安易な経口摂取を避け、地域プロトコルに従う"
      }
    ],
    "rubric": {
      "observation": 20,
      "interview": 25,
      "urgency": 20,
      "reasoning": 15,
      "transport": 10,
      "handover": 10,
      "criticalCap": 59
    },
    "educator": {
      "keyFacts": [
        {
          "id": "onset",
          "points": 4
        },
        {
          "id": "location",
          "points": 3
        },
        {
          "id": "quality",
          "points": 3
        },
        {
          "id": "vomiting",
          "points": 3
        },
        {
          "id": "bowel",
          "points": 4
        },
        {
          "id": "surgery",
          "points": 3
        },
        {
          "id": "history",
          "points": 2
        },
        {
          "id": "allergy",
          "points": 1
        },
        {
          "id": "dizziness",
          "points": 2
        }
      ],
      "sources": [
        {
          "title": "国立がん研究センター：手術後の腸閉塞について",
          "url": "https://www.ncc.go.jp/jp/ncce/clinic/gastric_surgery/050/030/index.html"
        }
      ],
      "condition": "腸閉塞（架空症例の設定）",
      "differentials": [
        "急性腸間膜虚血",
        "消化管穿孔",
        "腹部大動脈瘤の緊急病態"
      ],
      "teaching": "腸閉塞を疑う病歴があっても、循環状態と外科的に重篤な鑑別を確認する。画像の腹部を押さえる姿勢だけで診断を決めない。",
      "criticalRules": [
        "この架空症例の危険所見に対して緊急度を過小評価しています。観察・測定・病歴を合わせて再評価してください。",
        "腹痛・反復嘔吐症例で血圧または脈拍を測定せず、循環状態の評価が不十分です。",
        "腹部の詳細観察が未実施のまま最終判断しています。"
      ]
    },
    "feedbackTemplates": {
      "confirmed": "：記録から確認できています。",
      "biasMultiple": "重篤な鑑別が記録されています。各候補の根拠と、除外できない情報を確認してください。",
      "biasSingle": "最も疑う病態だけに判断を固定した可能性があります。記載不足から認知バイアスを断定せず、重篤な鑑別と確認の順序を振り返ってください。",
      "nextCritical": "次回は呼吸循環の評価と致死的鑑別の確認を、病名の確定より前に行ってください。",
      "nextMissing": "次回は「{items}」を自分の言葉で確認してください。",
      "nextComplete": "次回は確認した情報の出所と、鑑別を支持する根拠を申し送りで簡潔に伝えてください。"
    },
    "scoring": {
      "rules": [
        {
          "id": "ABD-001-score-0",
          "area": "observation",
          "label": "画像から第一印象を記録",
          "points": 3,
          "when": {
            "all": [
              {
                "length": {
                  "path": "session.impression",
                  "min": 6
                }
              },
              {
                "text": {
                  "path": "session.impression",
                  "pattern": "腹|苦悶|蒼白|顔色|手",
                  "positive": false
                }
              }
            ]
          }
        },
        {
          "id": "ABD-001-score-1",
          "area": "observation",
          "label": "意識を観察",
          "points": 2,
          "when": {
            "observation": "consciousness"
          }
        },
        {
          "id": "ABD-001-score-2",
          "area": "observation",
          "label": "腹部を観察",
          "points": 5,
          "when": {
            "observation": "abdomen"
          }
        },
        {
          "id": "ABD-001-score-3",
          "area": "observation",
          "label": "皮膚・末梢循環を確認",
          "points": 3,
          "when": {
            "all": [
              {
                "observation": "skin"
              },
              {
                "observation": "limbs"
              }
            ]
          }
        },
        {
          "id": "ABD-001-score-4",
          "area": "observation",
          "label": "血圧を測定",
          "points": 4,
          "when": {
            "measurement": "bp"
          }
        },
        {
          "id": "ABD-001-score-5",
          "area": "observation",
          "label": "脈拍を測定",
          "points": 3,
          "when": {
            "measurement": "pulse"
          }
        },
        {
          "id": "ABD-001-score-6",
          "area": "interview",
          "label": "発症時刻を確認",
          "points": 4,
          "when": {
            "fact": "onset"
          }
        },
        {
          "id": "ABD-001-score-7",
          "area": "interview",
          "label": "痛みの部位を確認",
          "points": 3,
          "when": {
            "fact": "location"
          }
        },
        {
          "id": "ABD-001-score-8",
          "area": "interview",
          "label": "症状の性状・経過を確認",
          "points": 3,
          "when": {
            "fact": "quality"
          }
        },
        {
          "id": "ABD-001-score-9",
          "area": "interview",
          "label": "嘔吐の回数・内容を確認",
          "points": 3,
          "when": {
            "fact": "vomiting"
          }
        },
        {
          "id": "ABD-001-score-10",
          "area": "interview",
          "label": "排便・排ガスを確認",
          "points": 4,
          "when": {
            "fact": "bowel"
          }
        },
        {
          "id": "ABD-001-score-11",
          "area": "interview",
          "label": "腹部手術歴を確認",
          "points": 3,
          "when": {
            "fact": "surgery"
          }
        },
        {
          "id": "ABD-001-score-12",
          "area": "interview",
          "label": "既往歴・内服を確認",
          "points": 2,
          "when": {
            "fact": "history"
          }
        },
        {
          "id": "ABD-001-score-13",
          "area": "interview",
          "label": "アレルギーを確認",
          "points": 1,
          "when": {
            "fact": "allergy"
          }
        },
        {
          "id": "ABD-001-score-14",
          "area": "interview",
          "label": "ふらつきを確認",
          "points": 2,
          "when": {
            "fact": "dizziness"
          }
        },
        {
          "id": "ABD-001-score-15",
          "area": "urgency",
          "label": "高い緊急度を判断",
          "points": 12,
          "when": {
            "equals": {
              "path": "final.urgency",
              "value": "high"
            }
          },
          "evidencePath": "final.urgency"
        },
        {
          "id": "ABD-001-score-16",
          "area": "urgency",
          "label": "確認した重要所見を判断根拠に記載",
          "points": 4,
          "when": {
            "all": [
              {
                "measurement": "bp"
              },
              {
                "text": {
                  "path": "final.reason",
                  "pattern": "90|低血圧|循環|ショック",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.reason"
        },
        {
          "id": "ABD-001-score-17",
          "area": "urgency",
          "label": "観察と測定を結びつけて判断",
          "points": 4,
          "when": {
            "all": [
              {
                "observation": "abdomen"
              },
              {
                "fact": "vomiting"
              },
              {
                "text": {
                  "path": "final.reason",
                  "pattern": "腹|嘔吐|吐",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.reason"
        },
        {
          "id": "ABD-001-score-18",
          "area": "reasoning",
          "label": "最も疑う病態を記載",
          "points": 5,
          "when": {
            "primary": true
          },
          "evidencePath": "final.diagnosis"
        },
        {
          "id": "ABD-001-score-19",
          "area": "reasoning",
          "label": "重篤な鑑別を1つ挙げる",
          "points": 3,
          "when": {
            "lethalCount": 1
          }
        },
        {
          "id": "ABD-001-score-20",
          "area": "reasoning",
          "label": "異なる重篤な鑑別を2つ挙げる",
          "points": 3,
          "when": {
            "lethalCount": 2
          }
        },
        {
          "id": "ABD-001-score-21",
          "area": "reasoning",
          "label": "2候補以上に根拠を記載",
          "points": 4,
          "when": {
            "reasonCount": {
              "min": 2,
              "minLength": 12
            }
          }
        },
        {
          "id": "ABD-001-score-22",
          "area": "transport",
          "label": "症例に応じた安静・体位・気道への配慮",
          "points": 2,
          "when": {
            "includes": {
              "path": "final.treatments",
              "value": "rest"
            }
          }
        },
        {
          "id": "ABD-001-score-23",
          "area": "transport",
          "label": "継続監視と再評価",
          "points": 2,
          "when": {
            "includes": {
              "path": "final.treatments",
              "value": "monitor"
            }
          }
        },
        {
          "id": "ABD-001-score-24",
          "area": "transport",
          "label": "プロトコルに従った適応評価・MC連絡",
          "points": 2,
          "when": {
            "includes": {
              "path": "final.treatments",
              "value": "mc"
            }
          }
        },
        {
          "id": "ABD-001-score-25",
          "area": "transport",
          "label": "迅速な搬送方針",
          "points": 2,
          "when": {
            "equals": {
              "path": "final.transport",
              "value": "rapid"
            }
          }
        },
        {
          "id": "ABD-001-score-26",
          "area": "transport",
          "label": "必要機能を踏まえた搬送先選定",
          "points": 2,
          "when": {
            "oneOf": {
              "path": "final.destination",
              "values": [
                "specialist",
                "emergency"
              ]
            }
          }
        },
        {
          "id": "ABD-001-score-27",
          "area": "handover",
          "label": "年齢と主訴",
          "points": 1,
          "when": {
            "all": [
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "56|50歳代|50代",
                  "positive": true
                }
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "腹痛|お腹|腹部",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "ABD-001-score-28",
          "area": "handover",
          "label": "確認した発症時刻",
          "points": 1,
          "when": {
            "all": [
              {
                "fact": "onset"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "6時間|六時間",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "ABD-001-score-29",
          "area": "handover",
          "label": "確認した嘔吐",
          "points": 1,
          "when": {
            "all": [
              {
                "fact": "vomiting"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "吐|嘔吐",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "ABD-001-score-30",
          "area": "handover",
          "label": "排便・排ガスと手術歴",
          "points": 1,
          "when": {
            "all": [
              {
                "fact": "bowel"
              },
              {
                "fact": "surgery"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "排便|排ガス|便|ガス",
                  "positive": false
                }
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "帝王切開|手術",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "ABD-001-score-31",
          "area": "handover",
          "label": "観察した腹部所見",
          "points": 1,
          "when": {
            "all": [
              {
                "observation": "abdomen"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "膨満|圧痛",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "ABD-001-score-32",
          "area": "handover",
          "label": "測定した血圧",
          "points": 1,
          "when": {
            "all": [
              {
                "measurement": "bp"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "90[/／]58",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "ABD-001-score-33",
          "area": "handover",
          "label": "測定した脈拍",
          "points": 1,
          "when": {
            "all": [
              {
                "measurement": "pulse"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "(脈拍|心拍).{0,8}116",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "ABD-001-score-34",
          "area": "handover",
          "label": "病態推論",
          "points": 1,
          "when": {
            "text": {
              "path": "final.handover",
              "pattern": "腸閉塞|イレウス",
              "positive": true
            }
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "ABD-001-score-35",
          "area": "handover",
          "label": "対応の実施・未実施・予定を区別して伝達",
          "points": 2,
          "when": {
            "text": {
              "path": "final.handover",
              "pattern": "(安静|体位|気道|監視|モニタ|MC|連絡|経口|酸素).{0,25}(実施|保持|継続|開始|未実施|予定|避け|禁止|行わない)",
              "positive": false
            }
          },
          "evidencePath": "final.handover"
        }
      ],
      "criticalRules": [
        {
          "id": "urgency",
          "when": {
            "not": {
              "equals": {
                "path": "final.urgency",
                "value": "high"
              }
            }
          },
          "message": "この架空症例の危険所見に対して緊急度を過小評価しています。観察・測定・病歴を合わせて再評価してください。"
        },
        {
          "id": "circulation",
          "when": {
            "any": [
              {
                "not": {
                  "measurement": "bp"
                }
              },
              {
                "not": {
                  "measurement": "pulse"
                }
              }
            ]
          },
          "message": "腹痛・反復嘔吐症例で血圧または脈拍を測定せず、循環状態の評価が不十分です。"
        },
        {
          "id": "abdomen",
          "when": {
            "not": {
              "observation": "abdomen"
            }
          },
          "message": "腹部の詳細観察が未実施のまま最終判断しています。"
        }
      ],
      "warnings": [
        {
          "when": {
            "all": [
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "90[/／]58",
                  "positive": true
                }
              },
              {
                "not": {
                  "measurement": "bp"
                }
              }
            ]
          },
          "message": "血圧の値を伝えていますが測定記録がありません。未確認の値を既知の事実として申し送らないでください。"
        }
      ]
    },
    "sceneText": "自宅居間。腹部を押さえている傷病者。腹部症状と循環状態を確認してください。",
    "primaryConditionKey": "bowel",
    "lethalConditionKeys": [
      "ischemia",
      "perforation",
      "aorta"
    ],
    "conditionPatterns": [
      {
        "key": "bowel",
        "pattern": "腸閉塞|イレウス"
      },
      {
        "key": "ischemia",
        "pattern": "腸間膜|腸管虚血"
      },
      {
        "key": "perforation",
        "pattern": "穿孔|腹膜炎"
      },
      {
        "key": "aorta",
        "pattern": "大動脈|aaa"
      }
    ],
    "diagnosisSuggestions": [
      "腸閉塞",
      "急性腸間膜虚血",
      "消化管穿孔",
      "腹部大動脈瘤の緊急病態"
    ],
    "destinations": [
      {
        "id": "specialist",
        "label": "腹部救急・外科評価と循環不全の初期対応が可能な医療機関"
      },
      {
        "id": "emergency",
        "label": "必要な初期対応・専門診療へ連携できる救命救急医療機関"
      },
      {
        "id": "nearest",
        "label": "診療機能にかかわらず最寄りの医療機関"
      },
      {
        "id": "clinic",
        "label": "かかりつけ診療所"
      }
    ],
    "analyticsItems": [
      {
        "id": "history",
        "kind": "factIds",
        "itemId": "history"
      },
      {
        "id": "medication",
        "kind": "factIds",
        "itemId": "history"
      }
    ]
  },
  {
    "schemaVersion": 2,
    "caseVersion": 1,
    "id": "HYPO-001",
    "number": "04",
    "title": "症例04：60歳代男性、受け答えがおかしい",
    "category": "意識障害",
    "difficulty": "初級",
    "preview": "自宅食卓。60歳代男性、受け答えがおかしい",
    "focus": "意識・血糖・家族情報",
    "reviewStatus": "教育担当者・指導医による監修前の仮想症例",
    "patient": {
      "age": 64,
      "sex": "男性",
      "location": "自宅食卓",
      "image": "assets-patients-HYPO-001-scene-photo.png",
      "personality": "反応が鈍く、名前程度の短い返答。詳しい病歴は妻から聴取する。",
      "images": [
        {
          "id": "scene-photo",
          "label": "現場接触・写真調",
          "src": "assets-patients-HYPO-001-scene-photo.png",
          "alt": "食卓で目を閉じ気味にし、汗が見える男性。"
        }
      ],
      "imageAlt": "食卓で目を閉じ気味にし、汗が見える男性。"
    },
    "sceneCaption": "架空傷病者・事前生成の写真調画像 / 静止画",
    "dispatch": "60歳代男性、受け答えがおかしい。自宅食卓。",
    "timeModel": "現場接触時点の固定症例。時計・病状・測定値は経過時間によって変化しない。",
    "spontaneous": "ん……何……？",
    "unknownResponse": "そのことは……よく分かりません。",
    "diagnosisResponse": "原因は……私には分かりません。",
    "questionNormalization": {
      "aliases": [
        [
          "アレルギィ",
          "アレルギー"
        ],
        [
          "しめ付け",
          "締め付け"
        ],
        [
          "飲み薬",
          "内服薬"
        ]
      ],
      "deferredPattern": "(後で|あとで|まだ聞か|今は聞か|尋ねない|質問しない)",
      "maxFactsPerQuestion": 7,
      "otherSubjectPattern": "家族|ご家族|父|母|兄|弟|姉|妹|夫|妻|お子|子供|子ども"
    },
    "responders": [
      {
        "id": "patient",
        "label": "傷病者",
        "unknown": "ん……よく……分からない……。"
      },
      {
        "id": "family",
        "label": "家族（妻）",
        "unknown": "そのことは分かりません。確認していません。"
      }
    ],
    "facts": [
      {
        "id": "chief",
        "category": "chief",
        "label": "本人の訴え",
        "patterns": [
          "どうしました",
          "どうされ",
          "具合",
          "症状"
        ],
        "expectedQuestions": [
          "本人の訴えについて教えてください"
        ],
        "synonyms": [
          "どうしました",
          "どうされ",
          "具合",
          "症状"
        ],
        "answer": "ん……何……？",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "name",
        "category": "name",
        "label": "架空氏名",
        "patterns": [
          "名前",
          "氏名"
        ],
        "expectedQuestions": [
          "架空氏名について教えてください"
        ],
        "synonyms": [
          "名前",
          "氏名"
        ],
        "answer": "佐々木……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "onset",
        "category": "onset",
        "label": "発見時刻・経過",
        "patterns": [
          "いつ",
          "何時",
          "発症",
          "見つけ",
          "発見"
        ],
        "expectedQuestions": [
          "発見時刻・経過について教えてください"
        ],
        "synonyms": [
          "いつ",
          "何時",
          "発症",
          "見つけ",
          "発見"
        ],
        "answer": "09:00頃、食卓でぼんやりしているのを見つけました。普段と違って返事が遅いです。",
        "responders": [
          "family"
        ],
        "excludePatterns": [
          "最終健常|最後|いつまで|いつ.*普通"
        ]
      },
      {
        "id": "lastnormal",
        "category": "lastnormal",
        "label": "最終健常確認時刻",
        "patterns": [
          "最後.*(普通|普段|正常|元気)",
          "最終健常",
          "いつまで.*(普通|普段|正常)",
          "いつ.*普通"
        ],
        "expectedQuestions": [
          "最終健常確認時刻について教えてください"
        ],
        "synonyms": [
          "最後.*(普通|普段|正常|元気)",
          "最終健常",
          "いつまで.*(普通|普段|正常)",
          "いつ.*普通"
        ],
        "answer": "08:00に普通に会話できていました。その後は別の部屋にいたので、途中は見ていません。",
        "responders": [
          "family"
        ]
      },
      {
        "id": "meal",
        "category": "meal",
        "label": "食事状況",
        "patterns": [
          "食事",
          "朝食",
          "朝ご飯",
          "食べ",
          "食べた"
        ],
        "expectedQuestions": [
          "食事状況について教えてください"
        ],
        "synonyms": [
          "食事",
          "朝食",
          "朝ご飯",
          "食べ",
          "食べた"
        ],
        "answer": "今朝は食欲がないと言って、朝食を食べていません。",
        "responders": [
          "family"
        ]
      },
      {
        "id": "medication",
        "category": "medication",
        "label": "使用薬・使用時刻",
        "patterns": [
          "薬",
          "内服",
          "服薬",
          "インスリン",
          "注射"
        ],
        "expectedQuestions": [
          "使用薬・使用時刻について教えてください"
        ],
        "synonyms": [
          "薬",
          "内服",
          "服薬",
          "インスリン",
          "注射"
        ],
        "answer": "糖尿病のインスリンを、07:50にいつもどおり使っていました。量は私には分かりません。",
        "responders": [
          "family"
        ],
        "excludePatterns": [
          "^(?:お)?薬.*アレルギー"
        ]
      },
      {
        "id": "history",
        "category": "history",
        "label": "既往歴",
        "patterns": [
          "持病",
          "既往",
          "病気",
          "糖尿病"
        ],
        "expectedQuestions": [
          "既往歴について教えてください"
        ],
        "synonyms": [
          "持病",
          "既往",
          "病気",
          "糖尿病"
        ],
        "answer": "糖尿病と高血圧があります。",
        "responders": [
          "family"
        ]
      },
      {
        "id": "trauma",
        "category": "trauma",
        "label": "転倒・外傷の状況",
        "patterns": [
          "転倒",
          "倒れ",
          "ぶつ",
          "けが",
          "外傷"
        ],
        "expectedQuestions": [
          "転倒・外傷の状況について教えてください"
        ],
        "synonyms": [
          "転倒",
          "倒れ",
          "ぶつ",
          "けが",
          "外傷"
        ],
        "answer": "倒れたり頭をぶつけたりしたところは見ていません。食卓の椅子に座っていました。",
        "responders": [
          "family"
        ]
      },
      {
        "id": "prior",
        "category": "prior",
        "label": "同様症状の経験",
        "patterns": [
          "以前",
          "前にも",
          "同じ",
          "低血糖"
        ],
        "expectedQuestions": [
          "同様症状の経験について教えてください"
        ],
        "synonyms": [
          "以前",
          "前にも",
          "同じ",
          "低血糖"
        ],
        "answer": "以前にも、食事が少ない日に冷汗が出てぼんやりしたことがあります。詳しい検査結果は覚えていません。",
        "responders": [
          "family"
        ]
      },
      {
        "id": "allergy",
        "category": "allergy",
        "label": "アレルギー",
        "patterns": [
          "アレルギ"
        ],
        "expectedQuestions": [
          "アレルギーについて教えてください"
        ],
        "synonyms": [
          "アレルギ"
        ],
        "answer": "聞いているアレルギーはありません。",
        "responders": [
          "family"
        ]
      },
      {
        "id": "alcohol",
        "category": "alcohol",
        "label": "飲酒の状況",
        "patterns": [
          "酒",
          "飲酒",
          "飲んで"
        ],
        "expectedQuestions": [
          "飲酒の状況について教えてください"
        ],
        "synonyms": [
          "酒",
          "飲酒",
          "飲んで"
        ],
        "answer": "今朝はお酒を飲んでいません。昨夜も飲んでいません。",
        "responders": [
          "family"
        ]
      }
    ],
    "observations": [
      {
        "id": "general",
        "label": "全身",
        "result": "食卓の椅子で身体を背もたれに預け、反応が鈍い。"
      },
      {
        "id": "face",
        "label": "顔貌",
        "result": "顔色はやや蒼白、額に汗がある。"
      },
      {
        "id": "consciousness",
        "label": "意識",
        "result": "呼びかけで一時開眼し短い返答。すぐに目を閉じる。JCS 10相当の固定設定。"
      },
      {
        "id": "respiration",
        "label": "呼吸・気道",
        "result": "自発呼吸あり。著明な異常呼吸は設定されていない。気道の継続評価が必要。"
      },
      {
        "id": "skin",
        "label": "皮膚",
        "result": "冷たく湿潤した皮膚、冷汗。"
      },
      {
        "id": "neuro",
        "label": "神経所見",
        "result": "指示への反応が遅い。明らかな片側優位の麻痺は、この観察では認めない。これだけで頭蓋内病態を除外しない。"
      },
      {
        "id": "trauma",
        "label": "外傷",
        "result": "確認範囲に明らかな外傷はない。"
      },
      {
        "id": "pupils",
        "label": "瞳孔",
        "result": "左右3 mm、対光反射あり。"
      }
    ],
    "measurements": [
      {
        "id": "bp",
        "label": "血圧",
        "value": "142/84",
        "unit": "mmHg",
        "result": "血圧 142/84 mmHg",
        "dashboard": true
      },
      {
        "id": "pulse",
        "label": "脈拍",
        "value": "104",
        "unit": "回/分",
        "result": "脈拍 104 回/分",
        "dashboard": true
      },
      {
        "id": "rr",
        "label": "呼吸数",
        "value": "20",
        "unit": "回/分",
        "result": "呼吸数 20 回/分",
        "dashboard": true
      },
      {
        "id": "spo2",
        "label": "SpO₂",
        "value": "97",
        "unit": "% / 室内気",
        "result": "SpO₂ 97 % / 室内気",
        "dashboard": true
      },
      {
        "id": "temperature",
        "label": "体温",
        "value": "36.4",
        "unit": "℃",
        "result": "体温 36.4 ℃",
        "dashboard": true
      },
      {
        "id": "glucose",
        "label": "血糖",
        "value": "42",
        "unit": "mg/dL",
        "result": "血糖 42 mg/dL。測定状態を確認した教育用の固定値。",
        "dashboard": true
      }
    ],
    "treatments": [
      {
        "id": "rest",
        "label": "気道保護と安静・安全な体位への配慮"
      },
      {
        "id": "monitor",
        "label": "呼吸循環・意識の継続監視と再評価"
      },
      {
        "id": "mc",
        "label": "地域プロトコルに従いMC・医療機関へ連絡"
      },
      {
        "id": "nooral",
        "label": "意識・嚥下を評価せず安易に経口摂取させない"
      },
      {
        "id": "glucose-care",
        "label": "血糖の評価・必要対応を資格と地域プロトコルに従って判断"
      },
      {
        "id": "oral",
        "label": "意識・嚥下の評価をせず飲食物を与える"
      }
    ],
    "rubric": {
      "observation": 20,
      "interview": 25,
      "urgency": 20,
      "reasoning": 15,
      "transport": 10,
      "handover": 10,
      "criticalCap": 59
    },
    "educator": {
      "keyFacts": [
        {
          "id": "onset",
          "points": 4
        },
        {
          "id": "lastnormal",
          "points": 3
        },
        {
          "id": "meal",
          "points": 4
        },
        {
          "id": "medication",
          "points": 4
        },
        {
          "id": "history",
          "points": 3
        },
        {
          "id": "trauma",
          "points": 2
        },
        {
          "id": "prior",
          "points": 2
        },
        {
          "id": "allergy",
          "points": 1
        },
        {
          "id": "alcohol",
          "points": 2
        }
      ],
      "sources": [
        {
          "title": "糖尿病情報センター：低血糖",
          "url": "https://dmic.jihs.go.jp/general/about-dm/040/050/05.html"
        }
      ],
      "condition": "低血糖による意識障害（架空症例の設定）",
      "differentials": [
        "脳卒中・頭蓋内病態",
        "けいれん発作後",
        "重症感染症"
      ],
      "teaching": "本人から聴取できない情報を家族へ確認し、気道・意識・神経所見と血糖を合わせて判断する。低血糖を疑っても他の意識障害の原因を検討する。薬剤量や実際の処置はこの模擬アプリでは実施しない。",
      "criticalRules": [
        "この架空症例の危険所見に対して緊急度を過小評価しています。観察・測定・病歴を合わせて再評価してください。",
        "意識障害症例で血糖測定を実施していません。可逆的な原因の評価が抜けています。",
        "意識または呼吸・気道を評価せず最終判断しています。",
        "意識・嚥下の評価をせず経口摂取させる判断です。誤嚥・窒息の危険を検討してください。"
      ]
    },
    "feedbackTemplates": {
      "confirmed": "：記録から確認できています。",
      "biasMultiple": "重篤な鑑別が記録されています。各候補の根拠と、除外できない情報を確認してください。",
      "biasSingle": "最も疑う病態だけに判断を固定した可能性があります。記載不足から認知バイアスを断定せず、重篤な鑑別と確認の順序を振り返ってください。",
      "nextCritical": "次回は呼吸循環の評価と致死的鑑別の確認を、病名の確定より前に行ってください。",
      "nextMissing": "次回は「{items}」を自分の言葉で確認してください。",
      "nextComplete": "次回は確認した情報の出所と、鑑別を支持する根拠を申し送りで簡潔に伝えてください。"
    },
    "scoring": {
      "rules": [
        {
          "id": "HYPO-001-score-0",
          "area": "observation",
          "label": "画像から第一印象を記録",
          "points": 3,
          "when": {
            "all": [
              {
                "length": {
                  "path": "session.impression",
                  "min": 6
                }
              },
              {
                "text": {
                  "path": "session.impression",
                  "pattern": "汗|蒼白|目|反応|顔色",
                  "positive": false
                }
              }
            ]
          }
        },
        {
          "id": "HYPO-001-score-1",
          "area": "observation",
          "label": "意識を観察",
          "points": 4,
          "when": {
            "observation": "consciousness"
          }
        },
        {
          "id": "HYPO-001-score-2",
          "area": "observation",
          "label": "呼吸・気道を観察",
          "points": 3,
          "when": {
            "observation": "respiration"
          }
        },
        {
          "id": "HYPO-001-score-3",
          "area": "observation",
          "label": "神経所見を確認",
          "points": 3,
          "when": {
            "observation": "neuro"
          }
        },
        {
          "id": "HYPO-001-score-4",
          "area": "observation",
          "label": "皮膚を観察",
          "points": 2,
          "when": {
            "observation": "skin"
          }
        },
        {
          "id": "HYPO-001-score-5",
          "area": "observation",
          "label": "血糖を測定",
          "points": 5,
          "when": {
            "measurement": "glucose"
          }
        },
        {
          "id": "HYPO-001-score-6",
          "area": "interview",
          "label": "発見時刻・経過を確認",
          "points": 4,
          "when": {
            "fact": "onset"
          }
        },
        {
          "id": "HYPO-001-score-7",
          "area": "interview",
          "label": "最終健常確認時刻を確認",
          "points": 3,
          "when": {
            "fact": "lastnormal"
          }
        },
        {
          "id": "HYPO-001-score-8",
          "area": "interview",
          "label": "食事状況を確認",
          "points": 4,
          "when": {
            "fact": "meal"
          }
        },
        {
          "id": "HYPO-001-score-9",
          "area": "interview",
          "label": "使用薬・使用時刻を確認",
          "points": 4,
          "when": {
            "fact": "medication"
          }
        },
        {
          "id": "HYPO-001-score-10",
          "area": "interview",
          "label": "既往歴を確認",
          "points": 3,
          "when": {
            "fact": "history"
          }
        },
        {
          "id": "HYPO-001-score-11",
          "area": "interview",
          "label": "転倒・外傷の状況を確認",
          "points": 2,
          "when": {
            "fact": "trauma"
          }
        },
        {
          "id": "HYPO-001-score-12",
          "area": "interview",
          "label": "同様症状の経験を確認",
          "points": 2,
          "when": {
            "fact": "prior"
          }
        },
        {
          "id": "HYPO-001-score-13",
          "area": "interview",
          "label": "アレルギーを確認",
          "points": 1,
          "when": {
            "fact": "allergy"
          }
        },
        {
          "id": "HYPO-001-score-14",
          "area": "interview",
          "label": "飲酒の状況を確認",
          "points": 2,
          "when": {
            "fact": "alcohol"
          }
        },
        {
          "id": "HYPO-001-score-15",
          "area": "urgency",
          "label": "高い緊急度を判断",
          "points": 12,
          "when": {
            "equals": {
              "path": "final.urgency",
              "value": "high"
            }
          },
          "evidencePath": "final.urgency"
        },
        {
          "id": "HYPO-001-score-16",
          "area": "urgency",
          "label": "確認した重要所見を判断根拠に記載",
          "points": 4,
          "when": {
            "all": [
              {
                "measurement": "glucose"
              },
              {
                "text": {
                  "path": "final.reason",
                  "pattern": "42|低血糖",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.reason"
        },
        {
          "id": "HYPO-001-score-17",
          "area": "urgency",
          "label": "観察と測定を結びつけて判断",
          "points": 4,
          "when": {
            "all": [
              {
                "observation": "consciousness"
              },
              {
                "observation": "respiration"
              },
              {
                "text": {
                  "path": "final.reason",
                  "pattern": "意識|気道|反応|JCS",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.reason"
        },
        {
          "id": "HYPO-001-score-18",
          "area": "reasoning",
          "label": "最も疑う病態を記載",
          "points": 5,
          "when": {
            "primary": true
          },
          "evidencePath": "final.diagnosis"
        },
        {
          "id": "HYPO-001-score-19",
          "area": "reasoning",
          "label": "重篤な鑑別を1つ挙げる",
          "points": 3,
          "when": {
            "lethalCount": 1
          }
        },
        {
          "id": "HYPO-001-score-20",
          "area": "reasoning",
          "label": "異なる重篤な鑑別を2つ挙げる",
          "points": 3,
          "when": {
            "lethalCount": 2
          }
        },
        {
          "id": "HYPO-001-score-21",
          "area": "reasoning",
          "label": "2候補以上に根拠を記載",
          "points": 4,
          "when": {
            "reasonCount": {
              "min": 2,
              "minLength": 12
            }
          }
        },
        {
          "id": "HYPO-001-score-22",
          "area": "transport",
          "label": "症例に応じた安静・体位・気道への配慮",
          "points": 2,
          "when": {
            "includes": {
              "path": "final.treatments",
              "value": "rest"
            }
          }
        },
        {
          "id": "HYPO-001-score-23",
          "area": "transport",
          "label": "継続監視と再評価",
          "points": 2,
          "when": {
            "includes": {
              "path": "final.treatments",
              "value": "monitor"
            }
          }
        },
        {
          "id": "HYPO-001-score-24",
          "area": "transport",
          "label": "プロトコルに従った適応評価・MC連絡",
          "points": 2,
          "when": {
            "includes": {
              "path": "final.treatments",
              "value": "mc"
            }
          }
        },
        {
          "id": "HYPO-001-score-25",
          "area": "transport",
          "label": "迅速な搬送方針",
          "points": 2,
          "when": {
            "equals": {
              "path": "final.transport",
              "value": "rapid"
            }
          }
        },
        {
          "id": "HYPO-001-score-26",
          "area": "transport",
          "label": "必要機能を踏まえた搬送先選定",
          "points": 2,
          "when": {
            "oneOf": {
              "path": "final.destination",
              "values": [
                "specialist",
                "emergency"
              ]
            }
          }
        },
        {
          "id": "HYPO-001-score-27",
          "area": "handover",
          "label": "年齢と意識障害",
          "points": 1,
          "when": {
            "all": [
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "64|60歳代|60代",
                  "positive": true
                }
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "意識|反応|受け答え",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "HYPO-001-score-28",
          "area": "handover",
          "label": "家族から確認した発見時刻",
          "points": 1,
          "when": {
            "all": [
              {
                "fact": "onset"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "発見[^。、,]{0,18}(?:09:00|9時|９時)|(?:09:00|9時|９時)[^。、,]{0,10}(?:発見|見つけ)",
                  "positive": false
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "HYPO-001-score-29",
          "area": "handover",
          "label": "最終健常確認時刻",
          "points": 1,
          "when": {
            "all": [
              {
                "fact": "lastnormal"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "(?:最終健常|最後[^。、,]{0,10}(?:普通|普段|正常))[^。、,]{0,18}(?:08:00|8時|８時)|(?:08:00|8時|８時)[^。、,]{0,10}(?:最終健常|普段どおり|普通)",
                  "positive": false
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "HYPO-001-score-30",
          "area": "handover",
          "label": "食事・使用薬の背景",
          "points": 1,
          "when": {
            "all": [
              {
                "fact": "meal"
              },
              {
                "fact": "medication"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "朝食|食事",
                  "positive": true
                }
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "インスリン",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "HYPO-001-score-31",
          "area": "handover",
          "label": "測定した血糖",
          "points": 2,
          "when": {
            "all": [
              {
                "measurement": "glucose"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "血糖.{0,12}42",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "HYPO-001-score-32",
          "area": "handover",
          "label": "病態推論",
          "points": 1,
          "when": {
            "text": {
              "path": "final.handover",
              "pattern": "低血糖",
              "positive": true
            }
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "HYPO-001-score-33",
          "area": "handover",
          "label": "情報の出所を伝える",
          "points": 1,
          "when": {
            "text": {
              "path": "final.handover",
              "pattern": "妻|家族",
              "positive": true
            }
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "HYPO-001-score-34",
          "area": "handover",
          "label": "対応の実施・未実施・予定を区別して伝達",
          "points": 2,
          "when": {
            "text": {
              "path": "final.handover",
              "pattern": "(安静|体位|気道|監視|モニタ|MC|連絡|経口|酸素).{0,25}(実施|保持|継続|開始|未実施|予定|避け|禁止|行わない)",
              "positive": false
            }
          },
          "evidencePath": "final.handover"
        }
      ],
      "criticalRules": [
        {
          "id": "urgency",
          "when": {
            "not": {
              "equals": {
                "path": "final.urgency",
                "value": "high"
              }
            }
          },
          "message": "この架空症例の危険所見に対して緊急度を過小評価しています。観察・測定・病歴を合わせて再評価してください。"
        },
        {
          "id": "glucose",
          "when": {
            "not": {
              "measurement": "glucose"
            }
          },
          "message": "意識障害症例で血糖測定を実施していません。可逆的な原因の評価が抜けています。"
        },
        {
          "id": "airway",
          "when": {
            "any": [
              {
                "not": {
                  "observation": "consciousness"
                }
              },
              {
                "not": {
                  "observation": "respiration"
                }
              }
            ]
          },
          "message": "意識または呼吸・気道を評価せず最終判断しています。"
        },
        {
          "id": "oral",
          "when": {
            "includes": {
              "path": "final.treatments",
              "value": "oral"
            }
          },
          "message": "意識・嚥下の評価をせず経口摂取させる判断です。誤嚥・窒息の危険を検討してください。"
        },
        {
          "id": "handover-time-swap",
          "when": {
            "all": [
              {
                "fact": "lastnormal"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "最終健常(?:確認)?(?:時刻)?(?:は|が|[:：\\s]){0,5}(?:09:00|9時|９時)",
                  "positive": false
                }
              }
            ]
          },
          "message": "最終健常確認時刻として発見時刻を申し送っています。家族の回答と照合し、2つの時刻を区別してください。"
        }
      ],
      "warnings": [
        {
          "when": {
            "all": [
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "血糖.{0,12}42",
                  "positive": true
                }
              },
              {
                "not": {
                  "measurement": "glucose"
                }
              }
            ]
          },
          "message": "血糖の値を伝えていますが測定記録がありません。未確認の値を既知の事実として申し送らないでください。"
        }
      ]
    },
    "sceneText": "現場接触の設定時刻は09:10。食卓で反応が鈍い男性と、通報した妻がいます。",
    "primaryConditionKey": "hypo",
    "lethalConditionKeys": [
      "stroke",
      "seizure",
      "infection"
    ],
    "conditionPatterns": [
      {
        "key": "hypo",
        "pattern": "低血糖"
      },
      {
        "key": "stroke",
        "pattern": "脳卒中|脳梗塞|脳出血|頭蓋内"
      },
      {
        "key": "seizure",
        "pattern": "けいれん|痙攣|てんかん|発作後"
      },
      {
        "key": "infection",
        "pattern": "感染|敗血症"
      }
    ],
    "diagnosisSuggestions": [
      "低血糖による意識障害",
      "脳卒中・頭蓋内病態",
      "けいれん発作後",
      "重症感染症"
    ],
    "destinations": [
      {
        "id": "specialist",
        "label": "意識障害と代謝異常の初期対応・原因評価が可能な医療機関"
      },
      {
        "id": "emergency",
        "label": "必要な初期対応・専門診療へ連携できる救命救急医療機関"
      },
      {
        "id": "nearest",
        "label": "診療機能にかかわらず最寄りの医療機関"
      },
      {
        "id": "clinic",
        "label": "かかりつけ診療所"
      }
    ],
    "analyticsItems": [
      {
        "id": "history",
        "kind": "factIds",
        "itemId": "history"
      },
      {
        "id": "medication",
        "kind": "factIds",
        "itemId": "medication"
      },
      {
        "id": "lastnormal",
        "kind": "factIds",
        "itemId": "lastnormal"
      },
      {
        "id": "glucose",
        "kind": "measurements",
        "itemId": "glucose"
      }
    ]
  },
  {
    "schemaVersion": 2,
    "caseVersion": 1,
    "id": "STROKE-001",
    "number": "05",
    "title": "症例05：70歳代女性、片側の手に力が入らない",
    "category": "麻痺・脳卒中疑い",
    "difficulty": "初級",
    "preview": "自宅居間。70歳代女性、片側の手に力が入らない",
    "focus": "神経所見・時刻・家族情報",
    "reviewStatus": "教育担当者・指導医による監修前の仮想症例",
    "patient": {
      "age": 74,
      "sex": "女性",
      "location": "自宅居間",
      "image": "assets-patients-STROKE-001-scene-photo.png",
      "personality": "覚醒しているが呂律が不明瞭。短い返答。時刻や薬の詳細は娘から聴取する。",
      "images": [
        {
          "id": "scene-photo",
          "label": "現場接触・写真調",
          "src": "assets-patients-STROKE-001-scene-photo.png",
          "alt": "座位で右腕の動きが乏しく、口元の左右差がある高齢女性。"
        }
      ],
      "imageAlt": "座位で右腕の動きが乏しく、口元の左右差がある高齢女性。"
    },
    "sceneCaption": "架空傷病者・事前生成の写真調画像 / 静止画",
    "dispatch": "70歳代女性、片側の手に力が入らない。自宅居間。",
    "timeModel": "現場接触時点の固定症例。時計・病状・測定値は経過時間によって変化しない。",
    "spontaneous": "右の……手が……うまく……。",
    "unknownResponse": "そのことは……よく分かりません。",
    "diagnosisResponse": "原因は……私には分かりません。",
    "questionNormalization": {
      "aliases": [
        [
          "アレルギィ",
          "アレルギー"
        ],
        [
          "しめ付け",
          "締め付け"
        ],
        [
          "飲み薬",
          "内服薬"
        ]
      ],
      "deferredPattern": "(後で|あとで|まだ聞か|今は聞か|尋ねない|質問しない)",
      "maxFactsPerQuestion": 7,
      "otherSubjectPattern": "家族|ご家族|父|母|兄|弟|姉|妹|夫|妻|お子|子供|子ども"
    },
    "responders": [
      {
        "id": "patient",
        "label": "傷病者",
        "unknown": "今は……うまく説明できません。"
      },
      {
        "id": "family",
        "label": "家族（娘）",
        "unknown": "そのことは分かりません。確認していません。"
      }
    ],
    "facts": [
      {
        "id": "chief",
        "category": "chief",
        "label": "主訴",
        "patterns": [
          "どうしました",
          "どうされ",
          "具合",
          "症状"
        ],
        "expectedQuestions": [
          "主訴について教えてください"
        ],
        "synonyms": [
          "どうしました",
          "どうされ",
          "具合",
          "症状"
        ],
        "answer": "右の……手に……力が……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "onset",
        "category": "onset",
        "label": "症状の発見時刻",
        "patterns": [
          "いつ",
          "何時",
          "発症",
          "発見",
          "見つけ"
        ],
        "expectedQuestions": [
          "症状の発見時刻について教えてください"
        ],
        "synonyms": [
          "いつ",
          "何時",
          "発症",
          "発見",
          "見つけ"
        ],
        "answer": "08:45に声をかけたら、右手が動かしにくく言葉がはっきりしないことに気づきました。その直前は一緒にいませんでした。",
        "responders": [
          "family"
        ],
        "excludePatterns": [
          "最終健常|最後|いつまで|いつ.*普通"
        ]
      },
      {
        "id": "lastnormal",
        "category": "lastnormal",
        "label": "最終健常確認時刻",
        "patterns": [
          "最終健常",
          "最後.*(普通|普段|正常|元気)",
          "いつまで.*(普通|普段|正常)",
          "いつ.*普通"
        ],
        "expectedQuestions": [
          "最終健常確認時刻について教えてください"
        ],
        "synonyms": [
          "最終健常",
          "最後.*(普通|普段|正常|元気)",
          "いつまで.*(普通|普段|正常)",
          "いつ.*普通"
        ],
        "answer": "08:10に一緒に朝食を食べた時は、普通に話し両手を使っていました。その後の様子は見ていません。",
        "responders": [
          "family"
        ]
      },
      {
        "id": "location",
        "category": "location",
        "label": "症状の左右・部位",
        "patterns": [
          "どっち",
          "どちら",
          "左右",
          "どこ",
          "右",
          "左",
          "足",
          "脚"
        ],
        "expectedQuestions": [
          "症状の左右・部位について教えてください"
        ],
        "synonyms": [
          "どっち",
          "どちら",
          "左右",
          "どこ",
          "右",
          "左",
          "足",
          "脚"
        ],
        "answer": "右の……手と……足です……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "speech",
        "category": "speech",
        "label": "言葉の変化",
        "patterns": [
          "言葉",
          "話し",
          "呂律",
          "ろれつ",
          "喋",
          "しゃべ"
        ],
        "expectedQuestions": [
          "言葉の変化について教えてください"
        ],
        "synonyms": [
          "言葉",
          "話し",
          "呂律",
          "ろれつ",
          "喋",
          "しゃべ"
        ],
        "answer": "いつもより言葉が不明瞭です。普段は普通に話します。",
        "responders": [
          "family"
        ]
      },
      {
        "id": "history",
        "category": "history",
        "label": "既往歴",
        "patterns": [
          "持病",
          "既往",
          "病気"
        ],
        "expectedQuestions": [
          "既往歴について教えてください"
        ],
        "synonyms": [
          "持病",
          "既往",
          "病気"
        ],
        "answer": "高血圧と心房細動があります。",
        "responders": [
          "family"
        ]
      },
      {
        "id": "medication",
        "category": "medication",
        "label": "内服・抗凝固薬",
        "patterns": [
          "薬",
          "内服",
          "服薬",
          "血液.*さらさら",
          "抗凝固"
        ],
        "expectedQuestions": [
          "内服・抗凝固薬について教えてください"
        ],
        "synonyms": [
          "薬",
          "内服",
          "服薬",
          "血液.*さらさら",
          "抗凝固"
        ],
        "answer": "降圧薬とアピキサバンを使っています。今朝の服用を私が確認したわけではありません。",
        "responders": [
          "family"
        ],
        "excludePatterns": [
          "^(?:お)?薬.*アレルギー"
        ]
      },
      {
        "id": "headache",
        "category": "headache",
        "label": "頭痛・嘔吐",
        "patterns": [
          "頭痛",
          "頭.*痛",
          "吐",
          "嘔吐"
        ],
        "expectedQuestions": [
          "頭痛・嘔吐について教えてください"
        ],
        "synonyms": [
          "頭痛",
          "頭.*痛",
          "吐",
          "嘔吐"
        ],
        "answer": "頭は……痛く……ないです……。吐いて……いません……。",
        "responders": [
          "patient"
        ]
      },
      {
        "id": "baseline",
        "category": "baseline",
        "label": "普段の生活・麻痺",
        "patterns": [
          "普段",
          "以前",
          "元々",
          "もともと",
          "生活",
          "歩け"
        ],
        "expectedQuestions": [
          "普段の生活・麻痺について教えてください"
        ],
        "synonyms": [
          "普段",
          "以前",
          "元々",
          "もともと",
          "生活",
          "歩け"
        ],
        "answer": "普段は自分で歩き、両手で食事ができます。以前からの麻痺はありません。",
        "responders": [
          "family"
        ],
        "excludePatterns": [
          "最終健常|最後|いつまで"
        ]
      },
      {
        "id": "allergy",
        "category": "allergy",
        "label": "アレルギー",
        "patterns": [
          "アレルギ"
        ],
        "expectedQuestions": [
          "アレルギーについて教えてください"
        ],
        "synonyms": [
          "アレルギ"
        ],
        "answer": "聞いているアレルギーはありません。",
        "responders": [
          "family"
        ]
      },
      {
        "id": "trauma",
        "category": "trauma",
        "label": "外傷",
        "patterns": [
          "転倒",
          "けが",
          "外傷",
          "ぶつ"
        ],
        "expectedQuestions": [
          "外傷について教えてください"
        ],
        "synonyms": [
          "転倒",
          "けが",
          "外傷",
          "ぶつ"
        ],
        "answer": "転倒したところは見ていません。目立つけがはありません。",
        "responders": [
          "family"
        ]
      }
    ],
    "observations": [
      {
        "id": "general",
        "label": "全身",
        "result": "椅子に座位、覚醒。右上肢の動きが乏しい。"
      },
      {
        "id": "face",
        "label": "顔貌",
        "result": "笑顔を求めると右口角の動きが弱い。静止画は接触時の姿で、左右差の動きは詳細観察で確認する。"
      },
      {
        "id": "consciousness",
        "label": "意識",
        "result": "覚醒、簡単な指示を理解する。氏名・場所を答えるが構音は不明瞭。JCS 0相当。"
      },
      {
        "id": "respiration",
        "label": "呼吸・気道",
        "result": "自発呼吸、著明な呼吸困難はない。嚥下・気道の継続評価が必要。"
      },
      {
        "id": "neuro",
        "label": "神経所見（顔・上肢・言語）",
        "result": "右顔面の動きが弱く、上肢挙上で右上肢が保持できず下降。構音障害あり。右下肢の動きも弱い。"
      },
      {
        "id": "pupils",
        "label": "瞳孔",
        "result": "左右3 mm、対光反射あり。"
      },
      {
        "id": "skin",
        "label": "皮膚",
        "result": "明らかな冷汗は設定されていない。"
      },
      {
        "id": "trauma",
        "label": "外傷",
        "result": "視認範囲に外傷を認めない。"
      }
    ],
    "measurements": [
      {
        "id": "bp",
        "label": "血圧",
        "value": "178/96",
        "unit": "mmHg",
        "result": "血圧 178/96 mmHg",
        "dashboard": true
      },
      {
        "id": "pulse",
        "label": "脈拍",
        "value": "96",
        "unit": "回/分 / 不整",
        "result": "脈拍 96 回/分 / 不整",
        "dashboard": true
      },
      {
        "id": "rr",
        "label": "呼吸数",
        "value": "18",
        "unit": "回/分",
        "result": "呼吸数 18 回/分",
        "dashboard": true
      },
      {
        "id": "spo2",
        "label": "SpO₂",
        "value": "96",
        "unit": "% / 室内気",
        "result": "SpO₂ 96 % / 室内気",
        "dashboard": true
      },
      {
        "id": "temperature",
        "label": "体温",
        "value": "36.7",
        "unit": "℃",
        "result": "体温 36.7 ℃",
        "dashboard": true
      },
      {
        "id": "glucose",
        "label": "血糖",
        "value": "118",
        "unit": "mg/dL",
        "result": "血糖 118 mg/dL",
        "dashboard": true
      },
      {
        "id": "ecg",
        "label": "心電図モニター",
        "value": "不整",
        "unit": "模擬所見",
        "result": "教育用所見：心房細動を示す設定。これだけで脳卒中の病型を確定しない。",
        "dashboard": false
      }
    ],
    "treatments": [
      {
        "id": "rest",
        "label": "安静・安全な体位と気道・嚥下への配慮"
      },
      {
        "id": "monitor",
        "label": "呼吸循環・意識の継続監視と再評価"
      },
      {
        "id": "mc",
        "label": "地域プロトコルに従いMC・医療機関へ連絡"
      },
      {
        "id": "nooral",
        "label": "安易な飲食・内服を避け、地域プロトコルに従う"
      }
    ],
    "rubric": {
      "observation": 20,
      "interview": 25,
      "urgency": 20,
      "reasoning": 15,
      "transport": 10,
      "handover": 10,
      "criticalCap": 59
    },
    "educator": {
      "keyFacts": [
        {
          "id": "onset",
          "points": 4
        },
        {
          "id": "lastnormal",
          "points": 6
        },
        {
          "id": "location",
          "points": 3
        },
        {
          "id": "speech",
          "points": 2
        },
        {
          "id": "history",
          "points": 3
        },
        {
          "id": "medication",
          "points": 3
        },
        {
          "id": "headache",
          "points": 2
        },
        {
          "id": "baseline",
          "points": 1
        },
        {
          "id": "allergy",
          "points": 1
        }
      ],
      "sources": [
        {
          "title": "国立循環器病研究センター：脳卒中",
          "url": "https://www.ncvc.go.jp/hospital/pub/knowledge/disease/stroke-2/"
        },
        {
          "title": "消防庁：救急教育関連資料",
          "url": "https://www.fdma.go.jp/singi_kento/kento/items/kento169_15_houkokusyo.pdf"
        }
      ],
      "condition": "脳卒中（脳梗塞を想定）（架空症例の設定）",
      "differentials": [
        "低血糖",
        "けいれん発作後・Todd麻痺",
        "その他の頭蓋内病態"
      ],
      "teaching": "最終健常確認時刻08:10と発見時刻08:45を区別する。血糖と神経所見を確認し、病型を現場で確定したと扱わず、必要機能を持つ医療機関へ伝える。",
      "criticalRules": [
        "この架空症例の危険所見に対して緊急度を過小評価しています。観察・測定・病歴を合わせて再評価してください。",
        "脳卒中疑いで最終健常確認時刻が未確認です。発見時刻と区別して家族に確認してください。",
        "脳卒中に似た症状の評価として血糖を測定していません。",
        "顔・上肢・言語を含む神経所見の詳細観察が未実施です。"
      ]
    },
    "feedbackTemplates": {
      "confirmed": "：記録から確認できています。",
      "biasMultiple": "重篤な鑑別が記録されています。各候補の根拠と、除外できない情報を確認してください。",
      "biasSingle": "最も疑う病態だけに判断を固定した可能性があります。記載不足から認知バイアスを断定せず、重篤な鑑別と確認の順序を振り返ってください。",
      "nextCritical": "次回は呼吸循環の評価と致死的鑑別の確認を、病名の確定より前に行ってください。",
      "nextMissing": "次回は「{items}」を自分の言葉で確認してください。",
      "nextComplete": "次回は確認した情報の出所と、鑑別を支持する根拠を申し送りで簡潔に伝えてください。"
    },
    "scoring": {
      "rules": [
        {
          "id": "STROKE-001-score-0",
          "area": "observation",
          "label": "画像から第一印象を記録",
          "points": 3,
          "when": {
            "all": [
              {
                "length": {
                  "path": "session.impression",
                  "min": 6
                }
              },
              {
                "text": {
                  "path": "session.impression",
                  "pattern": "手|右|上肢|左右|座|口",
                  "positive": false
                }
              }
            ]
          }
        },
        {
          "id": "STROKE-001-score-1",
          "area": "observation",
          "label": "意識を観察",
          "points": 3,
          "when": {
            "observation": "consciousness"
          }
        },
        {
          "id": "STROKE-001-score-2",
          "area": "observation",
          "label": "神経所見を確認",
          "points": 5,
          "when": {
            "observation": "neuro"
          }
        },
        {
          "id": "STROKE-001-score-3",
          "area": "observation",
          "label": "呼吸・気道を観察",
          "points": 3,
          "when": {
            "observation": "respiration"
          }
        },
        {
          "id": "STROKE-001-score-4",
          "area": "observation",
          "label": "血糖を測定",
          "points": 4,
          "when": {
            "measurement": "glucose"
          }
        },
        {
          "id": "STROKE-001-score-5",
          "area": "observation",
          "label": "血圧を測定",
          "points": 2,
          "when": {
            "measurement": "bp"
          }
        },
        {
          "id": "STROKE-001-score-6",
          "area": "interview",
          "label": "症状の発見時刻を確認",
          "points": 4,
          "when": {
            "fact": "onset"
          }
        },
        {
          "id": "STROKE-001-score-7",
          "area": "interview",
          "label": "最終健常確認時刻を確認",
          "points": 6,
          "when": {
            "fact": "lastnormal"
          }
        },
        {
          "id": "STROKE-001-score-8",
          "area": "interview",
          "label": "症状の左右・部位を確認",
          "points": 3,
          "when": {
            "fact": "location"
          }
        },
        {
          "id": "STROKE-001-score-9",
          "area": "interview",
          "label": "言葉の変化を確認",
          "points": 2,
          "when": {
            "fact": "speech"
          }
        },
        {
          "id": "STROKE-001-score-10",
          "area": "interview",
          "label": "既往歴を確認",
          "points": 3,
          "when": {
            "fact": "history"
          }
        },
        {
          "id": "STROKE-001-score-11",
          "area": "interview",
          "label": "内服・抗凝固薬を確認",
          "points": 3,
          "when": {
            "fact": "medication"
          }
        },
        {
          "id": "STROKE-001-score-12",
          "area": "interview",
          "label": "頭痛・嘔吐を確認",
          "points": 2,
          "when": {
            "fact": "headache"
          }
        },
        {
          "id": "STROKE-001-score-13",
          "area": "interview",
          "label": "普段の生活・麻痺を確認",
          "points": 1,
          "when": {
            "fact": "baseline"
          }
        },
        {
          "id": "STROKE-001-score-14",
          "area": "interview",
          "label": "アレルギーを確認",
          "points": 1,
          "when": {
            "fact": "allergy"
          }
        },
        {
          "id": "STROKE-001-score-15",
          "area": "urgency",
          "label": "高い緊急度を判断",
          "points": 12,
          "when": {
            "equals": {
              "path": "final.urgency",
              "value": "high"
            }
          },
          "evidencePath": "final.urgency"
        },
        {
          "id": "STROKE-001-score-16",
          "area": "urgency",
          "label": "確認した重要所見を判断根拠に記載",
          "points": 4,
          "when": {
            "all": [
              {
                "observation": "neuro"
              },
              {
                "text": {
                  "path": "final.reason",
                  "pattern": "麻痺|右|構音|呂律|言語",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.reason"
        },
        {
          "id": "STROKE-001-score-17",
          "area": "urgency",
          "label": "観察と測定を結びつけて判断",
          "points": 4,
          "when": {
            "all": [
              {
                "measurement": "glucose"
              },
              {
                "fact": "lastnormal"
              },
              {
                "text": {
                  "path": "final.reason",
                  "pattern": "血糖|118|最終健常|08:10|8時10",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.reason"
        },
        {
          "id": "STROKE-001-score-18",
          "area": "reasoning",
          "label": "最も疑う病態を記載",
          "points": 5,
          "when": {
            "primary": true
          },
          "evidencePath": "final.diagnosis"
        },
        {
          "id": "STROKE-001-score-19",
          "area": "reasoning",
          "label": "重篤な鑑別を1つ挙げる",
          "points": 3,
          "when": {
            "lethalCount": 1
          }
        },
        {
          "id": "STROKE-001-score-20",
          "area": "reasoning",
          "label": "異なる重篤な鑑別を2つ挙げる",
          "points": 3,
          "when": {
            "lethalCount": 2
          }
        },
        {
          "id": "STROKE-001-score-21",
          "area": "reasoning",
          "label": "2候補以上に根拠を記載",
          "points": 4,
          "when": {
            "reasonCount": {
              "min": 2,
              "minLength": 12
            }
          }
        },
        {
          "id": "STROKE-001-score-22",
          "area": "transport",
          "label": "症例に応じた安静・体位・気道への配慮",
          "points": 2,
          "when": {
            "includes": {
              "path": "final.treatments",
              "value": "rest"
            }
          }
        },
        {
          "id": "STROKE-001-score-23",
          "area": "transport",
          "label": "継続監視と再評価",
          "points": 2,
          "when": {
            "includes": {
              "path": "final.treatments",
              "value": "monitor"
            }
          }
        },
        {
          "id": "STROKE-001-score-24",
          "area": "transport",
          "label": "プロトコルに従った適応評価・MC連絡",
          "points": 2,
          "when": {
            "includes": {
              "path": "final.treatments",
              "value": "mc"
            }
          }
        },
        {
          "id": "STROKE-001-score-25",
          "area": "transport",
          "label": "迅速な搬送方針",
          "points": 2,
          "when": {
            "equals": {
              "path": "final.transport",
              "value": "rapid"
            }
          }
        },
        {
          "id": "STROKE-001-score-26",
          "area": "transport",
          "label": "必要機能を踏まえた搬送先選定",
          "points": 2,
          "when": {
            "oneOf": {
              "path": "final.destination",
              "values": [
                "specialist",
                "emergency"
              ]
            }
          }
        },
        {
          "id": "STROKE-001-score-27",
          "area": "handover",
          "label": "年齢と神経症状",
          "points": 1,
          "when": {
            "all": [
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "74|70歳代|70代",
                  "positive": true
                }
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "右|麻痺|構音|呂律",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "STROKE-001-score-28",
          "area": "handover",
          "label": "最終健常確認時刻",
          "points": 2,
          "when": {
            "all": [
              {
                "fact": "lastnormal"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "(?:最終健常|最後[^。、,]{0,10}(?:普通|普段|正常))[^。、,]{0,18}(?:08:10|8時10|８時１０)|(?:08:10|8時10|８時１０)[^。、,]{0,10}(?:最終健常|普段どおり|普通)",
                  "positive": false
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "STROKE-001-score-29",
          "area": "handover",
          "label": "発見時刻を区別",
          "points": 1,
          "when": {
            "all": [
              {
                "fact": "onset"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "発見[^。、,]{0,18}(?:08:45|8時45|８時４５)|(?:08:45|8時45|８時４５)[^。、,]{0,10}(?:発見|見つけ)",
                  "positive": false
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "STROKE-001-score-30",
          "area": "handover",
          "label": "観察した神経所見",
          "points": 1,
          "when": {
            "all": [
              {
                "observation": "neuro"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "右|麻痺",
                  "positive": true
                }
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "構音|呂律|言語",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "STROKE-001-score-31",
          "area": "handover",
          "label": "測定した血糖",
          "points": 1,
          "when": {
            "all": [
              {
                "measurement": "glucose"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "血糖.{0,12}118",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "STROKE-001-score-32",
          "area": "handover",
          "label": "既往・抗凝固薬",
          "points": 1,
          "when": {
            "all": [
              {
                "fact": "history"
              },
              {
                "fact": "medication"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "心房細動",
                  "positive": true
                }
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "アピキサバン|抗凝固",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "STROKE-001-score-33",
          "area": "handover",
          "label": "病態推論と情報の出所",
          "points": 1,
          "when": {
            "all": [
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "脳卒中|脳梗塞",
                  "positive": true
                }
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "娘|家族",
                  "positive": true
                }
              }
            ]
          },
          "evidencePath": "final.handover"
        },
        {
          "id": "STROKE-001-score-34",
          "area": "handover",
          "label": "対応の実施・未実施・予定を区別して伝達",
          "points": 2,
          "when": {
            "text": {
              "path": "final.handover",
              "pattern": "(安静|体位|気道|監視|モニタ|MC|連絡|経口|酸素).{0,25}(実施|保持|継続|開始|未実施|予定|避け|禁止|行わない)",
              "positive": false
            }
          },
          "evidencePath": "final.handover"
        }
      ],
      "criticalRules": [
        {
          "id": "urgency",
          "when": {
            "not": {
              "equals": {
                "path": "final.urgency",
                "value": "high"
              }
            }
          },
          "message": "この架空症例の危険所見に対して緊急度を過小評価しています。観察・測定・病歴を合わせて再評価してください。"
        },
        {
          "id": "lastnormal",
          "when": {
            "not": {
              "fact": "lastnormal"
            }
          },
          "message": "脳卒中疑いで最終健常確認時刻が未確認です。発見時刻と区別して家族に確認してください。"
        },
        {
          "id": "glucose",
          "when": {
            "not": {
              "measurement": "glucose"
            }
          },
          "message": "脳卒中に似た症状の評価として血糖を測定していません。"
        },
        {
          "id": "neuro",
          "when": {
            "not": {
              "observation": "neuro"
            }
          },
          "message": "顔・上肢・言語を含む神経所見の詳細観察が未実施です。"
        },
        {
          "id": "handover-time-swap",
          "when": {
            "all": [
              {
                "fact": "lastnormal"
              },
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "最終健常(?:確認)?(?:時刻)?(?:は|が|[:：\\s]){0,5}(?:08:45|8時45|８時４５)",
                  "positive": false
                }
              }
            ]
          },
          "message": "最終健常確認時刻として発見時刻を申し送っています。家族の回答と照合し、2つの時刻を区別してください。"
        }
      ],
      "warnings": [
        {
          "when": {
            "all": [
              {
                "text": {
                  "path": "final.handover",
                  "pattern": "血糖.{0,12}118",
                  "positive": true
                }
              },
              {
                "not": {
                  "measurement": "glucose"
                }
              }
            ]
          },
          "message": "血糖の値を伝えていますが測定記録がありません。未確認の値を既知の事実として申し送らないでください。"
        }
      ]
    },
    "sceneText": "現場接触の設定時刻は09:00。傷病者と通報した娘がいます。症状を見つけた時刻と、最後に普段どおりだった時刻を区別してください。",
    "primaryConditionKey": "stroke",
    "lethalConditionKeys": [
      "hypo",
      "seizure",
      "other"
    ],
    "conditionPatterns": [
      {
        "key": "stroke",
        "pattern": "脳卒中|脳梗塞|脳出血"
      },
      {
        "key": "hypo",
        "pattern": "低血糖"
      },
      {
        "key": "seizure",
        "pattern": "けいれん|痙攣|てんかん|発作後|トッド"
      },
      {
        "key": "other",
        "pattern": "頭蓋内|腫瘍"
      }
    ],
    "diagnosisSuggestions": [
      "脳卒中（脳梗塞を想定）",
      "低血糖",
      "けいれん発作後・Todd麻痺",
      "その他の頭蓋内病態"
    ],
    "destinations": [
      {
        "id": "specialist",
        "label": "緊急の脳卒中評価・治療に対応できる医療機関"
      },
      {
        "id": "emergency",
        "label": "脳卒中対応が可能な救命救急医療機関"
      },
      {
        "id": "nearest",
        "label": "診療機能にかかわらず最寄りの医療機関"
      },
      {
        "id": "clinic",
        "label": "かかりつけ診療所"
      }
    ],
    "analyticsItems": [
      {
        "id": "history",
        "kind": "factIds",
        "itemId": "history"
      },
      {
        "id": "medication",
        "kind": "factIds",
        "itemId": "medication"
      },
      {
        "id": "lastnormal",
        "kind": "factIds",
        "itemId": "lastnormal"
      },
      {
        "id": "glucose",
        "kind": "measurements",
        "itemId": "glucose"
      }
    ]
  }
];
