var addAsync  = (a,b)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(typeof a === 'number' && typeof b ==='number'){
        resolve(a+b);
      }else{
        reject('Arguments must be numbers');
      }
    },2000);
  });
};

addAsync(5,7).then((res)=>{
  console.log(res);
},(e)=>{
  console.log(e);
});
//
// var somePromise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//       resolve('It woked');
//       reject('Unable to fulfill promise.');
//   },2000);
// });
//
// somePromise.then((message)=>{
//   console.log('Success',message);
// },(errorMessage)=>{
//   console.log('Error:',errorMessage);
// });
