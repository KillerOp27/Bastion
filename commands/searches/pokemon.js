const a116_0x1dbc=['sprite','send','exec','number','exports','Pokémon','Command','Mega','Species','pokemon\x20NUMBER','@bastion/tesseract','Types','json','\x0aHidden:\x20','Weight','weight','compile','return\x20/\x22\x20+\x20this\x20+\x20\x22/','normal','https://pokeapi.glitch.me/v1/pokemon/','Constants','gender','../../utils/errors','COLORS','Egg\x20Groups','Evolution\x20Line','Height','Legendary\x20','legendary','Powered\x20by\x20PokéDex\x20API','abilities','pokemon','ultraBeast','join','starter','height','description','INVALID_COMMAND_SYNTAX','default','IRIS','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','hidden','family','\x20->\x20','pokemon\x20NAME','Description','message','apply','It\x20allows\x20you\x20to\x20search\x20for\x20information\x20on\x20the\x20specified\x20Pokémon.','error','eggGroups','Starter\x20','evolutionLine','node-fetch','Gender\x20Ratio','length','name','Discovered\x20in\x20generation\x20'];(function(_0x1483b8,_0x1dbc2c){const _0x26b23f=function(_0x1bec1c){while(--_0x1bec1c){_0x1483b8['push'](_0x1483b8['shift']());}};const _0x3a27af=function(){const _0x22c97a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x36aa43,_0x2007ef,_0x3df30e,_0x5e8f65){_0x5e8f65=_0x5e8f65||{};let _0x1af65d=_0x2007ef+'='+_0x3df30e;let _0xc75cd4=0x0;for(let _0x2d414d=0x0,_0x3f1865=_0x36aa43['length'];_0x2d414d<_0x3f1865;_0x2d414d++){const _0x2b896a=_0x36aa43[_0x2d414d];_0x1af65d+=';\x20'+_0x2b896a;const _0x207743=_0x36aa43[_0x2b896a];_0x36aa43['push'](_0x207743);_0x3f1865=_0x36aa43['length'];if(_0x207743!==!![]){_0x1af65d+='='+_0x207743;}}_0x5e8f65['cookie']=_0x1af65d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x14b702,_0x481922){_0x14b702=_0x14b702||function(_0x19d75f){return _0x19d75f;};const _0x3a3e25=_0x14b702(new RegExp('(?:^|;\x20)'+_0x481922['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3442be=function(_0x5bf6f0,_0x47f853){_0x5bf6f0(++_0x47f853);};_0x3442be(_0x26b23f,_0x1dbc2c);return _0x3a3e25?decodeURIComponent(_0x3a3e25[0x1]):undefined;}};const _0xb57027=function(){const _0x4863ec=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4863ec['test'](_0x22c97a['removeCookie']['toString']());};_0x22c97a['updateCookie']=_0xb57027;let _0xf11c72='';const _0x4ad758=_0x22c97a['updateCookie']();if(!_0x4ad758){_0x22c97a['setCookie'](['*'],'counter',0x1);}else if(_0x4ad758){_0xf11c72=_0x22c97a['getCookie'](null,'counter');}else{_0x22c97a['removeCookie']();}};_0x3a27af();}(a116_0x1dbc,0xba));const a116_0x26b2=function(_0x1483b8,_0x1dbc2c){_0x1483b8=_0x1483b8-0x0;let _0x26b23f=a116_0x1dbc[_0x1483b8];return _0x26b23f;};const a116_0x22c97a=function(){let _0x4d09da=!![];return function(_0x63ae6f,_0x4e3b60){const _0x41f5b5=_0x4d09da?function(){if(_0x4e3b60){const _0x436613=_0x4e3b60[a116_0x26b2('0x23')](_0x63ae6f,arguments);_0x4e3b60=null;return _0x436613;}}:function(){};_0x4d09da=![];return _0x41f5b5;};}();const a116_0x1bec1c=a116_0x22c97a(this,function(){const _0x2979ee=function(){const _0x44dc4b=_0x2979ee['constructor'](a116_0x26b2('0x5'))()[a116_0x26b2('0x4')](a116_0x26b2('0x1c'));return!_0x44dc4b['test'](a116_0x1bec1c);};return _0x2979ee();});a116_0x1bec1c();'use strict';const tesseract_1=require(a116_0x26b2('0x38'));const node_fetch_1=require(a116_0x26b2('0x29'));const errors=require(a116_0x26b2('0xa'));module[a116_0x26b2('0x32')]=class PokemonCommand extends tesseract_1[a116_0x26b2('0x34')]{constructor(){super(a116_0x26b2('0x13'),{'description':a116_0x26b2('0x24'),'triggers':[],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a116_0x26b2('0x20'),a116_0x26b2('0x37')]});this[a116_0x26b2('0x30')]=async(_0x1d0c08,_0x5ebb64)=>{if(!_0x5ebb64['_']['length'])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][a116_0x26b2('0x19')],this['name']);const _0xa79f34=_0x5ebb64['_']['join']('\x20');const _0x4a887a=await node_fetch_1[a116_0x26b2('0x1a')](a116_0x26b2('0x7')+encodeURIComponent(_0xa79f34));const _0x4ff7c7=await _0x4a887a[a116_0x26b2('0x0')]();if(_0x4ff7c7[a116_0x26b2('0x25')])throw new Error(_0x4ff7c7[a116_0x26b2('0x22')]);await _0x1d0c08['channel'][a116_0x26b2('0x2f')]({'embed':{'color':tesseract_1[a116_0x26b2('0x8')][a116_0x26b2('0xb')][a116_0x26b2('0x1b')],'author':{'name':(_0x4ff7c7[0x0]['mythical']?'Mythical\x20':'')+(_0x4ff7c7[0x0][a116_0x26b2('0x10')]?a116_0x26b2('0xf'):'')+(_0x4ff7c7[0x0]['mega']?a116_0x26b2('0x35'):'')+(_0x4ff7c7[0x0][a116_0x26b2('0x14')]?'Ultra\x20Beast':'')+(_0x4ff7c7[0x0][a116_0x26b2('0x16')]?a116_0x26b2('0x27'):'')+a116_0x26b2('0x33')},'title':_0x4ff7c7[0x0][a116_0x26b2('0x2c')],'description':a116_0x26b2('0x2d')+_0x4ff7c7[0x0]['gen'],'fields':[{'name':'Number','value':_0x4ff7c7[0x0][a116_0x26b2('0x31')],'inline':!![]},{'name':a116_0x26b2('0x36'),'value':_0x4ff7c7[0x0]['species'],'inline':!![]},{'name':a116_0x26b2('0x39'),'value':_0x4ff7c7[0x0]['types'][a116_0x26b2('0x15')]('\x0a'),'inline':!![]},{'name':'Abilities','value':'Normal:\x20'+(_0x4ff7c7[0x0]['abilities'][a116_0x26b2('0x6')][a116_0x26b2('0x15')](',\x20')||'-')+a116_0x26b2('0x1')+(_0x4ff7c7[0x0][a116_0x26b2('0x12')][a116_0x26b2('0x1d')][a116_0x26b2('0x15')](',\x20')||'-'),'inline':!![]},{'name':a116_0x26b2('0xc'),'value':_0x4ff7c7[0x0][a116_0x26b2('0x26')]['join']('\x0a'),'inline':!![]},{'name':a116_0x26b2('0x2a'),'value':_0x4ff7c7[0x0][a116_0x26b2('0x9')][a116_0x26b2('0x2b')]?_0x4ff7c7[0x0][a116_0x26b2('0x9')][0x0]+':'+_0x4ff7c7[0x0][a116_0x26b2('0x9')][0x1]:'Genderless','inline':!![]},{'name':a116_0x26b2('0xe'),'value':_0x4ff7c7[0x0][a116_0x26b2('0x17')],'inline':!![]},{'name':a116_0x26b2('0x2'),'value':_0x4ff7c7[0x0][a116_0x26b2('0x3')],'inline':!![]},{'name':a116_0x26b2('0xd'),'value':_0x4ff7c7[0x0][a116_0x26b2('0x1e')][a116_0x26b2('0x28')][a116_0x26b2('0x15')](a116_0x26b2('0x1f'))},{'name':a116_0x26b2('0x21'),'value':_0x4ff7c7[0x0][a116_0x26b2('0x18')]}],'thumbnail':{'url':_0x4ff7c7[0x0][a116_0x26b2('0x2e')]},'footer':{'text':a116_0x26b2('0x11')}}});};}};