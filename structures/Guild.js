const a196_0x4e81=['createModerationLog','COLORS','NewsChannel','apply','timestamp','getDocument','music','ORANGE','exports','client','fields','cache','test','moderationCaseCount','locale','default','constructor','moderationLogChannelId','serverLogChannelId','channels','type','news','getString','Guild','TextChannel','findById','language','create','@bastion/tesseract','events','send','compile','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','SOMEWHAT_DARK','filter','Constants','event','text','get'];(function(_0x3d5f4d,_0x4e8182){const _0x5d7f9e=function(_0x44ffda){while(--_0x44ffda){_0x3d5f4d['push'](_0x3d5f4d['shift']());}};const _0xe6a34a=function(){const _0x4cc6e1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x482398,_0x351bef,_0x3f11a9,_0x7711ad){_0x7711ad=_0x7711ad||{};let _0x29b979=_0x351bef+'='+_0x3f11a9;let _0x52322c=0x0;for(let _0x5dbc39=0x0,_0x5db929=_0x482398['length'];_0x5dbc39<_0x5db929;_0x5dbc39++){const _0x3e2deb=_0x482398[_0x5dbc39];_0x29b979+=';\x20'+_0x3e2deb;const _0x35966c=_0x482398[_0x3e2deb];_0x482398['push'](_0x35966c);_0x5db929=_0x482398['length'];if(_0x35966c!==!![]){_0x29b979+='='+_0x35966c;}}_0x7711ad['cookie']=_0x29b979;},'removeCookie':function(){return'dev';},'getCookie':function(_0x35bd64,_0x215d9a){_0x35bd64=_0x35bd64||function(_0x4ebad0){return _0x4ebad0;};const _0x465e1c=_0x35bd64(new RegExp('(?:^|;\x20)'+_0x215d9a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x180e4f=function(_0x591052,_0x41a385){_0x591052(++_0x41a385);};_0x180e4f(_0x5d7f9e,_0x4e8182);return _0x465e1c?decodeURIComponent(_0x465e1c[0x1]):undefined;}};const _0x3235f7=function(){const _0x545ce9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x545ce9['test'](_0x4cc6e1['removeCookie']['toString']());};_0x4cc6e1['updateCookie']=_0x3235f7;let _0x3751ef='';const _0x215876=_0x4cc6e1['updateCookie']();if(!_0x215876){_0x4cc6e1['setCookie'](['*'],'counter',0x1);}else if(_0x215876){_0x3751ef=_0x4cc6e1['getCookie'](null,'counter');}else{_0x4cc6e1['removeCookie']();}};_0xe6a34a();}(a196_0x4e81,0x166));const a196_0x5d7f=function(_0x3d5f4d,_0x4e8182){_0x3d5f4d=_0x3d5f4d-0x0;let _0x5d7f9e=a196_0x4e81[_0x3d5f4d];return _0x5d7f9e;};const a196_0x4cc6e1=function(){let _0x4516c8=!![];return function(_0x4ff733,_0x2bccdd){const _0x15ddb8=_0x4516c8?function(){if(_0x2bccdd){const _0x2146d1=_0x2bccdd[a196_0x5d7f('0x23')](_0x4ff733,arguments);_0x2bccdd=null;return _0x2146d1;}}:function(){};_0x4516c8=![];return _0x15ddb8;};}();const a196_0x44ffda=a196_0x4cc6e1(this,function(){const _0x5c041c=function(){const _0x559249=_0x5c041c[a196_0x5d7f('0x9')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a196_0x5d7f('0x18')](a196_0x5d7f('0x19'));return!_0x559249[a196_0x5d7f('0x5')](a196_0x44ffda);};return _0x5c041c();});a196_0x44ffda();'use strict';const tesseract_1=require(a196_0x5d7f('0x15'));const discord_js_1=require('discord.js');const Guild_1=require('../models/Guild');const Case_1=require('../models/Case');module[a196_0x5d7f('0x1')]=class BastionGuild extends discord_js_1[a196_0x5d7f('0x10')]{constructor(_0x4bfc1a,_0x25ff39){super(_0x4bfc1a,_0x25ff39);this[a196_0x5d7f('0x26')]={'queue':[],'history':[],'playing':![],'repeat':![],'skipVotes':[]};}async[a196_0x5d7f('0x25')](){return await Guild_1[a196_0x5d7f('0x8')][a196_0x5d7f('0x12')](this['id']);}async['createLog'](_0xdf331a){const _0x12bba9=await this['getDocument']();const _0x19dee1=this[a196_0x5d7f('0x2')]['channels'][a196_0x5d7f('0x4')]['filter'](_0xc9b573=>_0xc9b573[a196_0x5d7f('0xd')]===a196_0x5d7f('0x1e')||_0xc9b573[a196_0x5d7f('0xd')]===a196_0x5d7f('0xe'));if(_0x12bba9[a196_0x5d7f('0xb')]&&_0x19dee1['has'](_0x12bba9[a196_0x5d7f('0xb')])){const _0x31dc1d=_0x19dee1[a196_0x5d7f('0x1f')](_0x12bba9['serverLogChannelId']);if(_0x31dc1d instanceof discord_js_1['NewsChannel']||_0x31dc1d instanceof discord_js_1['TextChannel']){return _0x31dc1d[a196_0x5d7f('0x17')]({'embed':{'color':tesseract_1[a196_0x5d7f('0x1c')][a196_0x5d7f('0x21')][a196_0x5d7f('0x1a')],'title':this[a196_0x5d7f('0x2')]['locale'][a196_0x5d7f('0xf')](_0x12bba9[a196_0x5d7f('0x13')],a196_0x5d7f('0x16'),_0xdf331a[a196_0x5d7f('0x1d')]),'fields':_0xdf331a[a196_0x5d7f('0x3')],'footer':{'text':_0xdf331a['footer']},'timestamp':_0xdf331a[a196_0x5d7f('0x24')]||new Date()}});}}}async[a196_0x5d7f('0x20')](_0x36eeef){const _0x46255e=await this[a196_0x5d7f('0x25')]();const _0x24ac9b=this[a196_0x5d7f('0x2')][a196_0x5d7f('0xc')][a196_0x5d7f('0x4')][a196_0x5d7f('0x1b')](_0x4cb16b=>_0x4cb16b['type']===a196_0x5d7f('0x1e')||_0x4cb16b[a196_0x5d7f('0xd')]==='news');if(_0x46255e['moderationLogChannelId']&&_0x24ac9b['has'](_0x46255e[a196_0x5d7f('0xa')])){const _0xa9294f=_0x24ac9b['get'](_0x46255e[a196_0x5d7f('0xa')]);if(_0xa9294f instanceof discord_js_1[a196_0x5d7f('0x22')]||_0xa9294f instanceof discord_js_1[a196_0x5d7f('0x11')]){_0x46255e['moderationCaseCount']=_0x46255e['moderationCaseCount']?_0x46255e[a196_0x5d7f('0x6')]+0x1:0x1;const _0x228f50=await _0xa9294f[a196_0x5d7f('0x17')]({'embed':{'color':tesseract_1[a196_0x5d7f('0x1c')]['COLORS'][a196_0x5d7f('0x0')],'title':this[a196_0x5d7f('0x2')][a196_0x5d7f('0x7')][a196_0x5d7f('0xf')](_0x46255e[a196_0x5d7f('0x13')],a196_0x5d7f('0x16'),_0x36eeef[a196_0x5d7f('0x1d')]),'fields':_0x36eeef[a196_0x5d7f('0x3')],'footer':{'text':'Case\x20#'+_0x46255e['moderationCaseCount']},'timestamp':new Date()}});await Case_1[a196_0x5d7f('0x8')][a196_0x5d7f('0x14')]({'guild':this['id'],'number':_0x46255e[a196_0x5d7f('0x6')],'messageId':_0x228f50['id']});await _0x46255e['save']();}}}};