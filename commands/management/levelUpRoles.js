const a504_0x1774=['author','LIMITS','compile','push','client','resolveRoles','getString','PLATINUM','keys','get','Level-Up\x20Roles','level','roleLevelClear','tag','role','error','RED','map','join','MAX_LEVEL','fetchDocument','BASTION_ERROR_TYPE','createDocument','isPublicBastion','Constants','_id','guild','fetchPremiumTier','send','exec','user','constructor','MANAGE_ROLES','GOLD','roles','updateMany','length','Command','membershipLimitLevelRoles','LIMITED_PREMIUM_MEMBERSHIP','save','cache','membershipLimitRoleLevels','find','levelUpRoles\x20--level\x20NUMBER\x20--role\x20ROLE','levelUpRoles\x20--level\x20NUMBER\x20--remove','IRIS','ROLE_LEVELS','DiscordError','@bastion/tesseract','resolver','exports','remove','emoji','../../models/Role','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','channel','catch','apply','name','ROLES_PER_LEVEL','roleNotFound','PremiumTier','roleLevelAdd','Level\x20','document','has','PREMIUM_MEMBERSHIP_REQUIRED','language','distinct','test','COLORS','default','locale','../../utils/constants','premiumLevelRoles','errors','clamp','Roles','return\x20/\x22\x20+\x20this\x20+\x20\x22/','info','ROLE_NOT_FOUND'];(function(_0xa5a473,_0x177443){const _0x59f453=function(_0x55390c){while(--_0x55390c){_0xa5a473['push'](_0xa5a473['shift']());}};const _0xd02c40=function(){const _0x5ac327={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x188408,_0x2cae99,_0x33b5c0,_0xd26d8e){_0xd26d8e=_0xd26d8e||{};let _0x2c2cd9=_0x2cae99+'='+_0x33b5c0;let _0x6008fe=0x0;for(let _0x3067b8=0x0,_0x58eac8=_0x188408['length'];_0x3067b8<_0x58eac8;_0x3067b8++){const _0x4e3acd=_0x188408[_0x3067b8];_0x2c2cd9+=';\x20'+_0x4e3acd;const _0x5dd567=_0x188408[_0x4e3acd];_0x188408['push'](_0x5dd567);_0x58eac8=_0x188408['length'];if(_0x5dd567!==!![]){_0x2c2cd9+='='+_0x5dd567;}}_0xd26d8e['cookie']=_0x2c2cd9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4b84a8,_0x30c0ee){_0x4b84a8=_0x4b84a8||function(_0x49502b){return _0x49502b;};const _0x2bdc08=_0x4b84a8(new RegExp('(?:^|;\x20)'+_0x30c0ee['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x575e79=function(_0x4e2fd7,_0x1feb57){_0x4e2fd7(++_0x1feb57);};_0x575e79(_0x59f453,_0x177443);return _0x2bdc08?decodeURIComponent(_0x2bdc08[0x1]):undefined;}};const _0x652082=function(){const _0x274bf3=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x274bf3['test'](_0x5ac327['removeCookie']['toString']());};_0x5ac327['updateCookie']=_0x652082;let _0x2fdf97='';const _0x5b9e29=_0x5ac327['updateCookie']();if(!_0x5b9e29){_0x5ac327['setCookie'](['*'],'counter',0x1);}else if(_0x5b9e29){_0x2fdf97=_0x5ac327['getCookie'](null,'counter');}else{_0x5ac327['removeCookie']();}};_0xd02c40();}(a504_0x1774,0x8f));const a504_0x59f4=function(_0xa5a473,_0x177443){_0xa5a473=_0xa5a473-0x0;let _0x59f453=a504_0x1774[_0xa5a473];return _0x59f453;};const a504_0x5ac327=function(){let _0x36abe7=!![];return function(_0x12fde4,_0x398afb){const _0x530bed=_0x36abe7?function(){if(_0x398afb){const _0x8e89d4=_0x398afb[a504_0x59f4('0x4f')](_0x12fde4,arguments);_0x398afb=null;return _0x8e89d4;}}:function(){};_0x36abe7=![];return _0x530bed;};}();const a504_0x55390c=a504_0x5ac327(this,function(){const _0x238677=function(){const _0x557ec8=_0x238677[a504_0x59f4('0x34')](a504_0x59f4('0x12'))()[a504_0x59f4('0x17')](a504_0x59f4('0x4c'));return!_0x557ec8[a504_0x59f4('0x9')](a504_0x55390c);};return _0x238677();});a504_0x55390c();'use strict';const tesseract_1=require(a504_0x59f4('0x46'));const Role_1=require(a504_0x59f4('0x4b'));const constants=require(a504_0x59f4('0xd'));const errors=require('../../utils/errors');const gamification=require('../../utils/gamification');const numbers=require('../../utils/numbers');const omnic=require('../../utils/omnic');module[a504_0x59f4('0x48')]=class LevelUpRolesCommand extends tesseract_1[a504_0x59f4('0x3a')]{constructor(){super('levelUpRoles',{'description':'It\x20allows\x20you\x20to\x20add\x20roles\x20to\x20a\x20level.\x20When\x20members\x20reach\x20that\x20level,\x20they\x27ll\x20be\x20awarded\x20those\x20roles.','triggers':[],'arguments':{'array':['role'],'boolean':[a504_0x59f4('0x49')],'string':[a504_0x59f4('0x23')],'number':[a504_0x59f4('0x20')],'coerce':{'level':_0x303641=>numbers[a504_0x59f4('0x10')](_0x303641,0x1,gamification[a504_0x59f4('0x28')])}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a504_0x59f4('0x35')],'userPermissions':[a504_0x59f4('0x35')],'syntax':['levelUpRoles','levelUpRoles\x20--level\x20NUMBER',a504_0x59f4('0x41'),a504_0x59f4('0x42')]});this[a504_0x59f4('0x32')]=async(_0x24ec6b,_0x22b7da)=>{if(_0x22b7da[a504_0x59f4('0x20')]){if(_0x22b7da[a504_0x59f4('0x23')]){if(constants[a504_0x59f4('0x2c')](this[a504_0x59f4('0x19')][a504_0x59f4('0x33')])){const _0x30e0d0=await omnic[a504_0x59f4('0x30')](_0x24ec6b['guild'])[a504_0x59f4('0x4e')](()=>{});const _0x591e0f=await Role_1[a504_0x59f4('0xb')][a504_0x59f4('0x8')](a504_0x59f4('0x20'),{'guild':_0x24ec6b[a504_0x59f4('0x2f')]['id'],'level':{'$exists':!![],'$ne':null}});if(_0x30e0d0){if(_0x30e0d0===omnic[a504_0x59f4('0x1')]['GOLD']&&_0x591e0f[a504_0x59f4('0x39')]>=constants['LIMITS'][a504_0x59f4('0x36')][a504_0x59f4('0x44')]){throw new errors['DiscordError'](errors[a504_0x59f4('0x2a')][a504_0x59f4('0x3c')],this[a504_0x59f4('0x19')]['locale'][a504_0x59f4('0x1b')](_0x24ec6b[a504_0x59f4('0x2f')]['document'][a504_0x59f4('0x7')],a504_0x59f4('0xf'),'membershipLimitRoleLevels',constants['LIMITS']['GOLD'][a504_0x59f4('0x44')]));}else if(_0x30e0d0===omnic[a504_0x59f4('0x1')][a504_0x59f4('0x1c')]&&_0x591e0f[a504_0x59f4('0x39')]>=constants['LIMITS'][a504_0x59f4('0x1c')][a504_0x59f4('0x44')]){throw new errors[(a504_0x59f4('0x45'))](errors[a504_0x59f4('0x2a')][a504_0x59f4('0x3c')],this['client'][a504_0x59f4('0xc')]['getString'](_0x24ec6b[a504_0x59f4('0x2f')][a504_0x59f4('0x4')][a504_0x59f4('0x7')],'errors',a504_0x59f4('0x3f'),constants[a504_0x59f4('0x16')][a504_0x59f4('0x1c')]['ROLE_LEVELS']));}}else if(_0x591e0f[a504_0x59f4('0x39')]>=constants[a504_0x59f4('0x16')][a504_0x59f4('0x44')]){throw new errors[(a504_0x59f4('0x45'))](errors['BASTION_ERROR_TYPE'][a504_0x59f4('0x6')],this['client'][a504_0x59f4('0xc')][a504_0x59f4('0x1b')](_0x24ec6b[a504_0x59f4('0x2f')]['document'][a504_0x59f4('0x7')],a504_0x59f4('0xf'),'premiumRoleLevels',constants[a504_0x59f4('0x16')][a504_0x59f4('0x44')]));}const _0x5910e1=await Role_1[a504_0x59f4('0xb')]['countDocuments']({'guild':_0x24ec6b[a504_0x59f4('0x2f')]['id'],'level':_0x22b7da[a504_0x59f4('0x20')]});if(_0x30e0d0){if(_0x30e0d0===omnic[a504_0x59f4('0x1')]['GOLD']&&_0x5910e1>=constants[a504_0x59f4('0x16')][a504_0x59f4('0x36')][a504_0x59f4('0x51')]){throw new errors[(a504_0x59f4('0x45'))](errors[a504_0x59f4('0x2a')][a504_0x59f4('0x3c')],this['client'][a504_0x59f4('0xc')][a504_0x59f4('0x1b')](_0x24ec6b[a504_0x59f4('0x2f')][a504_0x59f4('0x4')][a504_0x59f4('0x7')],'errors',a504_0x59f4('0x3b'),constants[a504_0x59f4('0x16')][a504_0x59f4('0x36')][a504_0x59f4('0x51')]));}else if(_0x30e0d0===omnic[a504_0x59f4('0x1')][a504_0x59f4('0x1c')]&&_0x5910e1>=constants[a504_0x59f4('0x16')]['PLATINUM'][a504_0x59f4('0x51')]){throw new errors['DiscordError'](errors[a504_0x59f4('0x2a')][a504_0x59f4('0x3c')],this[a504_0x59f4('0x19')][a504_0x59f4('0xc')]['getString'](_0x24ec6b['guild'][a504_0x59f4('0x4')][a504_0x59f4('0x7')],'errors',a504_0x59f4('0x3b'),constants[a504_0x59f4('0x16')][a504_0x59f4('0x1c')][a504_0x59f4('0x51')]));}}else if(_0x5910e1>=constants[a504_0x59f4('0x16')]['ROLES_PER_LEVEL']){throw new errors[(a504_0x59f4('0x45'))](errors[a504_0x59f4('0x2a')][a504_0x59f4('0x6')],this['client'][a504_0x59f4('0xc')][a504_0x59f4('0x1b')](_0x24ec6b['guild'][a504_0x59f4('0x4')][a504_0x59f4('0x7')],'errors',a504_0x59f4('0xe'),constants[a504_0x59f4('0x16')][a504_0x59f4('0x51')]));}}const _0x4dc4ad=this['client'][a504_0x59f4('0x47')]['resolveRole'](_0x24ec6b['guild'],_0x22b7da[a504_0x59f4('0x23')][a504_0x59f4('0x27')]('\x20'));if(!_0x4dc4ad)throw new errors[(a504_0x59f4('0x45'))](errors[a504_0x59f4('0x2a')][a504_0x59f4('0x14')],this[a504_0x59f4('0x19')][a504_0x59f4('0xc')][a504_0x59f4('0x1b')](_0x24ec6b[a504_0x59f4('0x2f')][a504_0x59f4('0x4')][a504_0x59f4('0x7')],a504_0x59f4('0x24'),a504_0x59f4('0x0')));let _0x5a7e96=await _0x4dc4ad[a504_0x59f4('0x29')]();if(!_0x5a7e96&&_0x22b7da[a504_0x59f4('0x4a')]){_0x5a7e96=await _0x4dc4ad[a504_0x59f4('0x2b')]();}_0x5a7e96[a504_0x59f4('0x20')]=_0x22b7da[a504_0x59f4('0x20')];await _0x5a7e96[a504_0x59f4('0x3d')]();return await _0x24ec6b[a504_0x59f4('0x4d')][a504_0x59f4('0x31')]({'embed':{'color':tesseract_1[a504_0x59f4('0x2d')]['COLORS']['GREEN'],'description':this[a504_0x59f4('0x19')][a504_0x59f4('0xc')]['getString'](_0x24ec6b[a504_0x59f4('0x2f')][a504_0x59f4('0x4')][a504_0x59f4('0x7')],a504_0x59f4('0x13'),a504_0x59f4('0x2'),_0x24ec6b[a504_0x59f4('0x15')][a504_0x59f4('0x22')],_0x4dc4ad[a504_0x59f4('0x50')],_0x22b7da[a504_0x59f4('0x20')])}})[a504_0x59f4('0x4e')](()=>{});}if(_0x22b7da['remove']){await Role_1[a504_0x59f4('0xb')][a504_0x59f4('0x38')]({'guild':_0x24ec6b['guild']['id'],'level':_0x22b7da[a504_0x59f4('0x20')]},{'$unset':{'level':0x1}});return await _0x24ec6b[a504_0x59f4('0x4d')]['send']({'embed':{'color':tesseract_1[a504_0x59f4('0x2d')][a504_0x59f4('0xa')][a504_0x59f4('0x25')],'description':this['client'][a504_0x59f4('0xc')][a504_0x59f4('0x1b')](_0x24ec6b[a504_0x59f4('0x2f')][a504_0x59f4('0x4')][a504_0x59f4('0x7')],a504_0x59f4('0x13'),a504_0x59f4('0x21'),_0x24ec6b['author']['tag'],_0x22b7da[a504_0x59f4('0x20')])}})[a504_0x59f4('0x4e')](()=>{});}const _0xd0270a=await Role_1[a504_0x59f4('0xb')]['find']({'guild':_0x24ec6b[a504_0x59f4('0x2f')]['id'],'level':_0x22b7da['level']});if(!_0xd0270a['length'])throw new Error('NO_ROLES_FOR_LEVEL');const _0xa1711a=this[a504_0x59f4('0x19')][a504_0x59f4('0x47')][a504_0x59f4('0x1a')](_0x24ec6b[a504_0x59f4('0x2f')],_0xd0270a['map'](_0x1a3e85=>_0x1a3e85['_id']));return await _0x24ec6b[a504_0x59f4('0x4d')][a504_0x59f4('0x31')]({'embed':{'color':tesseract_1['Constants'][a504_0x59f4('0xa')]['IRIS'],'title':a504_0x59f4('0x3')+_0x22b7da[a504_0x59f4('0x20')],'fields':[{'name':a504_0x59f4('0x11'),'value':_0xa1711a['map'](_0x55301d=>_0x55301d[a504_0x59f4('0x50')])[a504_0x59f4('0x27')]('\x0a')}]}})[a504_0x59f4('0x4e')](()=>{});}const _0x21e2d1=await Role_1[a504_0x59f4('0xb')][a504_0x59f4('0x40')]({'guild':_0x24ec6b[a504_0x59f4('0x2f')]['id'],'level':{'$exists':!![],'$ne':null}});if(!_0x21e2d1[a504_0x59f4('0x39')])throw new Error('NO_LEVEL_UP_ROLES');const _0x15f133={};for(const _0x21233a of _0x21e2d1){if(_0x21233a[a504_0x59f4('0x20')]in _0x15f133){_0x15f133[_0x21233a[a504_0x59f4('0x20')]][a504_0x59f4('0x18')](_0x21233a[a504_0x59f4('0x2e')]);}else{_0x15f133[_0x21233a['level']]=[_0x21233a[a504_0x59f4('0x2e')]];}}return await _0x24ec6b[a504_0x59f4('0x4d')][a504_0x59f4('0x31')]({'embed':{'color':tesseract_1[a504_0x59f4('0x2d')]['COLORS'][a504_0x59f4('0x43')],'title':a504_0x59f4('0x1f'),'fields':Object[a504_0x59f4('0x1d')](_0x15f133)[a504_0x59f4('0x26')](_0x277eaf=>({'name':'Level\x20'+_0x277eaf,'value':_0x15f133[_0x277eaf][a504_0x59f4('0x26')](_0x319990=>_0x24ec6b[a504_0x59f4('0x2f')][a504_0x59f4('0x37')][a504_0x59f4('0x3e')][a504_0x59f4('0x5')](_0x319990)?_0x24ec6b[a504_0x59f4('0x2f')][a504_0x59f4('0x37')]['cache'][a504_0x59f4('0x1e')](_0x319990)[a504_0x59f4('0x50')]:_0x319990)[a504_0x59f4('0x27')](',\x20')}))}})['catch'](()=>{});};}};