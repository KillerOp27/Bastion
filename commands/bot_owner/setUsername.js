const a11_0x5571=['INVALID_COMMAND_SYNTAX','apply','DiscordError','getString','exec','Constants','length','constructor','locale','COLORS','document','return\x20/\x22\x20+\x20this\x20+\x20\x22/','language','client','setUsername\x20USERNAME','name','It\x20allows\x20you\x20to\x20update\x20Bastion\x27s\x20username\x20directly\x20from\x20Discord.','updateUsername','setUsername','info','../../utils/errors','guild'];(function(_0x2a0bd0,_0x5571e5){const _0x225b17=function(_0x115260){while(--_0x115260){_0x2a0bd0['push'](_0x2a0bd0['shift']());}};const _0x3feeb8=function(){const _0x3541ae={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x11b4a9,_0x4f07ae,_0x49858d,_0x5e692b){_0x5e692b=_0x5e692b||{};let _0x5cb1a8=_0x4f07ae+'='+_0x49858d;let _0x137d61=0x0;for(let _0x48bb17=0x0,_0x48012c=_0x11b4a9['length'];_0x48bb17<_0x48012c;_0x48bb17++){const _0x1e854c=_0x11b4a9[_0x48bb17];_0x5cb1a8+=';\x20'+_0x1e854c;const _0x35f746=_0x11b4a9[_0x1e854c];_0x11b4a9['push'](_0x35f746);_0x48012c=_0x11b4a9['length'];if(_0x35f746!==!![]){_0x5cb1a8+='='+_0x35f746;}}_0x5e692b['cookie']=_0x5cb1a8;},'removeCookie':function(){return'dev';},'getCookie':function(_0xb6c1e1,_0x2c1b9b){_0xb6c1e1=_0xb6c1e1||function(_0x400198){return _0x400198;};const _0x1acf9a=_0xb6c1e1(new RegExp('(?:^|;\x20)'+_0x2c1b9b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5c2724=function(_0x34e9d1,_0x4839da){_0x34e9d1(++_0x4839da);};_0x5c2724(_0x225b17,_0x5571e5);return _0x1acf9a?decodeURIComponent(_0x1acf9a[0x1]):undefined;}};const _0x2d47cb=function(){const _0x26a387=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x26a387['test'](_0x3541ae['removeCookie']['toString']());};_0x3541ae['updateCookie']=_0x2d47cb;let _0x91406d='';const _0x2ae8fb=_0x3541ae['updateCookie']();if(!_0x2ae8fb){_0x3541ae['setCookie'](['*'],'counter',0x1);}else if(_0x2ae8fb){_0x91406d=_0x3541ae['getCookie'](null,'counter');}else{_0x3541ae['removeCookie']();}};_0x3feeb8();}(a11_0x5571,0x114));const a11_0x225b=function(_0x2a0bd0,_0x5571e5){_0x2a0bd0=_0x2a0bd0-0x0;let _0x225b17=a11_0x5571[_0x2a0bd0];return _0x225b17;};const a11_0x3541ae=function(){let _0x8be4f9=!![];return function(_0x156a41,_0x70d013){const _0x24e02f=_0x8be4f9?function(){if(_0x70d013){const _0x3947d6=_0x70d013[a11_0x225b('0xb')](_0x156a41,arguments);_0x70d013=null;return _0x3947d6;}}:function(){};_0x8be4f9=![];return _0x24e02f;};}();const a11_0x115260=a11_0x3541ae(this,function(){const _0x2dd33a=function(){const _0x32889c=_0x2dd33a[a11_0x225b('0x11')](a11_0x225b('0x15'))()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x32889c['test'](a11_0x115260);};return _0x2dd33a();});a11_0x115260();'use strict';const tesseract_1=require('@bastion/tesseract');const errors=require(a11_0x225b('0x8'));module['exports']=class SetUsername extends tesseract_1['Command']{constructor(){super(a11_0x225b('0x6'),{'description':a11_0x225b('0x4'),'triggers':[],'arguments':{},'scope':a11_0x225b('0x9'),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a11_0x225b('0x2')]});this[a11_0x225b('0xe')]=async(_0x28bd89,_0x24a5c7)=>{const _0x52ec60=_0x24a5c7['_']['join']('\x20');if(!_0x24a5c7['_'][a11_0x225b('0x10')])throw new errors[(a11_0x225b('0xc'))](errors['BASTION_ERROR_TYPE'][a11_0x225b('0xa')],this[a11_0x225b('0x3')]);await this[a11_0x225b('0x1')]['user'][a11_0x225b('0x6')](_0x52ec60);await _0x28bd89['channel']['send']({'embed':{'color':tesseract_1[a11_0x225b('0xf')][a11_0x225b('0x13')]['PUPIL'],'description':this[a11_0x225b('0x1')][a11_0x225b('0x12')][a11_0x225b('0xd')](_0x28bd89[a11_0x225b('0x9')][a11_0x225b('0x14')][a11_0x225b('0x0')],a11_0x225b('0x7'),a11_0x225b('0x5'),_0x28bd89['author']['tag'],_0x52ec60)}})['catch'](()=>{});};}};