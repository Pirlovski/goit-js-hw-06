// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее
//  значение счетчика и инициализируй её значением 0.

// Добавь слушатели кликов на кнопки, внутри которых увеличивай или
//  уменьшай значение счтетчика.

// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
  valueEL: document.querySelector("#value"),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};
let counterValue = 0;

const onDecrementCountervalue = () => {
  counterValue -= 1;
  refs.valueEL.textContent = counterValue;
};

const onIncrementCounterValue = () => {
  counterValue += 1;
  refs.valueEL.textContent = counterValue;
};

refs.decrementBtn.addEventListener("click", onDecrementCountervalue);
refs.incrementBtn.addEventListener("click", onIncrementCounterValue);

// 1.получаем ссылк и на валюе , инкремент и декремент ,    +++++++++
// 2.обьявляем переменную
// let counterValue = 0; +++++++++++++++++++

// 3. обьявляем ондекрементк и он шнкремент  +++++++++++++++
// 4. в каждой из них декремент - 1 , инкремент +1 +++++++++++++
// 5. записываем в них текс конктент . значение валуе через рефс +++++++
// 6. бросаем на них слушателя
