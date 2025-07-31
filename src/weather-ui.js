import {
  createPara,
  resetDOM,
  toggleTemperatureUnit,
  toggleEachDayTempUnit,
} from "./utils";
import { format } from "date-fns";

const tempWrapper = document.querySelector(".temp-wrapper");
const infoWrapper = document.querySelector(".info");
const descriptionWrapper = document.querySelector(".current-description");
const toggleBtn = document.querySelector(".toggle");
const weekDaysContainer = document.querySelector(".week");

async function makeWeatherDayCard(day) {
  const card = document.createElement("div");
  card.classList.add("day-card");

  const date = document.createElement("p");
  const parsedDate = new Date(day.date);
  const formattedDate = format(parsedDate, "d.M");
  date.textContent = `${formattedDate}`;
  card.appendChild(date);

  await displayWeatherIcon(day.icon, card);

  const temp = document.createElement("p");
  temp.classList.add("day-temp");
  temp.innerHTML = `${day.minCelsius} / ${day.maxCelsius}&deg;C`;
  card.appendChild(temp);

  return card;
}

async function displayWeeklyWeather(daysData) {
  resetDOM(weekDaysContainer);
  for (const day of daysData) {
    const card = await makeWeatherDayCard(day);
    weekDaysContainer.appendChild(card);
  }
}

function displayCurrentWeather(obj) {
  resetDOM(tempWrapper);
  resetDOM(infoWrapper);
  resetDOM(descriptionWrapper);

  const location = createPara(obj.location, "location");
  infoWrapper.appendChild(location);

  const temperature = document.createElement("span");
  temperature.classList.add("current-temp");
  temperature.innerHTML = `${obj.celsius}&deg;C`;
  temperature.classList.add("temperature");
  tempWrapper.appendChild(temperature);

  const description = createPara(
    `Current weather: ${obj.description}`,
    "description",
  );
  descriptionWrapper.appendChild(description);
}

async function displayWeatherIcon(iconName, container) {
  try {
    const icon = await import(`./icons/${iconName}.svg`);
    const iconPath = icon.default;

    const weatherIcon = document.createElement("img");
    weatherIcon.src = iconPath;
    weatherIcon.alt = `${iconName}`;
    container.appendChild(weatherIcon);
  } catch (err) {
    console.error("Icon failed to load:", err);
  }
}

function addTemperatureUnitToggleEvents(obj) {
  const currentTemp = document.querySelector(".current-temp");
  const daysTemp = document.querySelectorAll(".day-temp");

  toggleBtn.addEventListener("click", () => {
    toggleTemperatureUnit(currentTemp, obj);

    daysTemp.forEach((day, index) => {
      toggleEachDayTempUnit(day, obj.days[index]);
    });
  });
}

const img = document.querySelector(".giphyGif");

function displayImg(imgSrc) {
  img.src = imgSrc;
}

export {
  displayCurrentWeather,
  displayWeeklyWeather,
  displayImg,
  displayWeatherIcon,
  addTemperatureUnitToggleEvents,
  infoWrapper,
};
