const a109_0x15eb=['Rank\x20','findById','Karma','test','apply','Level','experience','It\x20allows\x20you\x20to\x20see\x20your\x20(or\x20any\x20of\x20the\x20server\x20member\x27s)\x20rank,\x20level,\x20experience,\x20and\x20karma.','errors','guild','getString','member','language','compile','Command','checkProfile','send','@bastion/tesseract','karma','author','rank\x20USER','locale','resolveGuildMember','level','IRIS','info','document','Constants','default','user','balance','find','findOne','exports','../../models/Member','COLORS','constructor','channel','memberNotFound','length','tag','color','client','catch'];(function(_0x2655d6,_0x15eb33){const _0x41b984=function(_0x33698e){while(--_0x33698e){_0x2655d6['push'](_0x2655d6['shift']());}};const _0xfa3312=function(){const _0x4f75d8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5d8a46,_0x3da8f5,_0x5f4471,_0x39599d){_0x39599d=_0x39599d||{};let _0x467ef9=_0x3da8f5+'='+_0x5f4471;let _0x220bd0=0x0;for(let _0x590374=0x0,_0x31d05a=_0x5d8a46['length'];_0x590374<_0x31d05a;_0x590374++){const _0x2e258b=_0x5d8a46[_0x590374];_0x467ef9+=';\x20'+_0x2e258b;const _0x5dd776=_0x5d8a46[_0x2e258b];_0x5d8a46['push'](_0x5dd776);_0x31d05a=_0x5d8a46['length'];if(_0x5dd776!==!![]){_0x467ef9+='='+_0x5dd776;}}_0x39599d['cookie']=_0x467ef9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4141a8,_0x374cae){_0x4141a8=_0x4141a8||function(_0x2d4629){return _0x2d4629;};const _0x23aa6f=_0x4141a8(new RegExp('(?:^|;\x20)'+_0x374cae['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5e1c36=function(_0x479a56,_0x50547){_0x479a56(++_0x50547);};_0x5e1c36(_0x41b984,_0x15eb33);return _0x23aa6f?decodeURIComponent(_0x23aa6f[0x1]):undefined;}};const _0x2d2c22=function(){const _0x347f09=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x347f09['test'](_0x4f75d8['removeCookie']['toString']());};_0x4f75d8['updateCookie']=_0x2d2c22;let _0x1b7a40='';const _0x8b6c2a=_0x4f75d8['updateCookie']();if(!_0x8b6c2a){_0x4f75d8['setCookie'](['*'],'counter',0x1);}else if(_0x8b6c2a){_0x1b7a40=_0x4f75d8['getCookie'](null,'counter');}else{_0x4f75d8['removeCookie']();}};_0xfa3312();}(a109_0x15eb,0x105));const a109_0x41b9=function(_0x2655d6,_0x15eb33){_0x2655d6=_0x2655d6-0x0;let _0x41b984=a109_0x15eb[_0x2655d6];return _0x41b984;};const a109_0x4f75d8=function(){let _0x4908f7=!![];return function(_0x3eb0ad,_0x55df66){const _0x23db05=_0x4908f7?function(){if(_0x55df66){const _0x3d7f2c=_0x55df66[a109_0x41b9('0x7')](_0x3eb0ad,arguments);_0x55df66=null;return _0x3d7f2c;}}:function(){};_0x4908f7=![];return _0x23db05;};}();const a109_0x33698e=a109_0x4f75d8(this,function(){const _0x11a3c0=function(){const _0x5a9ff1=_0x11a3c0[a109_0x41b9('0x27')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a109_0x41b9('0x10')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5a9ff1[a109_0x41b9('0x6')](a109_0x33698e);};return _0x11a3c0();});a109_0x33698e();'use strict';const tesseract_1=require(a109_0x41b9('0x14'));const Member_1=require(a109_0x41b9('0x25'));const User_1=require('../../models/User');module[a109_0x41b9('0x24')]=class RankCommand extends tesseract_1[a109_0x41b9('0x11')]{constructor(){super('rank',{'description':a109_0x41b9('0xa'),'triggers':[a109_0x41b9('0x1a'),'xp'],'arguments':{},'scope':a109_0x41b9('0xc'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['rank',a109_0x41b9('0x17')]});this['exec']=async(_0x4d9b8e,_0x3b32bc)=>{const _0x40275e=_0x3b32bc['_'][a109_0x41b9('0x2a')]?_0x3b32bc['_'][0x0]:_0x4d9b8e[a109_0x41b9('0x16')]['id'];const _0x2efe43=_0x40275e===_0x4d9b8e[a109_0x41b9('0x16')]['id']?_0x4d9b8e[a109_0x41b9('0xe')]:this[a109_0x41b9('0x1')]['resolver'][a109_0x41b9('0x19')](_0x4d9b8e[a109_0x41b9('0xc')],_0x40275e);if(!_0x2efe43)throw new Error(this[a109_0x41b9('0x1')][a109_0x41b9('0x18')]['getString'](_0x4d9b8e[a109_0x41b9('0xc')]['document'][a109_0x41b9('0xf')],a109_0x41b9('0xb'),a109_0x41b9('0x29')));const _0x3db7d8=_0x40275e===_0x4d9b8e['author']['id']?_0x4d9b8e[a109_0x41b9('0x16')][a109_0x41b9('0x1d')]:await User_1['default'][a109_0x41b9('0x4')](_0x40275e);const _0x1544a2=_0x40275e===_0x4d9b8e['author']['id']?_0x2efe43[a109_0x41b9('0x1d')]:await Member_1[a109_0x41b9('0x1f')][a109_0x41b9('0x23')]({'user':_0x40275e,'guild':_0x4d9b8e[a109_0x41b9('0xc')]['id']});if(!_0x3db7d8||!_0x1544a2)throw new Error(this[a109_0x41b9('0x1')][a109_0x41b9('0x18')][a109_0x41b9('0xd')](_0x4d9b8e[a109_0x41b9('0xc')][a109_0x41b9('0x1d')][a109_0x41b9('0xf')],'errors','profileNotFound'));const _0x572baf=await Member_1[a109_0x41b9('0x1f')][a109_0x41b9('0x22')]({'guild':_0x4d9b8e[a109_0x41b9('0xc')]['id']},null,{'sort':{'level':-0x1,'experience':-0x1,'karma':-0x1,'balance':-0x1}})['countDocuments']({'$or':[{'level':{'$gt':_0x1544a2['level']}},{'level':_0x1544a2[a109_0x41b9('0x1a')],'experience':{'$gt':_0x1544a2[a109_0x41b9('0x9')]}},{'level':_0x1544a2[a109_0x41b9('0x1a')],'experience':_0x1544a2[a109_0x41b9('0x9')],'karma':{'$gt':_0x1544a2[a109_0x41b9('0x15')]}},{'level':_0x1544a2[a109_0x41b9('0x1a')],'experience':_0x1544a2[a109_0x41b9('0x9')],'karma':_0x1544a2[a109_0x41b9('0x15')],'balance':{'$gt':_0x1544a2[a109_0x41b9('0x21')]}}]});await _0x4d9b8e[a109_0x41b9('0x28')][a109_0x41b9('0x13')]({'embed':{'color':_0x3db7d8[a109_0x41b9('0x0')]||tesseract_1[a109_0x41b9('0x1e')][a109_0x41b9('0x26')][a109_0x41b9('0x1b')],'author':{'name':_0x2efe43[a109_0x41b9('0x20')][a109_0x41b9('0x2b')]},'title':a109_0x41b9('0x3')+(_0x572baf+0x1),'description':this[a109_0x41b9('0x1')]['locale'][a109_0x41b9('0xd')](_0x4d9b8e[a109_0x41b9('0xc')][a109_0x41b9('0x1d')][a109_0x41b9('0xf')],a109_0x41b9('0x1c'),a109_0x41b9('0x12')),'fields':[{'name':a109_0x41b9('0x8'),'value':_0x1544a2[a109_0x41b9('0x1a')],'inline':!![]},{'name':'Experience','value':_0x1544a2['experience'],'inline':!![]},{'name':a109_0x41b9('0x5'),'value':_0x1544a2[a109_0x41b9('0x15')],'inline':!![]}],'thumbnail':{'url':_0x2efe43[a109_0x41b9('0x20')]['displayAvatarURL']({'dynamic':!![],'size':0x200})}}})[a109_0x41b9('0x2')](()=>{});};}};