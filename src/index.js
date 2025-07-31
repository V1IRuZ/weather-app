import "./styles.css";
import { getWeather } from "./weather-data";
import {
  displayCurrentWeather,
  displayImg,
  displayWeatherIcon,
  infoWrapper,
  displayWeeklyWeather,
  addTemperatureUnitToggleEvents,
} from "./weather-ui";
import { getWeatherImg } from "./weather-gif";
import { getTempString } from "./utils";

const input = document.querySelector("#location");
const form = document.querySelector("form");
const loading = document.querySelector(".result");

form.addEventListener("submit", async (e) => {
  loading.textContent = "Loading...";
  e.preventDefault();

  try {
    const data = input.value;
    await init(data);
  } catch (error) {
    console.error(error);
  } finally {
    loading.textContent = "";
    form.reset();
  }
});

async function init(location) {
  const weatherData = await getWeather(location);

  if (weatherData) {
    const imgSrc = getTempString(weatherData);
    const imgData = await getWeatherImg(imgSrc);

    displayCurrentWeather(weatherData);
    await displayWeatherIcon(weatherData.condition, infoWrapper);
    await displayWeeklyWeather(weatherData.days);
    displayImg(imgData);
    addTemperatureUnitToggleEvents(weatherData);
  } else {
    console.log("Weather data could not be loaded.");
  }
}

init("helsinki");
