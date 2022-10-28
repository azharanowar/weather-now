const getWeatherDataByLatLong = async(lat, long) => {
    const API_KEY = "307ad431ef6ffcbfdcde7dc07a3eca51";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    displayWeatherData(data);
}

const displayWeatherData = weatherData => {
    console.log(weatherData)
}

//Check if browser supports W3C Geolocation API
if (navigator.geolocation) {
}    navigator.geolocation.getCurrentPosition(getCurrentLocationLatLong);

//Get latitude and longitude;
function getCurrentLocationLatLong(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    getWeatherDataByLatLong(lat, long);
}
