const t = parseFloat(document.getElementById('t').textContent);
const s = parseFloat(document.getElementById('s').textContent);
document.getElementById('f').textContent = (35.74+0.6215*t-35.75*Math.pow(s, 0.16)+0.4275*t*Math.pow(s, 0.16)).toFixed(1);







const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b84b59a1755e37713619b7756a56bd66";


fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);

    const curtemp = document.querySelector('#current-temp');
    const iconsource = document.querySelector('#imagesrc');
    const weathericon = document.querySelector('#icon');

    curtemp.innerHTML = jsObject.main.temp;

    iconsource.textContent = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const isrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

    weathericon.setAttribute('src', isrc);
    weathericon.setAttribute('alt', jsObject.weather[0].description)

});