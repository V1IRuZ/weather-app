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

export { createPara, resetDOM };
