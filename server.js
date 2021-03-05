const axios = require('axios')
const express = require('express');
const path = require('path')
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// API CALLS
const initialURL = "https://www.anapioficeandfire.com/api"

app.post('/characters', (req, res) => {
    const url = `${initialURL}/characters`
});

app.post('/houses', (req, res) => {
    const url = `${initialURL}/houses?name=${req.body.name}`

    axios({
        url: url,
        responseType: 'json'
    })
    .then(data => res.json(data))
}); 

app.post('/books', (req, res) => {
    const url = `${initialURL}/books`

});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started')
});