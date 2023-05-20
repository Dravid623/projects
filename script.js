
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ef9d869579msh24b3d3205fc8fbfp1459cajsnb584ef63fc1f",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getweather = (city)=>{
    cityName.innerHTML=city
    const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;

async function fetchData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    cloud_pct.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    temp2.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    humidity2.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_speed2.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = result.sunrise;
    sunset.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
}

fetchData();
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getweather(city.value)
})


getweather('Delhi')
