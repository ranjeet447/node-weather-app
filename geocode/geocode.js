const request = require('request');


var  geocodeAddress = (address, callback) =>{
  var encodedAddress = encodeURIComponent(address);

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true
  }, function (error,response,body){
    if(error){
      callback('Unable to connect to server');
    }else if(body.status === 'ZERO_RESULTS'){
      callback('Address not found');
    }else if(body.status === 'OK'){
      callback(undefined,{
        Address:body.results[0].formatted_address,
        Latitude:body.results[0].geometry.location.lat,
        Longitude:body.results[0].geometry.location.lng
      })
    }
  });
}

module.exports={
  geocodeAddress
}
//b46e6b46bc248616e823b9e53a29b892
//https://api.darksky.net/forecast/b46e6b46bc248616e823b9e53a29b892/37.8267,-122.4233
