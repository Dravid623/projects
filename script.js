const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ef9d869579msh24b3d3205fc8fbfp1459cajsnb584ef63fc1f",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
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
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

let otherCity = {
  Greenland: {},
  Boston: {},
  Alaska: {},
  Iceland: {},
  London: {},
  Russia: {},
};

// const getWeatherOfOtherCity = async (city) => {
//   const url =
//     "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     // const data = JSON.parse(result)
//     otherCity[city] = result;
//     console.log(otherCity.Russia);
//     Greenlandtemp.innerHTML = otherCity.Greenland.temp;
//   } catch (error) {
//     console.error(error);
//   }
// };

// for (let city in otherCity) {
//   setTimeout(() => {
//     getWeatherOfOtherCity(city);
//     console.log("Inside setTimeout - This code will run after 3 seconds");
//   }, 8000);
// }

const fetchWeatherData = async (city) => {
  const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateWeatherData = (city, weatherData) => {
  otherCity[city] = weatherData;
};

const getCitiesWeatherData = async () => {
  const cities = Object.keys(otherCity);

  for (const city of cities) {
    const weatherData = await fetchWeatherData(city);
    updateWeatherData(city, weatherData);
  }

  console.log(otherCity);


setTimeout(() => {
  Greenlandcloud_pct.innerHTML = otherCity.Greenland.cloud_pct
  Greenlandtemp.innerHTML = otherCity.Greenland.temp
  Greenlandfeels_like.innerHTML = otherCity.Greenland.feels_like
  Greenlandhumidity.innerHTML = otherCity.Greenland.humidity
  Greenlandmin_temp.innerHTML = otherCity.Greenland.min_temp
  Greenlandmax_temp.innerHTML = otherCity.Greenland.max_temp
  Greenlandwind_speed.innerHTML = otherCity.Greenland.wind_speed
  Greenlandwind_degrees.innerHTML = otherCity.Greenland.wind_degrees
  Greenlandsunrise.innerHTML = otherCity.Greenland.sunrise
  Greenlandsunset.innerHTML = otherCity.Greenland.sunset
  
  Bostoncloud_pct.innerHTML = otherCity.Boston.cloud_pct
  Bostontemp.innerHTML = otherCity.Boston.temp
  Bostonfeels_like.innerHTML = otherCity.Boston.feels_like
  Bostonhumidity.innerHTML = otherCity.Boston.humidity
  Bostonmin_temp.innerHTML = otherCity.Boston.min_temp
  Bostonmax_temp.innerHTML = otherCity.Boston.max_temp
  Bostonwind_speed.innerHTML = otherCity.Boston.wind_speed
  Bostonwind_degrees.innerHTML = otherCity.Boston.wind_degrees
  Bostonsunrise.innerHTML = otherCity.Boston.sunrise
  Bostonsunset.innerHTML = otherCity.Boston.sunset

  Alaskacloud_pct.innerHTML = otherCity.Alaska.cloud_pct
  Alaskatemp.innerHTML = otherCity.Alaska.temp
  Alaskafeels_like.innerHTML = otherCity.Alaska.feels_like
  Alaskahumidity.innerHTML = otherCity.Alaska.humidity
  Alaskamin_temp.innerHTML = otherCity.Alaska.min_temp
  Alaskamax_temp.innerHTML = otherCity.Alaska.max_temp
  Alaskawind_speed.innerHTML = otherCity.Alaska.wind_speed
  Alaskawind_degrees.innerHTML = otherCity.Alaska.wind_degrees
  Alaskasunrise.innerHTML = otherCity.Alaska.sunrise
  Alaskasunset.innerHTML = otherCity.Alaska.sunset

  Icelandcloud_pct.innerHTML = otherCity.Iceland.cloud_pct
  Icelandtemp.innerHTML = otherCity.Iceland.temp
  Icelandfeels_like.innerHTML = otherCity.Iceland.feels_like
  Icelandhumidity.innerHTML = otherCity.Iceland.humidity
  Icelandmin_temp.innerHTML = otherCity.Iceland.min_temp
  Icelandmax_temp.innerHTML = otherCity.Iceland.max_temp
  Icelandwind_speed.innerHTML = otherCity.Iceland.wind_speed
  Icelandwind_degrees.innerHTML = otherCity.Iceland.wind_degrees
  Icelandsunrise.innerHTML = otherCity.Iceland.sunrise
  Icelandsunset.innerHTML = otherCity.Iceland.sunset

  Londoncloud_pct.innerHTML = otherCity.London.cloud_pct
  Londontemp.innerHTML = otherCity.London.temp
  Londonfeels_like.innerHTML = otherCity.London.feels_like
  Londonhumidity.innerHTML = otherCity.London.humidity
  Londonmin_temp.innerHTML = otherCity.London.min_temp
  Londonmax_temp.innerHTML = otherCity.London.max_temp
  Londonwind_speed.innerHTML = otherCity.London.wind_speed
  Londonwind_degrees.innerHTML = otherCity.London.wind_degrees
  Londonsunrise.innerHTML = otherCity.London.sunrise
  Londonsunset.innerHTML = otherCity.London.sunset

  Russiacloud_pct.innerHTML = otherCity.Russia.cloud_pct
  Russiatemp.innerHTML = otherCity.Russia.temp
  Russiafeels_like.innerHTML = otherCity.Russia.feels_like
  Russiahumidity.innerHTML = otherCity.Russia.humidity
  Russiamin_temp.innerHTML = otherCity.Russia.min_temp
  Russiamax_temp.innerHTML = otherCity.Russia.max_temp
  Russiawind_speed.innerHTML = otherCity.Russia.wind_speed
  Russiawind_degrees.innerHTML = otherCity.Russia.wind_degrees
  Russiasunrise.innerHTML = otherCity.Russia.sunrise
  Russiasunset.innerHTML = otherCity.Russia.sunset
  }, 0000)};

getCitiesWeatherData();
