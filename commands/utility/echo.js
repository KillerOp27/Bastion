const a127_0x1d01=['apply','guild','MANAGE_MESSAGES','INVALID_BASTION_EMBED','../../utils/embeds','name','echo\x20--\x20MESSAGE','constructor','join','exec','INVALID_COMMAND_SYNTAX','@bastion/tesseract','return\x20/\x22\x20+\x20this\x20+\x20\x22/','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','channel','length','../../utils/errors','isValidBastionEmbed'];(function(_0x4b1cd3,_0x1d01ef){const _0x3e8284=function(_0x4d50cf){while(--_0x4d50cf){_0x4b1cd3['push'](_0x4b1cd3['shift']());}};const _0x5d01cf=function(){const _0x5b8de5={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3f772b,_0x4a7210,_0x19e4e1,_0x5bf3fd){_0x5bf3fd=_0x5bf3fd||{};let _0x87aff3=_0x4a7210+'='+_0x19e4e1;let _0x2862b8=0x0;for(let _0x27f372=0x0,_0x57b888=_0x3f772b['length'];_0x27f372<_0x57b888;_0x27f372++){const _0x4ca9c6=_0x3f772b[_0x27f372];_0x87aff3+=';\x20'+_0x4ca9c6;const _0x5c9c9f=_0x3f772b[_0x4ca9c6];_0x3f772b['push'](_0x5c9c9f);_0x57b888=_0x3f772b['length'];if(_0x5c9c9f!==!![]){_0x87aff3+='='+_0x5c9c9f;}}_0x5bf3fd['cookie']=_0x87aff3;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5a5ed7,_0x1325b7){_0x5a5ed7=_0x5a5ed7||function(_0x3e1d58){return _0x3e1d58;};const _0x3a027f=_0x5a5ed7(new RegExp('(?:^|;\x20)'+_0x1325b7['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x434974=function(_0x43c66e,_0x5f2b4f){_0x43c66e(++_0x5f2b4f);};_0x434974(_0x3e8284,_0x1d01ef);return _0x3a027f?decodeURIComponent(_0x3a027f[0x1]):undefined;}};const _0x57ef69=function(){const _0x5af6b1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5af6b1['test'](_0x5b8de5['removeCookie']['toString']());};_0x5b8de5['updateCookie']=_0x57ef69;let _0x3c406b='';const _0x2f8dc5=_0x5b8de5['updateCookie']();if(!_0x2f8dc5){_0x5b8de5['setCookie'](['*'],'counter',0x1);}else if(_0x2f8dc5){_0x3c406b=_0x5b8de5['getCookie'](null,'counter');}else{_0x5b8de5['removeCookie']();}};_0x5d01cf();}(a127_0x1d01,0x19f));const a127_0x3e82=function(_0x4b1cd3,_0x1d01ef){_0x4b1cd3=_0x4b1cd3-0x0;let _0x3e8284=a127_0x1d01[_0x4b1cd3];return _0x3e8284;};const a127_0x5b8de5=function(){let _0x136295=!![];return function(_0x49932f,_0x170bfb){const _0x47de01=_0x136295?function(){if(_0x170bfb){const _0x242015=_0x170bfb[a127_0x3e82('0x11')](_0x49932f,arguments);_0x170bfb=null;return _0x242015;}}:function(){};_0x136295=![];return _0x47de01;};}();const a127_0x4d50cf=a127_0x5b8de5(this,function(){const _0x324d0d=function(){const _0x2fd0ab=_0x324d0d[a127_0x3e82('0x6')](a127_0x3e82('0xb'))()['compile'](a127_0x3e82('0xc'));return!_0x2fd0ab['test'](a127_0x4d50cf);};return _0x324d0d();});a127_0x4d50cf();'use strict';const tesseract_1=require(a127_0x3e82('0xa'));const errors=require(a127_0x3e82('0xf'));const embeds=require(a127_0x3e82('0x3'));module['exports']=class EchoCommand extends tesseract_1['Command']{constructor(){super('echo',{'description':'It\x20allows\x20you\x20to\x20echo\x20a\x20message\x20through\x20Bastion.\x20It\x20also\x20supports\x20Bastion\x20embed\x20objects.','triggers':[],'arguments':{},'scope':a127_0x3e82('0x0'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a127_0x3e82('0x1')],'syntax':[a127_0x3e82('0x5')]});this[a127_0x3e82('0x8')]=async(_0x9105c7,_0x499f85)=>{if(!_0x499f85['_'][a127_0x3e82('0xe')])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][a127_0x3e82('0x9')],this[a127_0x3e82('0x4')]);const _0x1d811a=_0x499f85['_'][a127_0x3e82('0x7')]('\x20');let _0x2e6728;try{_0x2e6728=JSON['parse'](_0x1d811a);if(!embeds[a127_0x3e82('0x10')](_0x2e6728))throw new Error(a127_0x3e82('0x2'));}catch{_0x2e6728=_0x1d811a;}await _0x9105c7[a127_0x3e82('0xd')]['send']({'embed':embeds['generateEmbed'](_0x2e6728)});};}};