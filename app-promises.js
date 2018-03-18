const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a:{
      demand:true,
      alias:'address',
      describe:'Address to get weather',
      string:true
    }
  })
  .help()
  .alias('help','h')
  .argv;

  var encodedAddress = encodeURIComponent(argv.address);
  var geoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

  axios.get(geoCodeURL).then((response)=>{
    if(response.data.status=== 'ZERO_RESULTS'){
      throw new Error('Address not found');
    }
    var lat= response.data.results[0].geometry.location.lat;
    var lng= response.data.results[0].geometry.location.lng;
    console.log(lat,lng);
    var weatherURL = `https://api.darksky.net/forecast/b46e6b46bc248616e823b9e53a29b892/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
  }).then((response)=>{
    var weather ={
      summary:response.data.currently.summary,
      Temperature:response.data.currently.temperature,
      apparentTemperature:response.data.currently.apparentTemperature
    };
    console.log(weather);
  }).catch((e)=>{
    if(e.code==='ENOTFOUND'){
      console.log('Unable to connect to server.');
    }else {
      console.log(e.message);
    }
  });
