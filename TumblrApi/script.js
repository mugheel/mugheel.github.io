const buttons = document.getElementById('buttons');
const grid = document.querySelector('.grid')
const tagNames = ['Beach','Hat','Mug','Wallet','Bottle',];

//create buttons
for (let i = 0; i < tagNames.length; i++) {
    let newButton = document.createElement('button');
    newButton.innerHTML = tagNames[i];
    newButton.classList.add('btn');
    newButton.classList.add('btn-info');
    newButton.classList.add('mr-3');
    buttons.appendChild(newButton);
}

//pick random tagName
let randomIndex = Math.floor(Math.random() * tagNames.length);
let tag = tagNames[randomIndex];

fetch ('https://api.tumblr.com/v2/tagged?tag='+ tag +'&api_key=kOBU5tFQaOu1uxeAvIBECFwHUyx6DUZA1KXM5UOTFJ4WEq8mNm') // Call the fetch function passing the url of the API as a parameter
.then(function(response) {
    // Your code for handling the data you get from the API
    return response.json(); //to extract the json body content from response
})
.then(function(result){
    let items = result.response;

    for (let i = 0; i < items.length; i++) {
        if (items[i].photos != undefined) {
            const imgSrc= items[i].photos[0].original_size.url;
            const img = document.createElement('img');
            img.src = imgSrc;

            grid.appendChild(img);
        }
    }
    
})

// what happens after user clicks on button
buttons.onclick = function (event) {
    console.log(event.target.innerHTML);
    if (event.target.innerHTML == tag) {
        alert('Smart!');
        location.reload();
    } else {
        alert('Think Again!');
        location.reload();
    }
}