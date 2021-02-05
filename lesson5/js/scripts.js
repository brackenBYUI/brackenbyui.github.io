function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('today-date').textContent = new Date().toLocaleDateString('en-US', options);

const todayOptions = {day: 'long'}
const todayDay = new Date().getDay();
// .toLocaleDateString('en_US', todayOptions);
console.log(todayDay)
if (todayDay === 5) {
    document.getElementById('banner-container').style.display = 'block'
} else {
    document.getElementById('banner-container').style.display = 'none'
}