const a571_0xa591=['defaultTimeout','client','React\x20to\x20this\x20message\x20with\x20the\x20corresponding\x20emoji\x20to\x20vote\x20for\x20that\x20option.','exec','document','findOne','title','status','clamp','channel','isPublicBastion','user','GOLD','embeds','LIMITS','test','catch','channels','IRIS','\x20votes\x20(','get','fetch','default','../../utils/errors','@bastion/tesseract','BASTION_ERROR_TYPE','PremiumTier','poll\x20--option\x20OPTIONS...\x20--\x20QUESTION','cache','has','DiscordError','timeout','MANAGE_CHANNELS','POLL_TIMEOUT','bot','poll\x20--timeout\x20HOURS\x20--option\x20OPTIONS...\x20--\x20QUESTION','Constants','ends','value','_id','poll','toFixed','number','INVALID_COMMAND_SYNTAX','getString','guild','messages','\x20/\x20','compile','poll\x20--status\x20POLL_MESSAGE_ID','It\x20allows\x20you\x20to\x20run\x20polls\x20in\x20the\x20server\x20for\x20at\x20least\x20an\x20hour\x20and\x20at\x20most\x20a\x20month.\x20You\x20can\x20set\x20at\x20most\x2013\x20options\x20for\x20the\x20poll.\x20It\x20also\x20allows\x20you\x20to\x20see\x20the\x20status\x20of\x20a\x20running\x20poll.','option','COLORS','slice','fields','PLATINUM','Command','countDocuments','../../models/Poll','../../utils/numbers','errors','length','POLLS','\x20•\x20Ends','LIMITED_PREMIUM_MEMBERSHIP','locale','membershipLimitPolls','Ends','exports','premiumPollTimeout','premiumPolls','language','POLL\x20STATUS','POLL_NOT_FOUND','reactions','map','users','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','name','create','PREMIUM_MEMBERSHIP_REQUIRED'];(function(_0x3e5db4,_0xa5911e){const _0x365fd1=function(_0xe21061){while(--_0xe21061){_0x3e5db4['push'](_0x3e5db4['shift']());}};const _0x4e2dc1=function(){const _0xc150={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5575d0,_0x3af755,_0x9e8513,_0x288c09){_0x288c09=_0x288c09||{};let _0x38e4ec=_0x3af755+'='+_0x9e8513;let _0x27318f=0x0;for(let _0x497e6b=0x0,_0x3af1bf=_0x5575d0['length'];_0x497e6b<_0x3af1bf;_0x497e6b++){const _0x1201e6=_0x5575d0[_0x497e6b];_0x38e4ec+=';\x20'+_0x1201e6;const _0x48fbd9=_0x5575d0[_0x1201e6];_0x5575d0['push'](_0x48fbd9);_0x3af1bf=_0x5575d0['length'];if(_0x48fbd9!==!![]){_0x38e4ec+='='+_0x48fbd9;}}_0x288c09['cookie']=_0x38e4ec;},'removeCookie':function(){return'dev';},'getCookie':function(_0x281a7e,_0x127135){_0x281a7e=_0x281a7e||function(_0x26e940){return _0x26e940;};const _0x11e466=_0x281a7e(new RegExp('(?:^|;\x20)'+_0x127135['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x459ffa=function(_0x1d6860,_0x1ce2d3){_0x1d6860(++_0x1ce2d3);};_0x459ffa(_0x365fd1,_0xa5911e);return _0x11e466?decodeURIComponent(_0x11e466[0x1]):undefined;}};const _0x32dc29=function(){const _0x2ca825=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2ca825['test'](_0xc150['removeCookie']['toString']());};_0xc150['updateCookie']=_0x32dc29;let _0x4bf4ba='';const _0x51bc43=_0xc150['updateCookie']();if(!_0x51bc43){_0xc150['setCookie'](['*'],'counter',0x1);}else if(_0x51bc43){_0x4bf4ba=_0xc150['getCookie'](null,'counter');}else{_0xc150['removeCookie']();}};_0x4e2dc1();}(a571_0xa591,0x16a));const a571_0x365f=function(_0x3e5db4,_0xa5911e){_0x3e5db4=_0x3e5db4-0x0;let _0x365fd1=a571_0xa591[_0x3e5db4];return _0x365fd1;};const a571_0xc150=function(){let _0x52d019=!![];return function(_0x53b1b6,_0x47f5b2){const _0x1cc2cd=_0x52d019?function(){if(_0x47f5b2){const _0x3d50f6=_0x47f5b2['apply'](_0x53b1b6,arguments);_0x47f5b2=null;return _0x3d50f6;}}:function(){};_0x52d019=![];return _0x1cc2cd;};}();const a571_0xe21061=a571_0xc150(this,function(){const _0x3c5b0f=function(){const _0x5b1561=_0x3c5b0f['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a571_0x365f('0xa')](a571_0x365f('0x27'));return!_0x5b1561[a571_0x365f('0x3a')](a571_0xe21061);};return _0x3c5b0f();});a571_0xe21061();'use strict';const tesseract_1=require(a571_0x365f('0x43'));const Poll_1=require(a571_0x365f('0x14'));const constants=require('../../utils/constants');const errors=require(a571_0x365f('0x42'));const numbers=require(a571_0x365f('0x15'));const omnic=require('../../utils/omnic');module[a571_0x365f('0x1e')]=class PollCommand extends tesseract_1[a571_0x365f('0x12')]{constructor(){super(a571_0x365f('0x2'),{'description':a571_0x365f('0xc'),'triggers':[],'arguments':{'alias':{'timeout':['t'],'option':['o'],'status':['s']},'number':[a571_0x365f('0x4a')],'string':[a571_0x365f('0xd'),a571_0x365f('0x32')],'coerce':{'timeout':_0x2019d2=>typeof _0x2019d2===a571_0x365f('0x4')&&numbers[a571_0x365f('0x33')](_0x2019d2,0x1,0x2d0)},'default':{'timeout':0x3}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a571_0x365f('0x4b')],'syntax':[a571_0x365f('0xb'),a571_0x365f('0x46'),a571_0x365f('0x4e')]});this[a571_0x365f('0x2e')]=async(_0x5d5d1e,_0x28436a)=>{if(_0x28436a['status']){const _0x412a5f=await Poll_1[a571_0x365f('0x41')][a571_0x365f('0x30')]({'_id':_0x28436a[a571_0x365f('0x32')],'guild':_0x5d5d1e[a571_0x365f('0x7')]['id']});if(!_0x412a5f)throw new Error(a571_0x365f('0x23'));if(!_0x5d5d1e[a571_0x365f('0x7')][a571_0x365f('0x3c')][a571_0x365f('0x47')]['has'](_0x412a5f[a571_0x365f('0x34')]))throw new Error(a571_0x365f('0x23'));const _0xfbfc91=_0x5d5d1e[a571_0x365f('0x7')]['channels'][a571_0x365f('0x47')][a571_0x365f('0x3f')](_0x412a5f[a571_0x365f('0x34')]);const _0x1eef58=await _0xfbfc91[a571_0x365f('0x8')][a571_0x365f('0x40')](_0x412a5f[a571_0x365f('0x1')])['catch'](()=>{});if(!_0x1eef58)throw new Error(a571_0x365f('0x23'));const _0xf708a8=_0x1eef58[a571_0x365f('0x38')][0x0][a571_0x365f('0x10')][a571_0x365f('0x25')](_0x26ad4e=>_0x26ad4e[a571_0x365f('0x0')]);const _0x2b8345={};let _0x9d0b4e=0x0;for(const _0x1af85e in this['reactions']['slice'](0x0,_0xf708a8['length'])){if(_0x1eef58[a571_0x365f('0x24')]['cache'][a571_0x365f('0x48')](this[a571_0x365f('0x24')][_0x1af85e])){await _0x1eef58[a571_0x365f('0x24')][a571_0x365f('0x47')][a571_0x365f('0x3f')](this[a571_0x365f('0x24')][_0x1af85e])[a571_0x365f('0x26')][a571_0x365f('0x40')]()[a571_0x365f('0x3b')](()=>{});const _0xfad040=_0x1eef58[a571_0x365f('0x24')][a571_0x365f('0x47')][a571_0x365f('0x3f')](this[a571_0x365f('0x24')][_0x1af85e])[a571_0x365f('0x26')]['cache']['filter'](_0x57aa08=>!_0x57aa08[a571_0x365f('0x4d')])['size'];_0x2b8345[this[a571_0x365f('0x24')][_0x1af85e]]=_0xfad040;_0x9d0b4e+=_0xfad040;}}return await _0x5d5d1e['channel']['send']({'embed':{'color':tesseract_1[a571_0x365f('0x4f')][a571_0x365f('0xe')][a571_0x365f('0x3d')],'author':{'name':a571_0x365f('0x22')},'title':_0x1eef58[a571_0x365f('0x38')][0x0][a571_0x365f('0x31')],'fields':_0x1eef58[a571_0x365f('0x38')][0x0]['fields']['map'](_0x12813c=>({'name':_0x12813c[a571_0x365f('0x28')]+'\x20'+_0x12813c[a571_0x365f('0x0')],'value':(_0x2b8345[_0x12813c[a571_0x365f('0x28')]]||0x0)+a571_0x365f('0x9')+_0x9d0b4e+a571_0x365f('0x3e')+(_0x2b8345[_0x12813c[a571_0x365f('0x28')]]?_0x2b8345[_0x12813c[a571_0x365f('0x28')]]/_0x9d0b4e*0x64:0x0)[a571_0x365f('0x3')](0x2)+'%)'})),'footer':{'text':_0x1eef58['id']+a571_0x365f('0x19')},'timestamp':_0x412a5f[a571_0x365f('0x50')]}});}if(!_0x28436a['_'][a571_0x365f('0x17')]||!_0x28436a[a571_0x365f('0xd')]||!_0x28436a[a571_0x365f('0xd')][a571_0x365f('0x17')])throw new errors[(a571_0x365f('0x49'))](errors[a571_0x365f('0x44')][a571_0x365f('0x5')],this[a571_0x365f('0x28')]);const _0x2c6765=_0x28436a['_']['join']('\x20');const _0x4a12c6=_0x28436a[a571_0x365f('0x4a')]?_0x28436a[a571_0x365f('0x4a')]:this[a571_0x365f('0x2b')];if(constants[a571_0x365f('0x35')](this[a571_0x365f('0x2c')][a571_0x365f('0x36')])){const _0x1a94fd=await omnic['fetchPremiumTier'](_0x5d5d1e['guild'])[a571_0x365f('0x3b')](()=>{});if(_0x1a94fd){if(_0x1a94fd===omnic[a571_0x365f('0x45')][a571_0x365f('0x37')]&&_0x4a12c6>constants[a571_0x365f('0x39')][a571_0x365f('0x37')][a571_0x365f('0x4c')]){throw new errors[(a571_0x365f('0x49'))](errors[a571_0x365f('0x44')][a571_0x365f('0x1a')],this[a571_0x365f('0x2c')][a571_0x365f('0x1b')][a571_0x365f('0x6')](_0x5d5d1e[a571_0x365f('0x7')][a571_0x365f('0x2f')][a571_0x365f('0x21')],'errors','membershipLimitPollTimeout',constants[a571_0x365f('0x39')][a571_0x365f('0x37')][a571_0x365f('0x4c')]));}else if(_0x1a94fd===omnic['PremiumTier'][a571_0x365f('0x11')]&&_0x4a12c6>constants[a571_0x365f('0x39')][a571_0x365f('0x11')][a571_0x365f('0x4c')]){throw new errors[(a571_0x365f('0x49'))](errors[a571_0x365f('0x44')]['LIMITED_PREMIUM_MEMBERSHIP'],this[a571_0x365f('0x2c')][a571_0x365f('0x1b')][a571_0x365f('0x6')](_0x5d5d1e[a571_0x365f('0x7')][a571_0x365f('0x2f')][a571_0x365f('0x21')],a571_0x365f('0x16'),'membershipLimitPollTimeout',constants[a571_0x365f('0x39')]['PLATINUM'][a571_0x365f('0x4c')]));}}else if(_0x4a12c6>constants['LIMITS']['POLL_TIMEOUT']){throw new errors[(a571_0x365f('0x49'))](errors['BASTION_ERROR_TYPE'][a571_0x365f('0x2a')],this[a571_0x365f('0x2c')][a571_0x365f('0x1b')][a571_0x365f('0x6')](_0x5d5d1e['guild'][a571_0x365f('0x2f')][a571_0x365f('0x21')],a571_0x365f('0x16'),a571_0x365f('0x1f'),constants['LIMITS'][a571_0x365f('0x4c')]));}const _0x1eceb0=await Poll_1[a571_0x365f('0x41')][a571_0x365f('0x13')]({'guild':_0x5d5d1e['guild']['id'],'ends':{'$gte':new Date()}});if(_0x1a94fd){if(_0x1a94fd===omnic[a571_0x365f('0x45')][a571_0x365f('0x37')]&&_0x1eceb0>=constants[a571_0x365f('0x39')][a571_0x365f('0x37')]['POLLS']){throw new errors[(a571_0x365f('0x49'))](errors[a571_0x365f('0x44')]['LIMITED_PREMIUM_MEMBERSHIP'],this[a571_0x365f('0x2c')]['locale'][a571_0x365f('0x6')](_0x5d5d1e[a571_0x365f('0x7')][a571_0x365f('0x2f')][a571_0x365f('0x21')],'errors',a571_0x365f('0x1c'),constants['LIMITS'][a571_0x365f('0x37')][a571_0x365f('0x18')]));}else if(_0x1a94fd===omnic['PremiumTier'][a571_0x365f('0x11')]&&_0x1eceb0>=constants[a571_0x365f('0x39')][a571_0x365f('0x11')][a571_0x365f('0x18')]){throw new errors['DiscordError'](errors[a571_0x365f('0x44')][a571_0x365f('0x1a')],this[a571_0x365f('0x2c')][a571_0x365f('0x1b')]['getString'](_0x5d5d1e[a571_0x365f('0x7')]['document']['language'],a571_0x365f('0x16'),'membershipLimitPolls',constants[a571_0x365f('0x39')][a571_0x365f('0x11')][a571_0x365f('0x18')]));}}else{throw new errors[(a571_0x365f('0x49'))](errors['BASTION_ERROR_TYPE'][a571_0x365f('0x2a')],this[a571_0x365f('0x2c')][a571_0x365f('0x1b')][a571_0x365f('0x6')](_0x5d5d1e[a571_0x365f('0x7')][a571_0x365f('0x2f')]['language'],a571_0x365f('0x16'),a571_0x365f('0x20'),constants[a571_0x365f('0x39')][a571_0x365f('0x18')]));}}const _0x1f39d8=new Date(Date['now']()+_0x4a12c6*0x36ee80);const _0x381e95=await _0x5d5d1e['channel']['send']({'embed':{'color':tesseract_1['Constants'][a571_0x365f('0xe')][a571_0x365f('0x3d')],'author':{'name':'POLL'},'title':_0x2c6765,'description':a571_0x365f('0x2d'),'fields':_0x28436a[a571_0x365f('0xd')][a571_0x365f('0x25')]((_0x3e791b,_0x491d92)=>({'name':this[a571_0x365f('0x24')][_0x491d92],'value':_0x3e791b})),'footer':{'text':a571_0x365f('0x1d')},'timestamp':_0x1f39d8}});await Poll_1[a571_0x365f('0x41')][a571_0x365f('0x29')]({'_id':_0x381e95['id'],'channel':_0x381e95['channel']['id'],'guild':_0x381e95[a571_0x365f('0x7')]['id'],'ends':_0x1f39d8});for(const _0x1a74b1 of this[a571_0x365f('0x24')][a571_0x365f('0xf')](0x0,_0x28436a[a571_0x365f('0xd')][a571_0x365f('0x17')])){await _0x381e95['react'](_0x1a74b1)[a571_0x365f('0x3b')](()=>{});}};this[a571_0x365f('0x24')]=['🇦','🇧','🇨','🇩','🇪','🇫','🇬','🇭','🇮','🇯','🇰','🇱','🇲'];this[a571_0x365f('0x2b')]=0x3;}};