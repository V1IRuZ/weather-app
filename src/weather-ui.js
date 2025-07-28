import { createPara, resetDOM, toggleTemperatureUnit } from "./utils";

const tempWrapper = document.querySelector(".temp-wrapper");
const infoWrapper = document.querySelector(".info");
const toggleBtn = document.querySelector(".toggle");

function displayWeatherInfo(obj) {
  resetDOM(tempWrapper);
  resetDOM(infoWrapper);
  const location = createPara(obj.location, "location");
  infoWrapper.appendChild(location);

  // const condition = createPara(obj.condition, "condition");
  // infoWrapper.appendChild(condition);

  const temperature = document.createElement("span");
  temperature.innerHTML = `${obj.celsius}&deg;C`;
  temperature.classList.add("temperature");
  tempWrapper.appendChild(temperature);

  toggleBtn.addEventListener("click", () => {
    toggleTemperatureUnit(temperature, obj);
  });
}

async function displayWeatherIcon(obj) {
  try {
    const icon = await import(`./icons/${obj.condition}.svg`)
    const iconPath = icon.default;

    const weatherIcon = document.createElement("img");
    weatherIcon.src = iconPath;
    weatherIcon.alt = `${obj.condition}`;
    infoWrapper.appendChild(weatherIcon);

  } catch (err) {
    console.error("Icon failed to load:", err);
  }
}

const img = document.querySelector(".giphyGif");

function displayImg(imgSrc) {
  img.src = imgSrc;
}

export { displayWeatherInfo, displayImg, displayWeatherIcon };
