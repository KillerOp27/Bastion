const a69_0x3c2b=['COLORS','create','author','send','roleCreate','guild','name','tag','roleRename','edit','hoist','delete','exec','language','../../utils/confirmation','document','getString','It\x20allows\x20you\x20create,\x20delete\x20and\x20update\x20roles\x20in\x20the\x20server.','Command','color','COLOR','GREEN','catch','client','Constants','info','BASTION_ERROR_TYPE','DiscordError','roles','apply','roles\x20--create\x20NAME\x20--\x20REASON','mentionable','constructor','../../utils/errors','default','MANAGE_ROLES','ArgumentTypes','exports','join','resolver','roleDelete','roles\x20--rename\x20ROLE\x20--name\x20NAME\x20--\x20REASON','roles\x20--create\x20NAME\x20--color\x20COLOR\x20--\x20REASON','resolveRole','@bastion/tesseract','length','channel','rename'];(function(_0x384f5b,_0x3c2bb1){const _0x49ccec=function(_0x47e743){while(--_0x47e743){_0x384f5b['push'](_0x384f5b['shift']());}};const _0xd96e24=function(){const _0x25655c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x49f2f1,_0x5e1437,_0x57951b,_0x5c97bb){_0x5c97bb=_0x5c97bb||{};let _0x1992f4=_0x5e1437+'='+_0x57951b;let _0x2e05cf=0x0;for(let _0x344435=0x0,_0x103330=_0x49f2f1['length'];_0x344435<_0x103330;_0x344435++){const _0x1cc8e9=_0x49f2f1[_0x344435];_0x1992f4+=';\x20'+_0x1cc8e9;const _0x2a8981=_0x49f2f1[_0x1cc8e9];_0x49f2f1['push'](_0x2a8981);_0x103330=_0x49f2f1['length'];if(_0x2a8981!==!![]){_0x1992f4+='='+_0x2a8981;}}_0x5c97bb['cookie']=_0x1992f4;},'removeCookie':function(){return'dev';},'getCookie':function(_0x282fa2,_0x6ccb72){_0x282fa2=_0x282fa2||function(_0x5ee47d){return _0x5ee47d;};const _0x561413=_0x282fa2(new RegExp('(?:^|;\x20)'+_0x6ccb72['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x14b528=function(_0x1e5228,_0x52b2c0){_0x1e5228(++_0x52b2c0);};_0x14b528(_0x49ccec,_0x3c2bb1);return _0x561413?decodeURIComponent(_0x561413[0x1]):undefined;}};const _0x57c6ab=function(){const _0x2c3a3d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2c3a3d['test'](_0x25655c['removeCookie']['toString']());};_0x25655c['updateCookie']=_0x57c6ab;let _0x3b915f='';const _0xd70716=_0x25655c['updateCookie']();if(!_0xd70716){_0x25655c['setCookie'](['*'],'counter',0x1);}else if(_0xd70716){_0x3b915f=_0x25655c['getCookie'](null,'counter');}else{_0x25655c['removeCookie']();}};_0xd96e24();}(a69_0x3c2b,0x150));const a69_0x49cc=function(_0x384f5b,_0x3c2bb1){_0x384f5b=_0x384f5b-0x0;let _0x49ccec=a69_0x3c2b[_0x384f5b];return _0x49ccec;};const a69_0x25655c=function(){let _0xa4ae82=!![];return function(_0x9e31bc,_0x4ad879){const _0x343243=_0xa4ae82?function(){if(_0x4ad879){const _0x35433d=_0x4ad879[a69_0x49cc('0x1d')](_0x9e31bc,arguments);_0x4ad879=null;return _0x35433d;}}:function(){};_0xa4ae82=![];return _0x343243;};}();const a69_0x47e743=a69_0x25655c(this,function(){const _0x191054=function(){const _0x230bce=_0x191054[a69_0x49cc('0x20')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x230bce['test'](a69_0x47e743);};return _0x191054();});a69_0x47e743();'use strict';const tesseract_1=require(a69_0x49cc('0x2c'));const confirmation_1=require(a69_0x49cc('0xe'));const errors=require(a69_0x49cc('0x21'));module[a69_0x49cc('0x25')]=class RolesCommand extends tesseract_1[a69_0x49cc('0x12')]{constructor(){super(a69_0x49cc('0x1c'),{'description':a69_0x49cc('0x11'),'triggers':[],'arguments':{'array':[a69_0x49cc('0x1'),a69_0x49cc('0xb'),a69_0x49cc('0x6'),a69_0x49cc('0x2f')],'boolean':[a69_0x49cc('0xa'),'mentionable'],'string':[a69_0x49cc('0x1'),a69_0x49cc('0xb'),'rename'],'coerce':{'color':tesseract_1['Constants'][a69_0x49cc('0x24')][a69_0x49cc('0x14')]}},'scope':a69_0x49cc('0x5'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_ROLES'],'userPermissions':[a69_0x49cc('0x23')],'syntax':[a69_0x49cc('0x1e'),a69_0x49cc('0x2a'),'roles\x20--create\x20NAME\x20--hoist\x20--\x20REASON','roles\x20--create\x20NAME\x20--mentionable\x20--\x20REASON',a69_0x49cc('0x29'),'roles\x20--delete\x20ROLE\x20--\x20REASON']});this[a69_0x49cc('0xc')]=async(_0x20a381,_0x12bd5e)=>{const _0x3bd865=_0x12bd5e['_'][a69_0x49cc('0x26')]('\x20')||'-';if(_0x12bd5e['create']&&_0x12bd5e[a69_0x49cc('0x1')][a69_0x49cc('0x2d')]){const _0x40bc1f=await _0x20a381['guild'][a69_0x49cc('0x1c')][a69_0x49cc('0x1')]({'data':{'name':_0x12bd5e[a69_0x49cc('0x1')][a69_0x49cc('0x26')]('\x20'),'color':_0x12bd5e[a69_0x49cc('0x13')],'hoist':_0x12bd5e[a69_0x49cc('0xa')],'mentionable':_0x12bd5e[a69_0x49cc('0x1f')]},'reason':_0x3bd865});return await _0x20a381['channel'][a69_0x49cc('0x3')]({'embed':{'color':tesseract_1['Constants'][a69_0x49cc('0x0')][a69_0x49cc('0x15')],'description':this[a69_0x49cc('0x17')]['locale'][a69_0x49cc('0x10')](_0x20a381['guild'][a69_0x49cc('0xf')][a69_0x49cc('0xd')],a69_0x49cc('0x19'),a69_0x49cc('0x4'),_0x20a381[a69_0x49cc('0x2')][a69_0x49cc('0x7')],_0x40bc1f[a69_0x49cc('0x6')],_0x3bd865)}})[a69_0x49cc('0x16')](()=>{});}if(_0x12bd5e[a69_0x49cc('0xb')]&&_0x12bd5e[a69_0x49cc('0xb')][a69_0x49cc('0x2d')]){const _0x1ad556=this[a69_0x49cc('0x17')][a69_0x49cc('0x27')][a69_0x49cc('0x2b')](_0x20a381[a69_0x49cc('0x5')],_0x12bd5e[a69_0x49cc('0xb')][a69_0x49cc('0x26')]('\x20'));const _0x2f6ef4=await confirmation_1[a69_0x49cc('0x22')](_0x20a381,this[a69_0x49cc('0x17')]['locale'][a69_0x49cc('0x10')](_0x20a381['guild'][a69_0x49cc('0xf')][a69_0x49cc('0xd')],a69_0x49cc('0x19'),'roleDeleteQuestion',_0x20a381[a69_0x49cc('0x2')][a69_0x49cc('0x7')],_0x1ad556['name']));if(_0x2f6ef4){await _0x1ad556[a69_0x49cc('0xb')](_0x3bd865);return await _0x20a381[a69_0x49cc('0x2e')][a69_0x49cc('0x3')]({'embed':{'color':tesseract_1[a69_0x49cc('0x18')][a69_0x49cc('0x0')]['GREEN'],'description':this[a69_0x49cc('0x17')]['locale'][a69_0x49cc('0x10')](_0x20a381[a69_0x49cc('0x5')]['document']['language'],a69_0x49cc('0x19'),a69_0x49cc('0x28'),_0x20a381[a69_0x49cc('0x2')][a69_0x49cc('0x7')],_0x1ad556[a69_0x49cc('0x6')],_0x3bd865)}})['catch'](()=>{});}return!![];}if(_0x12bd5e[a69_0x49cc('0x2f')]&&_0x12bd5e['rename'][a69_0x49cc('0x2d')]&&_0x12bd5e[a69_0x49cc('0x6')]&&_0x12bd5e['name'][a69_0x49cc('0x2d')]){let _0x2191e7=this[a69_0x49cc('0x17')]['resolver']['resolveRole'](_0x20a381[a69_0x49cc('0x5')],_0x12bd5e[a69_0x49cc('0x2f')]['join']('\x20'));_0x2191e7=await _0x2191e7[a69_0x49cc('0x9')]({'name':_0x12bd5e['name'][a69_0x49cc('0x26')]('\x20')});return await _0x20a381[a69_0x49cc('0x2e')][a69_0x49cc('0x3')]({'embed':{'color':tesseract_1[a69_0x49cc('0x18')][a69_0x49cc('0x0')][a69_0x49cc('0x15')],'description':this[a69_0x49cc('0x17')]['locale']['getString'](_0x20a381[a69_0x49cc('0x5')][a69_0x49cc('0xf')][a69_0x49cc('0xd')],a69_0x49cc('0x19'),a69_0x49cc('0x8'),_0x20a381[a69_0x49cc('0x2')][a69_0x49cc('0x7')],_0x2191e7[a69_0x49cc('0x6')],_0x3bd865)}})[a69_0x49cc('0x16')](()=>{});}throw new errors[(a69_0x49cc('0x1b'))](errors[a69_0x49cc('0x1a')]['INVALID_COMMAND_SYNTAX'],this['name']);};}};