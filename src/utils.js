function createPara(text) {
  const para = document.createElement("p");
  para.textContent = `${text}`;
  return para;
}

function resetDOM(container) {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

export { createPara, resetDOM };
