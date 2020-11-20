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


const imagesToLoad = document.querySelectorAll("img[data-src]");
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