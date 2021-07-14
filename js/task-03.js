
// Напиши скрипт для создания галлереи изображений по массиву данных.
// <ul id="gallery"></ul>
//     Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listGroupImagesRef = document.querySelector("#gallery");
console.log(listGroupImagesRef);

const createElementListImagesRef = images.map( (image) => {
    
    const creatItemListRef = document.createElement("li");
   
    // createLinkRef = ` <img  src= "${image.url}" alt = "${ image.alt} ">`;
    // // createLinkRef.type = `alt`;
    creatItemListRef.appendChild(createLinkRef);
    console.log(createLinkRef);

    return creatItemListRef
    
})

console.log(createElementListImagesRef);
//  listGroupImagesRef.append(...createElementListImagesRef);
