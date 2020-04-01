const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const createLi = (item) => {
      const li = document.createElement('li');
      li.innerText = item;
      return li;
  } 
  
  const ingredientsList = ingredients.map(el => createLi(el)); 
 
  const ul = document.querySelector('ul');
 
  ul.append(...ingredientsList); 
  