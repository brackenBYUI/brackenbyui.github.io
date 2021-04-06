function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('last-update').textContent = new Date(document.lastModified).toLocaleDateString('en-US', options);