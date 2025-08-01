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
import getGiphyGif from "./weather-gif";
import { getGiphySearchWord } from "./utils";

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
    const word = getGiphySearchWord(weatherData);
    const gifData = await getGiphyGif(word);

    displayCurrentWeather(weatherData);
    await displayWeatherIcon(weatherData.condition, infoWrapper);
    
    await displayWeeklyWeather(weatherData.days);
    displayImg(gifData);
    addTemperatureUnitToggleEvents(weatherData);
  } else {
    console.log("Weather data could not be loaded.");
  }
}

init("helsinki");
