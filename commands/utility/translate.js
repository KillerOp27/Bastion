const a132_0x4c88=['IRIS','COLORS','Command','constructor','toLowerCase','@k3rn31p4nic/google-translate-api','It\x20allows\x20you\x20to\x20translate\x20the\x20specified\x20text\x20from\x20one\x20language\x20to\x20another.','iso','return\x20/\x22\x20+\x20this\x20+\x20\x22/','text','BASTION_ERROR_TYPE','Source\x20Language','toUpperCase','translate','auto','from','compile','test','Target\x20Language','DiscordError','join','translate\x20--\x20TEXT','length','language','Constants','Translation','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','@bastion/tesseract','translate\x20--from\x20LANGUAGE\x20--to\x20LANGUAGE\x20--\x20TEXT','exports','guild'];(function(_0x30089f,_0x4c88f6){const _0x871349=function(_0x2c3ae0){while(--_0x2c3ae0){_0x30089f['push'](_0x30089f['shift']());}};const _0x51e099=function(){const _0x3eaa7a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x17e182,_0x419384,_0x2ba293,_0x3aa618){_0x3aa618=_0x3aa618||{};let _0x1932e4=_0x419384+'='+_0x2ba293;let _0x3e5fce=0x0;for(let _0x4e9bb0=0x0,_0x3085c6=_0x17e182['length'];_0x4e9bb0<_0x3085c6;_0x4e9bb0++){const _0x38c457=_0x17e182[_0x4e9bb0];_0x1932e4+=';\x20'+_0x38c457;const _0x259412=_0x17e182[_0x38c457];_0x17e182['push'](_0x259412);_0x3085c6=_0x17e182['length'];if(_0x259412!==!![]){_0x1932e4+='='+_0x259412;}}_0x3aa618['cookie']=_0x1932e4;},'removeCookie':function(){return'dev';},'getCookie':function(_0x106445,_0x4756e8){_0x106445=_0x106445||function(_0x473760){return _0x473760;};const _0xdf3423=_0x106445(new RegExp('(?:^|;\x20)'+_0x4756e8['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x4a2066=function(_0x531ba5,_0x36b452){_0x531ba5(++_0x36b452);};_0x4a2066(_0x871349,_0x4c88f6);return _0xdf3423?decodeURIComponent(_0xdf3423[0x1]):undefined;}};const _0x2cf2d2=function(){const _0x4703ff=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4703ff['test'](_0x3eaa7a['removeCookie']['toString']());};_0x3eaa7a['updateCookie']=_0x2cf2d2;let _0x5c8b9b='';const _0x1f21a7=_0x3eaa7a['updateCookie']();if(!_0x1f21a7){_0x3eaa7a['setCookie'](['*'],'counter',0x1);}else if(_0x1f21a7){_0x5c8b9b=_0x3eaa7a['getCookie'](null,'counter');}else{_0x3eaa7a['removeCookie']();}};_0x51e099();}(a132_0x4c88,0x12d));const a132_0x8713=function(_0x30089f,_0x4c88f6){_0x30089f=_0x30089f-0x0;let _0x871349=a132_0x4c88[_0x30089f];return _0x871349;};const a132_0x3eaa7a=function(){let _0x516db=!![];return function(_0x188d2f,_0x2b0d8d){const _0x40a4a8=_0x516db?function(){if(_0x2b0d8d){const _0x14a8a8=_0x2b0d8d['apply'](_0x188d2f,arguments);_0x2b0d8d=null;return _0x14a8a8;}}:function(){};_0x516db=![];return _0x40a4a8;};}();const a132_0x2c3ae0=a132_0x3eaa7a(this,function(){const _0x22ed3e=function(){const _0x56fae1=_0x22ed3e[a132_0x8713('0xc')](a132_0x8713('0x11'))()[a132_0x8713('0x19')](a132_0x8713('0x4'));return!_0x56fae1[a132_0x8713('0x1a')](a132_0x2c3ae0);};return _0x22ed3e();});a132_0x2c3ae0();'use strict';const tesseract_1=require(a132_0x8713('0x5'));const translate=require(a132_0x8713('0xe'));const errors=require('../../utils/errors');module[a132_0x8713('0x7')]=class TranslateCommand extends tesseract_1[a132_0x8713('0xb')]{constructor(){super(a132_0x8713('0x16'),{'description':a132_0x8713('0xf'),'triggers':[],'arguments':{},'scope':a132_0x8713('0x8'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a132_0x8713('0x1e'),'translate\x20--to\x20LANGUAGE\x20--\x20TEXT',a132_0x8713('0x6')]});this['exec']=async(_0x6d96b5,_0x36a275)=>{if(!_0x36a275['_'][a132_0x8713('0x0')])throw new errors[(a132_0x8713('0x1c'))](errors[a132_0x8713('0x13')]['INVALID_COMMAND_SYNTAX'],this['name']);const _0x347a4a=_0x36a275['_'][a132_0x8713('0x1d')]('\x20');const _0x5c911e=_0x36a275[a132_0x8713('0x18')]?_0x36a275[a132_0x8713('0x18')][a132_0x8713('0xd')]():a132_0x8713('0x17');const _0x29aa2d=_0x36a275['to']?_0x36a275['to'][a132_0x8713('0xd')]():'en';const _0xd1263e=await translate(_0x347a4a,{'from':_0x5c911e,'to':_0x29aa2d});await _0x6d96b5['channel']['send']({'embed':{'color':tesseract_1[a132_0x8713('0x2')][a132_0x8713('0xa')][a132_0x8713('0x9')],'title':a132_0x8713('0x3'),'description':_0xd1263e[a132_0x8713('0x12')],'fields':[{'name':a132_0x8713('0x14'),'value':_0xd1263e[a132_0x8713('0x18')][a132_0x8713('0x1')][a132_0x8713('0x10')][a132_0x8713('0x15')](),'inline':!![]},{'name':a132_0x8713('0x1b'),'value':_0x29aa2d[a132_0x8713('0x15')](),'inline':!![]}],'footer':{'text':'Powered\x20by\x20Google'}}});};}};