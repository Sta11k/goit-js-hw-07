// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const resizeTextRef = document.querySelector('#text');

const inputRengeRef = document.querySelector('#font-size-control');

inputRengeRef.addEventListener('input', (event) => {
    //  const calc= event.currentTarget.value ;
   resizeTextRef.setAttribute("style", `font-size: ${ event.currentTarget.value }px`);
    
   

});

 