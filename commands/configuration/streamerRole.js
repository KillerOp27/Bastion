const a35_0x3211=['client','streamerRole','errors','DiscordError','GREEN','name','save','MANAGE_GUILD','constructor','@bastion/tesseract','return\x20/\x22\x20+\x20this\x20+\x20\x22/','language','RED','roleNotFound','catch','locale','remove','resolveRole','streamerRoleSet','streamerRoleId','test','streamerRoleUnset','document','channel','author','join','COLORS','info','getString','length','tag','guild','Constants','compile','exec','BASTION_ERROR_TYPE','streamerRole\x20--remove'];(function(_0x4fab08,_0x32119){const _0x5a9738=function(_0x887b68){while(--_0x887b68){_0x4fab08['push'](_0x4fab08['shift']());}};const _0x123f9c=function(){const _0x5df11c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x189828,_0x2f0e62,_0x5479d7,_0x41be36){_0x41be36=_0x41be36||{};let _0x1cdf67=_0x2f0e62+'='+_0x5479d7;let _0x5ec8d4=0x0;for(let _0x54491a=0x0,_0x4cef2f=_0x189828['length'];_0x54491a<_0x4cef2f;_0x54491a++){const _0x3780c8=_0x189828[_0x54491a];_0x1cdf67+=';\x20'+_0x3780c8;const _0x494df1=_0x189828[_0x3780c8];_0x189828['push'](_0x494df1);_0x4cef2f=_0x189828['length'];if(_0x494df1!==!![]){_0x1cdf67+='='+_0x494df1;}}_0x41be36['cookie']=_0x1cdf67;},'removeCookie':function(){return'dev';},'getCookie':function(_0x52dfe6,_0x34b8b4){_0x52dfe6=_0x52dfe6||function(_0x268d69){return _0x268d69;};const _0x4e0d=_0x52dfe6(new RegExp('(?:^|;\x20)'+_0x34b8b4['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3e44d5=function(_0x24f4b3,_0x2269a3){_0x24f4b3(++_0x2269a3);};_0x3e44d5(_0x5a9738,_0x32119);return _0x4e0d?decodeURIComponent(_0x4e0d[0x1]):undefined;}};const _0x4d68c5=function(){const _0x956e1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x956e1['test'](_0x5df11c['removeCookie']['toString']());};_0x5df11c['updateCookie']=_0x4d68c5;let _0x591d16='';const _0x44193f=_0x5df11c['updateCookie']();if(!_0x44193f){_0x5df11c['setCookie'](['*'],'counter',0x1);}else if(_0x44193f){_0x591d16=_0x5df11c['getCookie'](null,'counter');}else{_0x5df11c['removeCookie']();}};_0x123f9c();}(a35_0x3211,0x1b2));const a35_0x5a97=function(_0x4fab08,_0x32119){_0x4fab08=_0x4fab08-0x0;let _0x5a9738=a35_0x3211[_0x4fab08];return _0x5a9738;};const a35_0x5df11c=function(){let _0x7c5162=!![];return function(_0x57dda2,_0x434f38){const _0x275fc4=_0x7c5162?function(){if(_0x434f38){const _0x57481e=_0x434f38['apply'](_0x57dda2,arguments);_0x434f38=null;return _0x57481e;}}:function(){};_0x7c5162=![];return _0x275fc4;};}();const a35_0x887b68=a35_0x5df11c(this,function(){const _0x49a532=function(){const _0x38fb14=_0x49a532[a35_0x5a97('0x12')](a35_0x5a97('0x14'))()[a35_0x5a97('0x6')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x38fb14[a35_0x5a97('0x1e')](a35_0x887b68);};return _0x49a532();});a35_0x887b68();'use strict';const tesseract_1=require(a35_0x5a97('0x13'));const errors=require('../../utils/errors');module['exports']=class StreamerRoleCommand extends tesseract_1['Command']{constructor(){super(a35_0x5a97('0xb'),{'description':'It\x20allows\x20to\x20set\x20the\x20Streamer\x20Role\x20for\x20the\x20server.\x20When\x20a\x20member\x20goes\x20live\x20in\x20the\x20server,\x20they\x27re\x20assigned\x20to\x20this\x20role,\x20provided\x20they\x20have\x20at\x20least\x20one\x20role\x20in\x20the\x20server.','triggers':[],'arguments':{'alias':{'remove':['r']},'boolean':['remove']},'scope':a35_0x5a97('0x4'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a35_0x5a97('0x11')],'syntax':[a35_0x5a97('0xb'),a35_0x5a97('0x9')]});this[a35_0x5a97('0x7')]=async(_0x58ceae,_0x594af0)=>{if(!_0x594af0['_'][a35_0x5a97('0x2')]&&!_0x594af0[a35_0x5a97('0x1a')])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE']['INVALID_COMMAND_SYNTAX'],this['name']);const _0xe099b=_0x58ceae[a35_0x5a97('0x4')];let _0x7e376a;if(_0x594af0['remove']){_0xe099b[a35_0x5a97('0x20')]['streamerRoleId']=undefined;delete _0xe099b['document'][a35_0x5a97('0x1d')];}else{_0x7e376a=this[a35_0x5a97('0xa')]['resolver'][a35_0x5a97('0x1b')](_0x58ceae[a35_0x5a97('0x4')],_0x594af0['_'][a35_0x5a97('0x23')]('\x20'));if(!_0x7e376a)throw new errors[(a35_0x5a97('0xd'))](errors[a35_0x5a97('0x8')]['ROLE_NOT_FOUND'],this[a35_0x5a97('0xa')][a35_0x5a97('0x19')][a35_0x5a97('0x1')](_0x58ceae['guild'][a35_0x5a97('0x20')][a35_0x5a97('0x15')],a35_0x5a97('0xc'),a35_0x5a97('0x17')));_0xe099b[a35_0x5a97('0x20')][a35_0x5a97('0x1d')]=_0x7e376a['id'];}await _0xe099b['document'][a35_0x5a97('0x10')]();await _0x58ceae[a35_0x5a97('0x21')]['send']({'embed':{'color':_0xe099b[a35_0x5a97('0x20')][a35_0x5a97('0x1d')]?tesseract_1[a35_0x5a97('0x5')][a35_0x5a97('0x24')][a35_0x5a97('0xe')]:tesseract_1['Constants'][a35_0x5a97('0x24')][a35_0x5a97('0x16')],'description':this[a35_0x5a97('0xa')][a35_0x5a97('0x19')][a35_0x5a97('0x1')](_0x58ceae[a35_0x5a97('0x4')][a35_0x5a97('0x20')][a35_0x5a97('0x15')],a35_0x5a97('0x0'),_0xe099b[a35_0x5a97('0x20')][a35_0x5a97('0x1d')]?a35_0x5a97('0x1c'):a35_0x5a97('0x1f'),_0x58ceae[a35_0x5a97('0x22')][a35_0x5a97('0x3')],_0x7e376a?_0x7e376a[a35_0x5a97('0xf')]:'')}})[a35_0x5a97('0x18')](()=>{});};}};