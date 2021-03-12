const todayOptions = {day: 'long'};
const todayDay = new Date().getDay();
if (todayDay === 5) {
    document.getElementById('banner-container').style.display = 'block'
} else {
    document.getElementById('banner-container').style.display = 'none'
}