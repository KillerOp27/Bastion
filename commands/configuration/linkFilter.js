const a463_0x7e83=['enable','filters','channel','filterInfractionDisabled','COLORS','catch','Constants','linkFilter','return\x20/\x22\x20+\x20this\x20+\x20\x22/','language','RED','client','document','locale','exports','save','It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Link\x20Filter\x20in\x20the\x20server.\x20And\x20it\x20also\x20allows\x20you\x20to\x20configure\x20if\x20violation\x20of\x20this\x20filter\x20should\x20be\x20considered\x20an\x20infraction.','info','linkFilterEnable','linkFilter\x20--infraction','infraction','getString','enabled','tag','linkFilter\x20--no-infraction','send','guild','MANAGE_GUILD','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','IRIS','disable','exec'];(function(_0x516d9f,_0x7e83b6){const _0x44587a=function(_0x5aeb20){while(--_0x5aeb20){_0x516d9f['push'](_0x516d9f['shift']());}};const _0x335ce5=function(){const _0x5eb905={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2bd4a6,_0x58374b,_0x401dc6,_0x4b1a94){_0x4b1a94=_0x4b1a94||{};let _0x5a9543=_0x58374b+'='+_0x401dc6;let _0x40e840=0x0;for(let _0x4f32f2=0x0,_0x700681=_0x2bd4a6['length'];_0x4f32f2<_0x700681;_0x4f32f2++){const _0x266c16=_0x2bd4a6[_0x4f32f2];_0x5a9543+=';\x20'+_0x266c16;const _0x24a278=_0x2bd4a6[_0x266c16];_0x2bd4a6['push'](_0x24a278);_0x700681=_0x2bd4a6['length'];if(_0x24a278!==!![]){_0x5a9543+='='+_0x24a278;}}_0x4b1a94['cookie']=_0x5a9543;},'removeCookie':function(){return'dev';},'getCookie':function(_0x475a7f,_0xd5049b){_0x475a7f=_0x475a7f||function(_0xb6f2a){return _0xb6f2a;};const _0x271c88=_0x475a7f(new RegExp('(?:^|;\x20)'+_0xd5049b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3a8336=function(_0x53f05b,_0x54d99b){_0x53f05b(++_0x54d99b);};_0x3a8336(_0x44587a,_0x7e83b6);return _0x271c88?decodeURIComponent(_0x271c88[0x1]):undefined;}};const _0x594658=function(){const _0x3089f9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3089f9['test'](_0x5eb905['removeCookie']['toString']());};_0x5eb905['updateCookie']=_0x594658;let _0x5c8ffc='';const _0x45e832=_0x5eb905['updateCookie']();if(!_0x45e832){_0x5eb905['setCookie'](['*'],'counter',0x1);}else if(_0x45e832){_0x5c8ffc=_0x5eb905['getCookie'](null,'counter');}else{_0x5eb905['removeCookie']();}};_0x335ce5();}(a463_0x7e83,0x1ba));const a463_0x4458=function(_0x516d9f,_0x7e83b6){_0x516d9f=_0x516d9f-0x0;let _0x44587a=a463_0x7e83[_0x516d9f];return _0x44587a;};const a463_0x5eb905=function(){let _0x568db5=!![];return function(_0x42ba97,_0x2814cc){const _0x25f2a1=_0x568db5?function(){if(_0x2814cc){const _0x3611b0=_0x2814cc['apply'](_0x42ba97,arguments);_0x2814cc=null;return _0x3611b0;}}:function(){};_0x568db5=![];return _0x25f2a1;};}();const a463_0x5aeb20=a463_0x5eb905(this,function(){const _0x3a408f=function(){const _0x26a95c=_0x3a408f[a463_0x4458('0x10')](a463_0x4458('0x1c'))()['compile'](a463_0x4458('0xf'));return!_0x26a95c['test'](a463_0x5aeb20);};return _0x3a408f();});a463_0x5aeb20();'use strict';const tesseract_1=require('@bastion/tesseract');module[a463_0x4458('0x1')]=class LinkFilterCommand extends tesseract_1['Command']{constructor(){super(a463_0x4458('0x1b'),{'description':a463_0x4458('0x3'),'triggers':[],'arguments':{'alias':{'disable':['d'],'enable':['e'],'infraction':['i']},'boolean':[a463_0x4458('0x12'),a463_0x4458('0x14'),a463_0x4458('0x7')]},'scope':a463_0x4458('0xd'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a463_0x4458('0xe')],'syntax':[a463_0x4458('0x1b'),'linkFilter\x20--enable','linkFilter\x20--disable',a463_0x4458('0x6'),a463_0x4458('0xb')]});this[a463_0x4458('0x13')]=async(_0xcf0398,_0x82c25a)=>{const _0x449b20=_0xcf0398[a463_0x4458('0xd')];_0x449b20[a463_0x4458('0x20')][a463_0x4458('0x15')]={..._0x449b20[a463_0x4458('0x20')][a463_0x4458('0x15')],'linkFilter':{'enabled':_0x82c25a[a463_0x4458('0x12')]?undefined:_0x82c25a[a463_0x4458('0x14')]||_0x449b20[a463_0x4458('0x20')][a463_0x4458('0x15')]&&_0x449b20['document'][a463_0x4458('0x15')][a463_0x4458('0x1b')]&&_0x449b20[a463_0x4458('0x20')]['filters'][a463_0x4458('0x1b')][a463_0x4458('0x9')]?!![]:undefined,'infraction':_0x82c25a[a463_0x4458('0x7')]===![]?undefined:_0x82c25a[a463_0x4458('0x7')]||_0x449b20[a463_0x4458('0x20')]['filters']&&_0x449b20['document'][a463_0x4458('0x15')]['linkFilter']&&_0x449b20[a463_0x4458('0x20')][a463_0x4458('0x15')][a463_0x4458('0x1b')][a463_0x4458('0x7')]?!![]:undefined}};await _0x449b20[a463_0x4458('0x20')][a463_0x4458('0x2')]();await _0xcf0398[a463_0x4458('0x16')][a463_0x4458('0xc')]({'embed':{'color':_0x82c25a[a463_0x4458('0x14')]?tesseract_1[a463_0x4458('0x1a')][a463_0x4458('0x18')]['GREEN']:_0x82c25a['disable']?tesseract_1[a463_0x4458('0x1a')][a463_0x4458('0x18')][a463_0x4458('0x1e')]:tesseract_1[a463_0x4458('0x1a')][a463_0x4458('0x18')][a463_0x4458('0x11')],'description':this[a463_0x4458('0x1f')][a463_0x4458('0x0')][a463_0x4458('0x8')](_0xcf0398['guild'][a463_0x4458('0x20')][a463_0x4458('0x1d')],a463_0x4458('0x4'),_0x82c25a[a463_0x4458('0x14')]?a463_0x4458('0x5'):_0x82c25a[a463_0x4458('0x12')]?'linkFilterDisable':_0x449b20[a463_0x4458('0x20')]['filters'][a463_0x4458('0x1b')][a463_0x4458('0x9')]?'linkFilterEnabled':'linkFilterDisabled',_0xcf0398['author'][a463_0x4458('0xa')]),'footer':{'text':_0x449b20['document'][a463_0x4458('0x15')][a463_0x4458('0x1b')][a463_0x4458('0x9')]?this[a463_0x4458('0x1f')][a463_0x4458('0x0')][a463_0x4458('0x8')](_0xcf0398[a463_0x4458('0xd')][a463_0x4458('0x20')][a463_0x4458('0x1d')],a463_0x4458('0x4'),_0x449b20[a463_0x4458('0x20')]['filters'][a463_0x4458('0x1b')][a463_0x4458('0x7')]?'filterInfractionEnabled':a463_0x4458('0x17')):''}}})[a463_0x4458('0x19')](()=>{});};}};