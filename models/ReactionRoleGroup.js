const a185_0x3b47=['compile','constructor','test','model','mongoose','defineProperty','ReactionRoleGroup','TextChannel','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Guild','apply','default'];(function(_0x33a7a4,_0x3b47be){const _0x57fe8f=function(_0x56eb33){while(--_0x56eb33){_0x33a7a4['push'](_0x33a7a4['shift']());}};const _0xc53d21=function(){const _0x1966ec={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4dd1ba,_0x2e4261,_0x1b18ba,_0x4de704){_0x4de704=_0x4de704||{};let _0x4020c7=_0x2e4261+'='+_0x1b18ba;let _0x48a5a4=0x0;for(let _0xfab286=0x0,_0x511271=_0x4dd1ba['length'];_0xfab286<_0x511271;_0xfab286++){const _0x308940=_0x4dd1ba[_0xfab286];_0x4020c7+=';\x20'+_0x308940;const _0xa48443=_0x4dd1ba[_0x308940];_0x4dd1ba['push'](_0xa48443);_0x511271=_0x4dd1ba['length'];if(_0xa48443!==!![]){_0x4020c7+='='+_0xa48443;}}_0x4de704['cookie']=_0x4020c7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x123102,_0x2349e7){_0x123102=_0x123102||function(_0x2cc3d2){return _0x2cc3d2;};const _0x6a2c13=_0x123102(new RegExp('(?:^|;\x20)'+_0x2349e7['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2693e7=function(_0x146a5a,_0x5561cd){_0x146a5a(++_0x5561cd);};_0x2693e7(_0x57fe8f,_0x3b47be);return _0x6a2c13?decodeURIComponent(_0x6a2c13[0x1]):undefined;}};const _0x4e9c08=function(){const _0x55f25a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x55f25a['test'](_0x1966ec['removeCookie']['toString']());};_0x1966ec['updateCookie']=_0x4e9c08;let _0x218e5a='';const _0x2c3056=_0x1966ec['updateCookie']();if(!_0x2c3056){_0x1966ec['setCookie'](['*'],'counter',0x1);}else if(_0x2c3056){_0x218e5a=_0x1966ec['getCookie'](null,'counter');}else{_0x1966ec['removeCookie']();}};_0xc53d21();}(a185_0x3b47,0x13d));const a185_0x57fe=function(_0x33a7a4,_0x3b47be){_0x33a7a4=_0x33a7a4-0x0;let _0x57fe8f=a185_0x3b47[_0x33a7a4];return _0x57fe8f;};const a185_0x1966ec=function(){let _0x2693e7=!![];return function(_0x2cc3d2,_0x146a5a){const _0x5561cd=_0x2693e7?function(){if(_0x146a5a){const _0x55f25a=_0x146a5a[a185_0x57fe('0x5')](_0x2cc3d2,arguments);_0x146a5a=null;return _0x55f25a;}}:function(){};_0x2693e7=![];return _0x5561cd;};}();const a185_0x56eb33=a185_0x1966ec(this,function(){const _0x3af2e9=function(){const _0x342644=_0x3af2e9[a185_0x57fe('0x8')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a185_0x57fe('0x7')](a185_0x57fe('0x3'));return!_0x342644[a185_0x57fe('0x9')](a185_0x56eb33);};return _0x3af2e9();});a185_0x56eb33();'use strict';Object[a185_0x57fe('0x0')](exports,'__esModule',{'value':!![]});const mongoose=require(a185_0x57fe('0xb'));const reactionRoleGroupSchema=new mongoose['Schema']({'_id':{'type':String,'required':!![]},'channel':{'type':String,'required':!![],'ref':a185_0x57fe('0x2')},'guild':{'type':String,'required':!![],'ref':a185_0x57fe('0x4')},'roles':{'type':[String]},'exclusive':{'type':Boolean}});exports[a185_0x57fe('0x6')]=mongoose[a185_0x57fe('0xa')](a185_0x57fe('0x1'),reactionRoleGroupSchema);