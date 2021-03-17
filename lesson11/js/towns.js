const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (jsonObject) {
        const towns = jsonObject.towns;

        // console.log(towns)
        
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name === 'Fish Haven' || towns[i].name === 'Preston' || towns[i].name === 'Soda Springs') {

                let card = document.createElement('section');
                let townDesc = document.createElement('div');
                let h2 = document.createElement('h2');
                let motto = document.createElement('h3');
                let yearFounded = document.createElement('p');
                let population = document.createElement('p');
                let rainFall = document.createElement('p');
                let image = document.createElement('img');

                h2.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                population.textContent = 'Population: ' + towns[i].currentPopulation;
                rainFall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
                image.setAttribute('src', "images/home/" + towns[i].photo);
                image.setAttribute('alt', towns[i].name);

                townDesc.appendChild(h2);
                townDesc.appendChild(motto);
                townDesc.appendChild(yearFounded);
                townDesc.appendChild(population);
                townDesc.appendChild(rainFall);
                card.appendChild(townDesc);
                card.appendChild(image);

                document.querySelector('.towns').appendChild(card);
            }
        }
    })