const a568_0x3118=['DiscordError','@bastion/tesseract','BASTION_ERROR_TYPE','channel','COLORS','It\x20follows\x20all\x20the\x20redirects\x20in\x20the\x20specified\x20URL\x20and\x20allows\x20you\x20to\x20see\x20the\x20final\x20URL.','test','compile','IRIS','constructor','followURL','follow','followRedirects','URL','HEAD','send','Constants','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','name','apply','node-fetch','INVALID_COMMAND_SYNTAX','join','followRedirects\x20URL','../../utils/errors'];(function(_0x35be32,_0x3118fb){const _0x5e254f=function(_0xcb0af0){while(--_0xcb0af0){_0x35be32['push'](_0x35be32['shift']());}};const _0x3943db=function(){const _0x4f9adf={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x486ad3,_0x162c80,_0x349266,_0x8e1966){_0x8e1966=_0x8e1966||{};let _0xf19793=_0x162c80+'='+_0x349266;let _0x303641=0x0;for(let _0x441c88=0x0,_0x491629=_0x486ad3['length'];_0x441c88<_0x491629;_0x441c88++){const _0x5a5197=_0x486ad3[_0x441c88];_0xf19793+=';\x20'+_0x5a5197;const _0xe7c75a=_0x486ad3[_0x5a5197];_0x486ad3['push'](_0xe7c75a);_0x491629=_0x486ad3['length'];if(_0xe7c75a!==!![]){_0xf19793+='='+_0xe7c75a;}}_0x8e1966['cookie']=_0xf19793;},'removeCookie':function(){return'dev';},'getCookie':function(_0x431858,_0x141283){_0x431858=_0x431858||function(_0x545dd6){return _0x545dd6;};const _0x553108=_0x431858(new RegExp('(?:^|;\x20)'+_0x141283['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0xb76568=function(_0x59d490,_0x47713f){_0x59d490(++_0x47713f);};_0xb76568(_0x5e254f,_0x3118fb);return _0x553108?decodeURIComponent(_0x553108[0x1]):undefined;}};const _0x22420e=function(){const _0x3d320c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3d320c['test'](_0x4f9adf['removeCookie']['toString']());};_0x4f9adf['updateCookie']=_0x22420e;let _0x4747df='';const _0x2172bf=_0x4f9adf['updateCookie']();if(!_0x2172bf){_0x4f9adf['setCookie'](['*'],'counter',0x1);}else if(_0x2172bf){_0x4747df=_0x4f9adf['getCookie'](null,'counter');}else{_0x4f9adf['removeCookie']();}};_0x3943db();}(a568_0x3118,0x145));const a568_0x5e25=function(_0x35be32,_0x3118fb){_0x35be32=_0x35be32-0x0;let _0x5e254f=a568_0x3118[_0x35be32];return _0x5e254f;};const a568_0x4f9adf=function(){let _0x48bfd0=!![];return function(_0x3b6d16,_0x241c44){const _0x978615=_0x48bfd0?function(){if(_0x241c44){const _0x5218bd=_0x241c44[a568_0x5e25('0x13')](_0x3b6d16,arguments);_0x241c44=null;return _0x5218bd;}}:function(){};_0x48bfd0=![];return _0x978615;};}();const a568_0xcb0af0=a568_0x4f9adf(this,function(){const _0x566792=function(){const _0x4e0e21=_0x566792[a568_0x5e25('0x9')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a568_0x5e25('0x7')](a568_0x5e25('0x11'));return!_0x4e0e21[a568_0x5e25('0x6')](a568_0xcb0af0);};return _0x566792();});a568_0xcb0af0();'use strict';const tesseract_1=require(a568_0x5e25('0x1'));const node_fetch_1=require(a568_0x5e25('0x14'));const errors=require(a568_0x5e25('0x18'));module['exports']=class FollowRedirectsCommand extends tesseract_1['Command']{constructor(){super(a568_0x5e25('0xc'),{'description':a568_0x5e25('0x5'),'triggers':[a568_0x5e25('0xa')],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a568_0x5e25('0x17')]});this['exec']=async(_0x1d1aa7,_0x17c6bd)=>{if(!_0x17c6bd['_']['length'])throw new errors[(a568_0x5e25('0x0'))](errors[a568_0x5e25('0x2')][a568_0x5e25('0x15')],this[a568_0x5e25('0x12')]);const _0x2d9fb2=_0x17c6bd['_'][a568_0x5e25('0x16')]('\x20');const _0x569270=await node_fetch_1['default'](_0x2d9fb2,{'method':a568_0x5e25('0xe'),'redirect':a568_0x5e25('0xb')});await _0x1d1aa7[a568_0x5e25('0x3')][a568_0x5e25('0xf')]({'embed':{'color':tesseract_1[a568_0x5e25('0x10')][a568_0x5e25('0x4')][a568_0x5e25('0x8')],'fields':[{'name':a568_0x5e25('0xd'),'value':_0x2d9fb2},{'name':'Original\x20URL','value':_0x569270['url']}]}});};}};