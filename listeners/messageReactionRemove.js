const a165_0x4fdb=['@bastion/tesseract','roles','reactionPinning','member','test','handleReactionPinning','name','emoji','includes','map','guild','../models/ReactionRoleGroup','fetch','catch','has','default','findById','exec','partial','Listener','LISTENER_MODE','Removed\x20via\x20Reaction\x20Roles','message','../utils/emojis','permissionsFor','unpin','animated','handleReactionRoles','exports','Constants','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','compile','channel'];(function(_0x23ba06,_0x4fdb4d){const _0x2d8d00=function(_0x51e927){while(--_0x51e927){_0x23ba06['push'](_0x23ba06['shift']());}};const _0x3b21a0=function(){const _0x12e3cc={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x568482,_0xb9deaa,_0x201c30,_0x34bc87){_0x34bc87=_0x34bc87||{};let _0x46dbcb=_0xb9deaa+'='+_0x201c30;let _0x45a04c=0x0;for(let _0x4d5a16=0x0,_0x2a7e44=_0x568482['length'];_0x4d5a16<_0x2a7e44;_0x4d5a16++){const _0x9fb997=_0x568482[_0x4d5a16];_0x46dbcb+=';\x20'+_0x9fb997;const _0x152785=_0x568482[_0x9fb997];_0x568482['push'](_0x152785);_0x2a7e44=_0x568482['length'];if(_0x152785!==!![]){_0x46dbcb+='='+_0x152785;}}_0x34bc87['cookie']=_0x46dbcb;},'removeCookie':function(){return'dev';},'getCookie':function(_0x48fae2,_0xd34b4){_0x48fae2=_0x48fae2||function(_0x345c4b){return _0x345c4b;};const _0x17ca57=_0x48fae2(new RegExp('(?:^|;\x20)'+_0xd34b4['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x20cd81=function(_0x4230fc,_0x5e3a94){_0x4230fc(++_0x5e3a94);};_0x20cd81(_0x2d8d00,_0x4fdb4d);return _0x17ca57?decodeURIComponent(_0x17ca57[0x1]):undefined;}};const _0x199143=function(){const _0x3a4c40=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3a4c40['test'](_0x12e3cc['removeCookie']['toString']());};_0x12e3cc['updateCookie']=_0x199143;let _0x55cae3='';const _0x525276=_0x12e3cc['updateCookie']();if(!_0x525276){_0x12e3cc['setCookie'](['*'],'counter',0x1);}else if(_0x525276){_0x55cae3=_0x12e3cc['getCookie'](null,'counter');}else{_0x12e3cc['removeCookie']();}};_0x3b21a0();}(a165_0x4fdb,0xfa));const a165_0x2d8d=function(_0x23ba06,_0x4fdb4d){_0x23ba06=_0x23ba06-0x0;let _0x2d8d00=a165_0x4fdb[_0x23ba06];return _0x2d8d00;};const a165_0x12e3cc=function(){let _0x1553b6=!![];return function(_0x2c37e7,_0x2ffdf2){const _0x58e0f4=_0x1553b6?function(){if(_0x2ffdf2){const _0x1235bd=_0x2ffdf2['apply'](_0x2c37e7,arguments);_0x2ffdf2=null;return _0x1235bd;}}:function(){};_0x1553b6=![];return _0x58e0f4;};}();const a165_0x51e927=a165_0x12e3cc(this,function(){const _0x338265=function(){const _0x4b93f3=_0x338265['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a165_0x2d8d('0xc')](a165_0x2d8d('0xb'));return!_0x4b93f3[a165_0x2d8d('0x12')](a165_0x51e927);};return _0x338265();});a165_0x51e927();'use strict';const tesseract_1=require(a165_0x2d8d('0xe'));const ReactionRoleGroup_1=require(a165_0x2d8d('0x19'));const Role_1=require('../models/Role');const emojis=require(a165_0x2d8d('0x4'));module[a165_0x2d8d('0x9')]=class MessageReactionRemoveListener extends tesseract_1[a165_0x2d8d('0x0')]{constructor(){super('messageReactionRemove',{'mode':tesseract_1[a165_0x2d8d('0xa')][a165_0x2d8d('0x1')]['ON']});this[a165_0x2d8d('0x13')]=async(_0x3bdd6c,_0x528677)=>{if(!['📌','📍'][a165_0x2d8d('0x16')](_0x3bdd6c[a165_0x2d8d('0x15')]['name']))return;if(!_0x3bdd6c[a165_0x2d8d('0x3')][a165_0x2d8d('0xd')][a165_0x2d8d('0x5')](_0x528677)[a165_0x2d8d('0x1c')]('MANAGE_MESSAGES'))return;await _0x3bdd6c[a165_0x2d8d('0x3')][a165_0x2d8d('0x6')]();};this[a165_0x2d8d('0x8')]=async(_0x1852ae,_0x25645b)=>{const _0x1f3546=await ReactionRoleGroup_1[a165_0x2d8d('0x1d')][a165_0x2d8d('0x1e')](_0x1852ae[a165_0x2d8d('0x3')]['id']);if(!_0x1f3546)return;const _0x2cd6de=_0x1852ae[a165_0x2d8d('0x15')]['id']?'<'+(_0x1852ae['emoji'][a165_0x2d8d('0x7')]?'a':'')+':'+_0x1852ae[a165_0x2d8d('0x15')][a165_0x2d8d('0x14')]+':'+_0x1852ae[a165_0x2d8d('0x15')]['id']+'>':_0x1852ae[a165_0x2d8d('0x15')]['name'];const _0x337eeb=emojis['parseEmoji'](_0x2cd6de);if(_0x337eeb){const _0x269b83=await Role_1[a165_0x2d8d('0x1d')]['findOne']({'$or':_0x1f3546[a165_0x2d8d('0xf')][a165_0x2d8d('0x17')](_0x12d206=>({'_id':_0x12d206})),'guild':_0x1852ae[a165_0x2d8d('0x3')]['guild']['id'],'emoji':_0x337eeb['value']});if(!_0x269b83)return;await _0x25645b['roles']['remove'](_0x269b83['_id'],a165_0x2d8d('0x2'));}};this[a165_0x2d8d('0x1f')]=async(_0x25ad83,_0x5a4c48)=>{if(_0x25ad83[a165_0x2d8d('0x20')]){_0x25ad83=await _0x25ad83[a165_0x2d8d('0x1a')]();}if(_0x25ad83[a165_0x2d8d('0x3')][a165_0x2d8d('0x20')]){_0x25ad83[a165_0x2d8d('0x3')]=await _0x25ad83[a165_0x2d8d('0x3')][a165_0x2d8d('0x1a')]();}if(!_0x25ad83[a165_0x2d8d('0x3')][a165_0x2d8d('0x18')])return;const _0xe5dfb9=_0x25ad83[a165_0x2d8d('0x3')][a165_0x2d8d('0x18')][a165_0x2d8d('0x11')](_0x5a4c48);this[a165_0x2d8d('0x8')](_0x25ad83,_0xe5dfb9)['catch'](()=>{});const _0x4e1f24=await _0x25ad83[a165_0x2d8d('0x3')]['guild']['getDocument']();if(_0x4e1f24[a165_0x2d8d('0x10')]){this[a165_0x2d8d('0x13')](_0x25ad83,_0xe5dfb9)[a165_0x2d8d('0x1b')](()=>{});}};}};