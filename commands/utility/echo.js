const a127_0x29e6=['INVALID_COMMAND_SYNTAX','apply','echo','MANAGE_MESSAGES','constructor','It\x20allows\x20you\x20to\x20echo\x20a\x20message\x20through\x20Bastion.\x20It\x20also\x20supports\x20Bastion\x20embed\x20objects.','length','echo\x20--\x20MESSAGE','../../utils/embeds','../../utils/errors','exports','generateEmbed','join','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','return\x20/\x22\x20+\x20this\x20+\x20\x22/','parse','BASTION_ERROR_TYPE','Command','INVALID_BASTION_EMBED','send'];(function(_0x75c730,_0x29e6a4){const _0x1158b7=function(_0x2c6f62){while(--_0x2c6f62){_0x75c730['push'](_0x75c730['shift']());}};const _0x5891da=function(){const _0x1324f2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4234cb,_0x4880b3,_0x8fb3ed,_0x54b890){_0x54b890=_0x54b890||{};let _0x535031=_0x4880b3+'='+_0x8fb3ed;let _0x9e31a3=0x0;for(let _0xcff31=0x0,_0x2d3110=_0x4234cb['length'];_0xcff31<_0x2d3110;_0xcff31++){const _0x33f20d=_0x4234cb[_0xcff31];_0x535031+=';\x20'+_0x33f20d;const _0x4d380a=_0x4234cb[_0x33f20d];_0x4234cb['push'](_0x4d380a);_0x2d3110=_0x4234cb['length'];if(_0x4d380a!==!![]){_0x535031+='='+_0x4d380a;}}_0x54b890['cookie']=_0x535031;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2956d7,_0x4f3abf){_0x2956d7=_0x2956d7||function(_0x4d55f0){return _0x4d55f0;};const _0x13fe1a=_0x2956d7(new RegExp('(?:^|;\x20)'+_0x4f3abf['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2853de=function(_0x1f87d6,_0x55a487){_0x1f87d6(++_0x55a487);};_0x2853de(_0x1158b7,_0x29e6a4);return _0x13fe1a?decodeURIComponent(_0x13fe1a[0x1]):undefined;}};const _0x4da27c=function(){const _0x175602=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x175602['test'](_0x1324f2['removeCookie']['toString']());};_0x1324f2['updateCookie']=_0x4da27c;let _0x5ca948='';const _0x43b71e=_0x1324f2['updateCookie']();if(!_0x43b71e){_0x1324f2['setCookie'](['*'],'counter',0x1);}else if(_0x43b71e){_0x5ca948=_0x1324f2['getCookie'](null,'counter');}else{_0x1324f2['removeCookie']();}};_0x5891da();}(a127_0x29e6,0x82));const a127_0x1158=function(_0x75c730,_0x29e6a4){_0x75c730=_0x75c730-0x0;let _0x1158b7=a127_0x29e6[_0x75c730];return _0x1158b7;};const a127_0x1324f2=function(){let _0x568446=!![];return function(_0x18e1da,_0x5455df){const _0xe877d6=_0x568446?function(){if(_0x5455df){const _0x4648fd=_0x5455df[a127_0x1158('0xb')](_0x18e1da,arguments);_0x5455df=null;return _0x4648fd;}}:function(){};_0x568446=![];return _0xe877d6;};}();const a127_0x2c6f62=a127_0x1324f2(this,function(){const _0x19cda4=function(){const _0x340ef0=_0x19cda4[a127_0x1158('0xe')](a127_0x1158('0x4'))()['compile'](a127_0x1158('0x3'));return!_0x340ef0['test'](a127_0x2c6f62);};return _0x19cda4();});a127_0x2c6f62();'use strict';const tesseract_1=require('@bastion/tesseract');const errors=require(a127_0x1158('0x13'));const embeds=require(a127_0x1158('0x12'));module[a127_0x1158('0x0')]=class EchoCommand extends tesseract_1[a127_0x1158('0x7')]{constructor(){super(a127_0x1158('0xc'),{'description':a127_0x1158('0xf'),'triggers':[],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a127_0x1158('0xd')],'syntax':[a127_0x1158('0x11')]});this['exec']=async(_0x571f4b,_0x1f7ac7)=>{if(!_0x1f7ac7['_'][a127_0x1158('0x10')])throw new errors['DiscordError'](errors[a127_0x1158('0x6')][a127_0x1158('0xa')],this['name']);const _0x34ef8a=_0x1f7ac7['_'][a127_0x1158('0x2')]('\x20');let _0x3883d9;try{_0x3883d9=JSON[a127_0x1158('0x5')](_0x34ef8a);if(!embeds['isValidBastionEmbed'](_0x3883d9))throw new Error(a127_0x1158('0x8'));}catch{_0x3883d9=_0x34ef8a;}await _0x571f4b['channel'][a127_0x1158('0x9')]({'embed':embeds[a127_0x1158('0x1')](_0x3883d9)});};}};