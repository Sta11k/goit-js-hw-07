
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


for (let image of images) {
  document.querySelector('#gallery')
    .insertAdjacentHTML('beforeEnd', `<li><img src="${image.url}" width = 320 alt="${image.alt}" ></li>`);


}

// const listGroupImagesRef = document.querySelector("#gallery");


// const createElementListImagesRef = ({ url, alt }) => {
    
//     const creatItemListRef = document.createElement("li");
   
//   const createLinkRef = document.createElement("img")
//   createLinkRef.src = url;
//   createLinkRef.alt = alt;
  
//   createLinkRef.width = 240;

//   // createLinkRef.style.display = flex;
//   creatItemListRef.append(createLinkRef);
    

//     return creatItemListRef
    
// }

// const elemets = images.map(createElementListImagesRef)
// console.log(elemets);
//  listGroupImagesRef.append(...elemets);
// console.log(createElementListImagesRef);