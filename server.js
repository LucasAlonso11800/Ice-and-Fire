if(process.env.NODE_ENV !=="production"){
    require('dotenv').config()
}

const API_KEY = process.env.API_KEY;
const axios = require('axios')
const express = require('express');
const path = require('path')
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// API CALLS
const url = "https://www.anapioficeandfire.com/api"
app.post('/characters', (req, res) => {

});

app.post('/houses', (req, res) => {
    
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started')
});