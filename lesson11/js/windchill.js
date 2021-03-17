let temp = document.getElementById("day-high").innerText;
let wind = document.getElementById("wind-speed").innerText;

if (temp <= 50 && wind > 3) {
    let windPower = Math.pow(wind, .16);
    let windChill = 35.74 + .6215 * temp - 35.75 * windPower + .4275 * temp * windPower;
    document.getElementById("wind-chill").innerText = Math.round(windChill);
} else {
    document.getElementById("wind-chill").innerText = "N/A";
}