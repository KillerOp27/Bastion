const a61_0x36ef=['clamp','react','winners','guild','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','reactions','send','COLORS','client','default','GIVEAWAY_TIMEOUT','GOLD','GIVEAWAYS','IRIS','fetchPremiumTier','floor','timeout','It\x20allows\x20you\x20to\x20run\x20giveaway\x20events\x20in\x20the\x20server\x20for\x20at\x20least\x20an\x20hour\x20and\x20at\x20most\x20a\x20month.\x20You\x20can\x20set\x20any\x20number\x20of\x20winners\x20for\x20the\x20event.\x20And\x20it\x20also\x20allows\x20you\x20to\x20reroll\x20the\x20winners,\x20if\x20need\x20be,\x20after\x20the\x20end\x20of\x20the\x20event.','document','apply','catch','giveaway','giveaway\x20--winners\x20NUMBER\x20--\x20ITEM','user','premiumGiveaways','exports','../../utils/constants','getString','countDocuments','test','Command','channel','number','MANAGE_CHANNELS','LIMITED_PREMIUM_MEMBERSHIP','PLATINUM','../../utils/errors','language','isPublicBastion','return\x20/\x22\x20+\x20this\x20+\x20\x22/','defaultWinners','Constants','React\x20to\x20this\x20message\x20with\x20','giveaway\x20--\x20ITEM','\x20to\x20participate\x20in\x20the\x20giveaway\x20for\x20a\x20chance\x20to\x20win.','locale','@bastion/tesseract','../../utils/numbers','length','membershipLimitGiveaways','exec','defaultTimeout','PremiumTier','BASTION_ERROR_TYPE','name','LIMITS','errors','\x20Winners\x20•\x20Ends','MAX_SAFE_INTEGER','join','premiumGiveawayTimeout','DiscordError','PREMIUM_MEMBERSHIP_REQUIRED','../../utils/omnic','membershipLimitGiveawayTimeout','\x20or\x20'];(function(_0x5346f6,_0x36ef92){const _0x82b525=function(_0x1932c0){while(--_0x1932c0){_0x5346f6['push'](_0x5346f6['shift']());}};const _0x4c861c=function(){const _0xfbe844={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2558c7,_0x55302f,_0x4771a4,_0x342730){_0x342730=_0x342730||{};let _0x1785a2=_0x55302f+'='+_0x4771a4;let _0x4e7cca=0x0;for(let _0x129f54=0x0,_0xfc2b9=_0x2558c7['length'];_0x129f54<_0xfc2b9;_0x129f54++){const _0x35d6b1=_0x2558c7[_0x129f54];_0x1785a2+=';\x20'+_0x35d6b1;const _0x3dc4e5=_0x2558c7[_0x35d6b1];_0x2558c7['push'](_0x3dc4e5);_0xfc2b9=_0x2558c7['length'];if(_0x3dc4e5!==!![]){_0x1785a2+='='+_0x3dc4e5;}}_0x342730['cookie']=_0x1785a2;},'removeCookie':function(){return'dev';},'getCookie':function(_0xc6ff27,_0x424d38){_0xc6ff27=_0xc6ff27||function(_0x48c157){return _0x48c157;};const _0xce0351=_0xc6ff27(new RegExp('(?:^|;\x20)'+_0x424d38['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x290545=function(_0xa276,_0xa52b82){_0xa276(++_0xa52b82);};_0x290545(_0x82b525,_0x36ef92);return _0xce0351?decodeURIComponent(_0xce0351[0x1]):undefined;}};const _0x27c9ef=function(){const _0x23cf89=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x23cf89['test'](_0xfbe844['removeCookie']['toString']());};_0xfbe844['updateCookie']=_0x27c9ef;let _0x22e438='';const _0x47f273=_0xfbe844['updateCookie']();if(!_0x47f273){_0xfbe844['setCookie'](['*'],'counter',0x1);}else if(_0x47f273){_0x22e438=_0xfbe844['getCookie'](null,'counter');}else{_0xfbe844['removeCookie']();}};_0x4c861c();}(a61_0x36ef,0x1c2));const a61_0x82b5=function(_0x5346f6,_0x36ef92){_0x5346f6=_0x5346f6-0x0;let _0x82b525=a61_0x36ef[_0x5346f6];return _0x82b525;};const a61_0xfbe844=function(){let _0x393336=!![];return function(_0x19086a,_0x230c85){const _0x34c3c5=_0x393336?function(){if(_0x230c85){const _0xf0d071=_0x230c85[a61_0x82b5('0x1f')](_0x19086a,arguments);_0x230c85=null;return _0xf0d071;}}:function(){};_0x393336=![];return _0x34c3c5;};}();const a61_0x1932c0=a61_0xfbe844(this,function(){const _0x39f70c=function(){const _0xb34791=_0x39f70c['constructor'](a61_0x82b5('0x33'))()['compile'](a61_0x82b5('0x10'));return!_0xb34791[a61_0x82b5('0x29')](a61_0x1932c0);};return _0x39f70c();});a61_0x1932c0();'use strict';const tesseract_1=require(a61_0x82b5('0x3a'));const Giveaway_1=require('../../models/Giveaway');const constants=require(a61_0x82b5('0x26'));const errors=require(a61_0x82b5('0x30'));const numbers=require(a61_0x82b5('0x3b'));const omnic=require(a61_0x82b5('0x9'));module[a61_0x82b5('0x25')]=class GiveawayCommand extends tesseract_1[a61_0x82b5('0x2a')]{constructor(){super(a61_0x82b5('0x21'),{'description':a61_0x82b5('0x1d'),'triggers':[],'arguments':{'alias':{'timeout':['t'],'winners':['w']},'number':['timeout',a61_0x82b5('0xe')],'coerce':{'timeout':_0x503c0d=>typeof _0x503c0d===a61_0x82b5('0x2c')&&numbers[a61_0x82b5('0xc')](_0x503c0d,0x1,0x2d0),'winners':_0x1016ba=>typeof _0x1016ba===a61_0x82b5('0x2c')&&Math[a61_0x82b5('0x1b')](numbers[a61_0x82b5('0xc')](_0x1016ba,0x1,Number[a61_0x82b5('0x4')]))},'default':{'timeout':0x3,'winners':0x1}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a61_0x82b5('0x2d')],'syntax':[a61_0x82b5('0x37'),a61_0x82b5('0x22'),'giveaway\x20--timeout\x20HOURS\x20--\x20ITEM']});this[a61_0x82b5('0x3e')]=async(_0x282a4c,_0xe3ec3b)=>{if(!_0xe3ec3b['_'][a61_0x82b5('0x3c')])throw new errors[(a61_0x82b5('0x7'))](errors['BASTION_ERROR_TYPE']['INVALID_COMMAND_SYNTAX'],this[a61_0x82b5('0x0')]);const _0x304ada=_0xe3ec3b['_'][a61_0x82b5('0x5')]('\x20');const _0xd49e7f=_0xe3ec3b[a61_0x82b5('0x1c')]?_0xe3ec3b[a61_0x82b5('0x1c')]:this[a61_0x82b5('0x3f')];const _0x2dc867=_0xe3ec3b[a61_0x82b5('0xe')]?_0xe3ec3b['winners']:this[a61_0x82b5('0x34')];if(constants[a61_0x82b5('0x32')](this[a61_0x82b5('0x14')][a61_0x82b5('0x23')])){const _0x38fb3a=await omnic[a61_0x82b5('0x1a')](_0x282a4c[a61_0x82b5('0xf')])[a61_0x82b5('0x20')](()=>{});if(_0x38fb3a){if(_0x38fb3a===omnic[a61_0x82b5('0x40')][a61_0x82b5('0x17')]&&_0xd49e7f>constants[a61_0x82b5('0x1')]['GOLD'][a61_0x82b5('0x16')]){throw new errors[(a61_0x82b5('0x7'))](errors[a61_0x82b5('0x41')][a61_0x82b5('0x2e')],this[a61_0x82b5('0x14')][a61_0x82b5('0x39')][a61_0x82b5('0x27')](_0x282a4c[a61_0x82b5('0xf')][a61_0x82b5('0x1e')]['language'],a61_0x82b5('0x2'),'membershipLimitGiveawayTimeout',constants[a61_0x82b5('0x1')][a61_0x82b5('0x17')][a61_0x82b5('0x16')]));}else if(_0x38fb3a===omnic[a61_0x82b5('0x40')]['PLATINUM']&&_0xd49e7f>constants['LIMITS']['PLATINUM'][a61_0x82b5('0x16')]){throw new errors[(a61_0x82b5('0x7'))](errors['BASTION_ERROR_TYPE'][a61_0x82b5('0x2e')],this['client'][a61_0x82b5('0x39')][a61_0x82b5('0x27')](_0x282a4c['guild'][a61_0x82b5('0x1e')]['language'],'errors',a61_0x82b5('0xa'),constants[a61_0x82b5('0x1')][a61_0x82b5('0x2f')][a61_0x82b5('0x16')]));}}else if(_0xd49e7f>constants[a61_0x82b5('0x1')][a61_0x82b5('0x16')]){throw new errors[(a61_0x82b5('0x7'))](errors['BASTION_ERROR_TYPE'][a61_0x82b5('0x8')],this[a61_0x82b5('0x14')][a61_0x82b5('0x39')][a61_0x82b5('0x27')](_0x282a4c[a61_0x82b5('0xf')][a61_0x82b5('0x1e')]['language'],a61_0x82b5('0x2'),a61_0x82b5('0x6'),constants[a61_0x82b5('0x1')][a61_0x82b5('0x16')]));}const _0x1d5536=await Giveaway_1[a61_0x82b5('0x15')][a61_0x82b5('0x28')]({'guild':_0x282a4c[a61_0x82b5('0xf')]['id'],'ends':{'$gte':new Date()}});if(_0x38fb3a){if(_0x38fb3a===omnic['PremiumTier'][a61_0x82b5('0x17')]&&_0x1d5536>=constants[a61_0x82b5('0x1')][a61_0x82b5('0x17')][a61_0x82b5('0x18')]){throw new errors[(a61_0x82b5('0x7'))](errors[a61_0x82b5('0x41')][a61_0x82b5('0x2e')],this[a61_0x82b5('0x14')][a61_0x82b5('0x39')][a61_0x82b5('0x27')](_0x282a4c[a61_0x82b5('0xf')][a61_0x82b5('0x1e')][a61_0x82b5('0x31')],a61_0x82b5('0x2'),a61_0x82b5('0x3d'),constants['LIMITS'][a61_0x82b5('0x17')]['GIVEAWAYS']));}else if(_0x38fb3a===omnic['PremiumTier']['PLATINUM']&&_0x1d5536>=constants[a61_0x82b5('0x1')]['PLATINUM'][a61_0x82b5('0x18')]){throw new errors[(a61_0x82b5('0x7'))](errors[a61_0x82b5('0x41')][a61_0x82b5('0x2e')],this[a61_0x82b5('0x14')][a61_0x82b5('0x39')][a61_0x82b5('0x27')](_0x282a4c[a61_0x82b5('0xf')][a61_0x82b5('0x1e')][a61_0x82b5('0x31')],'errors','membershipLimitGiveaways',constants[a61_0x82b5('0x1')][a61_0x82b5('0x2f')]['GIVEAWAYS']));}}else{throw new errors[(a61_0x82b5('0x7'))](errors[a61_0x82b5('0x41')][a61_0x82b5('0x8')],this[a61_0x82b5('0x14')][a61_0x82b5('0x39')][a61_0x82b5('0x27')](_0x282a4c['guild'][a61_0x82b5('0x1e')][a61_0x82b5('0x31')],a61_0x82b5('0x2'),a61_0x82b5('0x24'),constants[a61_0x82b5('0x1')][a61_0x82b5('0x18')]));}}const _0x2b0041=new Date(Date['now']()+_0xd49e7f*0x36ee80);const _0x1f4885=await _0x282a4c[a61_0x82b5('0x2b')][a61_0x82b5('0x12')]({'embed':{'color':tesseract_1[a61_0x82b5('0x35')][a61_0x82b5('0x13')][a61_0x82b5('0x19')],'author':{'name':'GIVEAWAY!'},'title':_0x304ada,'description':a61_0x82b5('0x36')+this[a61_0x82b5('0x11')][a61_0x82b5('0x5')](a61_0x82b5('0xb'))+a61_0x82b5('0x38'),'footer':{'text':_0x2dc867+a61_0x82b5('0x3')},'timestamp':_0x2b0041}});await Giveaway_1['default']['create']({'_id':_0x1f4885['id'],'channel':_0x1f4885['channel']['id'],'guild':_0x1f4885[a61_0x82b5('0xf')]['id'],'winners':_0x2dc867,'ends':_0x2b0041});for(const _0x170f14 of this['reactions']){await _0x1f4885[a61_0x82b5('0xd')](_0x170f14)[a61_0x82b5('0x20')](()=>{});}};this[a61_0x82b5('0x11')]=['🎊','🎉'];this['defaultTimeout']=0x3;this[a61_0x82b5('0x34')]=0x1;}};