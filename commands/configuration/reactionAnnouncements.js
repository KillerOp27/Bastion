const a29_0x26e3=['It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Reaction\x20Announcements\x20in\x20the\x20server.\x20If\x20enabled,\x20and\x20an\x20Announcement\x20Channel\x20is\x20set,\x20when\x20someone\x20with\x20proper\x20permission\x20adds\x20a\x20Megaphone\x20or\x20Loudspeaker\x20reaction\x20to\x20a\x20message,\x20the\x20message\x20gets\x20announced\x20in\x20the\x20Announcement\x20Channel.','language','apply','COLORS','getString','reactionAnnouncements','save','Constants','@bastion/tesseract','document','return\x20/\x22\x20+\x20this\x20+\x20\x22/','announcementsChannelId','author','compile','channel','exec','tag','constructor','send','test','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','GREEN','locale','client','guild','info','reactionAnnouncementsEnable','reactionAnnouncementsEnableWithoutAnnouncementChannel'];(function(_0x5675ba,_0x26e396){const _0x5ab6bd=function(_0x4faa0a){while(--_0x4faa0a){_0x5675ba['push'](_0x5675ba['shift']());}};const _0x48f82b=function(){const _0x53ad77={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x24685f,_0x102df2,_0x18da6c,_0x2e73f4){_0x2e73f4=_0x2e73f4||{};let _0x2edbc8=_0x102df2+'='+_0x18da6c;let _0x4efd2e=0x0;for(let _0x4f44e6=0x0,_0x28d0ee=_0x24685f['length'];_0x4f44e6<_0x28d0ee;_0x4f44e6++){const _0xc44b21=_0x24685f[_0x4f44e6];_0x2edbc8+=';\x20'+_0xc44b21;const _0x5503c9=_0x24685f[_0xc44b21];_0x24685f['push'](_0x5503c9);_0x28d0ee=_0x24685f['length'];if(_0x5503c9!==!![]){_0x2edbc8+='='+_0x5503c9;}}_0x2e73f4['cookie']=_0x2edbc8;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5e9d32,_0x31de40){_0x5e9d32=_0x5e9d32||function(_0x53fac5){return _0x53fac5;};const _0x37cb55=_0x5e9d32(new RegExp('(?:^|;\x20)'+_0x31de40['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x37b306=function(_0x259fe2,_0x3ce78c){_0x259fe2(++_0x3ce78c);};_0x37b306(_0x5ab6bd,_0x26e396);return _0x37cb55?decodeURIComponent(_0x37cb55[0x1]):undefined;}};const _0x636854=function(){const _0x437fb2=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x437fb2['test'](_0x53ad77['removeCookie']['toString']());};_0x53ad77['updateCookie']=_0x636854;let _0x448047='';const _0x139758=_0x53ad77['updateCookie']();if(!_0x139758){_0x53ad77['setCookie'](['*'],'counter',0x1);}else if(_0x139758){_0x448047=_0x53ad77['getCookie'](null,'counter');}else{_0x53ad77['removeCookie']();}};_0x48f82b();}(a29_0x26e3,0x1cf));const a29_0x5ab6=function(_0x5675ba,_0x26e396){_0x5675ba=_0x5675ba-0x0;let _0x5ab6bd=a29_0x26e3[_0x5675ba];return _0x5ab6bd;};const a29_0x53ad77=function(){let _0x14dbcb=!![];return function(_0x171295,_0x1cc73c){const _0x3f9524=_0x14dbcb?function(){if(_0x1cc73c){const _0x165b79=_0x1cc73c[a29_0x5ab6('0xf')](_0x171295,arguments);_0x1cc73c=null;return _0x165b79;}}:function(){};_0x14dbcb=![];return _0x3f9524;};}();const a29_0x4faa0a=a29_0x53ad77(this,function(){const _0x3b9f1e=function(){const _0x35b370=_0x3b9f1e[a29_0x5ab6('0x2')](a29_0x5ab6('0x17'))()[a29_0x5ab6('0x1a')](a29_0x5ab6('0x5'));return!_0x35b370[a29_0x5ab6('0x4')](a29_0x4faa0a);};return _0x3b9f1e();});a29_0x4faa0a();'use strict';const tesseract_1=require(a29_0x5ab6('0x15'));module['exports']=class ReactionAnnouncementsCommand extends tesseract_1['Command']{constructor(){super(a29_0x5ab6('0x12'),{'description':a29_0x5ab6('0xd'),'triggers':[],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[]});this[a29_0x5ab6('0x0')]=async _0x19f32c=>{const _0x20cfbd=_0x19f32c[a29_0x5ab6('0x9')];if(_0x20cfbd[a29_0x5ab6('0x16')]['reactionAnnouncements']){_0x20cfbd[a29_0x5ab6('0x16')][a29_0x5ab6('0x12')]=undefined;delete _0x20cfbd[a29_0x5ab6('0x16')][a29_0x5ab6('0x12')];}else{_0x20cfbd[a29_0x5ab6('0x16')]['reactionAnnouncements']=!![];}await _0x20cfbd[a29_0x5ab6('0x16')][a29_0x5ab6('0x13')]();await _0x19f32c[a29_0x5ab6('0x1b')][a29_0x5ab6('0x3')]({'embed':{'color':_0x20cfbd['document'][a29_0x5ab6('0x12')]?tesseract_1['Constants'][a29_0x5ab6('0x10')][a29_0x5ab6('0x6')]:tesseract_1[a29_0x5ab6('0x14')]['COLORS']['RED'],'description':this[a29_0x5ab6('0x8')][a29_0x5ab6('0x7')][a29_0x5ab6('0x11')](_0x19f32c['guild'][a29_0x5ab6('0x16')][a29_0x5ab6('0xe')],a29_0x5ab6('0xa'),_0x20cfbd['document'][a29_0x5ab6('0x12')]?a29_0x5ab6('0xb'):'reactionAnnouncementsDisable',_0x19f32c[a29_0x5ab6('0x19')][a29_0x5ab6('0x1')])+(_0x20cfbd[a29_0x5ab6('0x16')][a29_0x5ab6('0x18')]?'':this['client'][a29_0x5ab6('0x7')][a29_0x5ab6('0x11')](_0x19f32c[a29_0x5ab6('0x9')][a29_0x5ab6('0x16')][a29_0x5ab6('0xe')],a29_0x5ab6('0xa'),a29_0x5ab6('0xc'),_0x19f32c['author'][a29_0x5ab6('0x1')]))}})['catch'](()=>{});};}};