const a538_0x49d3=['membershipType','platforms','Playtime','secondsPlayed','KDR','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Destiny\x202\x20player\x20in\x20any\x20supported\x20platform.','displayValue','heroicPublicEventsCompleted','teamScore','basic','Highest\x20Light\x20Level','@bastion/tesseract','PLAYER_DOESNT_EXIST','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','objectivesCompleted','\x20Adventures\x20Completed\x0a','exec','profile','killsDeathsRatio','channel','stats','adventuresCompleted','\x20/\x20','allMedalsEarned','includes','\x20Precision\x20Kills','xbl','assists','\x20Heroic\x20Public\x20Events\x20Completed','BASTION_ERROR_TYPE','toUTCString','Command','Last\x20played\x20on\x20','destiny2\x20USERNAME','Destiny\x202\x20-\x20Player\x20Stats','constructor','COLORS','value','makeRequest','psn','Deaths','mergedAllCharacters','Combat\x20Rating','membership','INVALID_COMMAND_SYNTAX','toFixed','indexOf','send','name','platform','weaponBestType','../../utils/omnic','return\x20/\x22\x20+\x20this\x20+\x20\x22/','deaths','\x20Objectives\x20Completed\x0a','merged','blizzard','Extras','\x20Suicides','KAD','combatRating','exports','highestLightLevel','length','Win\x20Loss\x20Ratio','dateLastPlayed','stadia','toLowerCase','precisionKills','../../utils/errors','DiscordError','allTime'];(function(_0x3711df,_0x49d37a){const _0x46f25d=function(_0x542c8d){while(--_0x542c8d){_0x3711df['push'](_0x3711df['shift']());}};const _0x8de517=function(){const _0x5d0034={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1919d8,_0x512528,_0x41523a,_0x593f15){_0x593f15=_0x593f15||{};let _0x8ca18=_0x512528+'='+_0x41523a;let _0x5afd7f=0x0;for(let _0x42831c=0x0,_0x33080c=_0x1919d8['length'];_0x42831c<_0x33080c;_0x42831c++){const _0x41dcc7=_0x1919d8[_0x42831c];_0x8ca18+=';\x20'+_0x41dcc7;const _0x3e0560=_0x1919d8[_0x41dcc7];_0x1919d8['push'](_0x3e0560);_0x33080c=_0x1919d8['length'];if(_0x3e0560!==!![]){_0x8ca18+='='+_0x3e0560;}}_0x593f15['cookie']=_0x8ca18;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4e2f6b,_0xf6f716){_0x4e2f6b=_0x4e2f6b||function(_0x438200){return _0x438200;};const _0x3f4411=_0x4e2f6b(new RegExp('(?:^|;\x20)'+_0xf6f716['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5da258=function(_0x5d7589,_0x44464d){_0x5d7589(++_0x44464d);};_0x5da258(_0x46f25d,_0x49d37a);return _0x3f4411?decodeURIComponent(_0x3f4411[0x1]):undefined;}};const _0x2f33a0=function(){const _0x32358f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x32358f['test'](_0x5d0034['removeCookie']['toString']());};_0x5d0034['updateCookie']=_0x2f33a0;let _0x5e5fc4='';const _0x329003=_0x5d0034['updateCookie']();if(!_0x329003){_0x5d0034['setCookie'](['*'],'counter',0x1);}else if(_0x329003){_0x5e5fc4=_0x5d0034['getCookie'](null,'counter');}else{_0x5d0034['removeCookie']();}};_0x8de517();}(a538_0x49d3,0x14b));const a538_0x46f2=function(_0x3711df,_0x49d37a){_0x3711df=_0x3711df-0x0;let _0x46f25d=a538_0x49d3[_0x3711df];return _0x46f25d;};const a538_0x5d0034=function(){let _0x33bbb1=!![];return function(_0x3f182c,_0x41950c){const _0x5955d1=_0x33bbb1?function(){if(_0x41950c){const _0x48842a=_0x41950c['apply'](_0x3f182c,arguments);_0x41950c=null;return _0x48842a;}}:function(){};_0x33bbb1=![];return _0x5955d1;};}();const a538_0x542c8d=a538_0x5d0034(this,function(){const _0xcec1ea=function(){const _0x3a25ec=_0xcec1ea[a538_0x46f2('0x40')](a538_0x46f2('0x9'))()['compile'](a538_0x46f2('0x2a'));return!_0x3a25ec['test'](a538_0x542c8d);};return _0xcec1ea();});a538_0x542c8d();'use strict';const tesseract_1=require(a538_0x46f2('0x28'));const constants=require('../../utils/constants');const errors=require(a538_0x46f2('0x1a'));const omnic=require(a538_0x46f2('0x8'));module[a538_0x46f2('0x12')]=class Destiny2Command extends tesseract_1[a538_0x46f2('0x3c')]{constructor(){super('destiny2',{'description':a538_0x46f2('0x22'),'triggers':[],'arguments':{'alias':{'platform':['p']},'string':[a538_0x46f2('0x6')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a538_0x46f2('0x3e'),'destiny2\x20USERNAME\x20--platform\x20PLATFORM']});this[a538_0x46f2('0x2d')]=async(_0x30f09c,_0x1fec9b)=>{if(!_0x1fec9b['_'][a538_0x46f2('0x14')])throw new errors[(a538_0x46f2('0x1b'))](errors[a538_0x46f2('0x3a')][a538_0x46f2('0x1')],this[a538_0x46f2('0x5')]);const _0x5efb5f=_0x1fec9b['_']['join']('\x20');const _0x323a02=_0x1fec9b[a538_0x46f2('0x6')]&&this[a538_0x46f2('0x1e')][a538_0x46f2('0x35')](_0x1fec9b[a538_0x46f2('0x6')][a538_0x46f2('0x18')]())?this['platforms'][a538_0x46f2('0x3')](_0x1fec9b[a538_0x46f2('0x6')]['toLowerCase']()):-0x1;const _0x3a1752=await omnic[a538_0x46f2('0x43')]('/playerstats/destiny2/'+_0x323a02+'/'+encodeURIComponent(_0x5efb5f));const _0x4ebff7=await _0x3a1752['json']();if(!Object['keys'](_0x4ebff7)[a538_0x46f2('0x14')])throw new Error(a538_0x46f2('0x29'));await _0x30f09c[a538_0x46f2('0x30')][a538_0x46f2('0x4')]({'embed':{'color':constants[a538_0x46f2('0x41')]['DESTINY_2'],'author':{'name':_0x4ebff7[a538_0x46f2('0x0')]['displayName']},'title':a538_0x46f2('0x3f'),'description':a538_0x46f2('0x3d')+new Date(_0x4ebff7[a538_0x46f2('0x2e')][a538_0x46f2('0x2e')]['data'][a538_0x46f2('0x16')])[a538_0x46f2('0x3b')](),'fields':[{'name':a538_0x46f2('0x1f'),'value':_0x4ebff7['stats'][a538_0x46f2('0x46')][a538_0x46f2('0xc')][a538_0x46f2('0x1c')][a538_0x46f2('0x20')][a538_0x46f2('0x26')][a538_0x46f2('0x23')],'inline':!![]},{'name':a538_0x46f2('0x27'),'value':_0x4ebff7[a538_0x46f2('0x31')][a538_0x46f2('0x46')][a538_0x46f2('0xc')]['allTime'][a538_0x46f2('0x13')]['basic'][a538_0x46f2('0x23')],'inline':!![]},{'name':a538_0x46f2('0x27'),'value':_0x4ebff7['stats'][a538_0x46f2('0x46')][a538_0x46f2('0xc')][a538_0x46f2('0x1c')][a538_0x46f2('0x13')]['basic'][a538_0x46f2('0x23')],'inline':!![]},{'name':a538_0x46f2('0x47'),'value':_0x4ebff7[a538_0x46f2('0x31')][a538_0x46f2('0x46')][a538_0x46f2('0xc')][a538_0x46f2('0x1c')][a538_0x46f2('0x11')]['basic']['displayValue'],'inline':!![]},{'name':'Score','value':_0x4ebff7[a538_0x46f2('0x31')]['mergedAllCharacters'][a538_0x46f2('0xc')][a538_0x46f2('0x1c')]['score'][a538_0x46f2('0x26')]['displayValue'],'inline':!![]},{'name':'Team\x20Score','value':_0x4ebff7[a538_0x46f2('0x31')][a538_0x46f2('0x46')][a538_0x46f2('0xc')][a538_0x46f2('0x1c')][a538_0x46f2('0x25')]['basic'][a538_0x46f2('0x23')],'inline':!![]},{'name':'Kills','value':_0x4ebff7[a538_0x46f2('0x31')]['mergedAllCharacters'][a538_0x46f2('0xc')][a538_0x46f2('0x1c')]['kills'][a538_0x46f2('0x26')]['displayValue']+a538_0x46f2('0x33')+_0x4ebff7['stats'][a538_0x46f2('0x46')][a538_0x46f2('0xc')][a538_0x46f2('0x1c')][a538_0x46f2('0x19')][a538_0x46f2('0x26')]['displayValue']+a538_0x46f2('0x36'),'inline':!![]},{'name':'Assists','value':_0x4ebff7[a538_0x46f2('0x31')]['mergedAllCharacters'][a538_0x46f2('0xc')][a538_0x46f2('0x1c')][a538_0x46f2('0x38')][a538_0x46f2('0x26')]['displayValue'],'inline':!![]},{'name':a538_0x46f2('0x45'),'value':_0x4ebff7[a538_0x46f2('0x31')][a538_0x46f2('0x46')][a538_0x46f2('0xc')]['allTime']['deaths'][a538_0x46f2('0x26')][a538_0x46f2('0x23')]+a538_0x46f2('0x33')+_0x4ebff7['stats'][a538_0x46f2('0x46')]['merged']['allTime']['suicides'][a538_0x46f2('0x26')]['displayValue']+a538_0x46f2('0xf'),'inline':!![]},{'name':a538_0x46f2('0x21'),'value':_0x4ebff7[a538_0x46f2('0x31')]['mergedAllCharacters'][a538_0x46f2('0xc')][a538_0x46f2('0x1c')][a538_0x46f2('0x2f')]['basic'][a538_0x46f2('0x23')],'inline':!![]},{'name':'KDA','value':_0x4ebff7[a538_0x46f2('0x31')][a538_0x46f2('0x46')]['merged']['allTime']['killsDeathsAssists'][a538_0x46f2('0x26')][a538_0x46f2('0x23')],'inline':!![]},{'name':a538_0x46f2('0x10'),'value':((_0x4ebff7[a538_0x46f2('0x31')][a538_0x46f2('0x46')][a538_0x46f2('0xc')][a538_0x46f2('0x1c')]['kills'][a538_0x46f2('0x26')][a538_0x46f2('0x42')]+_0x4ebff7[a538_0x46f2('0x31')][a538_0x46f2('0x46')]['merged'][a538_0x46f2('0x1c')][a538_0x46f2('0x38')][a538_0x46f2('0x26')]['value'])/_0x4ebff7[a538_0x46f2('0x31')][a538_0x46f2('0x46')]['merged']['allTime'][a538_0x46f2('0xa')]['basic'][a538_0x46f2('0x42')])[a538_0x46f2('0x2')](0x2),'inline':!![]},{'name':a538_0x46f2('0x15'),'value':_0x4ebff7['stats']['mergedAllCharacters'][a538_0x46f2('0xc')][a538_0x46f2('0x1c')]['winLossRatio'][a538_0x46f2('0x26')]['displayValue'],'inline':!![]},{'name':'Best\x20Weapon\x20Type','value':_0x4ebff7[a538_0x46f2('0x31')][a538_0x46f2('0x46')][a538_0x46f2('0xc')][a538_0x46f2('0x1c')][a538_0x46f2('0x7')][a538_0x46f2('0x26')]['displayValue'],'inline':!![]},{'name':'Total\x20Medals\x20Earned','value':_0x4ebff7[a538_0x46f2('0x31')]['mergedAllCharacters'][a538_0x46f2('0xc')][a538_0x46f2('0x1c')][a538_0x46f2('0x34')][a538_0x46f2('0x26')][a538_0x46f2('0x23')],'inline':!![]},{'name':a538_0x46f2('0xe'),'value':_0x4ebff7[a538_0x46f2('0x31')][a538_0x46f2('0x46')][a538_0x46f2('0xc')][a538_0x46f2('0x1c')][a538_0x46f2('0x2b')][a538_0x46f2('0x26')][a538_0x46f2('0x23')]+a538_0x46f2('0xb')+_0x4ebff7['stats']['mergedAllCharacters'][a538_0x46f2('0xc')][a538_0x46f2('0x1c')][a538_0x46f2('0x32')]['basic'][a538_0x46f2('0x23')]+a538_0x46f2('0x2c')+_0x4ebff7[a538_0x46f2('0x31')][a538_0x46f2('0x46')][a538_0x46f2('0xc')]['allTime'][a538_0x46f2('0x24')]['basic'][a538_0x46f2('0x23')]+a538_0x46f2('0x39')}],'footer':{'text':this[a538_0x46f2('0x1e')][_0x4ebff7[a538_0x46f2('0x0')][a538_0x46f2('0x1d')]]['toUpperCase']()+'\x20•\x20Powered\x20by\x20Bungie'}}});};this['platforms']=[null,a538_0x46f2('0x37'),a538_0x46f2('0x44'),'steam',a538_0x46f2('0xd'),a538_0x46f2('0x17')];}};