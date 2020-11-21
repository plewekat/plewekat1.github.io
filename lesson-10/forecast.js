const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b84b59a1755e37713619b7756a56bd66`;


fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);
  
    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    for (let day = 0; day < forecast.length; day++) {
      const d = new Date(forecast[day].dt_txt);
      document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
      document.getElementById(`forecast${day+1}`).textContent = forecast[day].main.temp;
    }
    
    //forecast.forEach(x => {
      //const d= new Date(x.dt_txt);
      //document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
      //document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
      //day++;
    //})
  
  });