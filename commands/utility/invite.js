const a129_0x2599=['invite\x20--temporary','client','getConstant','widgetChannel','user','locale','@bastion/tesseract','Hello.\x20Beep.\x20Boop.\x0aIf\x20you\x20wanna\x20invite\x20friends\x20to\x20this\x20server,\x20share\x20the\x20following\x20invite\x20link\x20with\x20your\x20friends.\x0aBeep!\x0a','owners','\x0a\x0aAnd\x20if\x20you\x20wanna\x20invite\x20me\x20to\x20your\x20server,\x20use\x20the\x20following\x20link.\x0aBeep.\x0a','It\x20allows\x20you\x20to\x20generate\x20an\x20instant\x20invite\x20for\x20the\x20server.\x20Optionally,\x20the\x20invite\x20can\x20be\x20a\x20temporary\x20which\x20will\x20kick\x20the\x20members\x20from\x20the\x20server\x20if\x20they\x20aren\x27t\x20assigned\x20a\x20role\x20within\x2024\x20hours.\x20It\x20also\x20shows\x20you\x20the\x20invite\x20link\x20to\x20invite\x20Bastion\x20to\x20your\x20server.','url','replace','permissionsFor','author','invite','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','isPublicBastion','constructor','send','temporary','bastion.bot.invite','return\x20/\x22\x20+\x20this\x20+\x20\x22/','apply','credentials','guild','member','CREATE_INSTANT_INVITE','exec','NO_PERMISSION','channel','Requested\x20by\x20','test'];(function(_0x5d17dd,_0x259987){const _0xf00053=function(_0x113b50){while(--_0x113b50){_0x5d17dd['push'](_0x5d17dd['shift']());}};const _0x9b90ef=function(){const _0x497941={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2e7fed,_0x52fc78,_0x3629dc,_0x258dbe){_0x258dbe=_0x258dbe||{};let _0x25e45e=_0x52fc78+'='+_0x3629dc;let _0x4f37d1=0x0;for(let _0x597455=0x0,_0x51f1ff=_0x2e7fed['length'];_0x597455<_0x51f1ff;_0x597455++){const _0x2ee49d=_0x2e7fed[_0x597455];_0x25e45e+=';\x20'+_0x2ee49d;const _0x26aab9=_0x2e7fed[_0x2ee49d];_0x2e7fed['push'](_0x26aab9);_0x51f1ff=_0x2e7fed['length'];if(_0x26aab9!==!![]){_0x25e45e+='='+_0x26aab9;}}_0x258dbe['cookie']=_0x25e45e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5c8585,_0x1c18ce){_0x5c8585=_0x5c8585||function(_0xad1d51){return _0xad1d51;};const _0x4fe254=_0x5c8585(new RegExp('(?:^|;\x20)'+_0x1c18ce['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x19c0bb=function(_0x2eaa2f,_0x3e1e21){_0x2eaa2f(++_0x3e1e21);};_0x19c0bb(_0xf00053,_0x259987);return _0x4fe254?decodeURIComponent(_0x4fe254[0x1]):undefined;}};const _0x46f374=function(){const _0xd04346=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xd04346['test'](_0x497941['removeCookie']['toString']());};_0x497941['updateCookie']=_0x46f374;let _0x17797d='';const _0x1c83fc=_0x497941['updateCookie']();if(!_0x1c83fc){_0x497941['setCookie'](['*'],'counter',0x1);}else if(_0x1c83fc){_0x17797d=_0x497941['getCookie'](null,'counter');}else{_0x497941['removeCookie']();}};_0x9b90ef();}(a129_0x2599,0x1eb));const a129_0xf000=function(_0x5d17dd,_0x259987){_0x5d17dd=_0x5d17dd-0x0;let _0xf00053=a129_0x2599[_0x5d17dd];return _0xf00053;};const a129_0x497941=function(){let _0x4d8d21=!![];return function(_0xc6fa8f,_0x557f3e){const _0xb74b80=_0x4d8d21?function(){if(_0x557f3e){const _0x5d7864=_0x557f3e[a129_0xf000('0x1b')](_0xc6fa8f,arguments);_0x557f3e=null;return _0x5d7864;}}:function(){};_0x4d8d21=![];return _0xb74b80;};}();const a129_0x113b50=a129_0x497941(this,function(){const _0x47ca49=function(){const _0x4bc4c3=_0x47ca49[a129_0xf000('0x16')](a129_0xf000('0x1a'))()['compile'](a129_0xf000('0x14'));return!_0x4bc4c3[a129_0xf000('0x3')](a129_0x113b50);};return _0x47ca49();});a129_0x113b50();'use strict';const tesseract_1=require(a129_0xf000('0xa'));const constants=require('../../utils/constants');module['exports']=class InviteCommand extends tesseract_1['Command']{constructor(){super(a129_0xf000('0x13'),{'description':a129_0xf000('0xe'),'triggers':[],'arguments':{'alias':{'temporary':['t']},'boolean':['temporary']},'scope':a129_0xf000('0x1d'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['invite',a129_0xf000('0x4')]});this[a129_0xf000('0x20')]=async(_0x593753,_0x191664)=>{const _0x26e903=_0x593753[a129_0xf000('0x1d')][a129_0xf000('0x7')]||_0x593753[a129_0xf000('0x1')];if(!_0x26e903[a129_0xf000('0x11')](_0x593753[a129_0xf000('0x1e')])['has'](a129_0xf000('0x1f')))throw new Error(a129_0xf000('0x0'));const _0x40c239=await _0x26e903['createInvite']({'reason':a129_0xf000('0x2')+_0x593753[a129_0xf000('0x12')]['tag'],'temporary':_0x191664[a129_0xf000('0x18')]});await _0x593753['channel'][a129_0xf000('0x17')](a129_0xf000('0xb')+_0x40c239[a129_0xf000('0xf')]+(constants[a129_0xf000('0x15')](this['client'][a129_0xf000('0x8')])||this[a129_0xf000('0x5')][a129_0xf000('0x1c')][a129_0xf000('0xc')]['includes'](_0x593753[a129_0xf000('0x12')]['id'])?a129_0xf000('0xd')+this[a129_0xf000('0x5')][a129_0xf000('0x9')][a129_0xf000('0x6')](a129_0xf000('0x19'))[a129_0xf000('0x10')](this['client']['locale'][a129_0xf000('0x6')]('bastion.bot.id'),this['client']['user']['id']):''));};}};