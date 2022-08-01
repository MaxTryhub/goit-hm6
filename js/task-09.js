const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('.body');
const spanColorEl = document.querySelector('.color');

btnEl.addEventListener('click', onChangeColor)
function onChangeColor() {
  let color = getRandomHexColor();
  document.body.setAttribute('style', `background-color: ${color}`)
  spanColorEl.textContent = color;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}