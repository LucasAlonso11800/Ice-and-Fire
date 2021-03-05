const targaryen = document.getElementById('targaryen');
const stark = document.getElementById('stark');
const arryn = document.getElementById('arryn');
const tully = document.getElementById('tully');
const greyjoy = document.getElementById('greyjoy');
const lannister = document.getElementById('lannister');
const baratheon = document.getElementById('baratheon');
const tyrell = document.getElementById('tyrell');
const martell = document.getElementById('martell');

targaryen.addEventListener('click', function () {
    getHouseData(378, 'url(img/Targaryen.png)')
});
stark.addEventListener('click', function () {
    getHouseData(362, 'url(img/Stark.png)')
});
arryn.addEventListener('click', function () {
    getHouseData(7, 'url(img/Arryn.png)')
});
tully.addEventListener('click', function () {
    getHouseData(395, 'url(img/Tully.png)')
});
greyjoy.addEventListener('click', function () {
    getHouseData(169, 'url(img/Greyjoy.png)')
});
lannister.addEventListener('click', function () {
    getHouseData(229, 'url(img/Lannister.png)')
});
baratheon.addEventListener('click', function () {
    getHouseData(17, 'url(img/Baratheon.png)')
});
tyrell.addEventListener('click', function () {
    getHouseData(398, 'url(img/Tyrell.png)')
});
martell.addEventListener('click', function () {
    getHouseData(285, 'url(img/Martell.png)')
});

const houseName = document.getElementById('house-name');
const houseFounded = document.getElementById('house-founded');
const houseRegion = document.getElementById('house-region');
const houseCoat = document.getElementById('house-coat');
const houseTitles = document.getElementById('house-titles');
const houseSeat = document.getElementById('house-seat');
const houseWords = document.getElementById('house-words');
const houseImg = document.getElementById('house-img');

const initialURL = "https://www.anapioficeandfire.com/api";

function getHouseData(houseId, img) {
    fetch(`${initialURL}/houses/${houseId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setHouseData(data, img)
        })
        .catch(err => {
            throw err
        })
};

function setHouseData(data, img) {
    houseName.innerHTML = `${data.name}`;
    houseFounded.innerHTML = `<b>Founded:</b> ${data.founded}.`;
    houseRegion.innerHTML = `<b>Region:</b> ${data.region}.`;
    houseCoat.innerHTML = `<b>Coat of arms:</b> ${data.coatOfArms}.`;
    houseTitles.innerHTML = `<b>Titles:</b> ${data.titles[0]}, ${data.titles[1]}, ${data.titles[2]}.`;
    if (img === 'url(img/Tully.png)' || 'url(img/Baratheon.png)') {
        houseTitles.innerHTML = `<b>Titles:</b> ${data.titles[0]}, ${data.titles[1]}.`;
    }
    houseSeat.innerHTML = `<b>Seats:</b> ${data.seats}.`;
    houseWords.innerHTML = `<b>Words:</b> ${data.words}.`;
    houseImg.style.backgroundImage = img;
};

getHouseData(378, 'url(img/Targaryen.png)');