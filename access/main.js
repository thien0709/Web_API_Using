//Select 
const inputGet = document.querySelector('#inputGet');
const temp = document.querySelector('.number');
let b;
//Get value when enter
window.onkeypress = function (event){
    if(event.keyCode == 13){
        // Call API
        const API_KEY =`22e87aefe5b358c5e45fd150c7765eb6`;
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${inputGet.value}&appid=${API_KEY}&units=metric&lang=vi`;
        fetch(url)
        .then((response) => response.json())
        .then((data) =>{
            var temperature = data['main']['temp'];
            temp.innerHTML = temperature;
        })
        .catch((err) => {
            alert("Hay nhap lai dia chi");
        })
    }
}
