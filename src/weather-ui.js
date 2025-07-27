import { createPara, resetDOM, toggleTemperatureUnit } from "./utils";

const tempWrapper = document.querySelector(".temp-wrapper");
const infoWrapper = document.querySelector(".info");
const toggleBtn = document.querySelector(".toggle");

function displayWeatherInfo(obj) {
  resetDOM(tempWrapper);
  resetDOM(infoWrapper);
  const location = createPara(obj.location, "location");
  infoWrapper.appendChild(location);

  const condition = createPara(obj.condition, "condition");
  infoWrapper.appendChild(condition);

  const temperature = document.createElement("span");
  temperature.innerHTML = `${obj.celsius}&deg;C`;
  temperature.classList.add("temperature");
  tempWrapper.appendChild(temperature);

  toggleBtn.addEventListener("click", () => {
    toggleTemperatureUnit(temperature, obj);
  });
}

const img = document.querySelector("img");

function displayImg(imgSrc) {
  img.src = imgSrc;
}

export { displayWeatherInfo, displayImg };
