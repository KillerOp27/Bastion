const a100_0x4471=['quickPlayStats','medalsSilver','**\x20','careerStats','medals','../../utils/omnic','guild','@bastion/tesseract','channel','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','medalsBronze','medalsGold','constructor','Level','toLowerCase','Games\x20Won','Competitive','ratings','../../utils/errors','../../utils/strings','Combat','icon','Endorsement','COLORS','**\x20Silver\x20Medals\x0a','/playerstats/overwatch/','Won\x20','Damage\x20Skill\x20Rating','../../utils/constants','Tank\x20Skill\x20Rating','**\x20Gold\x20Medals\x0a','combat','competitiveStats','**\x20Cards\x0a','concat','INVALID_COMMAND_SYNTAX','map','platforms','overwatch\x20USERNAME\x20--platform\x20PLATFORM','xbl','gamesWon','return\x20/\x22\x20+\x20this\x20+\x20\x22/','send','Quick\x20Play','cards','psn','message','\x20Casual\x20matches\x20in\x20','timePlayed','Assists','damage','find','matchAwards','Match\x20Awards','level','exec','support','platform','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Overwatch\x20player\x20in\x20any\x20supported\x20platform.','**\x20Medals\x0a','apply','role','**\x20Bronze\x20Medals\x0a','camelToTitleCase','OVERWATCH','game','keys','length','name','prestige','DiscordError','makeRequest','test','\x20•\x20Powered\x20by\x20Overwatch','Overwatch\x20-\x20Player\x20Stats','endorsement','toUpperCase','allHeroes','overwatch\x20USERNAME'];(function(_0x42a5ec,_0x447195){const _0x4a50ae=function(_0x4e71d5){while(--_0x4e71d5){_0x42a5ec['push'](_0x42a5ec['shift']());}};const _0x1e34cb=function(){const _0x333096={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2ea095,_0x5ec9d2,_0x3fe37b,_0x429f78){_0x429f78=_0x429f78||{};let _0x141dc1=_0x5ec9d2+'='+_0x3fe37b;let _0x2204e6=0x0;for(let _0x25b817=0x0,_0x550454=_0x2ea095['length'];_0x25b817<_0x550454;_0x25b817++){const _0xc222f4=_0x2ea095[_0x25b817];_0x141dc1+=';\x20'+_0xc222f4;const _0x587c43=_0x2ea095[_0xc222f4];_0x2ea095['push'](_0x587c43);_0x550454=_0x2ea095['length'];if(_0x587c43!==!![]){_0x141dc1+='='+_0x587c43;}}_0x429f78['cookie']=_0x141dc1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x489b8d,_0x47a65f){_0x489b8d=_0x489b8d||function(_0x18fb0f){return _0x18fb0f;};const _0x4385e2=_0x489b8d(new RegExp('(?:^|;\x20)'+_0x47a65f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x560751=function(_0x396585,_0x17d487){_0x396585(++_0x17d487);};_0x560751(_0x4a50ae,_0x447195);return _0x4385e2?decodeURIComponent(_0x4385e2[0x1]):undefined;}};const _0x1335dd=function(){const _0x2c4cf6=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2c4cf6['test'](_0x333096['removeCookie']['toString']());};_0x333096['updateCookie']=_0x1335dd;let _0x466088='';const _0x3db361=_0x333096['updateCookie']();if(!_0x3db361){_0x333096['setCookie'](['*'],'counter',0x1);}else if(_0x3db361){_0x466088=_0x333096['getCookie'](null,'counter');}else{_0x333096['removeCookie']();}};_0x1e34cb();}(a100_0x4471,0x17c));const a100_0x4a50=function(_0x42a5ec,_0x447195){_0x42a5ec=_0x42a5ec-0x0;let _0x4a50ae=a100_0x4471[_0x42a5ec];return _0x4a50ae;};const a100_0x333096=function(){let _0x7c6a0f=!![];return function(_0x402efd,_0x1b314c){const _0x28550f=_0x7c6a0f?function(){if(_0x1b314c){const _0x457734=_0x1b314c[a100_0x4a50('0x4b')](_0x402efd,arguments);_0x1b314c=null;return _0x457734;}}:function(){};_0x7c6a0f=![];return _0x28550f;};}();const a100_0x4e71d5=a100_0x333096(this,function(){const _0x3d0cf2=function(){const _0x4666f8=_0x3d0cf2[a100_0x4a50('0x1b')](a100_0x4a50('0x38'))()['compile'](a100_0x4a50('0x18'));return!_0x4666f8[a100_0x4a50('0x8')](a100_0x4e71d5);};return _0x3d0cf2();});a100_0x4e71d5();'use strict';const tesseract_1=require(a100_0x4a50('0x16'));const constants=require(a100_0x4a50('0x2b'));const errors=require(a100_0x4a50('0x21'));const omnic=require(a100_0x4a50('0x14'));const strings=require(a100_0x4a50('0x22'));module['exports']=class OverwatchCommand extends tesseract_1['Command']{constructor(){super('overwatch',{'description':a100_0x4a50('0x49'),'triggers':['ow'],'arguments':{'alias':{'platform':['p']},'string':['platform']},'scope':a100_0x4a50('0x15'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a100_0x4a50('0xe'),a100_0x4a50('0x35')]});this[a100_0x4a50('0x46')]=async(_0x156bc2,_0x2936db)=>{if(!_0x2936db['_']['length'])throw new errors[(a100_0x4a50('0x6'))](errors['BASTION_ERROR_TYPE'][a100_0x4a50('0x32')],this[a100_0x4a50('0x4')]);const _0x1588bd=_0x2936db['_']['join']('\x20');const _0x5afdfb=_0x2936db[a100_0x4a50('0x48')]&&this[a100_0x4a50('0x34')]['includes'](_0x2936db['platform'][a100_0x4a50('0x1d')]())?_0x2936db[a100_0x4a50('0x48')][a100_0x4a50('0x1d')]():this['platforms'][0x0];const _0x5ddba9=await omnic[a100_0x4a50('0x7')](a100_0x4a50('0x28')+_0x5afdfb+'/'+encodeURIComponent(_0x1588bd));const _0x5d574e=await _0x5ddba9['json']();if(_0x5d574e[a100_0x4a50('0x3d')])throw new Error(_0x5d574e[a100_0x4a50('0x3d')]);if(_0x5d574e['private'])throw new Error('Stats\x20of\x20private\x20profiles\x20can\x27t\x20be\x20shown.\x0aYou\x20can\x20modify\x20this\x20setting\x20in\x20Overwatch\x20under\x20Options\x20–\x20Social.');const _0x51321e=_0x5d574e['quickPlayStats']&&_0x5d574e[a100_0x4a50('0xf')][a100_0x4a50('0x12')]&&_0x5d574e[a100_0x4a50('0xf')][a100_0x4a50('0x12')][a100_0x4a50('0xd')]?[{'name':a100_0x4a50('0x3a'),'value':a100_0x4a50('0x29')+(_0x5d574e[a100_0x4a50('0xf')]['careerStats'][a100_0x4a50('0xd')]['game'][a100_0x4a50('0x37')]||0x0)+a100_0x4a50('0x3e')+_0x5d574e[a100_0x4a50('0xf')][a100_0x4a50('0x12')][a100_0x4a50('0xd')]['game'][a100_0x4a50('0x3f')]},{'name':'Match\x20Awards','value':'**'+(_0x5d574e[a100_0x4a50('0xf')][a100_0x4a50('0x12')][a100_0x4a50('0xd')][a100_0x4a50('0x43')]['cards']||0x0)+a100_0x4a50('0x30')+'**'+(_0x5d574e[a100_0x4a50('0xf')]['careerStats'][a100_0x4a50('0xd')][a100_0x4a50('0x43')][a100_0x4a50('0x13')]||0x0)+a100_0x4a50('0x4a')+'**'+(_0x5d574e[a100_0x4a50('0xf')][a100_0x4a50('0x12')][a100_0x4a50('0xd')][a100_0x4a50('0x43')][a100_0x4a50('0x1a')]||0x0)+a100_0x4a50('0x2d')+'**'+(_0x5d574e[a100_0x4a50('0xf')][a100_0x4a50('0x12')][a100_0x4a50('0xd')]['matchAwards'][a100_0x4a50('0x10')]||0x0)+a100_0x4a50('0x27')+'**'+(_0x5d574e[a100_0x4a50('0xf')]['careerStats'][a100_0x4a50('0xd')]['matchAwards']['medalsBronze']||0x0)+'**\x20Bronze\x20Medals\x0a','inline':!![]},{'name':'Combat','value':Object['keys'](_0x5d574e[a100_0x4a50('0xf')][a100_0x4a50('0x12')][a100_0x4a50('0xd')][a100_0x4a50('0x2e')])['map'](_0x1b54ce=>'**'+_0x5d574e['quickPlayStats'][a100_0x4a50('0x12')][a100_0x4a50('0xd')][a100_0x4a50('0x2e')][_0x1b54ce]+a100_0x4a50('0x11')+strings[a100_0x4a50('0x4e')](_0x1b54ce)),'inline':!![]},{'name':'Assists','value':Object[a100_0x4a50('0x2')](_0x5d574e[a100_0x4a50('0xf')][a100_0x4a50('0x12')][a100_0x4a50('0xd')][a100_0x4a50('0x2e')])[a100_0x4a50('0x33')](_0x595dad=>'**'+_0x5d574e[a100_0x4a50('0xf')][a100_0x4a50('0x12')][a100_0x4a50('0xd')][a100_0x4a50('0x2e')][_0x595dad]+'**\x20'+strings['camelToTitleCase'](_0x595dad)),'inline':!![]}]:[];const _0x1f1e78=_0x5d574e[a100_0x4a50('0x2f')]&&_0x5d574e[a100_0x4a50('0x2f')][a100_0x4a50('0x12')]&&_0x5d574e[a100_0x4a50('0x2f')]['careerStats'][a100_0x4a50('0xd')]?[{'name':a100_0x4a50('0x1f'),'value':a100_0x4a50('0x29')+(_0x5d574e['competitiveStats'][a100_0x4a50('0x12')][a100_0x4a50('0xd')][a100_0x4a50('0x1')][a100_0x4a50('0x37')]||0x0)+'\x20Competitive\x20matches\x20in\x20'+_0x5d574e[a100_0x4a50('0x2f')]['careerStats'][a100_0x4a50('0xd')][a100_0x4a50('0x1')]['timePlayed']},{'name':a100_0x4a50('0x44'),'value':'**'+(_0x5d574e[a100_0x4a50('0x2f')][a100_0x4a50('0x12')][a100_0x4a50('0xd')]['matchAwards'][a100_0x4a50('0x3b')]||0x0)+'**\x20Cards\x0a'+'**'+(_0x5d574e[a100_0x4a50('0x2f')][a100_0x4a50('0x12')][a100_0x4a50('0xd')]['matchAwards'][a100_0x4a50('0x13')]||0x0)+a100_0x4a50('0x4a')+'**'+(_0x5d574e[a100_0x4a50('0x2f')][a100_0x4a50('0x12')]['allHeroes']['matchAwards'][a100_0x4a50('0x1a')]||0x0)+a100_0x4a50('0x2d')+'**'+(_0x5d574e[a100_0x4a50('0x2f')][a100_0x4a50('0x12')][a100_0x4a50('0xd')][a100_0x4a50('0x43')][a100_0x4a50('0x10')]||0x0)+a100_0x4a50('0x27')+'**'+(_0x5d574e[a100_0x4a50('0x2f')]['careerStats']['allHeroes'][a100_0x4a50('0x43')][a100_0x4a50('0x19')]||0x0)+a100_0x4a50('0x4d'),'inline':!![]},{'name':a100_0x4a50('0x23'),'value':Object[a100_0x4a50('0x2')](_0x5d574e[a100_0x4a50('0x2f')][a100_0x4a50('0x12')][a100_0x4a50('0xd')][a100_0x4a50('0x2e')])[a100_0x4a50('0x33')](_0x1da716=>'**'+_0x5d574e[a100_0x4a50('0x2f')]['careerStats'][a100_0x4a50('0xd')][a100_0x4a50('0x2e')][_0x1da716]+a100_0x4a50('0x11')+strings[a100_0x4a50('0x4e')](_0x1da716)),'inline':!![]},{'name':a100_0x4a50('0x40'),'value':Object[a100_0x4a50('0x2')](_0x5d574e[a100_0x4a50('0x2f')][a100_0x4a50('0x12')]['allHeroes'][a100_0x4a50('0x2e')])[a100_0x4a50('0x33')](_0x4552a8=>'**'+_0x5d574e[a100_0x4a50('0x2f')][a100_0x4a50('0x12')]['allHeroes'][a100_0x4a50('0x2e')][_0x4552a8]+a100_0x4a50('0x11')+strings[a100_0x4a50('0x4e')](_0x4552a8)),'inline':!![]}]:[];await _0x156bc2[a100_0x4a50('0x17')][a100_0x4a50('0x39')]({'embed':{'color':constants[a100_0x4a50('0x26')][a100_0x4a50('0x0')],'author':{'name':_0x5d574e[a100_0x4a50('0x4')],'iconURL':_0x5d574e['levelIcon']},'title':a100_0x4a50('0xa'),'fields':[{'name':a100_0x4a50('0x1e'),'value':_0x5d574e['gamesWon'],'inline':!![]},{'name':a100_0x4a50('0x1c'),'value':_0x5d574e[a100_0x4a50('0x5')]*0x64+_0x5d574e[a100_0x4a50('0x45')],'inline':!![]},{'name':a100_0x4a50('0x25'),'value':_0x5d574e[a100_0x4a50('0xb')],'inline':!![]},{'name':a100_0x4a50('0x2c'),'value':_0x5d574e[a100_0x4a50('0x20')]&&_0x5d574e[a100_0x4a50('0x20')][a100_0x4a50('0x3')]?_0x5d574e[a100_0x4a50('0x20')]['find'](_0x1b5a0a=>_0x1b5a0a[a100_0x4a50('0x4c')]==='tank')['level']:'-','inline':!![]},{'name':a100_0x4a50('0x2a'),'value':_0x5d574e[a100_0x4a50('0x20')]&&_0x5d574e[a100_0x4a50('0x20')][a100_0x4a50('0x3')]?_0x5d574e[a100_0x4a50('0x20')][a100_0x4a50('0x42')](_0x40c2cf=>_0x40c2cf[a100_0x4a50('0x4c')]===a100_0x4a50('0x41'))[a100_0x4a50('0x45')]:'-','inline':!![]},{'name':'Support\x20Skill\x20Rating','value':_0x5d574e['ratings']&&_0x5d574e['ratings'][a100_0x4a50('0x3')]?_0x5d574e[a100_0x4a50('0x20')][a100_0x4a50('0x42')](_0x8a475d=>_0x8a475d[a100_0x4a50('0x4c')]===a100_0x4a50('0x47'))[a100_0x4a50('0x45')]:'-','inline':!![]}]['concat'](_0x51321e)[a100_0x4a50('0x31')](_0x1f1e78),'thumbnail':{'url':_0x5d574e[a100_0x4a50('0x24')]},'footer':{'text':_0x5afdfb[a100_0x4a50('0xc')]()+a100_0x4a50('0x9')}}});};this[a100_0x4a50('0x34')]=['pc',a100_0x4a50('0x3c'),a100_0x4a50('0x36'),'nintendo-switch'];}};