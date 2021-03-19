function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function onSubmit(e) {
    window.location.href = "thanks.html"
    e.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener('submit', onSubmit);