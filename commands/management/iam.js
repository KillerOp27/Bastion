const a62_0x4f80=['catch','ROLE_NOT_FOUND','exec','INVALID_COMMAND_SYNTAX','tag','name','constructor','not','join','getString','errors','roleNotFound','selfAssignable','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Constants','DiscordError','selfRemoveRole','send','compile','info','BASTION_ERROR_TYPE','locale','client','RED','roles','findById','ERROR','exports','default','guild','remove','iam\x20ROLE','iam','add','iam\x20--not\x20ROLE','It\x20allows\x20you\x20add\x20(and\x20remove)\x20yourself\x20to\x20(and\x20from)\x20the\x20Self\x20Roles\x20set\x20in\x20the\x20server.','member','resolveRole','GREEN','test','Command','return\x20/\x22\x20+\x20this\x20+\x20\x22/','channel','document','language'];(function(_0x3d2e7c,_0x4f80e1){const _0x122b9d=function(_0x31b7b0){while(--_0x31b7b0){_0x3d2e7c['push'](_0x3d2e7c['shift']());}};const _0x10e141=function(){const _0x57e0dd={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xfe53d6,_0x2e9124,_0x1d4656,_0x345b11){_0x345b11=_0x345b11||{};let _0x50b934=_0x2e9124+'='+_0x1d4656;let _0x49ec1f=0x0;for(let _0x548825=0x0,_0x3a4d4e=_0xfe53d6['length'];_0x548825<_0x3a4d4e;_0x548825++){const _0x2cfdbe=_0xfe53d6[_0x548825];_0x50b934+=';\x20'+_0x2cfdbe;const _0x26db55=_0xfe53d6[_0x2cfdbe];_0xfe53d6['push'](_0x26db55);_0x3a4d4e=_0xfe53d6['length'];if(_0x26db55!==!![]){_0x50b934+='='+_0x26db55;}}_0x345b11['cookie']=_0x50b934;},'removeCookie':function(){return'dev';},'getCookie':function(_0x355424,_0x3342a5){_0x355424=_0x355424||function(_0xf76137){return _0xf76137;};const _0x35a21a=_0x355424(new RegExp('(?:^|;\x20)'+_0x3342a5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x44fd87=function(_0x1dd113,_0x4b2a69){_0x1dd113(++_0x4b2a69);};_0x44fd87(_0x122b9d,_0x4f80e1);return _0x35a21a?decodeURIComponent(_0x35a21a[0x1]):undefined;}};const _0x4f0cb5=function(){const _0x5793ab=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5793ab['test'](_0x57e0dd['removeCookie']['toString']());};_0x57e0dd['updateCookie']=_0x4f0cb5;let _0x5b2482='';const _0x44f755=_0x57e0dd['updateCookie']();if(!_0x44f755){_0x57e0dd['setCookie'](['*'],'counter',0x1);}else if(_0x44f755){_0x5b2482=_0x57e0dd['getCookie'](null,'counter');}else{_0x57e0dd['removeCookie']();}};_0x10e141();}(a62_0x4f80,0x165));const a62_0x122b=function(_0x3d2e7c,_0x4f80e1){_0x3d2e7c=_0x3d2e7c-0x0;let _0x122b9d=a62_0x4f80[_0x3d2e7c];return _0x122b9d;};const a62_0x57e0dd=function(){let _0x344840=!![];return function(_0x36b669,_0x225511){const _0x51cd35=_0x344840?function(){if(_0x225511){const _0x3e4ce7=_0x225511['apply'](_0x36b669,arguments);_0x225511=null;return _0x3e4ce7;}}:function(){};_0x344840=![];return _0x51cd35;};}();const a62_0x31b7b0=a62_0x57e0dd(this,function(){const _0x5c6c40=function(){const _0x1d5c98=_0x5c6c40[a62_0x122b('0x9')](a62_0x122b('0x2c'))()[a62_0x122b('0x15')](a62_0x122b('0x10'));return!_0x1d5c98[a62_0x122b('0x2a')](a62_0x31b7b0);};return _0x5c6c40();});a62_0x31b7b0();'use strict';const tesseract_1=require('@bastion/tesseract');const Role_1=require('../../models/Role');const errors=require('../../utils/errors');module[a62_0x122b('0x1e')]=class IAmCommand extends tesseract_1[a62_0x122b('0x2b')]{constructor(){super(a62_0x122b('0x23'),{'description':a62_0x122b('0x26'),'triggers':[],'arguments':{'alias':{'not':['n']},'boolean':[a62_0x122b('0xa')]},'scope':a62_0x122b('0x20'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a62_0x122b('0x22'),a62_0x122b('0x25')]});this[a62_0x122b('0x5')]=async(_0x1d6419,_0x18f958)=>{if(!_0x18f958['_']['length'])throw new errors['DiscordError'](errors[a62_0x122b('0x17')][a62_0x122b('0x6')],this[a62_0x122b('0x8')]);const _0x4aec6a=this[a62_0x122b('0x19')]['resolver'][a62_0x122b('0x28')](_0x1d6419['guild'],_0x18f958['_'][a62_0x122b('0xb')]('\x20'));if(!_0x4aec6a)throw new errors['DiscordError'](errors[a62_0x122b('0x17')][a62_0x122b('0x4')],this['client']['locale']['getString'](_0x1d6419[a62_0x122b('0x20')]['document'][a62_0x122b('0x2')],a62_0x122b('0xd'),a62_0x122b('0xe')));const _0x1bd303=await Role_1[a62_0x122b('0x1f')][a62_0x122b('0x1c')](_0x4aec6a['id']);if(!_0x1bd303||!_0x1bd303[a62_0x122b('0xf')])throw new errors[(a62_0x122b('0x12'))](errors[a62_0x122b('0x17')][a62_0x122b('0x1d')],this['client']['locale'][a62_0x122b('0xc')](_0x1d6419[a62_0x122b('0x20')]['document']['language'],a62_0x122b('0xd'),'roleNotSelfAssignable',_0x4aec6a[a62_0x122b('0x8')]));if(_0x18f958[a62_0x122b('0xa')]){await _0x1d6419[a62_0x122b('0x27')][a62_0x122b('0x1b')][a62_0x122b('0x21')](_0x4aec6a);}else{await _0x1d6419[a62_0x122b('0x27')][a62_0x122b('0x1b')][a62_0x122b('0x24')](_0x4aec6a);}await _0x1d6419[a62_0x122b('0x0')][a62_0x122b('0x14')]({'embed':{'color':_0x18f958[a62_0x122b('0xa')]?tesseract_1['Constants']['COLORS'][a62_0x122b('0x1a')]:tesseract_1[a62_0x122b('0x11')]['COLORS'][a62_0x122b('0x29')],'description':this['client'][a62_0x122b('0x18')][a62_0x122b('0xc')](_0x1d6419[a62_0x122b('0x20')][a62_0x122b('0x1')]['language'],a62_0x122b('0x16'),_0x18f958['not']?a62_0x122b('0x13'):'selfAddRole',_0x1d6419['author'][a62_0x122b('0x7')],_0x4aec6a[a62_0x122b('0x8')])}})[a62_0x122b('0x3')](()=>{});};}};