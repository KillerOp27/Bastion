const a8_0x3fd5=['@bastion/tesseract','setAvatar','guild','Constants','catch','channel','send','getString','image','setAvatar\x20--image\x20LINK','compile','test','language','document','INVALID_COMMAND_SYNTAX','first','client','user','width','PUPIL','constructor','BASTION_ERROR_TYPE','apply','exports','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','exec','DiscordError','locale','attachments','Command','author','COLORS'];(function(_0x1cc820,_0x3fd521){const _0xcbe9ef=function(_0x3edc90){while(--_0x3edc90){_0x1cc820['push'](_0x1cc820['shift']());}};const _0x1ae4c6=function(){const _0xd81d4e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x49d320,_0x32dc20,_0x340d71,_0x452570){_0x452570=_0x452570||{};let _0x2c8c81=_0x32dc20+'='+_0x340d71;let _0x4b0264=0x0;for(let _0x45764e=0x0,_0x136186=_0x49d320['length'];_0x45764e<_0x136186;_0x45764e++){const _0x58e62f=_0x49d320[_0x45764e];_0x2c8c81+=';\x20'+_0x58e62f;const _0x4e9094=_0x49d320[_0x58e62f];_0x49d320['push'](_0x4e9094);_0x136186=_0x49d320['length'];if(_0x4e9094!==!![]){_0x2c8c81+='='+_0x4e9094;}}_0x452570['cookie']=_0x2c8c81;},'removeCookie':function(){return'dev';},'getCookie':function(_0x490d3b,_0x599487){_0x490d3b=_0x490d3b||function(_0x129858){return _0x129858;};const _0x5153f2=_0x490d3b(new RegExp('(?:^|;\x20)'+_0x599487['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1ee0b8=function(_0x7ee772,_0x225367){_0x7ee772(++_0x225367);};_0x1ee0b8(_0xcbe9ef,_0x3fd521);return _0x5153f2?decodeURIComponent(_0x5153f2[0x1]):undefined;}};const _0x16cb44=function(){const _0xf2a4ea=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xf2a4ea['test'](_0xd81d4e['removeCookie']['toString']());};_0xd81d4e['updateCookie']=_0x16cb44;let _0x41df2e='';const _0xe2bc3e=_0xd81d4e['updateCookie']();if(!_0xe2bc3e){_0xd81d4e['setCookie'](['*'],'counter',0x1);}else if(_0xe2bc3e){_0x41df2e=_0xd81d4e['getCookie'](null,'counter');}else{_0xd81d4e['removeCookie']();}};_0x1ae4c6();}(a8_0x3fd5,0xdc));const a8_0xcbe9=function(_0x1cc820,_0x3fd521){_0x1cc820=_0x1cc820-0x0;let _0xcbe9ef=a8_0x3fd5[_0x1cc820];return _0xcbe9ef;};const a8_0xd81d4e=function(){let _0x2b8a05=!![];return function(_0x2ecbdc,_0x213e4){const _0x26f13c=_0x2b8a05?function(){if(_0x213e4){const _0x463369=_0x213e4[a8_0xcbe9('0x1a')](_0x2ecbdc,arguments);_0x213e4=null;return _0x463369;}}:function(){};_0x2b8a05=![];return _0x26f13c;};}();const a8_0x3edc90=a8_0xd81d4e(this,function(){const _0x44967b=function(){const _0x38040a=_0x44967b[a8_0xcbe9('0x18')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a8_0xcbe9('0xe')](a8_0xcbe9('0x1c'));return!_0x38040a[a8_0xcbe9('0xf')](a8_0x3edc90);};return _0x44967b();});a8_0x3edc90();'use strict';const tesseract_1=require(a8_0xcbe9('0x4'));const errors=require('../../utils/errors');module[a8_0xcbe9('0x1b')]=class SetAvatar extends tesseract_1[a8_0xcbe9('0x1')]{constructor(){super('setAvatar',{'description':'It\x20allows\x20you\x20to\x20update\x20Bastion\x27s\x20avatar\x20directly\x20from\x20Discord.','triggers':[],'arguments':{'coerce':{'image':tesseract_1['Constants']['ArgumentTypes']['URL']}},'scope':a8_0xcbe9('0x6'),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a8_0xcbe9('0xd')]});this[a8_0xcbe9('0x1d')]=async(_0x28484b,_0x2ee668)=>{const _0x2c8277=_0x28484b[a8_0xcbe9('0x0')][a8_0xcbe9('0x13')]();if(!_0x2ee668[a8_0xcbe9('0xc')]||!(_0x2c8277['height']&&_0x2c8277[a8_0xcbe9('0x16')]))throw new errors[(a8_0xcbe9('0x1e'))](errors[a8_0xcbe9('0x19')][a8_0xcbe9('0x12')],this['name']);await this[a8_0xcbe9('0x14')][a8_0xcbe9('0x15')][a8_0xcbe9('0x5')](_0x2ee668['image']);await _0x28484b[a8_0xcbe9('0x9')][a8_0xcbe9('0xa')]({'embed':{'color':tesseract_1[a8_0xcbe9('0x7')][a8_0xcbe9('0x3')][a8_0xcbe9('0x17')],'description':this[a8_0xcbe9('0x14')][a8_0xcbe9('0x1f')][a8_0xcbe9('0xb')](_0x28484b[a8_0xcbe9('0x6')][a8_0xcbe9('0x11')][a8_0xcbe9('0x10')],'info','updateAvatar',_0x28484b[a8_0xcbe9('0x2')]['tag']),'image':{'url':this[a8_0xcbe9('0x14')][a8_0xcbe9('0x15')]['displayAvatarURL']({'dynamic':!![],'size':0x100})}}})[a8_0xcbe9('0x8')](()=>{});};}};