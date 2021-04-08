function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
    document.getElementById("hamburger-menu").classList.toggle("hide");
    document.getElementById("primaryNav").classList.toggle("mobile-menu");
}

function listView() {
    document.querySelector(".business").classList.add("list-view");
}

function gridView() {
    document.querySelector(".business").classList.remove("list-view");

}


const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('last-update').textContent = new Date(document.lastModified).toLocaleDateString('en-US', options);