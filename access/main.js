//Select
const inputGet = document.querySelector("#inputGet");
const temp = document.querySelector(".number");
const descrip = document.querySelector(".description");
const wind = document.querySelector(".wind-speed");
const img = document.querySelector(".img img");
const result = document.querySelector("#result");
let b;
//Get value when enter
window.onkeypress = function (event) {
  if (event.keyCode == 13) {
    // Call API
    const API_KEY = `22e87aefe5b358c5e45fd150c7765eb6`;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${inputGet.value}&appid=${API_KEY}&units=metric&lang=vi`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //Appear result
        result.style.width = "90%";
        setTimeout(() => {
          var temperature = data["main"]["temp"];
          temp.innerHTML = `Nhiệt độ: ${temperature}°C`;
          var wind_speed = data["wind"]["speed"];
          wind.innerHTML = `Tốc độ gió: ${wind_speed}`;
          var description = data["weather"]["0"]["description"];
          descrip.innerHTML = description;
          var icon = data["weather"]["0"]["icon"];
          img.src = `https://openweathermap.org/img/wn/${icon}.png`;
        }, 500);
      })
      .catch((err) => {
        alert("Hay nhap lai dia chi");
      });
  }
};
