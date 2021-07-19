// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
const randomRgbColor = () => {
const r = Math.round(Math.random() * (255 - 1) + 1);
const g = Math.round(Math.random() * (255 - 1) + 1);
const b = Math.round(Math.random() * (255 - 1) + 1);
    return `rgb(${r},${g},${b})`
}

const random = () => {
	return Math.floor(Math.random() * 256);
};






let amount =document.querySelector('input[ type = "number"]');
console.log(amount);

let widthHeight = 30;
const creatArreyDivRef = document.createElement('div');
 creatArreyDivRef.setAttribute("style",    `height:  50px;
width: 50px; background-color: blue;`);
// amount = 12;
// console.log(amount);
//  function countInput(amount) {
//      for (let i = 0; i <= amount; i ++) {
//          let widthHeight = 30;
//          const creatArreyDivRef = document.createElement('div');
//           return creatArreyDivRef +=1;
//          randomRgbColor();
         
//          creatArreyDivRef.setAttribute("style",    `height:  ${ widthHeight+=10}px;
//   width: ${ widthHeight+=10 }px; background-color: rgb(${r},${g},${b});`);
       
//      }
//     // console.log(amount[i]);
//  }
// console.log(countInput(amount));
// amount.textContent = " Number(4)  "
    // console.log(amount = 23);
// //  let creatDivRef = 0;
//  console.log(amount );
// let widthHeight = 30;

//  function createBoxes(amount){
//      for (let i = 0; i < amount; i++) {
         
//          let creatDivRef = document.createElement('div');
//          widthHeight += 10;
//          creatDivRef.setAttribute("style", `height: ${widthHeight}px width: ${ widthHeight}px`);
//      }
// };
//  console.log( createBoxes(amount));