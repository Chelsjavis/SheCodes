function showTemperature(response) {
  let city = response.data.city;
  let temperature = Math.round(response.data.temperature.current);
  let condition = response.data.condition.description;
  let humidity = response.data.temperature.humidity;
  let windSpeed = response.data.wind.speed;

  let temperatureElement = document.querySelector("#current-temperature-value");
  temperatureElement.innerHTML = temperature;

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = city;

  let conditionElement = document.querySelector("#current-condition");
  conditionElement.innerHTML = condition;

  let humidityElement = document.querySelector("#current-humidity");
  humidityElement.innerHTML = `${humidity}%`;

  let windSpeedElement = document.querySelector("#current-wind-speed");
  windSpeedElement.innerHTML = `${windSpeed}km/hr`;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");

  let apiKey = "1894f4b60349tcab94fb26933d94a5o1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
