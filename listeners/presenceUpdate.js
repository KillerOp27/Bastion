const a167_0x1f31=['apply','@bastion/tesseract','LISTENER_MODE','partial','some','return\x20/\x22\x20+\x20this\x20+\x20\x22/','fetch','presenceUpdate','Listener','test','activities','default','../models/Guild','constructor','guild','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','every','compile','roles','type','cache','catch','remove','has','streamerRoleId','member','STREAMING'];(function(_0x5c52c0,_0x1f3147){const _0x369da7=function(_0x37585e){while(--_0x37585e){_0x5c52c0['push'](_0x5c52c0['shift']());}};const _0xbc7327=function(){const _0x22e6f8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x21f9b8,_0x261ecb,_0x4298a8,_0x2d987e){_0x2d987e=_0x2d987e||{};let _0x3f1f4e=_0x261ecb+'='+_0x4298a8;let _0x385ec5=0x0;for(let _0x4b6c0a=0x0,_0x1e3e94=_0x21f9b8['length'];_0x4b6c0a<_0x1e3e94;_0x4b6c0a++){const _0x15b221=_0x21f9b8[_0x4b6c0a];_0x3f1f4e+=';\x20'+_0x15b221;const _0x584636=_0x21f9b8[_0x15b221];_0x21f9b8['push'](_0x584636);_0x1e3e94=_0x21f9b8['length'];if(_0x584636!==!![]){_0x3f1f4e+='='+_0x584636;}}_0x2d987e['cookie']=_0x3f1f4e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x58e074,_0x5486cd){_0x58e074=_0x58e074||function(_0x1d60b8){return _0x1d60b8;};const _0x3bfcee=_0x58e074(new RegExp('(?:^|;\x20)'+_0x5486cd['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x421c5f=function(_0x4f626d,_0x3a5219){_0x4f626d(++_0x3a5219);};_0x421c5f(_0x369da7,_0x1f3147);return _0x3bfcee?decodeURIComponent(_0x3bfcee[0x1]):undefined;}};const _0x2966ab=function(){const _0x2ab5d9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2ab5d9['test'](_0x22e6f8['removeCookie']['toString']());};_0x22e6f8['updateCookie']=_0x2966ab;let _0x310bf6='';const _0x44f78f=_0x22e6f8['updateCookie']();if(!_0x44f78f){_0x22e6f8['setCookie'](['*'],'counter',0x1);}else if(_0x44f78f){_0x310bf6=_0x22e6f8['getCookie'](null,'counter');}else{_0x22e6f8['removeCookie']();}};_0xbc7327();}(a167_0x1f31,0x1e8));const a167_0x369d=function(_0x5c52c0,_0x1f3147){_0x5c52c0=_0x5c52c0-0x0;let _0x369da7=a167_0x1f31[_0x5c52c0];return _0x369da7;};const a167_0x22e6f8=function(){let _0x2e60f7=!![];return function(_0xfbba39,_0x32200e){const _0x57497d=_0x2e60f7?function(){if(_0x32200e){const _0x370113=_0x32200e[a167_0x369d('0x19')](_0xfbba39,arguments);_0x32200e=null;return _0x370113;}}:function(){};_0x2e60f7=![];return _0x57497d;};}();const a167_0x37585e=a167_0x22e6f8(this,function(){const _0x2398d9=function(){const _0x5d4037=_0x2398d9[a167_0x369d('0xb')](a167_0x369d('0x3'))()[a167_0x369d('0xf')](a167_0x369d('0xd'));return!_0x5d4037[a167_0x369d('0x7')](a167_0x37585e);};return _0x2398d9();});a167_0x37585e();'use strict';const tesseract_1=require(a167_0x369d('0x1a'));const Guild_1=require(a167_0x369d('0xa'));module['exports']=class PresenceListener extends tesseract_1[a167_0x369d('0x6')]{constructor(){super(a167_0x369d('0x5'),{'mode':tesseract_1['Constants'][a167_0x369d('0x0')]['ON']});this['exec']=async(_0x31e71a,_0x322168)=>{if(!_0x322168)return;if(!_0x322168[a167_0x369d('0xc')])return;let _0x355741;if((!_0x31e71a||_0x31e71a[a167_0x369d('0x8')][a167_0x369d('0xe')](_0x410200=>_0x410200['type']!==a167_0x369d('0x18')))&&_0x322168[a167_0x369d('0x8')][a167_0x369d('0x2')](_0x10aeb5=>_0x10aeb5[a167_0x369d('0x11')]===a167_0x369d('0x18'))){_0x355741=!![];}else if(_0x31e71a&&_0x31e71a[a167_0x369d('0x8')][a167_0x369d('0x2')](_0x13d701=>_0x13d701['type']===a167_0x369d('0x18'))&&_0x322168[a167_0x369d('0x8')][a167_0x369d('0xe')](_0x3d0dcb=>_0x3d0dcb[a167_0x369d('0x11')]!==a167_0x369d('0x18'))){_0x355741=![];}else return;if(_0x322168[a167_0x369d('0x17')][a167_0x369d('0x1')]){await _0x322168['member'][a167_0x369d('0x4')]();}if(_0x322168[a167_0x369d('0x17')][a167_0x369d('0x10')]['cache']['size']<=0x2)return;const _0x7fa53=await Guild_1[a167_0x369d('0x9')]['findById'](_0x322168[a167_0x369d('0xc')]['id']);if(!_0x7fa53[a167_0x369d('0x16')])return;if(!_0x322168[a167_0x369d('0xc')][a167_0x369d('0x10')][a167_0x369d('0x12')][a167_0x369d('0x15')](_0x7fa53[a167_0x369d('0x16')]))return;if(_0x355741){_0x322168[a167_0x369d('0x17')][a167_0x369d('0x10')]['add'](_0x7fa53[a167_0x369d('0x16')])[a167_0x369d('0x13')](()=>{});}else{_0x322168[a167_0x369d('0x17')][a167_0x369d('0x10')][a167_0x369d('0x14')](_0x7fa53['streamerRoleId'])[a167_0x369d('0x13')](()=>{});}};}};