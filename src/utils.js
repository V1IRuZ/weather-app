function createPara(text, className) {
  const para = document.createElement("p");
  para.classList.add(className);
  para.textContent = `${text}`;
  return para;
}

function resetDOM(container) {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function getTempString(obj) {
  const temp = Number(obj.temperature);
  let weather;

  if (temp >= 30) {
    weather = "hot";
  } else if (temp >= 20) {
    weather = "warm";
  } else if (temp >= 10) {
    weather = "ok";
  } else if (temp >= 0) {
    weather = "cold";
  } else if (temp < 0) {
    weather = "freezing"
  } else {
    weather = "error";
  }

  return weather;
}

export { createPara, resetDOM, getTempString };
