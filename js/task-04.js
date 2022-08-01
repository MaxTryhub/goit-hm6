const btnPls = document.querySelector('[data-action="increment"]');
const btnMin = document.querySelector('[data-action="decrement"]');
const spanEl = document.querySelector('#value');
let counterValue = 0;

const buttonPls = () => {
    counterValue += 1;
return (spanEl.textContent = counterValue);
};
const buttonMin = () => {
    counterValue -= 1;
return (spanEl.textContent = counterValue);
};

btnPls.addEventListener("click", buttonPls);
btnMin.addEventListener("click", buttonMin)