const a194_0x2b98=['0\x20*/15\x20*\x20*\x20*\x20*','guild','channels','then','SOMEWHAT_DARK','test','default','@bastion/tesseract','deleteMany','return\x20/\x22\x20+\x20this\x20+\x20\x22/','embeds','name','value','client','filter','title','get','edit','constructor','toFixed','exports','guilds','cache','slice','reactions','size','find','exec','fetch','../models/Poll','Ended','channel','Constants','fields','compile','COLORS','\x20/\x20','Scheduler','map','users','length','catch'];(function(_0x1f8ff0,_0x2b9839){const _0x414f04=function(_0x4ca865){while(--_0x4ca865){_0x1f8ff0['push'](_0x1f8ff0['shift']());}};const _0x4e37b9=function(){const _0x227e4d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x43c94f,_0x432b3d,_0x5679b0,_0x7a740a){_0x7a740a=_0x7a740a||{};let _0x10413a=_0x432b3d+'='+_0x5679b0;let _0x3fce19=0x0;for(let _0x1a3bbc=0x0,_0x3226e2=_0x43c94f['length'];_0x1a3bbc<_0x3226e2;_0x1a3bbc++){const _0x53cce3=_0x43c94f[_0x1a3bbc];_0x10413a+=';\x20'+_0x53cce3;const _0x2e2376=_0x43c94f[_0x53cce3];_0x43c94f['push'](_0x2e2376);_0x3226e2=_0x43c94f['length'];if(_0x2e2376!==!![]){_0x10413a+='='+_0x2e2376;}}_0x7a740a['cookie']=_0x10413a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x343075,_0x775e1a){_0x343075=_0x343075||function(_0x3062b9){return _0x3062b9;};const _0x5c11eb=_0x343075(new RegExp('(?:^|;\x20)'+_0x775e1a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1648ca=function(_0x6f1ccb,_0x41e397){_0x6f1ccb(++_0x41e397);};_0x1648ca(_0x414f04,_0x2b9839);return _0x5c11eb?decodeURIComponent(_0x5c11eb[0x1]):undefined;}};const _0x72d92c=function(){const _0x39abbc=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x39abbc['test'](_0x227e4d['removeCookie']['toString']());};_0x227e4d['updateCookie']=_0x72d92c;let _0x5cfb97='';const _0x782611=_0x227e4d['updateCookie']();if(!_0x782611){_0x227e4d['setCookie'](['*'],'counter',0x1);}else if(_0x782611){_0x5cfb97=_0x227e4d['getCookie'](null,'counter');}else{_0x227e4d['removeCookie']();}};_0x4e37b9();}(a194_0x2b98,0xe8));const a194_0x414f=function(_0x1f8ff0,_0x2b9839){_0x1f8ff0=_0x1f8ff0-0x0;let _0x414f04=a194_0x2b98[_0x1f8ff0];return _0x414f04;};const a194_0x227e4d=function(){let _0x42a32d=!![];return function(_0x4d5bc2,_0x5cba90){const _0xe84b77=_0x42a32d?function(){if(_0x5cba90){const _0x339c4c=_0x5cba90['apply'](_0x4d5bc2,arguments);_0x5cba90=null;return _0x339c4c;}}:function(){};_0x42a32d=![];return _0xe84b77;};}();const a194_0x4ca865=a194_0x227e4d(this,function(){const _0x5cfb36=function(){const _0x33e23c=_0x5cfb36[a194_0x414f('0x26')](a194_0x414f('0x1d'))()[a194_0x414f('0xc')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x33e23c[a194_0x414f('0x19')](a194_0x4ca865);};return _0x5cfb36();});a194_0x4ca865();'use strict';const tesseract_1=require(a194_0x414f('0x1b'));const Poll_1=require(a194_0x414f('0x7'));module[a194_0x414f('0x28')]=class PollScheduler extends tesseract_1[a194_0x414f('0xf')]{constructor(){super('polls',{'cronTime':a194_0x414f('0x14')});this[a194_0x414f('0x5')]=async()=>{if(!this[a194_0x414f('0x21')]['readyTimestamp'])return;if(!this[a194_0x414f('0x21')][a194_0x414f('0x29')][a194_0x414f('0x0')][a194_0x414f('0x3')])return;const _0x5192f4=await Poll_1[a194_0x414f('0x1a')][a194_0x414f('0x4')]({'$or':this[a194_0x414f('0x21')]['guilds']['cache']['map'](_0x4546d2=>({'guild':_0x4546d2['id']})),'ends':{'$lte':new Date()}});const _0x47e556=[];for(const _0x476e07 of _0x5192f4){const _0x58f330=this['client'][a194_0x414f('0x29')][a194_0x414f('0x0')][a194_0x414f('0x24')](_0x476e07[a194_0x414f('0x15')]);if(_0x58f330['channels']['cache']['has'](_0x476e07[a194_0x414f('0x9')])){const _0x18e08e=_0x58f330[a194_0x414f('0x16')]['cache'][a194_0x414f('0x24')](_0x476e07[a194_0x414f('0x9')]);const _0x2f0450=await _0x18e08e['messages'][a194_0x414f('0x6')](_0x476e07['_id'])[a194_0x414f('0x13')](()=>{});if(!_0x2f0450)continue;const _0x52ae32=_0x2f0450[a194_0x414f('0x1e')][0x0][a194_0x414f('0xb')][a194_0x414f('0x10')](_0x6f8364=>_0x6f8364[a194_0x414f('0x20')]);const _0x3ae9ba=['🇦','🇧','🇨','🇩','🇪','🇫','🇬','🇭','🇮','🇯','🇰','🇱','🇲'];const _0x58fba8={};let _0x127eac=0x0;for(const _0x13bc72 in _0x3ae9ba[a194_0x414f('0x1')](0x0,_0x52ae32[a194_0x414f('0x12')])){if(_0x2f0450[a194_0x414f('0x2')]['cache']['has'](_0x3ae9ba[_0x13bc72])){await _0x2f0450['reactions'][a194_0x414f('0x0')][a194_0x414f('0x24')](_0x3ae9ba[_0x13bc72])[a194_0x414f('0x11')][a194_0x414f('0x6')]()['catch'](()=>{});const _0x389ba6=_0x2f0450[a194_0x414f('0x2')][a194_0x414f('0x0')]['get'](_0x3ae9ba[_0x13bc72])[a194_0x414f('0x11')][a194_0x414f('0x0')][a194_0x414f('0x22')](_0x3939ef=>!_0x3939ef['bot'])['size'];_0x58fba8[_0x3ae9ba[_0x13bc72]]=_0x389ba6;_0x127eac+=_0x389ba6;}}await _0x2f0450[a194_0x414f('0x25')]({'embed':{'color':tesseract_1[a194_0x414f('0xa')][a194_0x414f('0xd')][a194_0x414f('0x18')],'author':{'name':'POLL\x20ENDED'},'title':_0x2f0450['embeds'][0x0][a194_0x414f('0x23')],'fields':_0x2f0450[a194_0x414f('0x1e')][0x0][a194_0x414f('0xb')][a194_0x414f('0x10')](_0x169ac3=>({'name':_0x169ac3['name']+'\x20'+_0x169ac3[a194_0x414f('0x20')],'value':(_0x58fba8[_0x169ac3['name']]||0x0)+a194_0x414f('0xe')+_0x127eac+'\x20votes\x20('+(_0x58fba8[_0x169ac3['name']]?_0x58fba8[_0x169ac3[a194_0x414f('0x1f')]]/_0x127eac*0x64:0x0)[a194_0x414f('0x27')](0x2)+'%)'})),'footer':{'text':a194_0x414f('0x8')},'timestamp':new Date()}})[a194_0x414f('0x17')](()=>{_0x47e556['push'](_0x2f0450['id']);})[a194_0x414f('0x13')](()=>{});}}if(_0x47e556['length']){await Poll_1[a194_0x414f('0x1a')][a194_0x414f('0x1c')]({'$or':_0x47e556[a194_0x414f('0x10')](_0x3c1ca5=>({'_id':_0x3c1ca5}))})[a194_0x414f('0x13')](()=>{});}};}};