const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.0963&lon=-111.8766&exclude=minutely,hourly,alerts&units=imperial&appid=fc01f49750cab6700d6ea5f55cc7936a';

function windChill(temp, wind) {
    if (temp <= 50 && wind > 3) {
        let windPower = Math.pow(wind, .16);
        let windChill = 35.74 + .6215 * temp - 35.75 * windPower + .4275 * temp * windPower;
        return Math.round(windChill);
    } else {
        return "N/A";
    }
}

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('current-weather').textContent = Math.round(jsObject.current.temp);
        document.getElementById('current-desc').textContent = jsObject.current.weather[0].main;
        document.getElementById('feels-like').textContent = Math.round(jsObject.current.feels_like);
        document.getElementById('humidity').textContent = Math.round(jsObject.current.humidity);
        document.getElementById('wind-speed').textContent = Math.round(jsObject.current.wind_speed);
        document.getElementById('wind-chill').textContent = windChill(jsObject.current.temp, jsObject.current.wind_speed)
    })