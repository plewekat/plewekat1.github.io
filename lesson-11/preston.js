const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b84b59a1755e37713619b7756a56bd66";

fetch(weatherURL)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);

    const curweather = document.getElementById('current-weather');
    const curtemp = document.getElementById('current-temp');
    const curwindspeed = document.getElementById('current-wind-speed');
    const curhumidity = document.getElementById('current-humidity');

    curhumidity.innerText = jsObject.main.humidity;
    curweather.innerText = jsObject.weather[0].main;
    curtemp.innerText = jsObject.main.temp + " ℉";
    curwindspeed.innerText = jsObject.wind.speed + "mph";
 

    const temperature = parseFloat(jsObject.main.temp);
    const windspeed = parseFloat(jsObject.wind.speed);
    let windchill = "N/A";
    if (temperature <= 50 && windspeed >= 3) {
      windchill = (35.74+0.6215*temperature-35.75*Math.pow(windspeed, 0.16)+0.4275*temperature*Math.pow(windspeed, 0.16)).toFixed(1);
      windchill = windchill + " ℉"
    }
    document.getElementById('current-wind-chill').textContent = windchill;
});


const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b84b59a1755e37713619b7756a56bd66";


fetch(forecastURL)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);
  
    const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

    for (let day = 0; day < forecast.length; day++) {
      const today = forecast[day];
      const date = new Date(today.dt_txt);
      const imgsource = `https://openweathermap.org/img/w/${today.weather[0].icon}.png`;
      console.log(imgsource);
      document.getElementById(`dayofweek${day+1}`).textContent = weekdays[date.getDay()];
      document.getElementById(`forecast${day+1}`).textContent = (today.main.temp_max).toFixed(0);
      console.log(document.getElementById(`imagesrc${day+1}`));
      document.getElementById((`imagesrc${day+1}`)).setAttribute("src", imgsource);
    }
  });

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.flex-container');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const currentDateElement = document.getElementById('current-date');
const currentDate = new Date();
const dateFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

currentDateElement.textContent = currentDate.toLocaleDateString('en-US', dateFormatOptions);


const headerDate = new Date();
const headerDay = headerDate.getDay();

if (headerDay===6) {
document.getElementById('alertMsg').classList.add('alertMessageYes');
document.getElementById('alertMsg').classList.remove('alertMessage');
}

if (headerDay!=6) {
document.getElementById('alertMsg').classList.add('alertMessage');
document.getElementById('alertMsg').classList.remove('alertMessageYes');
};


const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px"
  };
  
  if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
    if(item.isIntersecting) {
      loadImages(item.target);
      observer.unobserve(item.target);
    }
    });
  });
  
  imagesToLoad.forEach((img) => {
  observer.observe(img)
  });                     
  } else {
    imagesToLoad.forEach((img) => {
    loadImages(img);
  });
  }
  
  function myFunction(elmnt,clr) {
    elmnt.style.color = clr;
  }
  
  WebFont.load({
    google: {
      families: [
         'Abel', 'Roboto', 'nanum gothic'
      ]
    }
    
  });