//Select 
const inputGet = document.querySelector('#inputGet');
const temp = document.querySelector('.number');
let cityName;
let b;
//Get value when enter
window.onkeypress = function (event){
    if(event.keyCode == 13){
        //Get value input
        cityName = inputGet.value;
        // Call API
        const API_KEY =`041b66d978aaa9fdcd80e2b063842130`;
        var url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=041b66d978aaa9fdcd80e2b063842130&units=metric&lang=vi";
        fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
        b = data;
        console.log (b);

    }
}
