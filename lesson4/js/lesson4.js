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