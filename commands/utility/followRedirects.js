const a128_0x91f9=['name','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Original\x20URL','send','exec','return\x20/\x22\x20+\x20this\x20+\x20\x22/','followRedirects','COLORS','channel','exports','default','BASTION_ERROR_TYPE','../../utils/errors','compile','followRedirects\x20URL','constructor','guild','apply','URL','IRIS','node-fetch','test','Constants','followURL','follow','length'];(function(_0x574dc8,_0x91f98e){const _0x5a0bb9=function(_0x3d6b82){while(--_0x3d6b82){_0x574dc8['push'](_0x574dc8['shift']());}};const _0x53d20e=function(){const _0x50f04d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x114998,_0x1e17bb,_0x2f8514,_0x13968f){_0x13968f=_0x13968f||{};let _0x56f445=_0x1e17bb+'='+_0x2f8514;let _0x3687a0=0x0;for(let _0x1003ec=0x0,_0x8a6d3f=_0x114998['length'];_0x1003ec<_0x8a6d3f;_0x1003ec++){const _0x5247e1=_0x114998[_0x1003ec];_0x56f445+=';\x20'+_0x5247e1;const _0x80c4ed=_0x114998[_0x5247e1];_0x114998['push'](_0x80c4ed);_0x8a6d3f=_0x114998['length'];if(_0x80c4ed!==!![]){_0x56f445+='='+_0x80c4ed;}}_0x13968f['cookie']=_0x56f445;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4bd191,_0x106db5){_0x4bd191=_0x4bd191||function(_0x3e71f1){return _0x3e71f1;};const _0x44193e=_0x4bd191(new RegExp('(?:^|;\x20)'+_0x106db5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1283ba=function(_0x2c9b0c,_0x5e945b){_0x2c9b0c(++_0x5e945b);};_0x1283ba(_0x5a0bb9,_0x91f98e);return _0x44193e?decodeURIComponent(_0x44193e[0x1]):undefined;}};const _0x3bce91=function(){const _0xb1f770=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xb1f770['test'](_0x50f04d['removeCookie']['toString']());};_0x50f04d['updateCookie']=_0x3bce91;let _0x14407a='';const _0x50d01a=_0x50f04d['updateCookie']();if(!_0x50d01a){_0x50f04d['setCookie'](['*'],'counter',0x1);}else if(_0x50d01a){_0x14407a=_0x50f04d['getCookie'](null,'counter');}else{_0x50f04d['removeCookie']();}};_0x53d20e();}(a128_0x91f9,0x1d3));const a128_0x5a0b=function(_0x574dc8,_0x91f98e){_0x574dc8=_0x574dc8-0x0;let _0x5a0bb9=a128_0x91f9[_0x574dc8];return _0x5a0bb9;};const a128_0x50f04d=function(){let _0x4cb329=!![];return function(_0x208a2a,_0x36937b){const _0x4afd42=_0x4cb329?function(){if(_0x36937b){const _0x145017=_0x36937b[a128_0x5a0b('0x12')](_0x208a2a,arguments);_0x36937b=null;return _0x145017;}}:function(){};_0x4cb329=![];return _0x4afd42;};}();const a128_0x3d6b82=a128_0x50f04d(this,function(){const _0x1f31b5=function(){const _0x500697=_0x1f31b5[a128_0x5a0b('0x10')](a128_0x5a0b('0x6'))()[a128_0x5a0b('0xe')](a128_0x5a0b('0x2'));return!_0x500697[a128_0x5a0b('0x16')](a128_0x3d6b82);};return _0x1f31b5();});a128_0x3d6b82();'use strict';const tesseract_1=require('@bastion/tesseract');const node_fetch_1=require(a128_0x5a0b('0x15'));const errors=require(a128_0x5a0b('0xd'));module[a128_0x5a0b('0xa')]=class FollowRedirectsCommand extends tesseract_1['Command']{constructor(){super(a128_0x5a0b('0x7'),{'description':'It\x20follows\x20all\x20the\x20redirects\x20in\x20the\x20specified\x20URL\x20and\x20allows\x20you\x20to\x20see\x20the\x20final\x20URL.','triggers':[a128_0x5a0b('0x18')],'arguments':{},'scope':a128_0x5a0b('0x11'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a128_0x5a0b('0xf')]});this[a128_0x5a0b('0x5')]=async(_0x316b49,_0x41bb0d)=>{if(!_0x41bb0d['_'][a128_0x5a0b('0x0')])throw new errors['DiscordError'](errors[a128_0x5a0b('0xc')]['INVALID_COMMAND_SYNTAX'],this[a128_0x5a0b('0x1')]);const _0x36aac6=_0x41bb0d['_']['join']('\x20');const _0xd619c8=await node_fetch_1[a128_0x5a0b('0xb')](_0x36aac6,{'method':'HEAD','redirect':a128_0x5a0b('0x19')});await _0x316b49[a128_0x5a0b('0x9')][a128_0x5a0b('0x4')]({'embed':{'color':tesseract_1[a128_0x5a0b('0x17')][a128_0x5a0b('0x8')][a128_0x5a0b('0x14')],'fields':[{'name':a128_0x5a0b('0x13'),'value':_0x36aac6},{'name':a128_0x5a0b('0x3'),'value':_0xd619c8['url']}]}});};}};