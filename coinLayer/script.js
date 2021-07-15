const baseURL = "http://api.coinlayer.com/api/live";
const key = "b4a19ccbfa2db721e8271117fc1b24bc";

fetch (`${baseURL}?access_key=${key}`)
.then(response => response.json())
.then(json => coinLayer(json));

function coinLayer(crypto) {
    console.log(crypto);

    for(let i = 0; i <= 386; i++){
      
    }
}