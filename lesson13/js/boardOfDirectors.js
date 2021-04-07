const requestURL = 'json/boardOfDirectors.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (jsonObject) {
        const board = jsonObject.board;
        for (let i = 0; i < board.length; i++) {
                let card = document.createElement('section');
                let director = document.createElement('div');
                let h2 = document.createElement('h3');
                let number = document.createElement('p');
                let position = document.createElement('h4');

                h2.textContent = board[i].name;
                position.textContent = board[i].position;
                number.textContent = 'Number: ' + board[i].number;

                director.appendChild(h2);
                director.appendChild(position);
                director.appendChild(number);
                card.appendChild(director);
                

                document.querySelector('.board-of-directors').appendChild(card);
        }
    })