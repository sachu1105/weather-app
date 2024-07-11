const apiKey = "*";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".card input");
const searchBtn = document.querySelector(".card button");
const weatherIcon = document.querySelector(".imgweather img");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        
    }
    else{
        var data = await response.json();
    

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
            weatherIcon.src="./images/Thunder-Storm.jpg"
        }
        document.querySelector(".error").style.display = "none";

    }
   

}

 searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
 })
