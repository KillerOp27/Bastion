const a627_0x54cd=['^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','TextChannel','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Schema','defineProperty','Guild','__esModule','apply','mongoose','compile','constructor'];(function(_0x22428a,_0x54cd11){const _0x36a9d2=function(_0x2587b1){while(--_0x2587b1){_0x22428a['push'](_0x22428a['shift']());}};const _0x3c6ca7=function(){const _0x120dbf={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x388ca5,_0x130134,_0x31cc7b,_0x4bc231){_0x4bc231=_0x4bc231||{};let _0x21f746=_0x130134+'='+_0x31cc7b;let _0x2e10e4=0x0;for(let _0x2dfa34=0x0,_0x5f1d9f=_0x388ca5['length'];_0x2dfa34<_0x5f1d9f;_0x2dfa34++){const _0x483278=_0x388ca5[_0x2dfa34];_0x21f746+=';\x20'+_0x483278;const _0x563611=_0x388ca5[_0x483278];_0x388ca5['push'](_0x563611);_0x5f1d9f=_0x388ca5['length'];if(_0x563611!==!![]){_0x21f746+='='+_0x563611;}}_0x4bc231['cookie']=_0x21f746;},'removeCookie':function(){return'dev';},'getCookie':function(_0x7f6e07,_0x33b89a){_0x7f6e07=_0x7f6e07||function(_0x1cb4dd){return _0x1cb4dd;};const _0x12a10a=_0x7f6e07(new RegExp('(?:^|;\x20)'+_0x33b89a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5406dd=function(_0x280cc4,_0x59c33b){_0x280cc4(++_0x59c33b);};_0x5406dd(_0x36a9d2,_0x54cd11);return _0x12a10a?decodeURIComponent(_0x12a10a[0x1]):undefined;}};const _0x32f2d8=function(){const _0x184619=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x184619['test'](_0x120dbf['removeCookie']['toString']());};_0x120dbf['updateCookie']=_0x32f2d8;let _0x22e7ec='';const _0x4384e9=_0x120dbf['updateCookie']();if(!_0x4384e9){_0x120dbf['setCookie'](['*'],'counter',0x1);}else if(_0x4384e9){_0x22e7ec=_0x120dbf['getCookie'](null,'counter');}else{_0x120dbf['removeCookie']();}};_0x3c6ca7();}(a627_0x54cd,0xf4));const a627_0x36a9=function(_0x22428a,_0x54cd11){_0x22428a=_0x22428a-0x0;let _0x36a9d2=a627_0x54cd[_0x22428a];return _0x36a9d2;};const a627_0x120dbf=function(){let _0x12a10a=!![];return function(_0x5406dd,_0x1cb4dd){const _0x280cc4=_0x12a10a?function(){if(_0x1cb4dd){const _0x59c33b=_0x1cb4dd[a627_0x36a9('0x5')](_0x5406dd,arguments);_0x1cb4dd=null;return _0x59c33b;}}:function(){};_0x12a10a=![];return _0x280cc4;};}();const a627_0x2587b1=a627_0x120dbf(this,function(){const _0x184619=function(){const _0x3a049b=_0x184619[a627_0x36a9('0x8')](a627_0x36a9('0x0'))()[a627_0x36a9('0x7')](a627_0x36a9('0x9'));return!_0x3a049b['test'](a627_0x2587b1);};return _0x184619();});a627_0x2587b1();'use strict';Object[a627_0x36a9('0x2')](exports,a627_0x36a9('0x4'),{'value':!![]});const mongoose=require(a627_0x36a9('0x6'));exports['default']=mongoose['model'](a627_0x36a9('0xa'),new mongoose[(a627_0x36a9('0x1'))]({'_id':{'type':String,'required':!![]},'guild':{'type':String,'required':!![],'ref':a627_0x36a9('0x3')},'language':{'type':String},'blacklisted':{'type':Boolean},'ignoredFilters':{'type':{'inviteFilter':{'type':Boolean},'linkFilter':{'type':Boolean},'messageFilter':{'type':Boolean}}},'voting':{'type':Boolean},'disabledCommands':{'type':[String]}}));