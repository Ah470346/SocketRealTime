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

// console.log("father sending message to son1..");
// son1.send({msg:"1",kb:[1,2,3,4,5]});
// son2.send({msg:"2",kb:[5,4,3,2,1]});
// son3.send({msg:"3",kb:[9,8,7,6,5]});

// console.log("father sending message to son2..");
// son2.send({msg:'Hi son1'});

// son1.on('message', message => {
//   console.log(message);
// })

// son2.on('message', message => {
//   console.log(message);
// })

// son3.on('message', message => {
//   console.log(message);
// })

function taoKichBan (){
  for(let i in kichban){
    global[i] = cp.fork("./son1.js");
    global[i].send({msg:i,kb:kichban[i]})
  }
}


setInterval(()=>{
  global.kb1.on("message" , ms => {
    console.log(ms);
  });
  global.kb1.on("kill", ()=>{
    global.kb1.kill('SIGINT');
  })
},10000);

taoKichBan();

