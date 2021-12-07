const textColorEl = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const bodyColorEl = document.querySelector("body");

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const onChangeColor = () => {
  bodyColorEl.style.backgroundColor = getRandomHexColor();
  textColorEl.textContent = bodyColorEl.style.backgroundColor;
};

changeColorBtn.addEventListener("click", onChangeColor);
