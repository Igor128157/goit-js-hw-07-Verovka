
const ulCategories = document.querySelectorAll("ul#categories");

Array.prototype.forEach.call(ulCategories, (element) => {
  const ulCategoriesLenght = element.querySelectorAll("li.item").length;
  console.log(`В списке ${ulCategoriesLenght} категории`);
});

const items = document.querySelectorAll(".item");

Array.prototype.forEach.call(items, (element) => {
  const title = element.querySelector("h2").innerHTML;
  const itemsLength = element.querySelectorAll("li").length;
  console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
});