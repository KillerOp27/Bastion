const a543_0x4f1c=['https://rocketleague.media.zestyio.com/Rocket-League-Logo-Full_On-Dark-Vertical.f1cb27a519bdb5b6ed34049a5b86e317.png','makeRequest','wins','steam','platforms','constructor','\x20Wins','Level\x20','DiscordError','\x20/\x20','INVALID_COMMAND_SYNTAX','/playerstats/rocketleague/','test','ps4','../../utils/strings','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Rocket\x20League\x20player\x20in\x20any\x20supported\x20platform.','includes','toTitleCase','@bastion/tesseract','season_rewards','channel','json','Season\x20Reward','name','../../utils/omnic','user_name','apply','rocketLeague','\x20•\x20Powered\x20by\x20Rocket\x20League','exec','COLORS','map','exports','compile','stats','rocketLeague\x20USERNAME\x20--platform\x20PLATFORM','ROCKET_LEAGUE','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Rocket\x20League\x20-\x20Player\x20Stats','send','toUpperCase','platform','keys'];(function(_0x17f709,_0x4f1c4a){const _0x3392a7=function(_0x1b9fd9){while(--_0x1b9fd9){_0x17f709['push'](_0x17f709['shift']());}};const _0x3aa43a=function(){const _0x30cdc8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x7b54c5,_0x160bee,_0x4eea26,_0x1df9de){_0x1df9de=_0x1df9de||{};let _0x4dfa8b=_0x160bee+'='+_0x4eea26;let _0x52b3fc=0x0;for(let _0x5cd5e3=0x0,_0x1bc120=_0x7b54c5['length'];_0x5cd5e3<_0x1bc120;_0x5cd5e3++){const _0x2908a9=_0x7b54c5[_0x5cd5e3];_0x4dfa8b+=';\x20'+_0x2908a9;const _0x117437=_0x7b54c5[_0x2908a9];_0x7b54c5['push'](_0x117437);_0x1bc120=_0x7b54c5['length'];if(_0x117437!==!![]){_0x4dfa8b+='='+_0x117437;}}_0x1df9de['cookie']=_0x4dfa8b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x575aa7,_0x3e5ba1){_0x575aa7=_0x575aa7||function(_0x4b5f8c){return _0x4b5f8c;};const _0x136e04=_0x575aa7(new RegExp('(?:^|;\x20)'+_0x3e5ba1['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x39c6e0=function(_0x4cbf38,_0x19b570){_0x4cbf38(++_0x19b570);};_0x39c6e0(_0x3392a7,_0x4f1c4a);return _0x136e04?decodeURIComponent(_0x136e04[0x1]):undefined;}};const _0x4798dd=function(){const _0x87e87f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x87e87f['test'](_0x30cdc8['removeCookie']['toString']());};_0x30cdc8['updateCookie']=_0x4798dd;let _0x3023af='';const _0x36bccd=_0x30cdc8['updateCookie']();if(!_0x36bccd){_0x30cdc8['setCookie'](['*'],'counter',0x1);}else if(_0x36bccd){_0x3023af=_0x30cdc8['getCookie'](null,'counter');}else{_0x30cdc8['removeCookie']();}};_0x3aa43a();}(a543_0x4f1c,0xc8));const a543_0x3392=function(_0x17f709,_0x4f1c4a){_0x17f709=_0x17f709-0x0;let _0x3392a7=a543_0x4f1c[_0x17f709];return _0x3392a7;};const a543_0x30cdc8=function(){let _0x23b32b=!![];return function(_0x4589a7,_0x561ef2){const _0x35b809=_0x23b32b?function(){if(_0x561ef2){const _0x2a18d=_0x561ef2[a543_0x3392('0x29')](_0x4589a7,arguments);_0x561ef2=null;return _0x2a18d;}}:function(){};_0x23b32b=![];return _0x35b809;};}();const a543_0x1b9fd9=a543_0x30cdc8(this,function(){const _0x30b128=function(){const _0xb648b0=_0x30b128[a543_0x3392('0x14')](a543_0x3392('0x9'))()[a543_0x3392('0x5')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0xb648b0[a543_0x3392('0x1b')](a543_0x1b9fd9);};return _0x30b128();});a543_0x1b9fd9();'use strict';const tesseract_1=require(a543_0x3392('0x21'));const constants=require('../../utils/constants');const errors=require('../../utils/errors');const omnic=require(a543_0x3392('0x27'));const strings=require(a543_0x3392('0x1d'));module[a543_0x3392('0x4')]=class RocketLeagueCommand extends tesseract_1['Command']{constructor(){super(a543_0x3392('0x2a'),{'description':a543_0x3392('0x1e'),'triggers':[],'arguments':{'alias':{'platform':['p']},'string':[a543_0x3392('0xd')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['rocketLeague\x20USERNAME',a543_0x3392('0x7')]});this[a543_0x3392('0x1')]=async(_0x20e87a,_0x5905d8)=>{if(!_0x5905d8['_']['length'])throw new errors[(a543_0x3392('0x17'))](errors['BASTION_ERROR_TYPE'][a543_0x3392('0x19')],this[a543_0x3392('0x26')]);const _0x4a3b8a=_0x5905d8['_']['join']('\x20');const _0x45b6cc=_0x5905d8['platform']&&this[a543_0x3392('0x13')][a543_0x3392('0x1f')](_0x5905d8['platform']['toLowerCase']())?_0x5905d8[a543_0x3392('0xd')]['toLowerCase']():this[a543_0x3392('0x13')][0x0];const _0x3790e7=await omnic[a543_0x3392('0x10')](a543_0x3392('0x1a')+_0x45b6cc+'/'+encodeURIComponent(_0x4a3b8a));const _0x1d2b5a=await _0x3790e7[a543_0x3392('0x24')]();if(!_0x1d2b5a[a543_0x3392('0x28')])throw new Error('PLAYER_NOT_FOUND');await _0x20e87a[a543_0x3392('0x23')][a543_0x3392('0xb')]({'embed':{'color':constants[a543_0x3392('0x2')][a543_0x3392('0x8')],'author':{'name':_0x1d2b5a[a543_0x3392('0x28')]+a543_0x3392('0x18')+_0x4a3b8a},'title':a543_0x3392('0xa'),'fields':[{'name':a543_0x3392('0x25'),'value':a543_0x3392('0x16')+_0x1d2b5a[a543_0x3392('0x22')]?_0x1d2b5a[a543_0x3392('0x22')]['level']+(_0x1d2b5a[a543_0x3392('0x22')][a543_0x3392('0x11')]?_0x1d2b5a['season_rewards'][a543_0x3392('0x11')]+a543_0x3392('0x15'):''):'-'},...Object[a543_0x3392('0xe')](_0x1d2b5a[a543_0x3392('0x6')])[a543_0x3392('0x3')](_0x2bd04f=>({'name':strings[a543_0x3392('0x20')](_0x2bd04f),'value':_0x1d2b5a[a543_0x3392('0x6')][_0x2bd04f],'inline':!![]}))],'thumbnail':{'url':a543_0x3392('0xf')},'footer':{'text':_0x45b6cc[a543_0x3392('0xc')]()+a543_0x3392('0x0')}}});};this['platforms']=[a543_0x3392('0x12'),a543_0x3392('0x1c'),'xboxone'];}};