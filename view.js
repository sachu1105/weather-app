const apiKey = "11ee96f56a9301b47edfff4e5b53d58d";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".card input");
const searchBtn = document.querySelector(".card button");
const weatherIcon = document.querySelector(".imgweather img");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".weather").innerHTML = data.weather[0].main;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="./images/Cloudy.jpg";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="./images/sunny.avif";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="./images/Rainy.jpg"
    }
    else if(data.weather[0].main == "thunderstorm"){
        weatherIcon.src="./images/thunderstorm.jpg"
    }

}

 searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
 })
