const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.9458&units=imperial&APPID=b84b59a1755e37713619b7756a56bd66";

fetch(weatherURL)
  .then(response => response.json())
  .then(jsObject => {

    const curweather = document.getElementById('current-weather');
    const curtemp = document.getElementById('current-temp');
    const curwindspeed = document.getElementById('current-wind-speed');
    const curhumidity = document.getElementById('current-humidity');

    curhumidity.innerText = jsObject.main.humidity;
    curweather.innerText = jsObject.weather[0].main;
    curtemp.innerText = (jsObject.main.temp).toFixed(0) + " ℉";
    curwindspeed.innerText = (jsObject.wind.speed).toFixed(0) + "mph";
 
    const temperature = parseFloat(jsObject.main.temp);
    const windspeed = parseFloat(jsObject.wind.speed);
    let windchill = "N/A";
    if (temperature <= 50 && windspeed >= 3) {
      windchill = (35.74+0.6215*temperature-35.75*Math.pow(windspeed, 0.16)+0.4275*temperature*Math.pow(windspeed, 0.16)).toFixed(0);
      windchill = windchill + "℉"
    }
    document.getElementById('current-wind-chill').textContent = windchill;
});