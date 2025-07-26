import { createPara, resetDOM } from "./utils";

const container = document.querySelector(".content");
const tempWrapper = document.querySelector(".temp-wrapper");
const infoWrapper = document.querySelector(".info");

function displayWeatherInfo(obj) {
  resetDOM(tempWrapper);
  resetDOM(infoWrapper);
  const location = createPara(obj.location, "location");
  infoWrapper.appendChild(location);

  const condition = createPara(obj.condition, "condition");
  infoWrapper.appendChild(condition);

  const temperature = document.createElement("span")
  temperature.innerHTML = `${obj.temperature}&deg`;
  temperature.classList.add("temperature")
  tempWrapper.appendChild(temperature);

  console.log(`Location: ${obj.location}`);
  console.log(`Condition: ${obj.condition}`);
  console.log(`Temperature: ${obj.temperature}`);
}

const img = document.querySelector("img");

function displayImg(imgSrc) {
  img.src = imgSrc;
}

export { displayWeatherInfo, displayImg };
