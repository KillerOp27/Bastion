const a25_0x243a=['locale','number','apply','exec','mentionSpamInfractionsDisable','send','mentionSpam\x20--threshold\x20NUMBER','constructor','client','getString','mentionSpam','compile','Constants','author','tag','guild','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','exports','COLORS','document','test','threshold','mentionSpamInfractionsEnable','@bastion/tesseract','Command','MANAGE_GUILD','return\x20/\x22\x20+\x20this\x20+\x20\x22/','It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20the\x20threshold\x20for\x20mention\x20spam\x20in\x20the\x20server.\x20If\x20set,\x20Bastion\x20will\x20warn\x20the\x20users\x20who\x20violate\x20this\x20and\x20add\x20it\x20to\x20their\x20infractions.','info'];(function(_0x5a7d1d,_0x243a8c){const _0x28b5f9=function(_0x31f887){while(--_0x31f887){_0x5a7d1d['push'](_0x5a7d1d['shift']());}};const _0x2c7224=function(){const _0x4fdab0={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x343873,_0x24edbe,_0x1d128c,_0x3a2af1){_0x3a2af1=_0x3a2af1||{};let _0x170377=_0x24edbe+'='+_0x1d128c;let _0x1c9594=0x0;for(let _0x1de437=0x0,_0x471a2d=_0x343873['length'];_0x1de437<_0x471a2d;_0x1de437++){const _0x2eb56e=_0x343873[_0x1de437];_0x170377+=';\x20'+_0x2eb56e;const _0x2c52ef=_0x343873[_0x2eb56e];_0x343873['push'](_0x2c52ef);_0x471a2d=_0x343873['length'];if(_0x2c52ef!==!![]){_0x170377+='='+_0x2c52ef;}}_0x3a2af1['cookie']=_0x170377;},'removeCookie':function(){return'dev';},'getCookie':function(_0x207e52,_0x2f461e){_0x207e52=_0x207e52||function(_0x287d40){return _0x287d40;};const _0x2132f5=_0x207e52(new RegExp('(?:^|;\x20)'+_0x2f461e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3173b0=function(_0x49f89a,_0x132d6b){_0x49f89a(++_0x132d6b);};_0x3173b0(_0x28b5f9,_0x243a8c);return _0x2132f5?decodeURIComponent(_0x2132f5[0x1]):undefined;}};const _0x226dfe=function(){const _0x3d137b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3d137b['test'](_0x4fdab0['removeCookie']['toString']());};_0x4fdab0['updateCookie']=_0x226dfe;let _0x14390d='';const _0x2f1fb0=_0x4fdab0['updateCookie']();if(!_0x2f1fb0){_0x4fdab0['setCookie'](['*'],'counter',0x1);}else if(_0x2f1fb0){_0x14390d=_0x4fdab0['getCookie'](null,'counter');}else{_0x4fdab0['removeCookie']();}};_0x2c7224();}(a25_0x243a,0x1e0));const a25_0x28b5=function(_0x5a7d1d,_0x243a8c){_0x5a7d1d=_0x5a7d1d-0x0;let _0x28b5f9=a25_0x243a[_0x5a7d1d];return _0x28b5f9;};const a25_0x4fdab0=function(){let _0xf7341e=!![];return function(_0xc97fe5,_0x12b48e){const _0x3584b0=_0xf7341e?function(){if(_0x12b48e){const _0x4dd605=_0x12b48e[a25_0x28b5('0xf')](_0xc97fe5,arguments);_0x12b48e=null;return _0x4dd605;}}:function(){};_0xf7341e=![];return _0x3584b0;};}();const a25_0x31f887=a25_0x4fdab0(this,function(){const _0x21286e=function(){const _0xb29a29=_0x21286e[a25_0x28b5('0x14')](a25_0x28b5('0xa'))()[a25_0x28b5('0x18')](a25_0x28b5('0x0'));return!_0xb29a29[a25_0x28b5('0x4')](a25_0x31f887);};return _0x21286e();});a25_0x31f887();'use strict';const tesseract_1=require(a25_0x28b5('0x7'));module[a25_0x28b5('0x1')]=class MentionSpamCommand extends tesseract_1[a25_0x28b5('0x8')]{constructor(){super(a25_0x28b5('0x17'),{'description':a25_0x28b5('0xb'),'triggers':[],'arguments':{'alias':{'threshold':['t']},'number':[a25_0x28b5('0x5')]},'scope':a25_0x28b5('0x1c'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a25_0x28b5('0x9')],'syntax':[a25_0x28b5('0x17'),a25_0x28b5('0x13')]});this[a25_0x28b5('0x10')]=async(_0x3a8b1,_0x2ba1a7)=>{const _0x456a50=_0x3a8b1['guild'];_0x456a50[a25_0x28b5('0x3')][a25_0x28b5('0x17')]={..._0x456a50[a25_0x28b5('0x3')][a25_0x28b5('0x17')],'threshold':typeof _0x2ba1a7[a25_0x28b5('0x5')]===a25_0x28b5('0xe')&&_0x2ba1a7['threshold']>0x1?_0x2ba1a7[a25_0x28b5('0x5')]:undefined};await _0x456a50[a25_0x28b5('0x3')]['save']();await _0x3a8b1['channel'][a25_0x28b5('0x12')]({'embed':{'color':_0x456a50[a25_0x28b5('0x3')][a25_0x28b5('0x17')][a25_0x28b5('0x5')]?tesseract_1[a25_0x28b5('0x19')]['COLORS']['GREEN']:tesseract_1[a25_0x28b5('0x19')][a25_0x28b5('0x2')]['RED'],'description':this[a25_0x28b5('0x15')][a25_0x28b5('0xd')][a25_0x28b5('0x16')](_0x3a8b1[a25_0x28b5('0x1c')][a25_0x28b5('0x3')]['language'],a25_0x28b5('0xc'),_0x456a50[a25_0x28b5('0x3')][a25_0x28b5('0x17')][a25_0x28b5('0x5')]?a25_0x28b5('0x6'):a25_0x28b5('0x11'),_0x3a8b1[a25_0x28b5('0x1a')][a25_0x28b5('0x1b')],_0x456a50[a25_0x28b5('0x3')][a25_0x28b5('0x17')][a25_0x28b5('0x5')])}})['catch'](()=>{});};}};