const game = document.getElementById('game');
const clash = document.getElementById('clash');
const storm = document.getElementById('storm');
const feast = document.getElementById('feast');
const dance = document.getElementById('dance');

game.addEventListener('click', function() {
    getBookData(1, 'url(img/Game.jpg)')
});
clash.addEventListener('click', function() {
    getBookData(2, 'url(img/Clash.jpg)')
});
storm.addEventListener('click', function() {
    getBookData(3, 'url(img/Storm.webp)')
});
feast.addEventListener('click', function() {
    getBookData(5, 'url(img/Feast.jpg)')
});
dance.addEventListener('click', function() {
    getBookData(8, 'url(img/Dance.webp)')
});

const bookName = document.getElementById('book-name');
const bookAuthor = document.getElementById('book-author');
const bookISBN = document.getElementById('book-isbn');
const bookPages = document.getElementById('book-pages');
const bookDate = document.getElementById('book-date');
const bookImg = document.getElementById('book-img');

const initialURL = "https://www.anapioficeandfire.com/api";

function getBookData(bookId, img) {
    fetch(`${initialURL}/books/${bookId}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            setBookData(data, img)
        })
        .catch(err => {
            throw err
        })
};

function setBookData(data, img) {
    const date = data.released
    const arrangedDate = date.substring(0, 10)

    bookName.innerHTML = data.name;
    bookAuthor.innerHTML = `<b>Author: </b>${data.authors[0]}.`;
    bookISBN.innerHTML = `<b>ISBN: </b>${data.isbn}.`;
    bookPages.innerHTML = `<b>Pages: </b>${data.numberOfPages}.`;
    bookDate.innerHTML = `<b>Date: </b>${arrangedDate}.`;

    bookImg.style.backgroundImage = img;
};

getBookData(1, 'url(img/Game.jpg)')