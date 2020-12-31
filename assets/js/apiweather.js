// API KEY :892dacde2e3b8aa02f3318e31b3ff9cd

const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

//App data
const weather = {};

weather.temperature = {
    unit: "celcius"
}

//APP CONSTS AND VARS
const KELVIN = 273;
//API KEY
const key = "892dacde2e3b8aa02f3318e31b3ff9cd";

//CHECK IF BROWSER SUPPORT GEOLOCATION
if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition,showError);
}else {
    notificationElement.style.display="block";
    notificationElement.innerHTML="<p>Browser doesnt support geolocation</p>";
}

//SET USER POSITION
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}
//show error when there is an issue with geolocation service
function showError(error) {
    notificationElement.style.display="block";
    notificationElement.innerHTML=`<p> ${error.message} </p>`;
}

//GET API WEATHER FROM API PROVIDER
function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=id&appid=${key}`;
   
    fetch(api)
        .then(function(response) {
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp -KELVIN);
            weather.description =  data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

//DISPLAY WEATHER TO UI
function displayWeather() {
    iconElement.innerHTML = `<img src="assets/img/svg/${weather.iconId}.svg"/>`;
    tempElement.innerHTML = `${weather.temperature.value} <span>&#8451;</span>`;
    descElement.innerHTML = `<span>/ </span>${weather.description}`;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
//C TO F Conversion
function celciusToFahrenheit(temperature) {
    return (temperature * 9/5) + 32;
}

//When 