const a441_0x55df=['catch','apply','exports','channel','has','test','client','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','IRIS','PUPIL','constructor','Announced','find','\x20/\x20','exec','DiscordError','📣\x20','../../utils/errors','return\x20/\x22\x20+\x20this\x20+\x20\x22/','announce','announcementsChannelId','author','compile','name','guild','title','Command','join','BASTION_ERROR_TYPE','message','channels','Constants','COLORS','send'];(function(_0x3d7cfa,_0x55df09){const _0x3f627b=function(_0x5b674e){while(--_0x5b674e){_0x3d7cfa['push'](_0x3d7cfa['shift']());}};const _0x290d8a=function(){const _0x596470={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xaed5a9,_0xc72066,_0x31157b,_0x2f73e0){_0x2f73e0=_0x2f73e0||{};let _0x570283=_0xc72066+'='+_0x31157b;let _0x5c205f=0x0;for(let _0x46119c=0x0,_0x4227aa=_0xaed5a9['length'];_0x46119c<_0x4227aa;_0x46119c++){const _0x1a07ab=_0xaed5a9[_0x46119c];_0x570283+=';\x20'+_0x1a07ab;const _0x1fa714=_0xaed5a9[_0x1a07ab];_0xaed5a9['push'](_0x1fa714);_0x4227aa=_0xaed5a9['length'];if(_0x1fa714!==!![]){_0x570283+='='+_0x1fa714;}}_0x2f73e0['cookie']=_0x570283;},'removeCookie':function(){return'dev';},'getCookie':function(_0x517a4c,_0x39dd5d){_0x517a4c=_0x517a4c||function(_0x1d86c8){return _0x1d86c8;};const _0x4ecf3d=_0x517a4c(new RegExp('(?:^|;\x20)'+_0x39dd5d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x40f65d=function(_0x196b6d,_0x4eeab6){_0x196b6d(++_0x4eeab6);};_0x40f65d(_0x3f627b,_0x55df09);return _0x4ecf3d?decodeURIComponent(_0x4ecf3d[0x1]):undefined;}};const _0x300ad0=function(){const _0x4df5aa=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4df5aa['test'](_0x596470['removeCookie']['toString']());};_0x596470['updateCookie']=_0x300ad0;let _0x131c37='';const _0x289e79=_0x596470['updateCookie']();if(!_0x289e79){_0x596470['setCookie'](['*'],'counter',0x1);}else if(_0x289e79){_0x131c37=_0x596470['getCookie'](null,'counter');}else{_0x596470['removeCookie']();}};_0x290d8a();}(a441_0x55df,0x166));const a441_0x3f62=function(_0x3d7cfa,_0x55df09){_0x3d7cfa=_0x3d7cfa-0x0;let _0x3f627b=a441_0x55df[_0x3d7cfa];return _0x3f627b;};const a441_0x596470=function(){let _0x42c62c=!![];return function(_0xe9d485,_0x1d545d){const _0xf73b94=_0x42c62c?function(){if(_0x1d545d){const _0x20d137=_0x1d545d[a441_0x3f62('0x11')](_0xe9d485,arguments);_0x1d545d=null;return _0x20d137;}}:function(){};_0x42c62c=![];return _0xf73b94;};}();const a441_0x5b674e=a441_0x596470(this,function(){const _0x499fe=function(){const _0x26c1fc=_0x499fe[a441_0x3f62('0x1a')](a441_0x3f62('0x0'))()[a441_0x3f62('0x4')](a441_0x3f62('0x17'));return!_0x26c1fc[a441_0x3f62('0x15')](a441_0x5b674e);};return _0x499fe();});a441_0x5b674e();'use strict';const tesseract_1=require('@bastion/tesseract');const Guild_1=require('../../models/Guild');const errors=require(a441_0x3f62('0x21'));module[a441_0x3f62('0x12')]=class Announce extends tesseract_1[a441_0x3f62('0x8')]{constructor(){super(a441_0x3f62('0x1'),{'description':'It\x20allows\x20you\x20to\x20send\x20announcements\x20to\x20the\x20announcement\x20channels\x20in\x20the\x20servers\x20where\x20it\x20has\x20been\x20set.','triggers':[],'arguments':{'array':[a441_0x3f62('0xb'),'title'],'string':[a441_0x3f62('0xb'),a441_0x3f62('0x7')]},'scope':a441_0x3f62('0x6'),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['announce\x20--message\x20MESSAGE','announce\x20--title\x20TITLE\x20--message\x20MESSAGE']});this[a441_0x3f62('0x1e')]=async(_0x1badfb,_0x282daf)=>{const _0x560b3d=_0x282daf[a441_0x3f62('0x7')]&&_0x282daf[a441_0x3f62('0x7')][a441_0x3f62('0x9')]('\x20');const _0x29511c=_0x282daf[a441_0x3f62('0xb')]&&_0x282daf[a441_0x3f62('0xb')][a441_0x3f62('0x9')]('\x20');if(!_0x29511c)throw new errors[(a441_0x3f62('0x1f'))](errors[a441_0x3f62('0xa')]['INVALID_COMMAND_SYNTAX'],this[a441_0x3f62('0x5')]);const _0x4bd8ca=await Guild_1['default'][a441_0x3f62('0x1c')]({'announcementsChannelId':{'$exists':!![]}});for(const _0x27908f of _0x4bd8ca){if(this['client'][a441_0x3f62('0xc')]['cache'][a441_0x3f62('0x14')](_0x27908f[a441_0x3f62('0x2')])){const _0x203524=this[a441_0x3f62('0x16')][a441_0x3f62('0xc')]['cache']['get'](_0x27908f['announcementsChannelId']);_0x203524[a441_0x3f62('0xf')]({'embed':{'color':tesseract_1[a441_0x3f62('0xd')]['COLORS'][a441_0x3f62('0x18')],'title':_0x560b3d,'description':_0x29511c,'footer':{'text':a441_0x3f62('0x20')+_0x1badfb[a441_0x3f62('0x3')]['tag']+a441_0x3f62('0x1d')+_0x1badfb[a441_0x3f62('0x3')]['id']}}})[a441_0x3f62('0x10')](()=>{});}}await _0x1badfb[a441_0x3f62('0x13')][a441_0x3f62('0xf')]({'embed':{'color':tesseract_1['Constants'][a441_0x3f62('0xe')][a441_0x3f62('0x19')],'author':{'name':a441_0x3f62('0x1b')},'title':_0x560b3d,'description':_0x29511c,'footer':{'text':a441_0x3f62('0x20')+_0x1badfb['author']['tag']+'\x20/\x20'+_0x1badfb['author']['id']}}})[a441_0x3f62('0x10')](()=>{});};}};