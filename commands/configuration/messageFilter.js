const a26_0x5d32=['It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Message\x20Filter\x20in\x20the\x20server.\x20When\x20enabled,\x20it\x20filters\x20the\x20messages\x20that\x20matches\x20the\x20patterns\x20specified\x20by\x20you.\x20And\x20it\x20also\x20allows\x20you\x20to\x20configure\x20if\x20violation\x20of\x20this\x20filter\x20should\x20be\x20considered\x20an\x20infraction.','RED','document','messageFilter\x20--clear','tag','info','GREEN','clear','exports','Constants','compile','infraction','locale','join','client','MANAGE_GUILD','guild','getString','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exec','filterInfractionDisabled','messageFilter\x20--infraction','messageFilter\x20--enable','messageFilterEnabled','disable','list','concat','@bastion/tesseract','catch','messageFilter\x20--disable','filters','messageFilterDisabled','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','enable','length','constructor','patterns','Command','messageFilter','COLORS','author','save','enabled','language','send','../../utils/arrays','messageFilterDisable','channel'];(function(_0x4dddf8,_0x5d321d){const _0x809459=function(_0x4058cc){while(--_0x4058cc){_0x4dddf8['push'](_0x4dddf8['shift']());}};const _0x26340b=function(){const _0x51573f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x397814,_0x3dcc21,_0x419bb1,_0x5b960f){_0x5b960f=_0x5b960f||{};let _0x189f02=_0x3dcc21+'='+_0x419bb1;let _0xe344fb=0x0;for(let _0x116f48=0x0,_0x1ecd5f=_0x397814['length'];_0x116f48<_0x1ecd5f;_0x116f48++){const _0x4e3b79=_0x397814[_0x116f48];_0x189f02+=';\x20'+_0x4e3b79;const _0x4740ad=_0x397814[_0x4e3b79];_0x397814['push'](_0x4740ad);_0x1ecd5f=_0x397814['length'];if(_0x4740ad!==!![]){_0x189f02+='='+_0x4740ad;}}_0x5b960f['cookie']=_0x189f02;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3725fc,_0xf77dfc){_0x3725fc=_0x3725fc||function(_0xf98337){return _0xf98337;};const _0x4c2e9d=_0x3725fc(new RegExp('(?:^|;\x20)'+_0xf77dfc['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x347019=function(_0x3ba24d,_0x12667d){_0x3ba24d(++_0x12667d);};_0x347019(_0x809459,_0x5d321d);return _0x4c2e9d?decodeURIComponent(_0x4c2e9d[0x1]):undefined;}};const _0x193597=function(){const _0x4d7260=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4d7260['test'](_0x51573f['removeCookie']['toString']());};_0x51573f['updateCookie']=_0x193597;let _0x52c32b='';const _0xab0001=_0x51573f['updateCookie']();if(!_0xab0001){_0x51573f['setCookie'](['*'],'counter',0x1);}else if(_0xab0001){_0x52c32b=_0x51573f['getCookie'](null,'counter');}else{_0x51573f['removeCookie']();}};_0x26340b();}(a26_0x5d32,0x1ab));const a26_0x8094=function(_0x4dddf8,_0x5d321d){_0x4dddf8=_0x4dddf8-0x0;let _0x809459=a26_0x5d32[_0x4dddf8];return _0x809459;};const a26_0x51573f=function(){let _0x5beef5=!![];return function(_0x35e79d,_0x34b960){const _0x53588f=_0x5beef5?function(){if(_0x34b960){const _0x1164de=_0x34b960['apply'](_0x35e79d,arguments);_0x34b960=null;return _0x1164de;}}:function(){};_0x5beef5=![];return _0x53588f;};}();const a26_0x4058cc=a26_0x51573f(this,function(){const _0x44f5eb=function(){const _0x3974c7=_0x44f5eb[a26_0x8094('0x28')](a26_0x8094('0x17'))()[a26_0x8094('0xf')](a26_0x8094('0x25'));return!_0x3974c7['test'](a26_0x4058cc);};return _0x44f5eb();});a26_0x4058cc();'use strict';const tesseract_1=require(a26_0x8094('0x20'));const arrays=require(a26_0x8094('0x2'));module[a26_0x8094('0xd')]=class MessageFilterCommand extends tesseract_1[a26_0x8094('0x2a')]{constructor(){super('messageFilter',{'description':a26_0x8094('0x5'),'triggers':[],'arguments':{'alias':{'clear':['c'],'disable':['d'],'enable':['e'],'infraction':['i'],'list':['l']},'boolean':[a26_0x8094('0xc'),a26_0x8094('0x1d'),'enable',a26_0x8094('0x10'),a26_0x8094('0x1e')]},'scope':a26_0x8094('0x15'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a26_0x8094('0x14')],'syntax':['messageFilter','messageFilter\x20PATTERN',a26_0x8094('0x8'),a26_0x8094('0x1b'),a26_0x8094('0x22'),a26_0x8094('0x1a'),'messageFilter\x20--no-infraction']});this[a26_0x8094('0x18')]=async(_0x3015f9,_0x1ae73d)=>{const _0x3ceaaf=_0x3015f9['guild'];const _0x2704b6=_0x1ae73d['_'][a26_0x8094('0x27')]?[_0x1ae73d['_'][a26_0x8094('0x12')]('\x20')]:[];_0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')]={..._0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')],'messageFilter':{'enabled':_0x1ae73d['disable']?undefined:_0x1ae73d[a26_0x8094('0x26')]||_0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')]&&_0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')][a26_0x8094('0x2b')]&&_0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')][a26_0x8094('0x2b')][a26_0x8094('0x2f')]?!![]:undefined,'patterns':_0x1ae73d[a26_0x8094('0xc')]?undefined:_0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')]&&_0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')][a26_0x8094('0x2b')]&&_0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')][a26_0x8094('0x2b')][a26_0x8094('0x29')]?_0x2704b6[a26_0x8094('0x27')]?_0x3ceaaf['document']['filters'][a26_0x8094('0x2b')]['patterns'][a26_0x8094('0x1f')](_0x2704b6):_0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')][a26_0x8094('0x2b')]['patterns']:_0x2704b6[a26_0x8094('0x27')]?_0x2704b6:undefined,'infraction':_0x1ae73d[a26_0x8094('0x10')]===![]?undefined:_0x1ae73d[a26_0x8094('0x10')]||_0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')]&&_0x3ceaaf['document'][a26_0x8094('0x23')][a26_0x8094('0x2b')]&&_0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')][a26_0x8094('0x2b')][a26_0x8094('0x10')]?!![]:undefined}};await _0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x2e')]();await _0x3015f9[a26_0x8094('0x4')][a26_0x8094('0x1')]({'embed':{'color':_0x1ae73d[a26_0x8094('0x26')]?tesseract_1[a26_0x8094('0xe')][a26_0x8094('0x2c')][a26_0x8094('0xb')]:_0x1ae73d[a26_0x8094('0x1d')]?tesseract_1[a26_0x8094('0xe')][a26_0x8094('0x2c')][a26_0x8094('0x6')]:tesseract_1[a26_0x8094('0xe')][a26_0x8094('0x2c')]['IRIS'],'description':this[a26_0x8094('0x13')]['locale'][a26_0x8094('0x16')](_0x3015f9[a26_0x8094('0x15')][a26_0x8094('0x7')][a26_0x8094('0x0')],a26_0x8094('0xa'),_0x1ae73d[a26_0x8094('0x26')]?'messageFilterEnable':_0x1ae73d[a26_0x8094('0x1d')]?a26_0x8094('0x3'):_0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')][a26_0x8094('0x2b')]['enabled']?a26_0x8094('0x1c'):a26_0x8094('0x24'),_0x3015f9[a26_0x8094('0x2d')][a26_0x8094('0x9')]),'fields':_0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')]['messageFilter']['enabled']||_0x2704b6[a26_0x8094('0x27')]?[{'name':_0x2704b6['length']?'Filter\x20Pattern\x20Added':'Filter\x20Patterns','value':_0x2704b6[a26_0x8094('0x27')]?_0x2704b6[0x0]:_0x3ceaaf['document'][a26_0x8094('0x23')]['messageFilter']['patterns']?arrays['wrap'](_0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')][a26_0x8094('0x2b')]['patterns'],'`')['join'](',\x20'):'-'}]:[],'footer':{'text':_0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')][a26_0x8094('0x2b')][a26_0x8094('0x2f')]?this[a26_0x8094('0x13')][a26_0x8094('0x11')][a26_0x8094('0x16')](_0x3015f9[a26_0x8094('0x15')]['document'][a26_0x8094('0x0')],a26_0x8094('0xa'),_0x3ceaaf[a26_0x8094('0x7')][a26_0x8094('0x23')]['messageFilter'][a26_0x8094('0x10')]?'filterInfractionEnabled':a26_0x8094('0x19')):''}}})[a26_0x8094('0x21')](()=>{});};}};