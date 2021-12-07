// Напиши скрипт который:

// Посчитает и выведет в консоль 
// количество категорий в ul#categories,
//  то есть элементов li.item.               CДЕЛАЛ DONE 

// Для каждого элемента li.item в списке
//  ul#categories, найдет и выведет в 
//  консоль текст заголовка элемента         CДЕЛАЛ DONE 


//  (тега <h2>) и количество элементов 
//  в категории (всех вложенных в него        
//     <li>).
// В результате, в консоли будут выведены
//  такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const totalCategories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${totalCategories.length}` )

// const categoryLiitem = [...totalCategories]
// .map(categories => ` Category : ${categories.children[0].textContent}  `);;
// console.log( categoryLiitem);


const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);


itemsEl.forEach((item) => {
  const itemTitle = item.querySelector("h2").textContent;
  console.log(`Category: ${itemTitle}`);
  
  const itemAmount = item.querySelectorAll("li").length;
  console.log(`Elements: ${itemAmount}`);
});