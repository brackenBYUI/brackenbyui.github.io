function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function onSubmit(e) {
    window.location.href = "/lesson8/thanks.html"
    e.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener('submit', onSubmit);