const a31_0x5030=['It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20user\x20reports\x20in\x20the\x20server.\x20It\x20sets\x20the\x20channel\x20as\x20the\x20Report\x20Channel\x20that\x20will\x20receive\x20the\x20user\x20reports,\x20reported\x20by\x20the\x20server\x20members\x20using\x20the\x20`report`\x20command.','MANAGE_GUILD','guild','document','compile','info','Constants','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','save','reports','send','return\x20/\x22\x20+\x20this\x20+\x20\x22/','reportsEnable','Command','@bastion/tesseract','locale','constructor','getString','RED','reportsChannelId','reports\x20--disable','client','disable','catch','reportsDisable','exports','channel'];(function(_0x48c7cc,_0x50302d){const _0x1fb630=function(_0x56b222){while(--_0x56b222){_0x48c7cc['push'](_0x48c7cc['shift']());}};const _0x54d5ac=function(){const _0x291fa4={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x223374,_0xd1c67d,_0x25be37,_0x4caff6){_0x4caff6=_0x4caff6||{};let _0x4725dc=_0xd1c67d+'='+_0x25be37;let _0xc64553=0x0;for(let _0x1fb7cb=0x0,_0x645c86=_0x223374['length'];_0x1fb7cb<_0x645c86;_0x1fb7cb++){const _0x3898b6=_0x223374[_0x1fb7cb];_0x4725dc+=';\x20'+_0x3898b6;const _0x362d48=_0x223374[_0x3898b6];_0x223374['push'](_0x362d48);_0x645c86=_0x223374['length'];if(_0x362d48!==!![]){_0x4725dc+='='+_0x362d48;}}_0x4caff6['cookie']=_0x4725dc;},'removeCookie':function(){return'dev';},'getCookie':function(_0x49dace,_0x2faba7){_0x49dace=_0x49dace||function(_0x49a738){return _0x49a738;};const _0x2dd338=_0x49dace(new RegExp('(?:^|;\x20)'+_0x2faba7['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1c72e3=function(_0x261c5d,_0x89c219){_0x261c5d(++_0x89c219);};_0x1c72e3(_0x1fb630,_0x50302d);return _0x2dd338?decodeURIComponent(_0x2dd338[0x1]):undefined;}};const _0x138a00=function(){const _0x42527e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x42527e['test'](_0x291fa4['removeCookie']['toString']());};_0x291fa4['updateCookie']=_0x138a00;let _0x497232='';const _0x3c6c40=_0x291fa4['updateCookie']();if(!_0x3c6c40){_0x291fa4['setCookie'](['*'],'counter',0x1);}else if(_0x3c6c40){_0x497232=_0x291fa4['getCookie'](null,'counter');}else{_0x291fa4['removeCookie']();}};_0x54d5ac();}(a31_0x5030,0x196));const a31_0x1fb6=function(_0x48c7cc,_0x50302d){_0x48c7cc=_0x48c7cc-0x0;let _0x1fb630=a31_0x5030[_0x48c7cc];return _0x1fb630;};const a31_0x291fa4=function(){let _0x1e82b0=!![];return function(_0x5979ed,_0x2aecd2){const _0x317cf9=_0x1e82b0?function(){if(_0x2aecd2){const _0x39da4f=_0x2aecd2['apply'](_0x5979ed,arguments);_0x2aecd2=null;return _0x39da4f;}}:function(){};_0x1e82b0=![];return _0x317cf9;};}();const a31_0x56b222=a31_0x291fa4(this,function(){const _0x11270f=function(){const _0x1bed0a=_0x11270f[a31_0x1fb6('0xf')](a31_0x1fb6('0xa'))()[a31_0x1fb6('0x3')](a31_0x1fb6('0x6'));return!_0x1bed0a['test'](a31_0x56b222);};return _0x11270f();});a31_0x56b222();'use strict';const tesseract_1=require(a31_0x1fb6('0xd'));module[a31_0x1fb6('0x18')]=class Reports extends tesseract_1[a31_0x1fb6('0xc')]{constructor(){super(a31_0x1fb6('0x8'),{'description':a31_0x1fb6('0x1a'),'triggers':[],'arguments':{'alias':{'disable':['d']},'boolean':[a31_0x1fb6('0x15')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a31_0x1fb6('0x0')],'syntax':[a31_0x1fb6('0x8'),a31_0x1fb6('0x13')]});this['exec']=async(_0x561a55,_0x3e381e)=>{const _0x56ccf7=_0x561a55[a31_0x1fb6('0x1')];if(_0x3e381e[a31_0x1fb6('0x15')]){_0x56ccf7[a31_0x1fb6('0x2')][a31_0x1fb6('0x12')]=undefined;delete _0x56ccf7[a31_0x1fb6('0x2')][a31_0x1fb6('0x12')];}else{_0x56ccf7[a31_0x1fb6('0x2')]['reportsChannelId']=_0x561a55[a31_0x1fb6('0x19')]['id'];}await _0x56ccf7[a31_0x1fb6('0x2')][a31_0x1fb6('0x7')]();await _0x561a55[a31_0x1fb6('0x19')][a31_0x1fb6('0x9')]({'embed':{'color':_0x56ccf7[a31_0x1fb6('0x2')][a31_0x1fb6('0x12')]?tesseract_1[a31_0x1fb6('0x5')]['COLORS']['GREEN']:tesseract_1['Constants']['COLORS'][a31_0x1fb6('0x11')],'description':this[a31_0x1fb6('0x14')][a31_0x1fb6('0xe')][a31_0x1fb6('0x10')](_0x561a55['guild'][a31_0x1fb6('0x2')]['language'],a31_0x1fb6('0x4'),_0x56ccf7[a31_0x1fb6('0x2')][a31_0x1fb6('0x12')]?a31_0x1fb6('0xb'):a31_0x1fb6('0x17'),_0x561a55['author']['tag'])}})[a31_0x1fb6('0x16')](()=>{});};}};