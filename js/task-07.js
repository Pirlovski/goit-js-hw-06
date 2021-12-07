// // Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input) и изменяет инлайн-стиль
// span#text обновляя свойство font-size. В результате при перетаскивании
// ползунка будет меняться размер текста.

// // <input id="font-size-control" type="range" min="16" max="96" />
// // <br />
// // <span id="text">Abracadabra!</span>,

const refs = {
  fontSizeEl: document.querySelector("#font-size-control"),
  spanText: document.querySelector("#text"),
};

const changeSize = () => {
  refs.spanText.style.fontSize = `${refs.fontSizeEl.value}px`;
};
refs.fontSizeEl.addEventListener("input", changeSize);
