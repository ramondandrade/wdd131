const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = document.lastModified;

var weather_temperature = 53.5;
var weather_conditions = "Sunnny";
var weather_wind = 5;

document.querySelector("#weather_temperature").innerHTML = weather_temperature + " °F";
document.querySelector("#weather_conditions").innerHTML = weather_conditions;
document.querySelector("#weather_wind").innerHTML = weather_wind + " mph";

function calculateWindChill(){

    if(weather_temperature <= 50 && weather_wind > 3){

        document.querySelector("#weather_windchill").innerHTML = Math.round(
            35.74 +
              0.6215 * weather_temperature -
              35.75 * weather_wind ** 0.16 +
              0.4275 * weather_temperature * weather_wind ** 0.16
          );

    }else{
        document.querySelector("#weather_windchill").innerHTML = "N/A";
    }

}

calculateWindChill();
