const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  console.table(jsonObject);
  
  const towns = jsonObject['towns'];
  
   for (let i = 0; i < towns.length; i++) {
     if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs" ){ 
   let card = document.createElement('section');
   let h2 = document.createElement('h2');
   let h3 = document.createElement('h3');
   let yearFounded = document.createElement('p');
   let population = document.createElement('p');   
   let rainfall = document.createElement('p');
   let image = document.createElement('img')
     
     h2.textContent = towns[i].name;
     h3.textContent = towns[i].motto;
     yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
     population.textContent = "Population: " + towns[i].currentPopulation;
     rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
     image.setAttribute('src', "https://plewekat.github.io/images/" + towns[i].photo);
     image.setAttribute('alt', towns[i].name)
     
     card.appendChild(h2);
     card.appendChild(h3);
     card.appendChild(yearFounded);
     card.appendChild(population);
     card.appendChild(rainfall);
     card.appendChild(image);
   
   document.querySelector('div.cards').appendChild(card);
}
}    
}); 

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.flex-container')

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

let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {image.removeAttribute("data-src");
  };
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