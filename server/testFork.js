const cp = require("child_process");
require('events').EventEmitter.defaultMaxListeners = Infinity; 

// var son1 = cp.fork("./son1.js");
// var son2 = cp.fork("./son1.js");
// var son3 = cp.fork("./son1.js");
// var son2 = cp.fork("./son2.js");
const kichban = {
  kb1: [1,2,3,5,3],
  kb2: [0,2,3,0,3],
  kb3: [1,2,0,5,3],
  kb4: [4,2,0,5,3],
}

function taoKichBan (){
  for(let i in kichban){
    global[i] = cp.fork("./son1.js");
    global[i].send({msg:i,kb:kichban[i]})
  }
}


setTimeout(()=>{
  global.kb1.on("message" , ms => {
    console.log(ms);
  });
},10000);

taoKichBan();

