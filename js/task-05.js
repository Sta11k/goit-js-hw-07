// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
{/* <input type="text" placeholder="Ваше имя?" id="name-input" />
    <h1>Привет, <span id="name-output">незнакомец</span>!</h1> */}

const refs = {

intputNameRef : document.querySelector("#name-input"),
outputNameRef : document.querySelector("#name-output"),

}

refs.intputNameRef.addEventListener('input',onInputChange);

function onInputChange (event) {
    
   event.currentTarget.value.length===0? refs.outputNameRef.textContent = " незнакомец": refs.outputNameRef.textContent=event.currentTarget.value ; 
};
