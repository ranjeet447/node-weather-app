const axios = require('axios');
const request = require('request');


//
// var getWeather = (lat,lng,callbabk)=> {
//   axios.get(`https://api.darksky.net/forecast/b46e6b46bc248616e823b9e53a29b892/${lat},${lng}`).then((response) => {
//     callback({
//       summary:response.data.currently.summary,
//       Temperature:response.data.currently.temperature,
//       apparentTemperature:response.data.currently.apparentTemperature,
//     })
//   }).catch(error => {
//        console.log(error);
//   });
// }

var getWeather = (lat,lng,callback)=> {
  request({
    url:`https://api.darksky.net/forecast/b46e6b46bc248616e823b9e53a29b892/${lat},${lng}`,
    json:true
  }, function (error,response,body){
    if(!error && response.statusCode===200){
      callback(undefined,{
        summary:body.currently.summary,
        Temperature:body.currently.temperature,
        apparentTemperature:body.currently.apparentTemperature
      });
    }else{
      callback('Unable to fetch weather.');
    }
  });
};

module.exports={
  getWeather
}
