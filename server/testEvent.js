const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.setMaxListeners(Infinity);

eventEmitter.on('hello',function(data){
  console.log(data);
})

eventEmitter.emit('hello',"hello");

const kichban = {
  kb1: [1,2,3,5,3],
  kb2: [0,2,3,0,3],
  kb3: [1,2,0,5,3],
  kb4: [4,2,0,5,3],
}

function taoKichBan() {
  for(const i in kichban){
    let time = 0;
    this[i] = setInterval(()=>{
      ++time;
      if(time > kichban[i].length){
        clearInterval(this[i]);
      } else {
        eventEmitter.emit(`${i}`,kichban[i][time - 1]);
      }
    },5000)
  }
}

taoKichBan();

setTimeout(()=>{
  eventEmitter.on('kb1',(data) => {
    console.log("kb1: ", data);
  });
},6000);


