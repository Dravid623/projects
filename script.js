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

const otherCityWeather = (result, endPoints) => {
  // Iterate over each city and populate the corresponding weather data
  for (let i = 0; i < endPoints.length; i++) {
    const city = endPoints[i];
    const cityRow = document.querySelector(`.${city}`);
    const cityElement = cityRow.parentNode;

    if (cityElement) {
      const weatherData = result[i];

      cityElement.querySelector(".cloud_pct").innerHTML = weatherData.cloud_pct;
      cityElement.querySelector(".temp").innerHTML = weatherData.temp;
      cityElement.querySelector(".feels_like").innerHTML =
        weatherData.feels_like;
      cityElement.querySelector(".humidity").innerHTML = weatherData.humidity;
      cityElement.querySelector(".min_temp").innerHTML = weatherData.min_temp;
      cityElement.querySelector(".max_temp").innerHTML = weatherData.max_temp;
      cityElement.querySelector(".wind_speed").innerHTML =
        weatherData.wind_speed;
      cityElement.querySelector(".wind_degrees").innerHTML =
        weatherData.wind_degrees;
      cityElement.querySelector(".sunrise").innerHTML = weatherData.sunrise;
      cityElement.querySelector(".sunset").innerHTML = weatherData.sunset;
    }
  }
};

const fetchData = async (endPoint) => {
  const response = await fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + endPoint,
    options
  );
  const data = await response.json();
  return data;
};
const fetchMultipleData = async (endPoints) => {
  const results = [];
  for (const endPoint of endPoints) {
    const result = await fetchData(endPoint);
    results.push(result);
  }
  return results;
};
const endPoints = [
  "Greenland",
  "Boston",
  "Alaska",
  "Iceland",
  "London",
  "Russia",
];
fetchMultipleData(endPoints)
  .then((result) => {
    console.log("fetch data is:", result);
    console.log(result[0].temp);
    return otherCityWeather(result, endPoints);
  })
  .catch((error) => {
    console.log("error is:", error.stack);
  });
