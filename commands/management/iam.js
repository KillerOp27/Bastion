const a502_0x1988=['selfRemoveRole','DiscordError','BASTION_ERROR_TYPE','iam\x20--not\x20ROLE','client','locale','getString','add','return\x20/\x22\x20+\x20this\x20+\x20\x22/','catch','roleNotFound','INVALID_COMMAND_SYNTAX','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','member','name','constructor','apply','not','test','It\x20allows\x20you\x20add\x20(and\x20remove)\x20yourself\x20to\x20(and\x20from)\x20the\x20Self\x20Roles\x20set\x20in\x20the\x20server.','RED','compile','guild','../../utils/errors','author','exec','remove','Command','COLORS','language','join','document','info','selfAddRole','Constants','send','GREEN','iam'];(function(_0x13bb61,_0x198828){const _0x38d8e5=function(_0x9b1dd){while(--_0x9b1dd){_0x13bb61['push'](_0x13bb61['shift']());}};const _0xc894b6=function(){const _0x424e8f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x424e9a,_0x2cd864,_0x440e55,_0xb69d8d){_0xb69d8d=_0xb69d8d||{};let _0x5d1a8f=_0x2cd864+'='+_0x440e55;let _0xcabaca=0x0;for(let _0x4bb848=0x0,_0x20f888=_0x424e9a['length'];_0x4bb848<_0x20f888;_0x4bb848++){const _0x2e2cf5=_0x424e9a[_0x4bb848];_0x5d1a8f+=';\x20'+_0x2e2cf5;const _0x31fb61=_0x424e9a[_0x2e2cf5];_0x424e9a['push'](_0x31fb61);_0x20f888=_0x424e9a['length'];if(_0x31fb61!==!![]){_0x5d1a8f+='='+_0x31fb61;}}_0xb69d8d['cookie']=_0x5d1a8f;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2f0101,_0x3a7b42){_0x2f0101=_0x2f0101||function(_0x120535){return _0x120535;};const _0x5d81f5=_0x2f0101(new RegExp('(?:^|;\x20)'+_0x3a7b42['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3b9c08=function(_0x5c1cca,_0x22673c){_0x5c1cca(++_0x22673c);};_0x3b9c08(_0x38d8e5,_0x198828);return _0x5d81f5?decodeURIComponent(_0x5d81f5[0x1]):undefined;}};const _0x3e1a5d=function(){const _0x9af681=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x9af681['test'](_0x424e8f['removeCookie']['toString']());};_0x424e8f['updateCookie']=_0x3e1a5d;let _0xeef284='';const _0x213576=_0x424e8f['updateCookie']();if(!_0x213576){_0x424e8f['setCookie'](['*'],'counter',0x1);}else if(_0x213576){_0xeef284=_0x424e8f['getCookie'](null,'counter');}else{_0x424e8f['removeCookie']();}};_0xc894b6();}(a502_0x1988,0xb6));const a502_0x38d8=function(_0x13bb61,_0x198828){_0x13bb61=_0x13bb61-0x0;let _0x38d8e5=a502_0x1988[_0x13bb61];return _0x38d8e5;};const a502_0x424e8f=function(){let _0x23085a=!![];return function(_0x5639b6,_0x1a7851){const _0x4e9245=_0x23085a?function(){if(_0x1a7851){const _0x551d8d=_0x1a7851[a502_0x38d8('0x18')](_0x5639b6,arguments);_0x1a7851=null;return _0x551d8d;}}:function(){};_0x23085a=![];return _0x4e9245;};}();const a502_0x9b1dd=a502_0x424e8f(this,function(){const _0x27bb21=function(){const _0x591e9b=_0x27bb21[a502_0x38d8('0x17')](a502_0x38d8('0x10'))()[a502_0x38d8('0x1d')](a502_0x38d8('0x14'));return!_0x591e9b[a502_0x38d8('0x1a')](a502_0x9b1dd);};return _0x27bb21();});a502_0x9b1dd();'use strict';const tesseract_1=require('@bastion/tesseract');const errors=require(a502_0x38d8('0x1f'));module['exports']=class IAmCommand extends tesseract_1[a502_0x38d8('0x23')]{constructor(){super(a502_0x38d8('0x7'),{'description':a502_0x38d8('0x1b'),'triggers':[],'arguments':{'alias':{'not':['n']},'boolean':[a502_0x38d8('0x19')]},'scope':a502_0x38d8('0x1e'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['iam\x20ROLE',a502_0x38d8('0xb')]});this[a502_0x38d8('0x21')]=async(_0x176960,_0x32708c)=>{if(!_0x32708c['_']['length'])throw new errors[(a502_0x38d8('0x9'))](errors[a502_0x38d8('0xa')][a502_0x38d8('0x13')],this[a502_0x38d8('0x16')]);const _0x5de615=this[a502_0x38d8('0xc')]['resolver']['resolveRole'](_0x176960['guild'],_0x32708c['_'][a502_0x38d8('0x0')]('\x20'));if(!_0x5de615)throw new errors[(a502_0x38d8('0x9'))](errors[a502_0x38d8('0xa')]['ROLE_NOT_FOUND'],this['client']['locale'][a502_0x38d8('0xe')](_0x176960['guild'][a502_0x38d8('0x1')]['language'],'errors',a502_0x38d8('0x12')));if(_0x32708c[a502_0x38d8('0x19')]){await _0x176960[a502_0x38d8('0x15')]['roles'][a502_0x38d8('0x22')](_0x5de615);}else{await _0x176960[a502_0x38d8('0x15')]['roles'][a502_0x38d8('0xf')](_0x5de615);}await _0x176960['channel'][a502_0x38d8('0x5')]({'embed':{'color':_0x32708c[a502_0x38d8('0x19')]?tesseract_1[a502_0x38d8('0x4')][a502_0x38d8('0x24')][a502_0x38d8('0x1c')]:tesseract_1[a502_0x38d8('0x4')][a502_0x38d8('0x24')][a502_0x38d8('0x6')],'description':this[a502_0x38d8('0xc')][a502_0x38d8('0xd')]['getString'](_0x176960['guild'][a502_0x38d8('0x1')][a502_0x38d8('0x25')],a502_0x38d8('0x2'),_0x32708c[a502_0x38d8('0x19')]?a502_0x38d8('0x8'):a502_0x38d8('0x3'),_0x176960[a502_0x38d8('0x20')]['tag'],_0x5de615[a502_0x38d8('0x16')])}})[a502_0x38d8('0x11')](()=>{});};}};