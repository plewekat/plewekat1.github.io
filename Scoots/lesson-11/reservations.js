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

const requestURL = 'https://plewekat.github.io/Scoots/lesson-11/prices.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) 
{
  console.table(jsonObject);  // temporary checking for valid response and data parsing
  const vehicles = jsonObject['vehicles'];  
  vehicles.forEach(vehicle => {
    let card= document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let h5 = document.createElement('h5');
    let h6 = document.createElement('h6');
    let h7 = document.createElement('h7');
    let image = document.createElement('img');


h2.innerHTML = `<span class="name">${vehicle.name}</span>`;
h3.innerHTML = `<span class="subtitle">${vehicle.reshalf}</span>`;
h4.innerHTML = `<span class="subtitle">${vehicle.resfull}</span>`;
h5.innerHTML = `<span class="subtitle">${vehicle.walkhalf}</span>`;
h6.innerHTML = `<span class="subtitle">${vehicle.walkfull}</span>`;
h7.innerHTML = `<span class="subtitle">${vehicle.max}</span>`;
image.setAttribute('src', vehicle.imageurl);
image.setAttribute('alt', `${vehicle.name}`);

card.appendChild(image); 
card.appendChild(h2);
card.appendChild(h3);
card.appendChild(h4);
card.appendChild(h5);
card.appendChild(h6);
card.appendChild(h7);

document.querySelector('div.cards').appendChild(card);
});
});

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
         'heebo', 'Roboto', 'manrope'
      ]
    }
    
  });
