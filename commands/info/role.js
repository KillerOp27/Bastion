const a496_0x5867=['name','map','exec','color','join','roleInfo','resolver','members','document','send','hoist','compile','../../utils/errors','snakeToTitleCase','locale','guild','client','apply','cache','roles','permissions','role','createdAt','\x20Members','size','../../utils/strings','Position','resolveRole','channel','getString','@bastion/tesseract','DiscordError','managed','rawPosition','toUTCString','bitfield','exports','return\x20/\x22\x20+\x20this\x20+\x20\x22/','roleNotFound'];(function(_0x1c065d,_0x586714){const _0x112fa2=function(_0x440d55){while(--_0x440d55){_0x1c065d['push'](_0x1c065d['shift']());}};const _0x36d2a8=function(){const _0x2956d6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x261080,_0x3f60c0,_0x4d9ca6,_0x484ca9){_0x484ca9=_0x484ca9||{};let _0x699ffc=_0x3f60c0+'='+_0x4d9ca6;let _0xc78116=0x0;for(let _0xc6bcd9=0x0,_0x151c86=_0x261080['length'];_0xc6bcd9<_0x151c86;_0xc6bcd9++){const _0x5779c4=_0x261080[_0xc6bcd9];_0x699ffc+=';\x20'+_0x5779c4;const _0xac9ec1=_0x261080[_0x5779c4];_0x261080['push'](_0xac9ec1);_0x151c86=_0x261080['length'];if(_0xac9ec1!==!![]){_0x699ffc+='='+_0xac9ec1;}}_0x484ca9['cookie']=_0x699ffc;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4db6d3,_0x13595f){_0x4db6d3=_0x4db6d3||function(_0x1a6c1d){return _0x1a6c1d;};const _0x4c09fb=_0x4db6d3(new RegExp('(?:^|;\x20)'+_0x13595f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5bf3c9=function(_0x5e34b3,_0x426876){_0x5e34b3(++_0x426876);};_0x5bf3c9(_0x112fa2,_0x586714);return _0x4c09fb?decodeURIComponent(_0x4c09fb[0x1]):undefined;}};const _0x12a191=function(){const _0x154583=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x154583['test'](_0x2956d6['removeCookie']['toString']());};_0x2956d6['updateCookie']=_0x12a191;let _0x41c041='';const _0x54f9a4=_0x2956d6['updateCookie']();if(!_0x54f9a4){_0x2956d6['setCookie'](['*'],'counter',0x1);}else if(_0x54f9a4){_0x41c041=_0x2956d6['getCookie'](null,'counter');}else{_0x2956d6['removeCookie']();}};_0x36d2a8();}(a496_0x5867,0xd9));const a496_0x112f=function(_0x1c065d,_0x586714){_0x1c065d=_0x1c065d-0x0;let _0x112fa2=a496_0x5867[_0x1c065d];return _0x112fa2;};const a496_0x2956d6=function(){let _0xf0bc44=!![];return function(_0x3dc72d,_0x3dab87){const _0x7244cc=_0xf0bc44?function(){if(_0x3dab87){const _0x5890ee=_0x3dab87[a496_0x112f('0x22')](_0x3dc72d,arguments);_0x3dab87=null;return _0x5890ee;}}:function(){};_0xf0bc44=![];return _0x7244cc;};}();const a496_0x440d55=a496_0x2956d6(this,function(){const _0x5a0b49=function(){const _0x35f343=_0x5a0b49['constructor'](a496_0x112f('0xf'))()[a496_0x112f('0x1c')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x35f343['test'](a496_0x440d55);};return _0x5a0b49();});a496_0x440d55();'use strict';const tesseract_1=require(a496_0x112f('0x8'));const strings=require(a496_0x112f('0x3'));const errors=require(a496_0x112f('0x1d'));module[a496_0x112f('0xe')]=class RoleCommand extends tesseract_1['Command']{constructor(){super(a496_0x112f('0x26'),{'description':'It\x20allows\x20you\x20see\x20the\x20information\x20of\x20a\x20role.','triggers':[a496_0x112f('0x16')],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['role\x20ROLE']});this[a496_0x112f('0x13')]=async(_0x248893,_0x1a0641)=>{const _0x4f50d8=_0x1a0641['_']['join']('\x20');const _0x78dc52=this[a496_0x112f('0x21')][a496_0x112f('0x17')][a496_0x112f('0x5')](_0x248893[a496_0x112f('0x20')],_0x4f50d8);if(!_0x78dc52)throw new errors[(a496_0x112f('0x9'))](errors['BASTION_ERROR_TYPE']['ROLE_NOT_FOUND'],this[a496_0x112f('0x21')][a496_0x112f('0x1f')][a496_0x112f('0x7')](_0x248893[a496_0x112f('0x20')][a496_0x112f('0x19')]['language'],'errors',a496_0x112f('0x10')));_0x248893[a496_0x112f('0x6')][a496_0x112f('0x1a')]({'embed':{'color':_0x78dc52[a496_0x112f('0x14')],'author':{'name':_0x78dc52[a496_0x112f('0x11')]},'title':(_0x78dc52[a496_0x112f('0xa')]?'Managed':'')+'\x20Role','fields':[{'name':a496_0x112f('0x4'),'value':(_0x248893['guild'][a496_0x112f('0x24')][a496_0x112f('0x23')][a496_0x112f('0x2')]-_0x78dc52[a496_0x112f('0xb')])['toString'](),'inline':!![]},{'name':'Members','value':_0x78dc52[a496_0x112f('0x18')][a496_0x112f('0x2')]+a496_0x112f('0x1'),'inline':!![]},{'name':'Created','value':_0x78dc52[a496_0x112f('0x0')][a496_0x112f('0xc')](),'inline':!![]},{'name':'Permissions','value':_0x78dc52[a496_0x112f('0x25')][a496_0x112f('0xd')]?_0x78dc52['permissions']['toArray']()[a496_0x112f('0x12')](_0x53b3ee=>strings[a496_0x112f('0x1e')](_0x53b3ee))[a496_0x112f('0x15')](',\x20'):'-'}],'footer':{'text':(_0x78dc52[a496_0x112f('0x1b')]?'Hoisted\x20•\x20':'')+_0x78dc52['id']}}})['catch'](()=>{});};}};