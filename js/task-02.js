// Напиши скрипт, который для каждого
//  элемента массива ingredients:

// Создаст отдельный элемент <li>.
// Обзательно используй метод
// document.createElement().       sdelal DONE

// Добавит название ингредиента
// как его текстовое содержимое.

// Добавит элементу класс item.

// После чего вставит все <li> за
//  одну операцию в список ul.ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemIngredients = [];
const ingredientsElement = document.querySelector("#ingredients");

ingredients.map((element) => {
  const item = document.createElement("li");
  item.textContent = element;
  itemIngredients.push(item);
});

ingredientsElement.append(...itemIngredients);
