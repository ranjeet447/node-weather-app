var getUser = (id , callback) => {
  var user = {
    id:id,
    name:'Ranjeet'
  }
  setTimeout(()=>{
    callback(user);
  },3000);
};

getUser(01,(userObject) =>{
  console.log(userObject);
});
