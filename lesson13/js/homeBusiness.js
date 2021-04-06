const requestURL = 'json/localBusiness.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (jsonObject) {
        const business = jsonObject.business;
        
        for (let i = 0; i < 3; i++) {
                let card = document.createElement('section');
                let busi = document.createElement('div');
                let h2 = document.createElement('h2');
                let number = document.createElement('p');
                let website = document.createElement('a');
                let image = document.createElement('img');

                h2.textContent = business[i].name;
                number.textContent = 'Number: ' + business[i].number;
                website.textContent = "Website";
                website.href = business[i].website;
                website.target = "_blank";
                image.setAttribute('src', "images/businessLogo/" + business[i].photo);
                image.setAttribute('alt', business[i].name);

                busi.appendChild(h2);
                busi.appendChild(image);
                busi.appendChild(number);
                busi.appendChild(website);
                card.appendChild(busi);
                

                document.querySelector('.adds').appendChild(card);
        }
    })