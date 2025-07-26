import "./styles.css";
import { getWeather } from "./weather-data";
import { displayWeatherInfo, displayImg } from "./weather-ui";
import { getWeatherImg } from "./weather-gif";
import { getTempString } from "./utils";

const input = document.querySelector("#location");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    const data = input.value;

    init(data);
    e.preventDefault();
})

async function init(location) {
  const weatherData = await getWeather(location);
  
  if (weatherData) {
    const imgSrc = getTempString(weatherData);
    const imgData = await getWeatherImg(imgSrc);
    displayWeatherInfo(weatherData);
    displayImg(imgData);
  } else {
    console.log("Weather data could not be loaded.");
  }
}

init("helsinki")