const apikey = "b9d30e01b097a6b0834c5f72102d5c3d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather (city){
  
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h" ;

    const weatherCondition = data.weather[0].main.toLowerCase();
    if(data.checkWeather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";    
    }
    else if(data.checkWeather[0].main == "clear sky"){
        weatherIcon.src = "sun.png";
    }
    else if(data.checkWeather[0].main == "snow"){
        weatherIcon.src = "snow.png";
    }
  

}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})


