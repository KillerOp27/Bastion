const a97_0x3567=['Counter-Strike:\x20Global\x20Offensive\x20-\x20Player\x20Stats','../../utils/omnic','constructor','csgo','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Counter-Strike:\x20Global\x20Offensive\x20player\x20in\x20any\x20supported\x20platform.','return\x20/\x22\x20+\x20this\x20+\x20\x22/','INVALID_COMMAND_SYNTAX','steam','keys','BASTION_ERROR_TYPE','displayValue','\x20•\x20Powered\x20by\x20Tracker\x20Network','CSGO','toLowerCase','platformUserHandle','COLORS','../../utils/constants','data','name','guild','toFixed','stats','displayName','test','../../utils/errors','apply','overview','json','timePlayed','rankScore','DiscordError','segments','platformInfo','platform','channel','@bastion/tesseract','counterStrikeGlobalOffensive','\x20has\x20played\x20for\x20','\x20hours.','exports','length','send','avatarUrl','https://steamcommunity.com/id/','iconUrl','join','platforms','errors'];(function(_0x49863f,_0x356771){const _0x5c7a6b=function(_0x4d4cb1){while(--_0x4d4cb1){_0x49863f['push'](_0x49863f['shift']());}};const _0x595873=function(){const _0x35826c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xa25a22,_0x5ebe66,_0x4fde8b,_0x245586){_0x245586=_0x245586||{};let _0x17e5db=_0x5ebe66+'='+_0x4fde8b;let _0x264375=0x0;for(let _0x9eecda=0x0,_0x1904f3=_0xa25a22['length'];_0x9eecda<_0x1904f3;_0x9eecda++){const _0x2198eb=_0xa25a22[_0x9eecda];_0x17e5db+=';\x20'+_0x2198eb;const _0x5daaeb=_0xa25a22[_0x2198eb];_0xa25a22['push'](_0x5daaeb);_0x1904f3=_0xa25a22['length'];if(_0x5daaeb!==!![]){_0x17e5db+='='+_0x5daaeb;}}_0x245586['cookie']=_0x17e5db;},'removeCookie':function(){return'dev';},'getCookie':function(_0x25f6a7,_0x201d2a){_0x25f6a7=_0x25f6a7||function(_0x44b49c){return _0x44b49c;};const _0x23f074=_0x25f6a7(new RegExp('(?:^|;\x20)'+_0x201d2a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3fbfc2=function(_0x57eb06,_0x5b606c){_0x57eb06(++_0x5b606c);};_0x3fbfc2(_0x5c7a6b,_0x356771);return _0x23f074?decodeURIComponent(_0x23f074[0x1]):undefined;}};const _0x3a7444=function(){const _0x47e054=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x47e054['test'](_0x35826c['removeCookie']['toString']());};_0x35826c['updateCookie']=_0x3a7444;let _0x456ebe='';const _0x8fec62=_0x35826c['updateCookie']();if(!_0x8fec62){_0x35826c['setCookie'](['*'],'counter',0x1);}else if(_0x8fec62){_0x456ebe=_0x35826c['getCookie'](null,'counter');}else{_0x35826c['removeCookie']();}};_0x595873();}(a97_0x3567,0x199));const a97_0x5c7a=function(_0x49863f,_0x356771){_0x49863f=_0x49863f-0x0;let _0x5c7a6b=a97_0x3567[_0x49863f];return _0x5c7a6b;};const a97_0x35826c=function(){let _0x55d548=!![];return function(_0x534dfb,_0x32ab60){const _0x4a78a0=_0x55d548?function(){if(_0x32ab60){const _0x5f51a2=_0x32ab60[a97_0x5c7a('0x0')](_0x534dfb,arguments);_0x32ab60=null;return _0x5f51a2;}}:function(){};_0x55d548=![];return _0x4a78a0;};}();const a97_0x4d4cb1=a97_0x35826c(this,function(){const _0x11b417=function(){const _0x53f449=_0x11b417[a97_0x5c7a('0x19')](a97_0x5c7a('0x1c'))()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x53f449[a97_0x5c7a('0x2e')](a97_0x4d4cb1);};return _0x11b417();});a97_0x4d4cb1();'use strict';const tesseract_1=require(a97_0x5c7a('0xa'));const constants=require(a97_0x5c7a('0x27'));const errors=require(a97_0x5c7a('0x2f'));const omnic=require(a97_0x5c7a('0x18'));module[a97_0x5c7a('0xe')]=class CounterStrikeGlobalOffensiveCommand extends tesseract_1['Command']{constructor(){super(a97_0x5c7a('0xb'),{'description':a97_0x5c7a('0x1b'),'triggers':[a97_0x5c7a('0x1a')],'arguments':{'alias':{'platform':['p']},'string':[a97_0x5c7a('0x8')]},'scope':a97_0x5c7a('0x2a'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['counterStrikeGlobalOffensive\x20USERNAME','counterStrikeGlobalOffensive\x20USERNAME\x20--platform\x20PLATFORM']});this['exec']=async(_0x58ab29,_0x413b1)=>{if(!_0x413b1['_'][a97_0x5c7a('0xf')])throw new errors[(a97_0x5c7a('0x5'))](errors[a97_0x5c7a('0x20')][a97_0x5c7a('0x1d')],this[a97_0x5c7a('0x29')]);const _0x1a4d4b=_0x413b1['_'][a97_0x5c7a('0x14')]('\x20');const _0x398af8=_0x413b1[a97_0x5c7a('0x8')]&&this[a97_0x5c7a('0x15')]['includes'](_0x413b1[a97_0x5c7a('0x8')][a97_0x5c7a('0x24')]())?_0x413b1[a97_0x5c7a('0x8')][a97_0x5c7a('0x24')]():this['platforms'][0x0];const _0x5e405e=await omnic['makeRequest']('/playerstats/csgo/'+_0x398af8+'/'+encodeURIComponent(_0x1a4d4b));const _0x28a302=await _0x5e405e[a97_0x5c7a('0x2')]();if(_0x28a302[a97_0x5c7a('0x16')])throw new Error(_0x28a302[a97_0x5c7a('0x16')][0x0]['message']);const _0x3fa965=_0x28a302['data'][a97_0x5c7a('0x6')]['find'](_0x170b31=>_0x170b31['type']===a97_0x5c7a('0x1'));await _0x58ab29[a97_0x5c7a('0x9')][a97_0x5c7a('0x10')]({'embed':{'color':constants[a97_0x5c7a('0x26')][a97_0x5c7a('0x23')],'author':{'name':_0x28a302[a97_0x5c7a('0x28')]['platformInfo'][a97_0x5c7a('0x25')],'url':a97_0x5c7a('0x12')+_0x28a302[a97_0x5c7a('0x28')]['platformInfo'][a97_0x5c7a('0x25')]},'title':a97_0x5c7a('0x17'),'description':_0x3fa965[a97_0x5c7a('0x2c')][a97_0x5c7a('0x3')]?_0x28a302[a97_0x5c7a('0x28')][a97_0x5c7a('0x7')][a97_0x5c7a('0x25')]+a97_0x5c7a('0xc')+(_0x3fa965[a97_0x5c7a('0x2c')][a97_0x5c7a('0x3')]['value']/0x3c/0x3c)[a97_0x5c7a('0x2b')](0x2)+a97_0x5c7a('0xd'):'','fields':Object[a97_0x5c7a('0x1f')](_0x3fa965[a97_0x5c7a('0x2c')])['filter'](_0x4c474e=>_0x4c474e!==a97_0x5c7a('0x3'))['map'](_0x16c2cf=>({'name':_0x3fa965[a97_0x5c7a('0x2c')][_0x16c2cf][a97_0x5c7a('0x2d')],'value':_0x3fa965[a97_0x5c7a('0x2c')][_0x16c2cf][a97_0x5c7a('0x21')],'inline':!![]})),'thumbnail':{'url':_0x3fa965[a97_0x5c7a('0x2c')][a97_0x5c7a('0x4')]?_0x3fa965['stats']['rankScore']['metadata'][a97_0x5c7a('0x13')]:_0x28a302['data']['platformInfo'][a97_0x5c7a('0x11')]},'footer':{'text':_0x398af8['toUpperCase']()+a97_0x5c7a('0x22')}}});};this[a97_0x5c7a('0x15')]=[a97_0x5c7a('0x1e')];}};