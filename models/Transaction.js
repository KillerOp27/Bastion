const a188_0x2fca=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','model','__esModule','constructor','Transaction','defineProperty','Guild','apply','default','test','compile'];(function(_0x159bda,_0x2fca63){const _0x2397a6=function(_0x322bb2){while(--_0x322bb2){_0x159bda['push'](_0x159bda['shift']());}};const _0x42f34d=function(){const _0x2351d4={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x30ff75,_0x17b0bd,_0x3cf6b7,_0x146f08){_0x146f08=_0x146f08||{};let _0xcf543c=_0x17b0bd+'='+_0x3cf6b7;let _0x2574c9=0x0;for(let _0x5da6fb=0x0,_0x506172=_0x30ff75['length'];_0x5da6fb<_0x506172;_0x5da6fb++){const _0x41a498=_0x30ff75[_0x5da6fb];_0xcf543c+=';\x20'+_0x41a498;const _0x34a238=_0x30ff75[_0x41a498];_0x30ff75['push'](_0x34a238);_0x506172=_0x30ff75['length'];if(_0x34a238!==!![]){_0xcf543c+='='+_0x34a238;}}_0x146f08['cookie']=_0xcf543c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3dd246,_0x320a70){_0x3dd246=_0x3dd246||function(_0x29ee00){return _0x29ee00;};const _0x3ee83f=_0x3dd246(new RegExp('(?:^|;\x20)'+_0x320a70['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2a322e=function(_0x3cef12,_0x3dc553){_0x3cef12(++_0x3dc553);};_0x2a322e(_0x2397a6,_0x2fca63);return _0x3ee83f?decodeURIComponent(_0x3ee83f[0x1]):undefined;}};const _0x401994=function(){const _0x42d921=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x42d921['test'](_0x2351d4['removeCookie']['toString']());};_0x2351d4['updateCookie']=_0x401994;let _0x267c4b='';const _0x1f956e=_0x2351d4['updateCookie']();if(!_0x1f956e){_0x2351d4['setCookie'](['*'],'counter',0x1);}else if(_0x1f956e){_0x267c4b=_0x2351d4['getCookie'](null,'counter');}else{_0x2351d4['removeCookie']();}};_0x42f34d();}(a188_0x2fca,0x69));const a188_0x2397=function(_0x159bda,_0x2fca63){_0x159bda=_0x159bda-0x0;let _0x2397a6=a188_0x2fca[_0x159bda];return _0x2397a6;};const a188_0x2351d4=function(){let _0x3ee83f=!![];return function(_0x2a322e,_0x29ee00){const _0x3cef12=_0x3ee83f?function(){if(_0x29ee00){const _0x3dc553=_0x29ee00[a188_0x2397('0xb')](_0x2a322e,arguments);_0x29ee00=null;return _0x3dc553;}}:function(){};_0x3ee83f=![];return _0x3cef12;};}();const a188_0x322bb2=a188_0x2351d4(this,function(){const _0x42d921=function(){const _0x4ffbbd=_0x42d921[a188_0x2397('0x7')](a188_0x2397('0x3'))()[a188_0x2397('0x2')](a188_0x2397('0x4'));return!_0x4ffbbd[a188_0x2397('0x1')](a188_0x322bb2);};return _0x42d921();});a188_0x322bb2();'use strict';Object[a188_0x2397('0x9')](exports,a188_0x2397('0x6'),{'value':!![]});const mongoose=require('mongoose');const transactionSchema=new mongoose['Schema']({'guild':{'type':String,'required':!![],'ref':a188_0x2397('0xa')},'sender':{'type':String,'required':!![]},'receiver':{'type':String,'required':!![]},'amount':{'type':Number,'required':!![]},'time':{'type':Date,'required':!![]},'note':{'type':String,'trim':!![]}});exports[a188_0x2397('0x0')]=mongoose[a188_0x2397('0x5')](a188_0x2397('0x8'),transactionSchema);