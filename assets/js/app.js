const getWeatherDataByCityName = async(city) => {
    const API_KEY = "307ad431ef6ffcbfdcde7dc07a3eca51";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
}

getWeatherDataByCityName('dhaka');