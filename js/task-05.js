// Напиши скрипт который, при наборе текста в инпуте
//  input#name-input (событие input), подставляет его
//  текущее значение в span#name-output. Если инпут пустой,
//   в спане должна отображаться строка "Anonymous".

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const h1El = document.querySelector("h1");

const onInputChange = (event) =>
  inputEl.value === ""
    ? (outputEl.textContent = "Anonymous")
    : (outputEl.textContent = event.target.value);

inputEl.addEventListener("input", onInputChange);

// ................второе,,,,,,,,,,,,

// const textInput = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// textInput.addEventListener("input", (event) => {
//     if (textInput.value === '') {
//         output.textContent = 'Anonymous';
//      } else{
//         output.textContent = textInput.value;
//      }

// });
