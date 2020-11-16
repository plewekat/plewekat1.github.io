const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) 
{
  console.table(jsonObject);  // temporary checking for valid response and data parsing
  const prophets = jsonObject['prophets'];  
  prophets.forEach(prophet => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3')
    let h4 = document.createElement('h4')
    let image = document.createElement('img');


h2.innerHTML = `<span class="prophetName">${prophet.name} ${prophet.lastname}</span>`;
h3.innerHTML = `<span class="subtitle">${prophet.birthdate}</span>`;
h4.innerHTML = `<span class="subtitle">${prophet.birthplace}</span>`;
image.setAttribute('src', prophet.imageurl);
image.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.number}`);

    
card.appendChild(h2);
card.appendChild(h3);
card.appendChild(h4);
card.appendChild(image);

document.querySelector('div.cards').appendChild(card);
});

});