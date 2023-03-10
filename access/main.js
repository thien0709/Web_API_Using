//Select 
const input = document.querySelector('input');
const temp = document.querySelector('.number');
value = input.value;
//Call API
const API_KEY = "cf07c0b75fe0d374f648ef9cc52fb730";
const city = value;

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=vi`,
{
    headers: {
      "Content-Type": "application/json",
    },
})
.then((response) => response.json())
.then((data) => console.log(data));
window.onkeypress = (e){
    if(e.key == "enter"){
        console.log(city);
    }
}
// temp.innerText(data);