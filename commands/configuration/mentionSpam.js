const a25_0x1019=['apply','exports','compile','@bastion/tesseract','number','Command','mentionSpam\x20--threshold\x20NUMBER','getString','It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20the\x20threshold\x20for\x20mention\x20spam\x20in\x20the\x20server.\x20If\x20set,\x20Bastion\x20will\x20warn\x20the\x20users\x20who\x20violate\x20this\x20and\x20add\x20it\x20to\x20their\x20infractions.','save','mentionSpam','client','info','COLORS','RED','constructor','language','send','GREEN','Constants','document','threshold','tag','channel','guild','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','locale','return\x20/\x22\x20+\x20this\x20+\x20\x22/'];(function(_0x2ec27a,_0x1019b2){const _0x5d173a=function(_0x8f893b){while(--_0x8f893b){_0x2ec27a['push'](_0x2ec27a['shift']());}};const _0x4ee3b0=function(){const _0x576cf2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x171d17,_0xf83b22,_0x261222,_0x4efbcc){_0x4efbcc=_0x4efbcc||{};let _0x2fe9ec=_0xf83b22+'='+_0x261222;let _0x2e6dfd=0x0;for(let _0x461776=0x0,_0x4c0954=_0x171d17['length'];_0x461776<_0x4c0954;_0x461776++){const _0x89c701=_0x171d17[_0x461776];_0x2fe9ec+=';\x20'+_0x89c701;const _0x5107b5=_0x171d17[_0x89c701];_0x171d17['push'](_0x5107b5);_0x4c0954=_0x171d17['length'];if(_0x5107b5!==!![]){_0x2fe9ec+='='+_0x5107b5;}}_0x4efbcc['cookie']=_0x2fe9ec;},'removeCookie':function(){return'dev';},'getCookie':function(_0x321d63,_0x5e20a4){_0x321d63=_0x321d63||function(_0x5d8901){return _0x5d8901;};const _0x21ccea=_0x321d63(new RegExp('(?:^|;\x20)'+_0x5e20a4['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x132a63=function(_0x1e925e,_0x38337c){_0x1e925e(++_0x38337c);};_0x132a63(_0x5d173a,_0x1019b2);return _0x21ccea?decodeURIComponent(_0x21ccea[0x1]):undefined;}};const _0x3398f3=function(){const _0x471658=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x471658['test'](_0x576cf2['removeCookie']['toString']());};_0x576cf2['updateCookie']=_0x3398f3;let _0x1bd9ed='';const _0x246627=_0x576cf2['updateCookie']();if(!_0x246627){_0x576cf2['setCookie'](['*'],'counter',0x1);}else if(_0x246627){_0x1bd9ed=_0x576cf2['getCookie'](null,'counter');}else{_0x576cf2['removeCookie']();}};_0x4ee3b0();}(a25_0x1019,0x128));const a25_0x5d17=function(_0x2ec27a,_0x1019b2){_0x2ec27a=_0x2ec27a-0x0;let _0x5d173a=a25_0x1019[_0x2ec27a];return _0x5d173a;};const a25_0x576cf2=function(){let _0x242449=!![];return function(_0x42fe7f,_0x70ff5f){const _0x52b37f=_0x242449?function(){if(_0x70ff5f){const _0x5e9b6a=_0x70ff5f[a25_0x5d17('0xc')](_0x42fe7f,arguments);_0x70ff5f=null;return _0x5e9b6a;}}:function(){};_0x242449=![];return _0x52b37f;};}();const a25_0x8f893b=a25_0x576cf2(this,function(){const _0x187fcc=function(){const _0x464468=_0x187fcc[a25_0x5d17('0x1b')](a25_0x5d17('0xb'))()[a25_0x5d17('0xe')](a25_0x5d17('0x9'));return!_0x464468['test'](a25_0x8f893b);};return _0x187fcc();});a25_0x8f893b();'use strict';const tesseract_1=require(a25_0x5d17('0xf'));module[a25_0x5d17('0xd')]=class MentionSpamCommand extends tesseract_1[a25_0x5d17('0x11')]{constructor(){super('mentionSpam',{'description':a25_0x5d17('0x14'),'triggers':[],'arguments':{'alias':{'threshold':['t']},'number':['threshold']},'scope':a25_0x5d17('0x8'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[a25_0x5d17('0x16'),a25_0x5d17('0x12')]});this['exec']=async(_0xc00074,_0x2ad045)=>{const _0x14af51=_0xc00074[a25_0x5d17('0x8')];_0x14af51[a25_0x5d17('0x4')][a25_0x5d17('0x16')]={..._0x14af51['document'][a25_0x5d17('0x16')],'threshold':typeof _0x2ad045[a25_0x5d17('0x5')]===a25_0x5d17('0x10')&&_0x2ad045[a25_0x5d17('0x5')]>0x1?_0x2ad045[a25_0x5d17('0x5')]:undefined};await _0x14af51[a25_0x5d17('0x4')][a25_0x5d17('0x15')]();await _0xc00074[a25_0x5d17('0x7')][a25_0x5d17('0x1')]({'embed':{'color':_0x14af51[a25_0x5d17('0x4')][a25_0x5d17('0x16')][a25_0x5d17('0x5')]?tesseract_1[a25_0x5d17('0x3')][a25_0x5d17('0x19')][a25_0x5d17('0x2')]:tesseract_1[a25_0x5d17('0x3')][a25_0x5d17('0x19')][a25_0x5d17('0x1a')],'description':this[a25_0x5d17('0x17')][a25_0x5d17('0xa')][a25_0x5d17('0x13')](_0xc00074[a25_0x5d17('0x8')][a25_0x5d17('0x4')][a25_0x5d17('0x0')],a25_0x5d17('0x18'),_0x14af51[a25_0x5d17('0x4')][a25_0x5d17('0x16')][a25_0x5d17('0x5')]?'mentionSpamInfractionsEnable':'mentionSpamInfractionsDisable',_0xc00074['author'][a25_0x5d17('0x6')],_0x14af51[a25_0x5d17('0x4')][a25_0x5d17('0x16')][a25_0x5d17('0x5')])}})['catch'](()=>{});};}};