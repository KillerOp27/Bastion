const a625_0x4f44=['apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','default','Guild','Schema','test','__esModule','compile'];(function(_0x255013,_0x4f449c){const _0x39b34e=function(_0x4cdc96){while(--_0x4cdc96){_0x255013['push'](_0x255013['shift']());}};const _0xe0919a=function(){const _0x24771a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x24a62d,_0x40af63,_0x5c971e,_0x19b73c){_0x19b73c=_0x19b73c||{};let _0x597f16=_0x40af63+'='+_0x5c971e;let _0x352751=0x0;for(let _0x4ab5d9=0x0,_0x32b795=_0x24a62d['length'];_0x4ab5d9<_0x32b795;_0x4ab5d9++){const _0x562e62=_0x24a62d[_0x4ab5d9];_0x597f16+=';\x20'+_0x562e62;const _0x2b7c38=_0x24a62d[_0x562e62];_0x24a62d['push'](_0x2b7c38);_0x32b795=_0x24a62d['length'];if(_0x2b7c38!==!![]){_0x597f16+='='+_0x2b7c38;}}_0x19b73c['cookie']=_0x597f16;},'removeCookie':function(){return'dev';},'getCookie':function(_0x384686,_0x4f785d){_0x384686=_0x384686||function(_0x43497a){return _0x43497a;};const _0x51b4c8=_0x384686(new RegExp('(?:^|;\x20)'+_0x4f785d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0xa5b40b=function(_0x2e2d51,_0x336ebb){_0x2e2d51(++_0x336ebb);};_0xa5b40b(_0x39b34e,_0x4f449c);return _0x51b4c8?decodeURIComponent(_0x51b4c8[0x1]):undefined;}};const _0x1695f1=function(){const _0x540850=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x540850['test'](_0x24771a['removeCookie']['toString']());};_0x24771a['updateCookie']=_0x1695f1;let _0x162313='';const _0x5116b7=_0x24771a['updateCookie']();if(!_0x5116b7){_0x24771a['setCookie'](['*'],'counter',0x1);}else if(_0x5116b7){_0x162313=_0x24771a['getCookie'](null,'counter');}else{_0x24771a['removeCookie']();}};_0xe0919a();}(a625_0x4f44,0x100));const a625_0x39b3=function(_0x255013,_0x4f449c){_0x255013=_0x255013-0x0;let _0x39b34e=a625_0x4f44[_0x255013];return _0x39b34e;};const a625_0x24771a=function(){let _0xa5b40b=!![];return function(_0x43497a,_0x2e2d51){const _0x336ebb=_0xa5b40b?function(){if(_0x2e2d51){const _0x540850=_0x2e2d51[a625_0x39b3('0x0')](_0x43497a,arguments);_0x2e2d51=null;return _0x540850;}}:function(){};_0xa5b40b=![];return _0x336ebb;};}();const a625_0x4cdc96=a625_0x24771a(this,function(){const _0x49f9ef=function(){const _0x5a57de=_0x49f9ef['constructor'](a625_0x39b3('0x1'))()[a625_0x39b3('0x7')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5a57de[a625_0x39b3('0x5')](a625_0x4cdc96);};return _0x49f9ef();});a625_0x4cdc96();'use strict';Object['defineProperty'](exports,a625_0x39b3('0x6'),{'value':!![]});const mongoose=require('mongoose');const reactionRoleGroupSchema=new mongoose[(a625_0x39b3('0x4'))]({'_id':{'type':String,'required':!![]},'channel':{'type':String,'required':!![],'ref':'TextChannel'},'guild':{'type':String,'required':!![],'ref':a625_0x39b3('0x3')},'roles':{'type':[String]},'exclusive':{'type':Boolean}});exports[a625_0x39b3('0x2')]=mongoose['model']('ReactionRoleGroup',reactionRoleGroupSchema);