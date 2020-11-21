const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.flex-container')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const t = parseFloat(document.getElementById('t').textContent);
const s = parseFloat(document.getElementById('s').textContent);
document.getElementById('f').textContent = (35.74+0.6215*t-35.75*Math.pow(s, 0.16)+0.4275*t*Math.pow(s, 0.16)).toFixed(1);

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
  