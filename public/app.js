const button = document.getElementById('button');
const output = document.getElementById('output')
const button2 = document.getElementById('button2');
const output2 = document.getElementById('output2')
const token = "goW_fCRLk3Al_d1z5DyN"
const url = "https://the-one-api.dev/v2"
let rofk;

button.addEventListener('click', function(){
    fetch(`${url}/movie/`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let result = '<h2>Works</h2>'
        result += `<p>${data.docs[7].name}</p>`
        output.innerHTML = result
        rofk = data.docs[7]._id
    })
    .catch(err => {
        console.log(err)
    })
});

button2.addEventListener('click', function(){
    fetch(`${url}/character?name=Boromir`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
});