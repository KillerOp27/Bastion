const a30_0x38b7=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','Constants','exports','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','catch','info','It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Reaction\x20Pinning\x20in\x20the\x20server.\x20If\x20enabled,\x20when\x20someone\x20with\x20proper\x20permission\x20adds\x20a\x20Pin\x20reaction\x20to\x20a\x20message,\x20the\x20message\x20gets\x20pinned\x20in\x20the\x20channel.','exec','@bastion/tesseract','getString','send','Command','reactionPinning','reactionPinningDisable','client','document','save','apply','author','test','COLORS','guild','reactionPinningEnable','GREEN','constructor'];(function(_0x55feed,_0x38b72a){const _0x1dede0=function(_0x5dc422){while(--_0x5dc422){_0x55feed['push'](_0x55feed['shift']());}};const _0x136a9c=function(){const _0x4c5631={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x23a0de,_0x530954,_0x118ec4,_0x29f374){_0x29f374=_0x29f374||{};let _0x338e01=_0x530954+'='+_0x118ec4;let _0x2512db=0x0;for(let _0x3ef2d2=0x0,_0xa97afd=_0x23a0de['length'];_0x3ef2d2<_0xa97afd;_0x3ef2d2++){const _0x2e12d5=_0x23a0de[_0x3ef2d2];_0x338e01+=';\x20'+_0x2e12d5;const _0x36f050=_0x23a0de[_0x2e12d5];_0x23a0de['push'](_0x36f050);_0xa97afd=_0x23a0de['length'];if(_0x36f050!==!![]){_0x338e01+='='+_0x36f050;}}_0x29f374['cookie']=_0x338e01;},'removeCookie':function(){return'dev';},'getCookie':function(_0x51bb64,_0x3cbc16){_0x51bb64=_0x51bb64||function(_0xc62b98){return _0xc62b98;};const _0x1a7074=_0x51bb64(new RegExp('(?:^|;\x20)'+_0x3cbc16['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x15e87a=function(_0x4e9bba,_0x54f0c4){_0x4e9bba(++_0x54f0c4);};_0x15e87a(_0x1dede0,_0x38b72a);return _0x1a7074?decodeURIComponent(_0x1a7074[0x1]):undefined;}};const _0x24b7bf=function(){const _0x51325f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x51325f['test'](_0x4c5631['removeCookie']['toString']());};_0x4c5631['updateCookie']=_0x24b7bf;let _0x403ee1='';const _0x3cf295=_0x4c5631['updateCookie']();if(!_0x3cf295){_0x4c5631['setCookie'](['*'],'counter',0x1);}else if(_0x3cf295){_0x403ee1=_0x4c5631['getCookie'](null,'counter');}else{_0x4c5631['removeCookie']();}};_0x136a9c();}(a30_0x38b7,0x1cd));const a30_0x1ded=function(_0x55feed,_0x38b72a){_0x55feed=_0x55feed-0x0;let _0x1dede0=a30_0x38b7[_0x55feed];return _0x1dede0;};const a30_0x4c5631=function(){let _0x451030=!![];return function(_0x5a3459,_0x2c077f){const _0x494b27=_0x451030?function(){if(_0x2c077f){const _0x36686c=_0x2c077f[a30_0x1ded('0x6')](_0x5a3459,arguments);_0x2c077f=null;return _0x36686c;}}:function(){};_0x451030=![];return _0x494b27;};}();const a30_0x5dc422=a30_0x4c5631(this,function(){const _0x4fac29=function(){const _0x10d59e=_0x4fac29[a30_0x1ded('0xd')](a30_0x1ded('0xe'))()['compile'](a30_0x1ded('0x11'));return!_0x10d59e[a30_0x1ded('0x8')](a30_0x5dc422);};return _0x4fac29();});a30_0x5dc422();'use strict';const tesseract_1=require(a30_0x1ded('0x16'));module[a30_0x1ded('0x10')]=class ReactionPinningCommand extends tesseract_1[a30_0x1ded('0x0')]{constructor(){super(a30_0x1ded('0x1'),{'description':a30_0x1ded('0x14'),'triggers':[],'arguments':{},'scope':a30_0x1ded('0xa'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[]});this[a30_0x1ded('0x15')]=async _0x31229b=>{const _0x41db49=_0x31229b[a30_0x1ded('0xa')];if(_0x41db49[a30_0x1ded('0x4')][a30_0x1ded('0x1')]){_0x41db49['document']['reactionPinning']=undefined;delete _0x41db49['document'][a30_0x1ded('0x1')];}else{_0x41db49[a30_0x1ded('0x4')][a30_0x1ded('0x1')]=!![];}await _0x41db49[a30_0x1ded('0x4')][a30_0x1ded('0x5')]();await _0x31229b['channel'][a30_0x1ded('0x18')]({'embed':{'color':_0x41db49['document'][a30_0x1ded('0x1')]?tesseract_1[a30_0x1ded('0xf')][a30_0x1ded('0x9')][a30_0x1ded('0xc')]:tesseract_1['Constants'][a30_0x1ded('0x9')]['RED'],'description':this[a30_0x1ded('0x3')]['locale'][a30_0x1ded('0x17')](_0x31229b[a30_0x1ded('0xa')][a30_0x1ded('0x4')]['language'],a30_0x1ded('0x13'),_0x41db49[a30_0x1ded('0x4')][a30_0x1ded('0x1')]?a30_0x1ded('0xb'):a30_0x1ded('0x2'),_0x31229b[a30_0x1ded('0x7')]['tag'])}})[a30_0x1ded('0x12')](()=>{});};}};