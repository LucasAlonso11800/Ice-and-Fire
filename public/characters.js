const ned = document.getElementById('ned');
const catelyn = document.getElementById('catelyn');
const rob = document.getElementById('rob');//
const jon = document.getElementById('jon');
const sansa = document.getElementById('sansa');
const arya = document.getElementById('arya');
const bran = document.getElementById('bran');
const robert = document.getElementById('robert');//
const cersei = document.getElementById('cersei');
const jaime = document.getElementById('jaime');
const tyrion = document.getElementById('tyrion');
const dany = document.getElementById('dany');//


ned.addEventListener('click', function () {
    getCharacterData(339, 'url(img/Ned.png)')
});
catelyn.addEventListener('click', function () {
    getCharacterData(232, 'url(img/Catelyn.png)')
});
rob.addEventListener('click', function () {
    setCharacterData({
            name: 'Robb Stark',
            gender: 'Male',
            born: '283 AC, at Riverrun',
            died: '299 AC, at The Twins',
            titles: 'King in the North, King of the Trident, Lord of Winterfell',
            aliases: 'The young wolf',
            playedBy: ['Richard Madden']
        } , 'url(img/Rob.png)')
});
jon.addEventListener('click', function () {
    getCharacterData(583, 'url(img/Jon.png)')
});
sansa.addEventListener('click', function () {
    getCharacterData(957, 'url(img/Sansa.png)')
});
arya.addEventListener('click', function () {
    getCharacterData(148, 'url(img/Arya.png)')
});
bran.addEventListener('click', function () {
    getCharacterData(208, 'url(img/Bran.png)')
});
robert.addEventListener('click', function () {
    setCharacterData({
        name: 'Robert Baratheon',
        gender: 'Male',
        born: "262 AC, at Storm's End",
        died: "298 AC, at King's landing",
        titles: "King of The Andals, The Rhoynar and The First Men, Lord of The Seven Kingdoms and Protector of the Realm, Lord of Storm's End.",
        aliases: 'The Usurper',
        playedBy: ['Mark Addy']
    }, 'url(img/Robert.png)');
});
cersei.addEventListener('click', function () {
    getCharacterData(238, 'url(img/Cersei.png)')
});
jaime.addEventListener('click', function () {
    getCharacterData(529, 'url(img/Jaime.png)')
});
tyrion.addEventListener('click', function () {
    getCharacterData(1052, 'url(img/Tyrion.png)')
});
dany.addEventListener('click', function () {
    setCharacterData({
            name: 'Daenerys Targaryen',
            gender: 'Female',
            born: '283 AC, at Dragonstone',
            died: '',
            titles: 'Princess of Dragonstone, Khaleesi, Queen of Meereen, Queen of The Andals, The Rhoynar and The First Men, Lady of The Seven Kingdoms and Protector of the Realm.',
            aliases: 'Dany, Daenerys Stormborn, Mother of dragons, Mysha',
            playedBy: ['Emilia Clarke']
        }, 'url(img/Daenerys2.png)')
});

const characterName = document.getElementById('character-name');
const characterGender = document.getElementById('character-gender');
const characterBorn = document.getElementById('character-born');
const characterDeath = document.getElementById('character-death');
const characterTitles = document.getElementById('character-titles');
const characterAlias = document.getElementById('character-alias');
const characterActor = document.getElementById('character-actor');
const characterImg = document.getElementById('character-img');

const initialURL = "https://www.anapioficeandfire.com/api";

function getCharacterData(characterId, img) {
    fetch(`${initialURL}/characters/${characterId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCharacterData(data, img)
        })
        .catch(err => {
            throw err
        })
};

function setCharacterData(data, img) {
    characterName.innerHTML = data.name;
    characterGender.innerHTML = `<b>Gender: </b>${data.gender}`;
    characterBorn.innerHTML = `<b>Born: </b>${data.born}`;
    characterDeath.innerHTML = `<b>Death: </b>${data.died}`;
    if (data.died === '') {
        characterDeath.innerHTML = `<b>Death: </b> Still alive`
    };
    characterTitles.innerHTML = `<b>Titles: </b>${data.titles}`;
    characterAlias.innerHTML = `<b>Aliases: </b>${data.aliases}`;
    if(data.name === 'Cersei Lannister'){
        characterAlias.innerHTML = '<b>Aliases:</b> Light of the West'
    }
    characterActor.innerHTML = `<b>Played by: </b>${data.playedBy[0]}`;
    characterImg.style.backgroundImage = img;
};

getCharacterData(339, 'url(img/Ned.png)')