const a45_0x416b=['test','\x20/\x20','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','applyModifier','join','Dice\x20Roll','roll\x20NOTATION','Command','../../utils/numbers','modifierPattern','guild','match','Constants','filter','@bastion/tesseract','constructor','toLowerCase','Result','length','send','getRandomInt','COLORS','reduce','channel','push','applyModifiers','IRIS','pattern','It\x20allows\x20you\x20to\x20roll\x20dice\x20and\x20see\x20the\x20result.\x20It\x20supports\x20dice\x20notation.','parseInt'];(function(_0x3d71eb,_0x416bd0){const _0x495cb6=function(_0x1fad56){while(--_0x1fad56){_0x3d71eb['push'](_0x3d71eb['shift']());}};const _0x1b67d7=function(){const _0x5e8486={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5cc4ba,_0x561ce2,_0x3386fa,_0x3c26f5){_0x3c26f5=_0x3c26f5||{};let _0x641859=_0x561ce2+'='+_0x3386fa;let _0x3337b1=0x0;for(let _0x58fe46=0x0,_0x1273af=_0x5cc4ba['length'];_0x58fe46<_0x1273af;_0x58fe46++){const _0x4faab2=_0x5cc4ba[_0x58fe46];_0x641859+=';\x20'+_0x4faab2;const _0x445e6c=_0x5cc4ba[_0x4faab2];_0x5cc4ba['push'](_0x445e6c);_0x1273af=_0x5cc4ba['length'];if(_0x445e6c!==!![]){_0x641859+='='+_0x445e6c;}}_0x3c26f5['cookie']=_0x641859;},'removeCookie':function(){return'dev';},'getCookie':function(_0x44eee7,_0x514442){_0x44eee7=_0x44eee7||function(_0x1f50d7){return _0x1f50d7;};const _0x3c562c=_0x44eee7(new RegExp('(?:^|;\x20)'+_0x514442['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1a8bd1=function(_0x4cef5e,_0x18aace){_0x4cef5e(++_0x18aace);};_0x1a8bd1(_0x495cb6,_0x416bd0);return _0x3c562c?decodeURIComponent(_0x3c562c[0x1]):undefined;}};const _0x220db2=function(){const _0x1c9953=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1c9953['test'](_0x5e8486['removeCookie']['toString']());};_0x5e8486['updateCookie']=_0x220db2;let _0x4f93d3='';const _0x24efc5=_0x5e8486['updateCookie']();if(!_0x24efc5){_0x5e8486['setCookie'](['*'],'counter',0x1);}else if(_0x24efc5){_0x4f93d3=_0x5e8486['getCookie'](null,'counter');}else{_0x5e8486['removeCookie']();}};_0x1b67d7();}(a45_0x416b,0x166));const a45_0x495c=function(_0x3d71eb,_0x416bd0){_0x3d71eb=_0x3d71eb-0x0;let _0x495cb6=a45_0x416b[_0x3d71eb];return _0x495cb6;};const a45_0x5e8486=function(){let _0x3c7013=!![];return function(_0x44462d,_0x1670de){const _0x1bcd7b=_0x3c7013?function(){if(_0x1670de){const _0x30a5d3=_0x1670de['apply'](_0x44462d,arguments);_0x1670de=null;return _0x30a5d3;}}:function(){};_0x3c7013=![];return _0x1bcd7b;};}();const a45_0x1fad56=a45_0x5e8486(this,function(){const _0x20ca6f=function(){const _0xb23609=_0x20ca6f[a45_0x495c('0x11')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile'](a45_0x495c('0x4'));return!_0xb23609[a45_0x495c('0x2')](a45_0x1fad56);};return _0x20ca6f();});a45_0x1fad56();'use strict';const tesseract_1=require(a45_0x495c('0x10'));const numbers=require(a45_0x495c('0xa'));module['exports']=class RollCommand extends tesseract_1[a45_0x495c('0x9')]{constructor(){super('roll',{'description':a45_0x495c('0x0'),'triggers':[],'arguments':{},'scope':a45_0x495c('0xc'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['roll',a45_0x495c('0x8')]});this[a45_0x495c('0x5')]=(_0x369254,_0x139264)=>{const [,_0x45a963,_0x24ba98]=_0x139264[a45_0x495c('0xd')](this['modifierPattern']);switch(_0x45a963[a45_0x495c('0x12')]()){case'+':return _0x369254+Number[a45_0x495c('0x1')](_0x24ba98);case'-':return _0x369254-Number[a45_0x495c('0x1')](_0x24ba98);case'/':return _0x369254/Number[a45_0x495c('0x1')](_0x24ba98);case'*':case'x':return _0x369254*Number['parseInt'](_0x24ba98);default:return _0x369254;}};this[a45_0x495c('0x1b')]=(_0x2e0547,_0xe18ff5)=>{for(const _0x55a503 of _0xe18ff5){_0x2e0547=this[a45_0x495c('0x5')](_0x2e0547,_0x55a503);}return _0x2e0547;};this['exec']=async(_0xb378cd,_0x1e202f)=>{const [,_0x5b7453,_0x572df5,..._0x524620]=_0x1e202f['_'][a45_0x495c('0x6')]('')['match'](this[a45_0x495c('0x1d')]);const _0xa0e4ae=_0x5b7453?Number[a45_0x495c('0x1')](_0x5b7453):0x1;const _0xa8ba76=_0x572df5?Number[a45_0x495c('0x1')](_0x572df5):0x6;const _0x33d287=[];for(let _0x226aab=0x0;_0x226aab<_0xa0e4ae;_0x226aab++){_0x33d287['push'](numbers[a45_0x495c('0x16')](0x1,_0xa8ba76));}let _0x43728f=_0x33d287[a45_0x495c('0x18')]((_0x490789,_0x29028e)=>_0x490789+_0x29028e,0x0);const _0x5cfc06=[];if(_0x524620[a45_0x495c('0xf')](_0x59ad38=>_0x59ad38)[a45_0x495c('0x14')]){_0x5cfc06[a45_0x495c('0x1a')]({'name':'Modifiers','value':_0x524620[a45_0x495c('0x6')]('\x20'),'inline':!![]});_0x43728f=this[a45_0x495c('0x1b')](_0x43728f,_0x524620[a45_0x495c('0xf')](_0x348c4f=>_0x348c4f));}_0x5cfc06[a45_0x495c('0x1a')]({'name':a45_0x495c('0x13'),'value':_0x43728f,'inline':!![]});await _0xb378cd[a45_0x495c('0x19')][a45_0x495c('0x15')]({'embed':{'color':tesseract_1[a45_0x495c('0xe')][a45_0x495c('0x17')][a45_0x495c('0x1c')],'title':a45_0x495c('0x7'),'description':_0x33d287[a45_0x495c('0x6')](a45_0x495c('0x3')),'fields':_0x5cfc06}});};this[a45_0x495c('0x1d')]=/^(\d+)?(?:d(\d*))?([-+x*/]\d+)?([-+x*/]\d+)?$/i;this[a45_0x495c('0xb')]=/^([-+x*/])(\d+)$/i;}};