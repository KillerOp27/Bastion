const a98_0x44f6=['@bastion/tesseract','psn','toLowerCase','Best\x20Weapon\x20Type','../../utils/omnic','keys','membershipType','Team\x20Score','length','../../utils/errors','dateLastPlayed','\x20/\x20','KDA','kills','COLORS','value','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Destiny\x202\x20player\x20in\x20any\x20supported\x20platform.','mergedAllCharacters','blizzard','heroicPublicEventsCompleted','includes','data','Extras','\x20Adventures\x20Completed\x0a','destiny2','PLAYER_DOESNT_EXIST','join','\x20Suicides','Combat\x20Rating','steam','DiscordError','KAD','channel','weaponBestType','basic','BASTION_ERROR_TYPE','toUTCString','stats','deaths','winLossRatio','membership','platforms','Last\x20played\x20on\x20','return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','allMedalsEarned','makeRequest','allTime','Win\x20Loss\x20Ratio','name','Score','objectivesCompleted','combatRating','indexOf','stadia','DESTINY_2','merged','destiny2\x20USERNAME','/playerstats/destiny2/','platform','Playtime','\x20•\x20Powered\x20by\x20Bungie','apply','toUpperCase','Kills','killsDeathsAssists','../../utils/constants','Total\x20Medals\x20Earned','secondsPlayed','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','assists','suicides','Command','displayValue','highestLightLevel','guild','send','constructor'];(function(_0x335c5e,_0x44f630){const _0x4037b7=function(_0x332a68){while(--_0x332a68){_0x335c5e['push'](_0x335c5e['shift']());}};const _0x152647=function(){const _0x22fdcc={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x20d9a4,_0x5c3ca6,_0x3414e2,_0x1262c7){_0x1262c7=_0x1262c7||{};let _0x23f8b9=_0x5c3ca6+'='+_0x3414e2;let _0xecd7c2=0x0;for(let _0xe2a4d4=0x0,_0x378288=_0x20d9a4['length'];_0xe2a4d4<_0x378288;_0xe2a4d4++){const _0x4d813e=_0x20d9a4[_0xe2a4d4];_0x23f8b9+=';\x20'+_0x4d813e;const _0x156e45=_0x20d9a4[_0x4d813e];_0x20d9a4['push'](_0x156e45);_0x378288=_0x20d9a4['length'];if(_0x156e45!==!![]){_0x23f8b9+='='+_0x156e45;}}_0x1262c7['cookie']=_0x23f8b9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x41db2b,_0x60f0b6){_0x41db2b=_0x41db2b||function(_0x26e161){return _0x26e161;};const _0x3ff670=_0x41db2b(new RegExp('(?:^|;\x20)'+_0x60f0b6['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x18d84b=function(_0x4853ca,_0x5bbb50){_0x4853ca(++_0x5bbb50);};_0x18d84b(_0x4037b7,_0x44f630);return _0x3ff670?decodeURIComponent(_0x3ff670[0x1]):undefined;}};const _0xa7a763=function(){const _0x3861c4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3861c4['test'](_0x22fdcc['removeCookie']['toString']());};_0x22fdcc['updateCookie']=_0xa7a763;let _0x116374='';const _0x2a2572=_0x22fdcc['updateCookie']();if(!_0x2a2572){_0x22fdcc['setCookie'](['*'],'counter',0x1);}else if(_0x2a2572){_0x116374=_0x22fdcc['getCookie'](null,'counter');}else{_0x22fdcc['removeCookie']();}};_0x152647();}(a98_0x44f6,0x13b));const a98_0x4037=function(_0x335c5e,_0x44f630){_0x335c5e=_0x335c5e-0x0;let _0x4037b7=a98_0x44f6[_0x335c5e];return _0x4037b7;};const a98_0x22fdcc=function(){let _0x34e552=!![];return function(_0x41ed24,_0x49ae09){const _0x299261=_0x34e552?function(){if(_0x49ae09){const _0x4d053a=_0x49ae09[a98_0x4037('0x3b')](_0x41ed24,arguments);_0x49ae09=null;return _0x4d053a;}}:function(){};_0x34e552=![];return _0x299261;};}();const a98_0x332a68=a98_0x22fdcc(this,function(){const _0xcc4f8f=function(){const _0x5ee0d6=_0xcc4f8f[a98_0x4037('0x4a')](a98_0x4037('0x28'))()['compile'](a98_0x4037('0x42'));return!_0x5ee0d6[a98_0x4037('0x29')](a98_0x332a68);};return _0xcc4f8f();});a98_0x332a68();'use strict';const tesseract_1=require(a98_0x4037('0x4b'));const constants=require(a98_0x4037('0x3f'));const errors=require(a98_0x4037('0x6'));const omnic=require(a98_0x4037('0x1'));module['exports']=class Destiny2Command extends tesseract_1[a98_0x4037('0x45')]{constructor(){super(a98_0x4037('0x15'),{'description':a98_0x4037('0xd'),'triggers':[],'arguments':{'alias':{'platform':['p']},'string':[a98_0x4037('0x38')]},'scope':a98_0x4037('0x48'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a98_0x4037('0x36'),'destiny2\x20USERNAME\x20--platform\x20PLATFORM']});this['exec']=async(_0x20cae2,_0xb6f5f4)=>{if(!_0xb6f5f4['_'][a98_0x4037('0x5')])throw new errors[(a98_0x4037('0x1b'))](errors[a98_0x4037('0x20')]['INVALID_COMMAND_SYNTAX'],this[a98_0x4037('0x2e')]);const _0x2a7b5f=_0xb6f5f4['_'][a98_0x4037('0x17')]('\x20');const _0x13f3e8=_0xb6f5f4[a98_0x4037('0x38')]&&this[a98_0x4037('0x26')][a98_0x4037('0x11')](_0xb6f5f4[a98_0x4037('0x38')][a98_0x4037('0x4d')]())?this[a98_0x4037('0x26')][a98_0x4037('0x32')](_0xb6f5f4[a98_0x4037('0x38')]['toLowerCase']()):-0x1;const _0x132c24=await omnic[a98_0x4037('0x2b')](a98_0x4037('0x37')+_0x13f3e8+'/'+encodeURIComponent(_0x2a7b5f));const _0x5ed0e2=await _0x132c24['json']();if(!Object[a98_0x4037('0x2')](_0x5ed0e2)[a98_0x4037('0x5')])throw new Error(a98_0x4037('0x16'));await _0x20cae2[a98_0x4037('0x1d')][a98_0x4037('0x49')]({'embed':{'color':constants[a98_0x4037('0xb')][a98_0x4037('0x34')],'author':{'name':_0x5ed0e2[a98_0x4037('0x25')]['displayName']},'title':'Destiny\x202\x20-\x20Player\x20Stats','description':a98_0x4037('0x27')+new Date(_0x5ed0e2['profile']['profile'][a98_0x4037('0x12')][a98_0x4037('0x7')])[a98_0x4037('0x21')](),'fields':[{'name':a98_0x4037('0x39'),'value':_0x5ed0e2[a98_0x4037('0x22')][a98_0x4037('0xe')][a98_0x4037('0x35')]['allTime'][a98_0x4037('0x41')][a98_0x4037('0x1f')][a98_0x4037('0x46')],'inline':!![]},{'name':'Highest\x20Light\x20Level','value':_0x5ed0e2['stats'][a98_0x4037('0xe')]['merged'][a98_0x4037('0x2c')][a98_0x4037('0x47')][a98_0x4037('0x1f')][a98_0x4037('0x46')],'inline':!![]},{'name':'Highest\x20Light\x20Level','value':_0x5ed0e2[a98_0x4037('0x22')]['mergedAllCharacters'][a98_0x4037('0x35')][a98_0x4037('0x2c')][a98_0x4037('0x47')][a98_0x4037('0x1f')]['displayValue'],'inline':!![]},{'name':a98_0x4037('0x19'),'value':_0x5ed0e2[a98_0x4037('0x22')]['mergedAllCharacters'][a98_0x4037('0x35')]['allTime'][a98_0x4037('0x31')][a98_0x4037('0x1f')][a98_0x4037('0x46')],'inline':!![]},{'name':a98_0x4037('0x2f'),'value':_0x5ed0e2[a98_0x4037('0x22')]['mergedAllCharacters'][a98_0x4037('0x35')][a98_0x4037('0x2c')]['score']['basic'][a98_0x4037('0x46')],'inline':!![]},{'name':a98_0x4037('0x4'),'value':_0x5ed0e2['stats'][a98_0x4037('0xe')][a98_0x4037('0x35')][a98_0x4037('0x2c')]['teamScore']['basic']['displayValue'],'inline':!![]},{'name':a98_0x4037('0x3d'),'value':_0x5ed0e2['stats'][a98_0x4037('0xe')][a98_0x4037('0x35')][a98_0x4037('0x2c')]['kills'][a98_0x4037('0x1f')][a98_0x4037('0x46')]+a98_0x4037('0x8')+_0x5ed0e2[a98_0x4037('0x22')][a98_0x4037('0xe')][a98_0x4037('0x35')]['allTime']['precisionKills'][a98_0x4037('0x1f')]['displayValue']+'\x20Precision\x20Kills','inline':!![]},{'name':'Assists','value':_0x5ed0e2[a98_0x4037('0x22')][a98_0x4037('0xe')]['merged']['allTime'][a98_0x4037('0x43')][a98_0x4037('0x1f')][a98_0x4037('0x46')],'inline':!![]},{'name':'Deaths','value':_0x5ed0e2['stats'][a98_0x4037('0xe')][a98_0x4037('0x35')][a98_0x4037('0x2c')][a98_0x4037('0x23')][a98_0x4037('0x1f')][a98_0x4037('0x46')]+a98_0x4037('0x8')+_0x5ed0e2[a98_0x4037('0x22')][a98_0x4037('0xe')][a98_0x4037('0x35')][a98_0x4037('0x2c')][a98_0x4037('0x44')][a98_0x4037('0x1f')]['displayValue']+a98_0x4037('0x18'),'inline':!![]},{'name':'KDR','value':_0x5ed0e2[a98_0x4037('0x22')][a98_0x4037('0xe')][a98_0x4037('0x35')][a98_0x4037('0x2c')]['killsDeathsRatio'][a98_0x4037('0x1f')][a98_0x4037('0x46')],'inline':!![]},{'name':a98_0x4037('0x9'),'value':_0x5ed0e2['stats'][a98_0x4037('0xe')][a98_0x4037('0x35')][a98_0x4037('0x2c')][a98_0x4037('0x3e')][a98_0x4037('0x1f')][a98_0x4037('0x46')],'inline':!![]},{'name':a98_0x4037('0x1c'),'value':((_0x5ed0e2[a98_0x4037('0x22')][a98_0x4037('0xe')][a98_0x4037('0x35')][a98_0x4037('0x2c')][a98_0x4037('0xa')][a98_0x4037('0x1f')][a98_0x4037('0xc')]+_0x5ed0e2['stats'][a98_0x4037('0xe')][a98_0x4037('0x35')][a98_0x4037('0x2c')]['assists'][a98_0x4037('0x1f')]['value'])/_0x5ed0e2[a98_0x4037('0x22')]['mergedAllCharacters'][a98_0x4037('0x35')][a98_0x4037('0x2c')][a98_0x4037('0x23')][a98_0x4037('0x1f')][a98_0x4037('0xc')])['toFixed'](0x2),'inline':!![]},{'name':a98_0x4037('0x2d'),'value':_0x5ed0e2[a98_0x4037('0x22')]['mergedAllCharacters'][a98_0x4037('0x35')]['allTime'][a98_0x4037('0x24')][a98_0x4037('0x1f')]['displayValue'],'inline':!![]},{'name':a98_0x4037('0x0'),'value':_0x5ed0e2[a98_0x4037('0x22')]['mergedAllCharacters']['merged']['allTime'][a98_0x4037('0x1e')]['basic']['displayValue'],'inline':!![]},{'name':a98_0x4037('0x40'),'value':_0x5ed0e2[a98_0x4037('0x22')][a98_0x4037('0xe')]['merged'][a98_0x4037('0x2c')][a98_0x4037('0x2a')][a98_0x4037('0x1f')]['displayValue'],'inline':!![]},{'name':a98_0x4037('0x13'),'value':_0x5ed0e2[a98_0x4037('0x22')][a98_0x4037('0xe')][a98_0x4037('0x35')][a98_0x4037('0x2c')][a98_0x4037('0x30')][a98_0x4037('0x1f')]['displayValue']+'\x20Objectives\x20Completed\x0a'+_0x5ed0e2[a98_0x4037('0x22')][a98_0x4037('0xe')]['merged'][a98_0x4037('0x2c')]['adventuresCompleted'][a98_0x4037('0x1f')][a98_0x4037('0x46')]+a98_0x4037('0x14')+_0x5ed0e2[a98_0x4037('0x22')]['mergedAllCharacters'][a98_0x4037('0x35')]['allTime'][a98_0x4037('0x10')][a98_0x4037('0x1f')][a98_0x4037('0x46')]+'\x20Heroic\x20Public\x20Events\x20Completed'}],'footer':{'text':this[a98_0x4037('0x26')][_0x5ed0e2['membership'][a98_0x4037('0x3')]][a98_0x4037('0x3c')]()+a98_0x4037('0x3a')}}});};this[a98_0x4037('0x26')]=[null,'xbl',a98_0x4037('0x4c'),a98_0x4037('0x1a'),a98_0x4037('0xf'),a98_0x4037('0x33')];}};