const a557_0x13b1=['Animation','tvShow\x20TITLE','first_air_date','INVALID_COMMAND_SYNTAX','https://image.tmdb.org/t/p/original','adult','send','Sci-Fi\x20&\x20Fantasy','COLORS','Genre','Action\x20&\x20Adventure','It\x20allows\x20you\x20to\x20search\x20for\x20information\x20on\x20the\x20specified\x20TV\x20Show.','Reality','Powered\x20by\x20The\x20Movie\x20Database','Comedy','genre_ids','News','filter','channel','overview','guild','First\x20Air\x20Date','BASTION_ERROR_TYPE','genres','apply','../../utils/errors','Soap','DiscordError','join','exec','constructor','../../utils/omnic','War\x20&\x20Politics','Command','IRIS','sanitize','length','Family','TV\x20Show','Crime','name','Mystery','map','exports','slice','makeRequest','Drama','nsfw','poster_path','\x0a...','original_language','test','/tmdb/tv/','return\x20/\x22\x20+\x20this\x20+\x20\x22/','compile','backdrop_path','Kids','toUpperCase','results'];(function(_0x3ad58a,_0x13b177){const _0x16ceb3=function(_0x5206ba){while(--_0x5206ba){_0x3ad58a['push'](_0x3ad58a['shift']());}};const _0x2ce782=function(){const _0x1b6ee8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x314629,_0x2d76f2,_0x48eb2c,_0x58a3ee){_0x58a3ee=_0x58a3ee||{};let _0x4be2bd=_0x2d76f2+'='+_0x48eb2c;let _0xeac8c7=0x0;for(let _0x32d690=0x0,_0x3b8284=_0x314629['length'];_0x32d690<_0x3b8284;_0x32d690++){const _0x3dab7e=_0x314629[_0x32d690];_0x4be2bd+=';\x20'+_0x3dab7e;const _0x5c900b=_0x314629[_0x3dab7e];_0x314629['push'](_0x5c900b);_0x3b8284=_0x314629['length'];if(_0x5c900b!==!![]){_0x4be2bd+='='+_0x5c900b;}}_0x58a3ee['cookie']=_0x4be2bd;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1d58d5,_0x118e88){_0x1d58d5=_0x1d58d5||function(_0x45679e){return _0x45679e;};const _0x1ac151=_0x1d58d5(new RegExp('(?:^|;\x20)'+_0x118e88['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x47b327=function(_0x361cdf,_0x4269c1){_0x361cdf(++_0x4269c1);};_0x47b327(_0x16ceb3,_0x13b177);return _0x1ac151?decodeURIComponent(_0x1ac151[0x1]):undefined;}};const _0x409eb3=function(){const _0x284e6d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x284e6d['test'](_0x1b6ee8['removeCookie']['toString']());};_0x1b6ee8['updateCookie']=_0x409eb3;let _0x32adf2='';const _0xabb012=_0x1b6ee8['updateCookie']();if(!_0xabb012){_0x1b6ee8['setCookie'](['*'],'counter',0x1);}else if(_0xabb012){_0x32adf2=_0x1b6ee8['getCookie'](null,'counter');}else{_0x1b6ee8['removeCookie']();}};_0x2ce782();}(a557_0x13b1,0x15b));const a557_0x16ce=function(_0x3ad58a,_0x13b177){_0x3ad58a=_0x3ad58a-0x0;let _0x16ceb3=a557_0x13b1[_0x3ad58a];return _0x16ceb3;};const a557_0x1b6ee8=function(){let _0x3af0f4=!![];return function(_0x209e34,_0x285e0d){const _0x140325=_0x3af0f4?function(){if(_0x285e0d){const _0x182eae=_0x285e0d[a557_0x16ce('0x1f')](_0x209e34,arguments);_0x285e0d=null;return _0x182eae;}}:function(){};_0x3af0f4=![];return _0x140325;};}();const a557_0x5206ba=a557_0x1b6ee8(this,function(){const _0x2e0308=function(){const _0x12672f=_0x2e0308[a557_0x16ce('0x25')](a557_0x16ce('0x1'))()[a557_0x16ce('0x2')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x12672f[a557_0x16ce('0x3a')](a557_0x5206ba);};return _0x2e0308();});a557_0x5206ba();'use strict';const tesseract_1=require('@bastion/tesseract');const errors=require(a557_0x16ce('0x20'));const omnic=require(a557_0x16ce('0x26'));module[a557_0x16ce('0x32')]=class TVShowCommand extends tesseract_1[a557_0x16ce('0x28')]{constructor(){super('tvShow',{'description':a557_0x16ce('0x12'),'triggers':['tv'],'arguments':{},'scope':a557_0x16ce('0x1b'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a557_0x16ce('0x8')]});this['sanitize']=_0x499aab=>{return _0x499aab[a557_0x16ce('0x2b')]>0x7d0?_0x499aab[a557_0x16ce('0x33')](0x0,0x7d0)+a557_0x16ce('0x38'):_0x499aab;};this[a557_0x16ce('0x24')]=async(_0x293a37,_0x22c585)=>{if(!_0x22c585['_'][a557_0x16ce('0x2b')])throw new errors[(a557_0x16ce('0x22'))](errors[a557_0x16ce('0x1d')][a557_0x16ce('0xa')],this[a557_0x16ce('0x2f')]);const _0x514caa=_0x22c585['_']['join']('\x20');const _0x46c35e=await omnic[a557_0x16ce('0x34')](a557_0x16ce('0x0')+_0x514caa);const _0x46efe1=await _0x46c35e['json']();const _0x4658b9=_0x293a37['channel'][a557_0x16ce('0x36')]?_0x46efe1[a557_0x16ce('0x6')]:_0x46efe1[a557_0x16ce('0x6')][a557_0x16ce('0x18')](_0x1ecbf0=>!_0x1ecbf0[a557_0x16ce('0xc')]);if(!_0x4658b9||!_0x4658b9['length'])throw new Error('NOT_FOUND');await _0x293a37[a557_0x16ce('0x19')][a557_0x16ce('0xd')]({'embed':{'color':tesseract_1['Constants'][a557_0x16ce('0xf')][a557_0x16ce('0x29')],'author':{'name':a557_0x16ce('0x2d')},'title':_0x4658b9[0x0][a557_0x16ce('0x2f')],'url':'https://themoviedb.org/tv/'+_0x4658b9[0x0]['id'],'description':this[a557_0x16ce('0x2a')](_0x4658b9[0x0][a557_0x16ce('0x1a')]),'fields':[{'name':a557_0x16ce('0x10'),'value':_0x4658b9[0x0][a557_0x16ce('0x16')][a557_0x16ce('0x31')](_0x3f242d=>this['genres'][_0x3f242d])[a557_0x16ce('0x23')]('\x0a'),'inline':!![]},{'name':'Language','value':_0x4658b9[0x0][a557_0x16ce('0x39')][a557_0x16ce('0x5')](),'inline':!![]},{'name':'Rating','value':''+_0x4658b9[0x0]['vote_average'],'inline':!![]},{'name':a557_0x16ce('0x1c'),'value':_0x4658b9[0x0][a557_0x16ce('0x9')],'inline':!![]}],'image':{'url':_0x4658b9[0x0][a557_0x16ce('0x37')]?a557_0x16ce('0xb')+_0x4658b9[0x0][a557_0x16ce('0x37')]:a557_0x16ce('0xb')+_0x4658b9[0x0][a557_0x16ce('0x3')]},'footer':{'text':a557_0x16ce('0x14')}}});};this[a557_0x16ce('0x1e')]={'10759':a557_0x16ce('0x11'),'16':a557_0x16ce('0x7'),'35':a557_0x16ce('0x15'),'80':a557_0x16ce('0x2e'),'99':'Documentary','18':a557_0x16ce('0x35'),'10751':a557_0x16ce('0x2c'),'10762':a557_0x16ce('0x4'),'9648':a557_0x16ce('0x30'),'10763':a557_0x16ce('0x17'),'10764':a557_0x16ce('0x13'),'10765':a557_0x16ce('0xe'),'10766':a557_0x16ce('0x21'),'10767':'Talk','10768':a557_0x16ce('0x27'),'37':'Western'};}};