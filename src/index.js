import "./styles.css";
import { getWeather } from "./weather-data";
import { logger } from "./weather-ui";

const input = document.querySelector("#location");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    const data = input.value;

    init(data);
    e.preventDefault();
})

async function init(location) {
  const data = await getWeather(location);

  if (data) {
    logger(data);
  } else {
    console.log("Weather data could not be loaded.");
  }
}

init("helsinki")