const a82_0x577f=['test','ownerID','getString','```diff\x0a','BASTION_ERROR_TYPE','errors','updateRoles\x20--user\x20USER_ID\x20--add\x20ROLE_ID','locale','COLORS','guild','join','updateRoles','resolveRoles','filter','@bastion/tesseract','resolver','../../utils/arrays','author','return\x20/\x22\x20+\x20this\x20+\x20\x22/','constructor','roles','member','channel','Constants','MANAGE_ROLES','DiscordError','language','memberRoleUpdate','updateRoles\x20--user\x20USER_ID\x20--remove\x20ROLE_ID','highest','exports','removeAll','name','catch','length','```','comparePositionTo','client','toBulletList','send','canManage','unauthorized','user','add','remove','exec','set','apply','Role\x20Changes','map','tag','info','updateRoles\x20--user\x20USER_ID\x20--remove-all'];(function(_0x9749b6,_0x577f07){const _0x3a4d4f=function(_0x126f14){while(--_0x126f14){_0x9749b6['push'](_0x9749b6['shift']());}};const _0x19706a=function(){const _0x1692e6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x290c9f,_0x565a12,_0x486aca,_0xe5f1a){_0xe5f1a=_0xe5f1a||{};let _0x1a5d79=_0x565a12+'='+_0x486aca;let _0x2b93a9=0x0;for(let _0x4ea23c=0x0,_0x12be78=_0x290c9f['length'];_0x4ea23c<_0x12be78;_0x4ea23c++){const _0x5a1ce2=_0x290c9f[_0x4ea23c];_0x1a5d79+=';\x20'+_0x5a1ce2;const _0xb696fb=_0x290c9f[_0x5a1ce2];_0x290c9f['push'](_0xb696fb);_0x12be78=_0x290c9f['length'];if(_0xb696fb!==!![]){_0x1a5d79+='='+_0xb696fb;}}_0xe5f1a['cookie']=_0x1a5d79;},'removeCookie':function(){return'dev';},'getCookie':function(_0x48d965,_0x4778a3){_0x48d965=_0x48d965||function(_0x4a1762){return _0x4a1762;};const _0x351403=_0x48d965(new RegExp('(?:^|;\x20)'+_0x4778a3['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3113f7=function(_0x189549,_0x1b5d2a){_0x189549(++_0x1b5d2a);};_0x3113f7(_0x3a4d4f,_0x577f07);return _0x351403?decodeURIComponent(_0x351403[0x1]):undefined;}};const _0x3a3517=function(){const _0x2ce812=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2ce812['test'](_0x1692e6['removeCookie']['toString']());};_0x1692e6['updateCookie']=_0x3a3517;let _0x20daa1='';const _0x2bd459=_0x1692e6['updateCookie']();if(!_0x2bd459){_0x1692e6['setCookie'](['*'],'counter',0x1);}else if(_0x2bd459){_0x20daa1=_0x1692e6['getCookie'](null,'counter');}else{_0x1692e6['removeCookie']();}};_0x19706a();}(a82_0x577f,0x8b));const a82_0x3a4d=function(_0x9749b6,_0x577f07){_0x9749b6=_0x9749b6-0x0;let _0x3a4d4f=a82_0x577f[_0x9749b6];return _0x3a4d4f;};const a82_0x1692e6=function(){let _0x3198b9=!![];return function(_0x5e3f32,_0x22a8df){const _0x4750cb=_0x3198b9?function(){if(_0x22a8df){const _0x22bfbd=_0x22a8df[a82_0x3a4d('0xe')](_0x5e3f32,arguments);_0x22a8df=null;return _0x22bfbd;}}:function(){};_0x3198b9=![];return _0x4750cb;};}();const a82_0x126f14=a82_0x1692e6(this,function(){const _0x52ae59=function(){const _0x5c9e3b=_0x52ae59[a82_0x3a4d('0x27')](a82_0x3a4d('0x26'))()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5c9e3b[a82_0x3a4d('0x14')](a82_0x126f14);};return _0x52ae59();});a82_0x126f14();'use strict';const tesseract_1=require(a82_0x3a4d('0x22'));const arrays=require(a82_0x3a4d('0x24'));const errors=require('../../utils/errors');module[a82_0x3a4d('0x32')]=class UpdateRoles extends tesseract_1['Command']{constructor(){super(a82_0x3a4d('0x1f'),{'description':'It\x20allows\x20you\x20to\x20update\x20roles\x20of\x20server\x20members.','triggers':[],'arguments':{'alias':{'add':'a','remove':'r','user':'u'},'array':[a82_0x3a4d('0xa'),a82_0x3a4d('0xb')],'boolean':[a82_0x3a4d('0x33')],'string':['add',a82_0x3a4d('0xb'),a82_0x3a4d('0x9')]},'scope':a82_0x3a4d('0x1d'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a82_0x3a4d('0x2c')],'userPermissions':[a82_0x3a4d('0x2c')],'syntax':[a82_0x3a4d('0x1a'),a82_0x3a4d('0x30'),a82_0x3a4d('0x13')]});this[a82_0x3a4d('0xc')]=async(_0x50c7bb,_0x4a31b9)=>{const _0x3f18ae=this['client'][a82_0x3a4d('0x23')]['resolveGuildMember'](_0x50c7bb[a82_0x3a4d('0x1d')],_0x4a31b9[a82_0x3a4d('0x9')]);let _0x1e9c88=this['client'][a82_0x3a4d('0x23')]['resolveRoles'](_0x50c7bb[a82_0x3a4d('0x1d')],_0x4a31b9[a82_0x3a4d('0xa')]);let _0x393828=this['client'][a82_0x3a4d('0x23')][a82_0x3a4d('0x20')](_0x50c7bb['guild'],_0x4a31b9[a82_0x3a4d('0xb')]);if(!_0x3f18ae||!_0x1e9c88[a82_0x3a4d('0x1')]&&!_0x393828[a82_0x3a4d('0x1')])throw new errors[(a82_0x3a4d('0x2d'))](errors[a82_0x3a4d('0x18')]['INVALID_COMMAND_SYNTAX'],this[a82_0x3a4d('0x34')]);if(_0x50c7bb[a82_0x3a4d('0x25')]['id']!==_0x50c7bb[a82_0x3a4d('0x1d')][a82_0x3a4d('0x15')]&&_0x50c7bb[a82_0x3a4d('0x29')][a82_0x3a4d('0x7')](_0x3f18ae)){_0x1e9c88=_0x1e9c88[a82_0x3a4d('0x21')](_0x3c8742=>_0x50c7bb[a82_0x3a4d('0x29')]['roles']['highest'][a82_0x3a4d('0x3')](_0x3c8742)>0x0);_0x393828=_0x393828['filter'](_0x911db9=>_0x50c7bb['member'][a82_0x3a4d('0x28')][a82_0x3a4d('0x31')]['comparePositionTo'](_0x911db9)>0x0);if(!_0x1e9c88[a82_0x3a4d('0x1')]&&!_0x393828[a82_0x3a4d('0x1')]){return await _0x50c7bb[a82_0x3a4d('0x2a')]['send']({'embed':{'color':tesseract_1[a82_0x3a4d('0x2b')][a82_0x3a4d('0x1c')]['RED'],'title':this['client'][a82_0x3a4d('0x1b')][a82_0x3a4d('0x16')](_0x50c7bb[a82_0x3a4d('0x1d')]['document'][a82_0x3a4d('0x2e')],a82_0x3a4d('0x19'),a82_0x3a4d('0x8')),'description':this[a82_0x3a4d('0x4')][a82_0x3a4d('0x1b')][a82_0x3a4d('0x16')](_0x50c7bb[a82_0x3a4d('0x1d')]['document'][a82_0x3a4d('0x2e')],a82_0x3a4d('0x19'),'rolePosition',_0x50c7bb['author']['tag'],_0x3f18ae['user'][a82_0x3a4d('0x11')])}})[a82_0x3a4d('0x0')](()=>{});}}const _0x3f1276=_0x4a31b9['_'][a82_0x3a4d('0x1e')]('\x20')||'-';if(_0x1e9c88['length'])await _0x3f18ae['roles'][a82_0x3a4d('0xa')](_0x1e9c88,_0x3f1276);if(_0x4a31b9[a82_0x3a4d('0x33')])await _0x3f18ae[a82_0x3a4d('0x28')][a82_0x3a4d('0xd')]([],_0x3f1276);else if(_0x393828[a82_0x3a4d('0x1')])await _0x3f18ae[a82_0x3a4d('0x28')][a82_0x3a4d('0xb')](_0x393828,_0x3f1276);await _0x50c7bb[a82_0x3a4d('0x2a')][a82_0x3a4d('0x6')]({'embed':{'color':tesseract_1['Constants']['COLORS']['ORANGE'],'description':this[a82_0x3a4d('0x4')][a82_0x3a4d('0x1b')][a82_0x3a4d('0x16')](_0x50c7bb[a82_0x3a4d('0x1d')]['document']['language'],a82_0x3a4d('0x12'),a82_0x3a4d('0x2f'),_0x50c7bb[a82_0x3a4d('0x25')][a82_0x3a4d('0x11')],_0x3f18ae[a82_0x3a4d('0x9')]['tag']),'fields':[{'name':a82_0x3a4d('0xf'),'value':a82_0x3a4d('0x17')+arrays[a82_0x3a4d('0x5')](_0x1e9c88[a82_0x3a4d('0x10')](_0x4f6949=>_0x4f6949['name']),'+')+arrays['toBulletList'](_0x393828[a82_0x3a4d('0x10')](_0x1e217b=>_0x1e217b[a82_0x3a4d('0x34')]),'-')+a82_0x3a4d('0x2')},{'name':'Reason','value':_0x3f1276}],'footer':{'text':_0x3f18ae['id']}}})[a82_0x3a4d('0x0')](()=>{});};}};