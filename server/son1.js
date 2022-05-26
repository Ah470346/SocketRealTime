var brother=null;
process.on('message', function(json)
{
  console.log(json);
  let dem = 0;
  const clear = setInterval(()=>{
    process.send(`${json.msg}: ${json.kb[dem]}`);
    dem++;
    if(dem === 5){
      clearInterval(clear);
      process.send("kill");
      process.exit();
    }
  },5000) 
});