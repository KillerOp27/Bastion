const a39_0x2e9b=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','concat','categories','client','Sessional\x20Channels','locale','../../utils/omnic','BASTION_ERROR_TYPE','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','voice','tag','COLORS','DiscordError','document','GREEN','author','fetchPremiumTier','errors','../../utils/errors','It\x20allows\x20you\x20manage\x20Voice\x20Sessions\x20(or\x20Temporary\x20Voice\x20Channels,\x20if\x20you\x20prefer),\x20in\x20the\x20server.','name','language','voiceSessions','apply','guild','info','channel','send','voiceSessionCreate','getString','channels','user','findByIdAndUpdate','voiceSessions\x20--create','default','MANAGE_CHANNELS','Command','exports','create','PREMIUM_MEMBERSHIP_REQUIRED','INVALID_COMMAND_SYNTAX','catch','compile','../../utils/constants','exec','category'];(function(_0x2473f5,_0x2e9b40){const _0x446d78=function(_0x521140){while(--_0x521140){_0x2473f5['push'](_0x2473f5['shift']());}};const _0x40d683=function(){const _0x37f8e2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x19b34c,_0x9b3c8d,_0x2930a8,_0x56c30f){_0x56c30f=_0x56c30f||{};let _0x56b595=_0x9b3c8d+'='+_0x2930a8;let _0x4ff621=0x0;for(let _0x26975e=0x0,_0xee4a65=_0x19b34c['length'];_0x26975e<_0xee4a65;_0x26975e++){const _0x1b7361=_0x19b34c[_0x26975e];_0x56b595+=';\x20'+_0x1b7361;const _0x3c34ee=_0x19b34c[_0x1b7361];_0x19b34c['push'](_0x3c34ee);_0xee4a65=_0x19b34c['length'];if(_0x3c34ee!==!![]){_0x56b595+='='+_0x3c34ee;}}_0x56c30f['cookie']=_0x56b595;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2326dd,_0x1d2f40){_0x2326dd=_0x2326dd||function(_0x426d68){return _0x426d68;};const _0x25ae08=_0x2326dd(new RegExp('(?:^|;\x20)'+_0x1d2f40['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x20c203=function(_0x84f9bd,_0x4cff9f){_0x84f9bd(++_0x4cff9f);};_0x20c203(_0x446d78,_0x2e9b40);return _0x25ae08?decodeURIComponent(_0x25ae08[0x1]):undefined;}};const _0x429e40=function(){const _0x307101=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x307101['test'](_0x37f8e2['removeCookie']['toString']());};_0x37f8e2['updateCookie']=_0x429e40;let _0x161ec8='';const _0x5166bd=_0x37f8e2['updateCookie']();if(!_0x5166bd){_0x37f8e2['setCookie'](['*'],'counter',0x1);}else if(_0x5166bd){_0x161ec8=_0x37f8e2['getCookie'](null,'counter');}else{_0x37f8e2['removeCookie']();}};_0x40d683();}(a39_0x2e9b,0x6d));const a39_0x446d=function(_0x2473f5,_0x2e9b40){_0x2473f5=_0x2473f5-0x0;let _0x446d78=a39_0x2e9b[_0x2473f5];return _0x446d78;};const a39_0x37f8e2=function(){let _0x118654=!![];return function(_0x236a75,_0x2ce692){const _0x1f9c53=_0x118654?function(){if(_0x2ce692){const _0x3506e1=_0x2ce692[a39_0x446d('0x6')](_0x236a75,arguments);_0x2ce692=null;return _0x3506e1;}}:function(){};_0x118654=![];return _0x1f9c53;};}();const a39_0x521140=a39_0x37f8e2(this,function(){const _0x1fd15b=function(){const _0x59dc94=_0x1fd15b['constructor'](a39_0x446d('0x1d'))()[a39_0x446d('0x19')](a39_0x446d('0x25'));return!_0x59dc94['test'](a39_0x521140);};return _0x1fd15b();});a39_0x521140();'use strict';const tesseract_1=require('@bastion/tesseract');const Guild_1=require('../../models/Guild');const constants=require(a39_0x446d('0x1a'));const errors=require(a39_0x446d('0x1'));const omnic=require(a39_0x446d('0x23'));module[a39_0x446d('0x14')]=class VoiceSessionsCommand extends tesseract_1[a39_0x446d('0x13')]{constructor(){super(a39_0x446d('0x5'),{'description':a39_0x446d('0x2'),'triggers':[],'arguments':{'boolean':[a39_0x446d('0x15')]},'scope':a39_0x446d('0x7'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a39_0x446d('0x12')],'userPermissions':['MANAGE_GUILD'],'syntax':[a39_0x446d('0x10')]});this[a39_0x446d('0x1b')]=async(_0xd1aa73,_0x361f1a)=>{if(constants['isPublicBastion'](this[a39_0x446d('0x20')][a39_0x446d('0xe')])){const _0x49bfc8=await omnic[a39_0x446d('0x2d')](_0xd1aa73[a39_0x446d('0x7')])[a39_0x446d('0x18')](()=>{});if(!_0x49bfc8)throw new errors['DiscordError'](errors[a39_0x446d('0x24')][a39_0x446d('0x16')],this[a39_0x446d('0x20')]['locale'][a39_0x446d('0xc')](_0xd1aa73[a39_0x446d('0x7')][a39_0x446d('0x2a')][a39_0x446d('0x4')],a39_0x446d('0x0'),'premiumVoiceSessions'));}if(_0x361f1a['create']){const _0x9fa4b8=await _0xd1aa73['guild'][a39_0x446d('0xd')]['create'](a39_0x446d('0x21'),{'type':a39_0x446d('0x1c')});await _0xd1aa73[a39_0x446d('0x7')][a39_0x446d('0xd')]['create']('➕\x20New\x20Voice\x20Channel',{'type':a39_0x446d('0x26'),'parent':_0x9fa4b8});const _0x2e544f=_0xd1aa73[a39_0x446d('0x7')][a39_0x446d('0x2a')][a39_0x446d('0x5')]&&_0xd1aa73[a39_0x446d('0x7')][a39_0x446d('0x2a')][a39_0x446d('0x5')][a39_0x446d('0x1f')]?_0xd1aa73[a39_0x446d('0x7')][a39_0x446d('0x2a')]['voiceSessions'][a39_0x446d('0x1f')][a39_0x446d('0x1e')](_0x9fa4b8['id']):[_0x9fa4b8['id']];await Guild_1[a39_0x446d('0x11')][a39_0x446d('0xf')](_0xd1aa73[a39_0x446d('0x7')]['id'],{'voiceSessions':{'categories':_0x2e544f}});return _0xd1aa73[a39_0x446d('0x9')][a39_0x446d('0xa')]({'embed':{'color':tesseract_1['Constants'][a39_0x446d('0x28')][a39_0x446d('0x2b')],'description':this[a39_0x446d('0x20')][a39_0x446d('0x22')][a39_0x446d('0xc')](_0xd1aa73[a39_0x446d('0x7')][a39_0x446d('0x2a')][a39_0x446d('0x4')],a39_0x446d('0x8'),a39_0x446d('0xb'),_0xd1aa73[a39_0x446d('0x2c')][a39_0x446d('0x27')])}})[a39_0x446d('0x18')](()=>{});}throw new errors[(a39_0x446d('0x29'))](errors[a39_0x446d('0x24')][a39_0x446d('0x17')],this[a39_0x446d('0x3')]);};}};