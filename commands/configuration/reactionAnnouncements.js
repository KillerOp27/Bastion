const a29_0x5e61=['author','exports','COLORS','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','info','language','document','RED','MANAGE_GUILD','It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Reaction\x20Announcements\x20in\x20the\x20server.\x20If\x20enabled,\x20and\x20an\x20Announcement\x20Channel\x20is\x20set,\x20when\x20someone\x20with\x20proper\x20permission\x20adds\x20a\x20Megaphone\x20or\x20Loudspeaker\x20reaction\x20to\x20a\x20message,\x20the\x20message\x20gets\x20announced\x20in\x20the\x20Announcement\x20Channel.','Constants','save','test','compile','reactionAnnouncementsEnableWithoutAnnouncementChannel','reactionAnnouncements','announcementsChannelId','exec','Command','catch','reactionAnnouncementsEnable','tag','GREEN','guild','@bastion/tesseract','client','send','getString','reactionAnnouncementsDisable','channel','locale'];(function(_0xd0691f,_0x5e6147){const _0x16f962=function(_0xfb06b9){while(--_0xfb06b9){_0xd0691f['push'](_0xd0691f['shift']());}};const _0x29368a=function(){const _0x49dfe5={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5e0df6,_0x136f31,_0x2661fe,_0x2bcef5){_0x2bcef5=_0x2bcef5||{};let _0x390051=_0x136f31+'='+_0x2661fe;let _0x2697aa=0x0;for(let _0xfd5df3=0x0,_0x55340d=_0x5e0df6['length'];_0xfd5df3<_0x55340d;_0xfd5df3++){const _0x2d977e=_0x5e0df6[_0xfd5df3];_0x390051+=';\x20'+_0x2d977e;const _0x2e4f9a=_0x5e0df6[_0x2d977e];_0x5e0df6['push'](_0x2e4f9a);_0x55340d=_0x5e0df6['length'];if(_0x2e4f9a!==!![]){_0x390051+='='+_0x2e4f9a;}}_0x2bcef5['cookie']=_0x390051;},'removeCookie':function(){return'dev';},'getCookie':function(_0x22f889,_0x1b9add){_0x22f889=_0x22f889||function(_0x182d5d){return _0x182d5d;};const _0x1e332c=_0x22f889(new RegExp('(?:^|;\x20)'+_0x1b9add['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x4e2e43=function(_0x1c2d5c,_0x3982cc){_0x1c2d5c(++_0x3982cc);};_0x4e2e43(_0x16f962,_0x5e6147);return _0x1e332c?decodeURIComponent(_0x1e332c[0x1]):undefined;}};const _0x42ebae=function(){const _0x1de6f5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1de6f5['test'](_0x49dfe5['removeCookie']['toString']());};_0x49dfe5['updateCookie']=_0x42ebae;let _0x497b0b='';const _0x3fdc3f=_0x49dfe5['updateCookie']();if(!_0x3fdc3f){_0x49dfe5['setCookie'](['*'],'counter',0x1);}else if(_0x3fdc3f){_0x497b0b=_0x49dfe5['getCookie'](null,'counter');}else{_0x49dfe5['removeCookie']();}};_0x29368a();}(a29_0x5e61,0x9a));const a29_0x16f9=function(_0xd0691f,_0x5e6147){_0xd0691f=_0xd0691f-0x0;let _0x16f962=a29_0x5e61[_0xd0691f];return _0x16f962;};const a29_0x49dfe5=function(){let _0x17bc68=!![];return function(_0x7959d1,_0x58c420){const _0x4ae3e0=_0x17bc68?function(){if(_0x58c420){const _0x539b87=_0x58c420['apply'](_0x7959d1,arguments);_0x58c420=null;return _0x539b87;}}:function(){};_0x17bc68=![];return _0x4ae3e0;};}();const a29_0xfb06b9=a29_0x49dfe5(this,function(){const _0x3b03d5=function(){const _0x1b6b6a=_0x3b03d5[a29_0x16f9('0x9')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a29_0x16f9('0x14')](a29_0x16f9('0xa'));return!_0x1b6b6a[a29_0x16f9('0x13')](a29_0xfb06b9);};return _0x3b03d5();});a29_0xfb06b9();'use strict';const tesseract_1=require(a29_0x16f9('0x1f'));module[a29_0x16f9('0x7')]=class ReactionAnnouncementsCommand extends tesseract_1[a29_0x16f9('0x19')]{constructor(){super('reactionAnnouncements',{'description':a29_0x16f9('0x10'),'triggers':[],'arguments':{},'scope':a29_0x16f9('0x1e'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a29_0x16f9('0xf')],'syntax':[]});this[a29_0x16f9('0x18')]=async _0x24dfbf=>{const _0x11ed42=_0x24dfbf[a29_0x16f9('0x1e')];if(_0x11ed42['document'][a29_0x16f9('0x16')]){_0x11ed42[a29_0x16f9('0xd')][a29_0x16f9('0x16')]=undefined;delete _0x11ed42[a29_0x16f9('0xd')]['reactionAnnouncements'];}else{_0x11ed42[a29_0x16f9('0xd')][a29_0x16f9('0x16')]=!![];}await _0x11ed42[a29_0x16f9('0xd')][a29_0x16f9('0x12')]();await _0x24dfbf[a29_0x16f9('0x4')][a29_0x16f9('0x1')]({'embed':{'color':_0x11ed42[a29_0x16f9('0xd')]['reactionAnnouncements']?tesseract_1[a29_0x16f9('0x11')]['COLORS'][a29_0x16f9('0x1d')]:tesseract_1[a29_0x16f9('0x11')][a29_0x16f9('0x8')][a29_0x16f9('0xe')],'description':this[a29_0x16f9('0x0')][a29_0x16f9('0x5')][a29_0x16f9('0x2')](_0x24dfbf[a29_0x16f9('0x1e')][a29_0x16f9('0xd')]['language'],a29_0x16f9('0xb'),_0x11ed42[a29_0x16f9('0xd')][a29_0x16f9('0x16')]?a29_0x16f9('0x1b'):a29_0x16f9('0x3'),_0x24dfbf[a29_0x16f9('0x6')]['tag'])+(_0x11ed42[a29_0x16f9('0xd')][a29_0x16f9('0x17')]?'':this[a29_0x16f9('0x0')][a29_0x16f9('0x5')][a29_0x16f9('0x2')](_0x24dfbf[a29_0x16f9('0x1e')][a29_0x16f9('0xd')][a29_0x16f9('0xc')],a29_0x16f9('0xb'),a29_0x16f9('0x15'),_0x24dfbf['author'][a29_0x16f9('0x1c')]))}})[a29_0x16f9('0x1a')](()=>{});};}};