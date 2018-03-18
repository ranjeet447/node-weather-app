const yargs = require('yargs');
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

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

geocode.geocodeAddress(argv.address, (errorMessage,results)=>{
  if(errorMessage){
    consolse.log(errorMessage);
  }else{
    console.log(results.Address);
    weather.getWeather(results.Latitude,results.Longitude,(errorMessage,weatheResults)=>{
      if(errorMessage){
        consolse.log(errorMessage);
      }else {
        console.log(JSON.stringify(weatheResults,undefined,2));
      }
    });
  }
});




//   url:'https://api.darksky.net/forecast/b46e6b46bc248616e823b9e53a29b892/12.898773,77.5764094')
