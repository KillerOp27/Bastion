const a552_0x1c1c=['BASTION_ERROR_TYPE','length','json','@bastion/tesseract','logo','DiscordError','exports','description','../../utils/errors','COLORS','join','Constants','Cryptocurrency','name','cryptocurrency\x20SYMBOL','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','It\x20allows\x20you\x20to\x20see\x20some\x20information\x20on\x20the\x20specified\x20cryptocurrency.','error_code','Command','cryptocurrency','makeRequest','exec','guild','error_message','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../utils/omnic','INVALID_COMMAND_SYNTAX'];(function(_0x68d97d,_0x1c1cdc){const _0x5bed9e=function(_0x3a5ef6){while(--_0x3a5ef6){_0x68d97d['push'](_0x68d97d['shift']());}};const _0x1cddfb=function(){const _0x7d3eaf={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1899cd,_0x4a1f3a,_0x4406c2,_0x48cfbc){_0x48cfbc=_0x48cfbc||{};let _0x14b130=_0x4a1f3a+'='+_0x4406c2;let _0x1cf368=0x0;for(let _0x2aef8f=0x0,_0x45e5d3=_0x1899cd['length'];_0x2aef8f<_0x45e5d3;_0x2aef8f++){const _0x2e6907=_0x1899cd[_0x2aef8f];_0x14b130+=';\x20'+_0x2e6907;const _0x3ee887=_0x1899cd[_0x2e6907];_0x1899cd['push'](_0x3ee887);_0x45e5d3=_0x1899cd['length'];if(_0x3ee887!==!![]){_0x14b130+='='+_0x3ee887;}}_0x48cfbc['cookie']=_0x14b130;},'removeCookie':function(){return'dev';},'getCookie':function(_0x15befa,_0x38cab4){_0x15befa=_0x15befa||function(_0x35bc82){return _0x35bc82;};const _0x33c1fd=_0x15befa(new RegExp('(?:^|;\x20)'+_0x38cab4['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0xaf0b65=function(_0x2d3ab3,_0xade2e6){_0x2d3ab3(++_0xade2e6);};_0xaf0b65(_0x5bed9e,_0x1c1cdc);return _0x33c1fd?decodeURIComponent(_0x33c1fd[0x1]):undefined;}};const _0x369a62=function(){const _0x234c8f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x234c8f['test'](_0x7d3eaf['removeCookie']['toString']());};_0x7d3eaf['updateCookie']=_0x369a62;let _0x5cd7f7='';const _0x152c39=_0x7d3eaf['updateCookie']();if(!_0x152c39){_0x7d3eaf['setCookie'](['*'],'counter',0x1);}else if(_0x152c39){_0x5cd7f7=_0x7d3eaf['getCookie'](null,'counter');}else{_0x7d3eaf['removeCookie']();}};_0x1cddfb();}(a552_0x1c1c,0x7f));const a552_0x5bed=function(_0x68d97d,_0x1c1cdc){_0x68d97d=_0x68d97d-0x0;let _0x5bed9e=a552_0x1c1c[_0x68d97d];return _0x5bed9e;};const a552_0x7d3eaf=function(){let _0x4470c8=!![];return function(_0x493348,_0x53c36f){const _0x43e228=_0x4470c8?function(){if(_0x53c36f){const _0x44e9af=_0x53c36f['apply'](_0x493348,arguments);_0x53c36f=null;return _0x44e9af;}}:function(){};_0x4470c8=![];return _0x43e228;};}();const a552_0x3a5ef6=a552_0x7d3eaf(this,function(){const _0x17e08e=function(){const _0x460054=_0x17e08e[a552_0x5bed('0x1')](a552_0x5bed('0xa'))()['compile'](a552_0x5bed('0x0'));return!_0x460054['test'](a552_0x3a5ef6);};return _0x17e08e();});a552_0x3a5ef6();'use strict';const tesseract_1=require(a552_0x5bed('0x10'));const errors=require(a552_0x5bed('0x15'));const omnic=require(a552_0x5bed('0xb'));module[a552_0x5bed('0x13')]=class CryptocurrencyCommand extends tesseract_1[a552_0x5bed('0x4')]{constructor(){super(a552_0x5bed('0x5'),{'description':a552_0x5bed('0x2'),'triggers':[],'arguments':{},'scope':a552_0x5bed('0x8'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a552_0x5bed('0x1b')]});this[a552_0x5bed('0x7')]=async(_0x247d60,_0x390260)=>{if(!_0x390260['_'][a552_0x5bed('0xe')])throw new errors[(a552_0x5bed('0x12'))](errors[a552_0x5bed('0xd')][a552_0x5bed('0xc')],this['name']);const _0x3fecb3=_0x390260['_'][a552_0x5bed('0x17')]('\x20');const _0x4f0122=await omnic[a552_0x5bed('0x6')]('/currencies/crypto/'+encodeURIComponent(_0x3fecb3));const {status,data}=await _0x4f0122[a552_0x5bed('0xf')]();if(status[a552_0x5bed('0x3')]!==0x0)throw new Error(status[a552_0x5bed('0x9')]);const _0x40befb=Object['values'](data)[0x0];await _0x247d60['channel']['send']({'embed':{'color':tesseract_1[a552_0x5bed('0x18')][a552_0x5bed('0x16')]['IRIS'],'author':{'name':a552_0x5bed('0x19')},'title':_0x40befb[a552_0x5bed('0x1a')]+'\x20('+_0x40befb['symbol']+')','description':_0x40befb[a552_0x5bed('0x14')],'thumbnail':{'url':_0x40befb[a552_0x5bed('0x11')]},'footer':{'text':'Powered\x20by\x20CoinMarketCap\x20•\x20Added'},'timestamp':new Date(_0x40befb['date_added'])}});};}};