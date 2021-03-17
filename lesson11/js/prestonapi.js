const newURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=fc01f49750cab6700d6ea5f55cc7936a&units=imperial';

function windChill(temp, wind) {
    if (temp <= 50 && wind > 3) {
        let windPower = Math.pow(wind, .16);
        let windChill = 35.74 + .6215 * temp - 35.75 * windPower + .4275 * temp * windPower;
        return Math.round(windChill);
    } else {
        return "N/A";
    }
}

fetch(newURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //  console.log(jsObject); 
         document.getElementById('current-weather').textContent = Math.round(jsObject.main.temp);
         document.getElementById('current-desc').textContent = jsObject.weather[0].main;
         document.getElementById('day-high').textContent = Math.round(jsObject.main.temp_max);
         document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);
         document.getElementById('wind-speed').textContent = Math.round(jsObject.wind.speed);
         document.getElementById('wind-chill').textContent = windChill(jsObject.main.temp, jsObject.wind.speed)
    })
    .catch(e => {
        console.error(e);
    })


// const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.0963&lon=-111.8766&exclude=minutely,hourly,alerts&units=imperial&appid=fc01f49750cab6700d6ea5f55cc7936a';

// fetch(apiURL)
//     .then((response) => response.json())
//     .then((jsObject) => {
//         // console.log(jsObject);
//         for (let i = 1; i <= 5; i++) {
//             const imageSrc = 'https://openweathermap.org/img/w/' + jsObject.daily[i].weather[0].icon + '.png';
//             const desc = jsObject.daily[i].weather[0].description;

//             let tableHead = document.createElement('th');
//             let tableData = document.createElement('td');
//             let tableImg = document.createElement('img');
//             let tableDiv = document.createElement('div');
//             let tempSpan = document.createElement('span');
//             let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
//             let timestamp = jsObject.daily[i].dt;
//             let date = new Date(timestamp * 1000);

//             tableHead.textContent = day[date.getDay()]; 
//             tempSpan.textContent = Math.round(jsObject.daily[i].temp.max) + `\u00B0F`;
//             tableImg.setAttribute('src', imageSrc);
//             tableImg.setAttribute('alt', desc);
//             tableDiv.appendChild(tableImg);
//             tableData.appendChild(tableDiv);
//             tableData.appendChild(tempSpan);

//             document.getElementById('table-head').appendChild(tableHead);
//             document.getElementById('table-data').appendChild(tableData);
//         }
//     })

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=fc01f49750cab6700d6ea5f55cc7936a&units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject)
        // let table = document.createElement('table');
        // let tableH = document.createElement('tr');
        // let tableB = document.createElement('tr');

        // table.appendChild(tableH);
        // table.appendChild(tableB);

        // document.getElementsByClassName('day-forecast').appendChild(table);

        jsObject.list.forEach(e =>{
            if(e.dt_txt.includes('18:00:00')) {
                // console.log(e)
                const imageSrc = 'https://openweathermap.org/img/w/' + e.weather[0].icon + '.png';
                const desc = e.weather[0].description;

                let tableHead = document.createElement('th');
                let tableData = document.createElement('td');
                let tableImg = document.createElement('img');
                let tableDiv = document.createElement('div');
                let tempSpan = document.createElement('span');
                let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                let timestamp = e.dt;
                let date = new Date(timestamp * 1000);
                tableHead.textContent = day[date.getDay()]; 
                tempSpan.textContent = Math.round(e.main.temp_max) + `\u00B0F`;
                tableImg.setAttribute('src', imageSrc);
                tableImg.setAttribute('alt', desc);
                tableDiv.appendChild(tableImg);
                tableData.appendChild(tableDiv);
                tableData.appendChild(tempSpan);
    
                document.getElementById('table-head').appendChild(tableHead);
                document.getElementById('table-data').appendChild(tableData);
            }
            
        })
    })

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (jsonObject) {
        const towns = jsonObject.towns;

        // console.log(towns)
        
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name === 'Preston') {
                towns[i].events.forEach(e => {
                    let event = document.createElement('p');

                    event.textContent = e;

                    document.querySelector('.upcoming-events').appendChild(event);

                })
            }
        }
    })


