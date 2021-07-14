// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listGroupEL = document.querySelector("#ingredients");


const createElementListIngredient = ingredients.map( ingredient  => {
    
    const creatItemListref = document.createElement("li");
    creatItemListref.textContent = ingredient;

    return creatItemListref
    
})

listGroupEL.append(...createElementListIngredient);
