const inputEl = document.querySelector("input");
const lengthEl = inputEl.dataset.length;

const onInputBlur = (event) => {
  event.target.value.length === parseInt(lengthEl)
    ? (inputEl.className = "valid")
    : (inputEl.className = "invalid");
};
console.log(inputEl);
inputEl.addEventListener("blur", onInputBlur);

// const ooooo = '16ds54' ;
// console.log(parseInt(ooooo))
