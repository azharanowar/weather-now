const getWeatherDataByCityName = async(city) => {
    const API_KEY = "307ad431ef6ffcbfdcde7dc07a3eca51";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=${API_KEY}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    displayWeatherData(data)
}

const displayWeatherData = weatherData => {
    const countryName = weatherData.name;
    const temperature = weatherData.main.temp;
    const weather = weatherData.weather[0].main;
    const weatherIcon = weatherData.weather[0].icon;

    document.getElementById("displayCityName").innerHTML = countryName;
    document.getElementById("displayTemperature").innerHTML = temperature;
    document.getElementById("displayWeather").innerHTML = weather;
    document.getElementById("displayWeatherIcon").src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
}

//Check if browser supports W3C Geolocation API
if (navigator.geolocation) {
}    navigator.geolocation.getCurrentPosition(getCurrentCityLocation);

//Get latitude and longitude;
function getCurrentCityLocation(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => getWeatherDataByCityName(data.city));
}