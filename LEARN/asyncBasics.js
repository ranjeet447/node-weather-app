console.log('starting app');

setTimeout(()=>{
  console.log('delay');
},5000);

setTimeout(()=>{
  console.log('delay2');
},0);
console.log('Finishing app');
