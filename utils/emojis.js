const a209_0x59b3=['defineProperty','__esModule','./snowflake','match','isUnicodeEmoji','return\x20/\x22\x20+\x20this\x20+\x20\x22/','compile','getEmojis','utf-8','isValid','base64','../assets/emojis.json','toString','includes','parseEmoji','from'];(function(_0x347ce8,_0x59b3a5){const _0xb331af=function(_0x29e225){while(--_0x29e225){_0x347ce8['push'](_0x347ce8['shift']());}};const _0xd51dde=function(){const _0x1be78d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1b117f,_0xe553a9,_0x565758,_0x5d7808){_0x5d7808=_0x5d7808||{};let _0x171e1a=_0xe553a9+'='+_0x565758;let _0x19e907=0x0;for(let _0x1c050d=0x0,_0x12be03=_0x1b117f['length'];_0x1c050d<_0x12be03;_0x1c050d++){const _0x264740=_0x1b117f[_0x1c050d];_0x171e1a+=';\x20'+_0x264740;const _0x1bd38f=_0x1b117f[_0x264740];_0x1b117f['push'](_0x1bd38f);_0x12be03=_0x1b117f['length'];if(_0x1bd38f!==!![]){_0x171e1a+='='+_0x1bd38f;}}_0x5d7808['cookie']=_0x171e1a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x43e43b,_0x54b473){_0x43e43b=_0x43e43b||function(_0x3a075b){return _0x3a075b;};const _0x1c30a6=_0x43e43b(new RegExp('(?:^|;\x20)'+_0x54b473['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x382dc1=function(_0x15e6b0,_0x152e05){_0x15e6b0(++_0x152e05);};_0x382dc1(_0xb331af,_0x59b3a5);return _0x1c30a6?decodeURIComponent(_0x1c30a6[0x1]):undefined;}};const _0x34a85e=function(){const _0x3d496c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3d496c['test'](_0x1be78d['removeCookie']['toString']());};_0x1be78d['updateCookie']=_0x34a85e;let _0x538fbf='';const _0x4bfdec=_0x1be78d['updateCookie']();if(!_0x4bfdec){_0x1be78d['setCookie'](['*'],'counter',0x1);}else if(_0x4bfdec){_0x538fbf=_0x1be78d['getCookie'](null,'counter');}else{_0x1be78d['removeCookie']();}};_0xd51dde();}(a209_0x59b3,0x140));const a209_0xb331=function(_0x347ce8,_0x59b3a5){_0x347ce8=_0x347ce8-0x0;let _0xb331af=a209_0x59b3[_0x347ce8];return _0xb331af;};const a209_0x1be78d=function(){let _0x13f71d=!![];return function(_0x1d9262,_0x6bc3d6){const _0xcfeaab=_0x13f71d?function(){if(_0x6bc3d6){const _0x21baf1=_0x6bc3d6['apply'](_0x1d9262,arguments);_0x6bc3d6=null;return _0x21baf1;}}:function(){};_0x13f71d=![];return _0xcfeaab;};}();const a209_0x29e225=a209_0x1be78d(this,function(){const _0x571f38=function(){const _0x2ea790=_0x571f38['constructor'](a209_0xb331('0x5'))()[a209_0xb331('0x6')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x2ea790['test'](a209_0x29e225);};return _0x571f38();});a209_0x29e225();'use strict';Object[a209_0xb331('0x0')](exports,a209_0xb331('0x1'),{'value':!![]});exports[a209_0xb331('0xe')]=exports[a209_0xb331('0x4')]=exports[a209_0xb331('0x7')]=void 0x0;const emojis=require(a209_0xb331('0xb'));const snowflake=require(a209_0xb331('0x2'));const getEmojis=()=>{return emojis;};exports['getEmojis']=getEmojis;const isUnicodeEmoji=_0x43b54a=>{return emojis[a209_0xb331('0xd')](Buffer[a209_0xb331('0xf')](_0x43b54a)[a209_0xb331('0xc')](a209_0xb331('0xa')));};exports[a209_0xb331('0x4')]=isUnicodeEmoji;const parseEmoji=_0x4e70a6=>{if(!_0x4e70a6)return;let _0x82520e;if(emojis[a209_0xb331('0xd')](_0x4e70a6)){_0x82520e={'value':_0x4e70a6,'reaction':Buffer['from'](_0x4e70a6,a209_0xb331('0xa'))['toString'](a209_0xb331('0x8'))};}else if(emojis[a209_0xb331('0xd')](Buffer[a209_0xb331('0xf')](_0x4e70a6)[a209_0xb331('0xc')](a209_0xb331('0xa')))){_0x82520e={'value':Buffer[a209_0xb331('0xf')](_0x4e70a6)[a209_0xb331('0xc')]('base64'),'reaction':_0x4e70a6};}else if(_0x4e70a6[a209_0xb331('0xd')](':')){const [,_0x50c757]=_0x4e70a6[a209_0xb331('0x3')](/<a?:\w+:(\d+)>/i);_0x82520e={'value':_0x50c757,'reaction':_0x50c757};}else if(snowflake[a209_0xb331('0x9')](_0x4e70a6)){_0x82520e={'value':_0x4e70a6,'reaction':_0x4e70a6};}return _0x82520e;};exports[a209_0xb331('0xe')]=parseEmoji;