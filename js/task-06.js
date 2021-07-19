// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector(" input, #validation-input");
console.log(inputRef);

const attributeLengthInputRef = Number(inputRef.getAttribute('data-length'));
console.log(attributeLengthInputRef);



inputRef.addEventListener('blur', (event) => {
console.log(event.target.value.length );
    event.target.value.length === attributeLengthInputRef ?
    inputRef.setAttribute("class", "valid") : inputRef.setAttribute("class", "invalid")
   
});
//  console.log(inputRef);


// const validInputValid =  document.querySelector(" style, #validation-input.valid");
// const validInputInvalid = document.querySelector(" style, #validation-input.invalid");
// console.log(validInputInvalid);