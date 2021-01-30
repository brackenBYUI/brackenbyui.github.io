function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('today-date').textContent = new Date().toLocaleDateString('en-US', options);