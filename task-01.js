const categories = document.querySelectorAll(".item");
console.log(`В списке ${categories.length} категории`);

for (let item of categories) {
  console.log(`Категория: ${item.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll("li").length}`);
};
