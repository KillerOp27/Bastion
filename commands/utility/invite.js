const a569_0x3867=['user','send','replace','createInvite','apply','member','isPublicBastion','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','widgetChannel','url','channel','has','locale','exports','exec','author','It\x20allows\x20you\x20to\x20generate\x20an\x20instant\x20invite\x20for\x20the\x20server.\x20Optionally,\x20the\x20invite\x20can\x20be\x20a\x20temporary\x20which\x20will\x20kick\x20the\x20members\x20from\x20the\x20server\x20if\x20they\x20aren\x27t\x20assigned\x20a\x20role\x20within\x2024\x20hours.\x20It\x20also\x20shows\x20you\x20the\x20invite\x20link\x20to\x20invite\x20Bastion\x20to\x20your\x20server.','temporary','bastion.bot.invite','includes','Hello.\x20Beep.\x20Boop.\x0aIf\x20you\x20wanna\x20invite\x20friends\x20to\x20this\x20server,\x20share\x20the\x20following\x20invite\x20link\x20with\x20your\x20friends.\x0aBeep!\x0a','client','invite\x20--temporary','return\x20/\x22\x20+\x20this\x20+\x20\x22/','owners','credentials','guild','test','@bastion/tesseract','CREATE_INSTANT_INVITE','bastion.bot.id','../../utils/constants','getConstant'];(function(_0x3bad44,_0x386757){const _0x54899a=function(_0x3e40b0){while(--_0x3e40b0){_0x3bad44['push'](_0x3bad44['shift']());}};const _0x3d381c=function(){const _0xf9733e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x36b89c,_0x4dc43a,_0x240349,_0x46d052){_0x46d052=_0x46d052||{};let _0x111176=_0x4dc43a+'='+_0x240349;let _0x2262a2=0x0;for(let _0x27d66b=0x0,_0x58c826=_0x36b89c['length'];_0x27d66b<_0x58c826;_0x27d66b++){const _0x4897eb=_0x36b89c[_0x27d66b];_0x111176+=';\x20'+_0x4897eb;const _0x2a666f=_0x36b89c[_0x4897eb];_0x36b89c['push'](_0x2a666f);_0x58c826=_0x36b89c['length'];if(_0x2a666f!==!![]){_0x111176+='='+_0x2a666f;}}_0x46d052['cookie']=_0x111176;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3cf61f,_0x28bb07){_0x3cf61f=_0x3cf61f||function(_0x16b1c4){return _0x16b1c4;};const _0x4dd3c3=_0x3cf61f(new RegExp('(?:^|;\x20)'+_0x28bb07['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x468bea=function(_0xcfaa0,_0x9fe52d){_0xcfaa0(++_0x9fe52d);};_0x468bea(_0x54899a,_0x386757);return _0x4dd3c3?decodeURIComponent(_0x4dd3c3[0x1]):undefined;}};const _0x2e84b6=function(){const _0x2dbcaa=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2dbcaa['test'](_0xf9733e['removeCookie']['toString']());};_0xf9733e['updateCookie']=_0x2e84b6;let _0x3f2e70='';const _0x52f5d9=_0xf9733e['updateCookie']();if(!_0x52f5d9){_0xf9733e['setCookie'](['*'],'counter',0x1);}else if(_0x52f5d9){_0x3f2e70=_0xf9733e['getCookie'](null,'counter');}else{_0xf9733e['removeCookie']();}};_0x3d381c();}(a569_0x3867,0x15e));const a569_0x5489=function(_0x3bad44,_0x386757){_0x3bad44=_0x3bad44-0x0;let _0x54899a=a569_0x3867[_0x3bad44];return _0x54899a;};const a569_0xf9733e=function(){let _0x284a19=!![];return function(_0xe67c85,_0x35bf6d){const _0x10c43d=_0x284a19?function(){if(_0x35bf6d){const _0x2678e2=_0x35bf6d[a569_0x5489('0x11')](_0xe67c85,arguments);_0x35bf6d=null;return _0x2678e2;}}:function(){};_0x284a19=![];return _0x10c43d;};}();const a569_0x3e40b0=a569_0xf9733e(this,function(){const _0x366d64=function(){const _0x2535c8=_0x366d64['constructor'](a569_0x5489('0x3'))()['compile'](a569_0x5489('0x14'));return!_0x2535c8[a569_0x5489('0x7')](a569_0x3e40b0);};return _0x366d64();});a569_0x3e40b0();'use strict';const tesseract_1=require(a569_0x5489('0x8'));const constants=require(a569_0x5489('0xb'));module[a569_0x5489('0x1a')]=class InviteCommand extends tesseract_1['Command']{constructor(){super('invite',{'description':a569_0x5489('0x1d'),'triggers':[],'arguments':{'alias':{'temporary':['t']},'boolean':[a569_0x5489('0x1e')]},'scope':a569_0x5489('0x6'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['invite',a569_0x5489('0x2')]});this[a569_0x5489('0x1b')]=async(_0x51d75f,_0x58b103)=>{const _0x7e88ef=_0x51d75f[a569_0x5489('0x6')][a569_0x5489('0x15')]||_0x51d75f[a569_0x5489('0x17')];if(!_0x7e88ef['permissionsFor'](_0x51d75f[a569_0x5489('0x12')])[a569_0x5489('0x18')](a569_0x5489('0x9')))throw new Error('NO_PERMISSION');const _0x558ae4=await _0x7e88ef[a569_0x5489('0x10')]({'reason':'Requested\x20by\x20'+_0x51d75f[a569_0x5489('0x1c')]['tag'],'temporary':_0x58b103[a569_0x5489('0x1e')]});await _0x51d75f[a569_0x5489('0x17')][a569_0x5489('0xe')](a569_0x5489('0x0')+_0x558ae4[a569_0x5489('0x16')]+(constants[a569_0x5489('0x13')](this['client'][a569_0x5489('0xd')])||this[a569_0x5489('0x1')][a569_0x5489('0x5')][a569_0x5489('0x4')][a569_0x5489('0x20')](_0x51d75f[a569_0x5489('0x1c')]['id'])?'\x0a\x0aAnd\x20if\x20you\x20wanna\x20invite\x20me\x20to\x20your\x20server,\x20use\x20the\x20following\x20link.\x0aBeep.\x0a'+this[a569_0x5489('0x1')][a569_0x5489('0x19')][a569_0x5489('0xc')](a569_0x5489('0x1f'))[a569_0x5489('0xf')](this[a569_0x5489('0x1')][a569_0x5489('0x19')]['getConstant'](a569_0x5489('0xa')),this[a569_0x5489('0x1')][a569_0x5489('0xd')]['id']):''));};}};