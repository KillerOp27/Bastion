const a472_0x2bb6=['catch','isPublicBastion','Constants','document','DiscordError','selfRolesAdd','selfRolesList','apply','compile','LIMITED_PREMIUM_MEMBERSHIP','send','constructor','GOLD','noSelfRoles','resolver','fetchPremiumTier','cache','MANAGE_ROLES','../../models/Role','tag','remove','join','It\x20allows\x20you\x20to\x20set\x20up\x20Self\x20Roles\x20in\x20the\x20server.\x20Self\x20Roles\x20are\x20the\x20roles\x20which\x20server\x20members\x20can\x20assign\x20(and\x20unassign)\x20to\x20themselves.','client','name','author','Self\x20Roles','PremiumTier','language','PLATINUM','../../utils/omnic','roleNotFound','LIMITS','IRIS','default','length','_id','getString','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','findByIdAndUpdate','channel','@bastion/tesseract','exports','has','BASTION_ERROR_TYPE','SELF_ROLES','errors','locale','selfRoles\x20--remove\x20ROLE','../../utils/errors','return\x20/\x22\x20+\x20this\x20+\x20\x22/','selfRolesRemove','get','resolveRole','add','guild','selfRoles\x20--add\x20ROLE','exec','roles','GREEN','COLORS','membershipLimitSelfRoles','find','info'];(function(_0x33849e,_0x2bb6c5){const _0x16c21d=function(_0x46dd59){while(--_0x46dd59){_0x33849e['push'](_0x33849e['shift']());}};const _0x4c492d=function(){const _0x4ba22f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x245a7c,_0x195677,_0x26dd55,_0x5f4541){_0x5f4541=_0x5f4541||{};let _0x1a0548=_0x195677+'='+_0x26dd55;let _0x48428c=0x0;for(let _0x542042=0x0,_0x468d1f=_0x245a7c['length'];_0x542042<_0x468d1f;_0x542042++){const _0x12912b=_0x245a7c[_0x542042];_0x1a0548+=';\x20'+_0x12912b;const _0x3ebc25=_0x245a7c[_0x12912b];_0x245a7c['push'](_0x3ebc25);_0x468d1f=_0x245a7c['length'];if(_0x3ebc25!==!![]){_0x1a0548+='='+_0x3ebc25;}}_0x5f4541['cookie']=_0x1a0548;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4dc423,_0x5e9095){_0x4dc423=_0x4dc423||function(_0x59fc89){return _0x59fc89;};const _0x2bb2e7=_0x4dc423(new RegExp('(?:^|;\x20)'+_0x5e9095['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3e925e=function(_0x54a781,_0x51c9e3){_0x54a781(++_0x51c9e3);};_0x3e925e(_0x16c21d,_0x2bb6c5);return _0x2bb2e7?decodeURIComponent(_0x2bb2e7[0x1]):undefined;}};const _0x3515b0=function(){const _0x35fa7f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x35fa7f['test'](_0x4ba22f['removeCookie']['toString']());};_0x4ba22f['updateCookie']=_0x3515b0;let _0x3b1a59='';const _0x208a41=_0x4ba22f['updateCookie']();if(!_0x208a41){_0x4ba22f['setCookie'](['*'],'counter',0x1);}else if(_0x208a41){_0x3b1a59=_0x4ba22f['getCookie'](null,'counter');}else{_0x4ba22f['removeCookie']();}};_0x4c492d();}(a472_0x2bb6,0x13c));const a472_0x16c2=function(_0x33849e,_0x2bb6c5){_0x33849e=_0x33849e-0x0;let _0x16c21d=a472_0x2bb6[_0x33849e];return _0x16c21d;};const a472_0x4ba22f=function(){let _0x3e864e=!![];return function(_0x41bf4c,_0x2bb7ff){const _0x57e5ad=_0x3e864e?function(){if(_0x2bb7ff){const _0x391043=_0x2bb7ff[a472_0x16c2('0xb')](_0x41bf4c,arguments);_0x2bb7ff=null;return _0x391043;}}:function(){};_0x3e864e=![];return _0x57e5ad;};}();const a472_0x46dd59=a472_0x4ba22f(this,function(){const _0x11afbe=function(){const _0x1c952d=_0x11afbe[a472_0x16c2('0xf')](a472_0x16c2('0x36'))()[a472_0x16c2('0xc')](a472_0x16c2('0x2a'));return!_0x1c952d['test'](a472_0x46dd59);};return _0x11afbe();});a472_0x46dd59();'use strict';const tesseract_1=require(a472_0x16c2('0x2d'));const Role_1=require(a472_0x16c2('0x16'));const constants=require('../../utils/constants');const errors=require(a472_0x16c2('0x35'));const omnic=require(a472_0x16c2('0x22'));module[a472_0x16c2('0x2e')]=class SelfRoles extends tesseract_1['Command']{constructor(){super('selfRoles',{'description':a472_0x16c2('0x1a'),'triggers':[],'arguments':{'alias':{'add':['a'],'remove':['r']},'array':[a472_0x16c2('0x3a'),'remove'],'string':['add','remove']},'scope':a472_0x16c2('0x3b'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a472_0x16c2('0x15')],'userPermissions':['MANAGE_ROLES'],'syntax':['selfRoles',a472_0x16c2('0x3c'),a472_0x16c2('0x34')]});this[a472_0x16c2('0x3d')]=async(_0x336e9f,_0x35939c)=>{if(_0x35939c['add']){if(constants[a472_0x16c2('0x5')](this[a472_0x16c2('0x1b')]['user'])){const _0x311767=await Role_1[a472_0x16c2('0x26')]['countDocuments']({'guild':_0x336e9f[a472_0x16c2('0x3b')]['id'],'selfAssignable':!![]});if(_0x311767>=constants[a472_0x16c2('0x24')][a472_0x16c2('0x31')]){const _0x3d53c9=await omnic[a472_0x16c2('0x13')](_0x336e9f[a472_0x16c2('0x3b')])['catch'](()=>{});if(_0x3d53c9){if(_0x3d53c9===omnic[a472_0x16c2('0x1f')]['GOLD']&&_0x311767>=constants[a472_0x16c2('0x24')][a472_0x16c2('0x10')][a472_0x16c2('0x31')]){throw new errors['DiscordError'](errors[a472_0x16c2('0x30')][a472_0x16c2('0xd')],this[a472_0x16c2('0x1b')][a472_0x16c2('0x33')]['getString'](_0x336e9f['guild'][a472_0x16c2('0x7')][a472_0x16c2('0x20')],a472_0x16c2('0x32'),a472_0x16c2('0x1'),constants['LIMITS']['GOLD']['SELF_ROLES']));}else if(_0x3d53c9===omnic[a472_0x16c2('0x1f')][a472_0x16c2('0x21')]&&_0x311767>=constants[a472_0x16c2('0x24')][a472_0x16c2('0x21')][a472_0x16c2('0x31')]){throw new errors[(a472_0x16c2('0x8'))](errors[a472_0x16c2('0x30')][a472_0x16c2('0xd')],this[a472_0x16c2('0x1b')]['locale'][a472_0x16c2('0x29')](_0x336e9f[a472_0x16c2('0x3b')][a472_0x16c2('0x7')][a472_0x16c2('0x20')],a472_0x16c2('0x32'),a472_0x16c2('0x1'),constants['LIMITS'][a472_0x16c2('0x21')][a472_0x16c2('0x31')]));}}else{throw new errors[(a472_0x16c2('0x8'))](errors['BASTION_ERROR_TYPE']['PREMIUM_MEMBERSHIP_REQUIRED'],this[a472_0x16c2('0x1b')][a472_0x16c2('0x33')][a472_0x16c2('0x29')](_0x336e9f[a472_0x16c2('0x3b')]['document'][a472_0x16c2('0x20')],a472_0x16c2('0x32'),'premiumSelfRoles',constants[a472_0x16c2('0x24')][a472_0x16c2('0x31')]));}}}const _0x178214=this[a472_0x16c2('0x1b')][a472_0x16c2('0x12')]['resolveRole'](_0x336e9f[a472_0x16c2('0x3b')],_0x35939c[a472_0x16c2('0x3a')][a472_0x16c2('0x19')]('\x20'));if(!_0x178214)throw new errors[(a472_0x16c2('0x8'))](errors[a472_0x16c2('0x30')]['ROLE_NOT_FOUND'],this[a472_0x16c2('0x1b')][a472_0x16c2('0x33')][a472_0x16c2('0x29')](_0x336e9f[a472_0x16c2('0x3b')][a472_0x16c2('0x7')]['language'],'errors','roleNotFound'));await Role_1['default'][a472_0x16c2('0x2b')](_0x178214['id'],{'_id':_0x178214['id'],'guild':_0x336e9f['guild']['id'],'selfAssignable':!![]},{'upsert':!![]});await _0x336e9f[a472_0x16c2('0x2c')]['send']({'embed':{'color':tesseract_1[a472_0x16c2('0x6')][a472_0x16c2('0x0')][a472_0x16c2('0x3f')],'description':this[a472_0x16c2('0x1b')][a472_0x16c2('0x33')]['getString'](_0x336e9f[a472_0x16c2('0x3b')]['document'][a472_0x16c2('0x20')],a472_0x16c2('0x3'),a472_0x16c2('0x9'),_0x336e9f['author']['tag'],_0x178214[a472_0x16c2('0x1c')]),'footer':{'text':_0x178214['id']}}})[a472_0x16c2('0x4')](()=>{});}else if(_0x35939c['remove']){const _0xa41f26=this[a472_0x16c2('0x1b')][a472_0x16c2('0x12')][a472_0x16c2('0x39')](_0x336e9f['guild'],_0x35939c[a472_0x16c2('0x18')][a472_0x16c2('0x19')]('\x20'));if(!_0xa41f26)throw new errors[(a472_0x16c2('0x8'))](errors[a472_0x16c2('0x30')]['ROLE_NOT_FOUND'],this[a472_0x16c2('0x1b')]['locale'][a472_0x16c2('0x29')](_0x336e9f[a472_0x16c2('0x3b')][a472_0x16c2('0x7')]['language'],a472_0x16c2('0x32'),a472_0x16c2('0x23')));await Role_1[a472_0x16c2('0x26')]['findByIdAndUpdate'](_0xa41f26['id'],{'$unset':{'selfAssignable':0x1}});await _0x336e9f['channel'][a472_0x16c2('0xe')]({'embed':{'color':tesseract_1[a472_0x16c2('0x6')]['COLORS']['RED'],'description':this['client']['locale']['getString'](_0x336e9f['guild'][a472_0x16c2('0x7')][a472_0x16c2('0x20')],a472_0x16c2('0x3'),a472_0x16c2('0x37'),_0x336e9f[a472_0x16c2('0x1d')][a472_0x16c2('0x17')],_0xa41f26[a472_0x16c2('0x1c')]),'footer':{'text':_0xa41f26['id']}}})[a472_0x16c2('0x4')](()=>{});}else{const _0x21726c=await Role_1['default'][a472_0x16c2('0x2')]({'guild':_0x336e9f[a472_0x16c2('0x3b')]['id'],'selfAssignable':!![]});if(!_0x21726c[a472_0x16c2('0x27')]){throw new Error(this['client'][a472_0x16c2('0x33')][a472_0x16c2('0x29')](_0x336e9f[a472_0x16c2('0x3b')][a472_0x16c2('0x7')][a472_0x16c2('0x20')],a472_0x16c2('0x32'),a472_0x16c2('0x11')));}const _0x4a515d=[];for(const _0x2c424d of _0x21726c){if(!_0x336e9f[a472_0x16c2('0x3b')][a472_0x16c2('0x3e')][a472_0x16c2('0x14')][a472_0x16c2('0x2f')](_0x2c424d[a472_0x16c2('0x28')])){await _0x2c424d[a472_0x16c2('0x18')]()[a472_0x16c2('0x4')](()=>{});}_0x4a515d['push']({'name':_0x336e9f[a472_0x16c2('0x3b')]['roles'][a472_0x16c2('0x14')][a472_0x16c2('0x38')](_0x2c424d[a472_0x16c2('0x28')])['name']||'-','value':_0x2c424d[a472_0x16c2('0x28')]});}await _0x336e9f[a472_0x16c2('0x2c')][a472_0x16c2('0xe')]({'embed':{'color':tesseract_1[a472_0x16c2('0x6')]['COLORS'][a472_0x16c2('0x25')],'title':a472_0x16c2('0x1e'),'description':this[a472_0x16c2('0x1b')][a472_0x16c2('0x33')][a472_0x16c2('0x29')](_0x336e9f[a472_0x16c2('0x3b')]['document']['language'],a472_0x16c2('0x3'),a472_0x16c2('0xa')),'fields':_0x4a515d}})[a472_0x16c2('0x4')](()=>{});}};}};