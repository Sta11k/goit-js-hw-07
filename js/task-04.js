// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtnRef);
const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtnRef);
 const valueRef = document.querySelector('#value');

const counter = {
    counterValue: 0,
    decrement() {
        this.counterValue -= 1;
    },

    increment() {
        
         this.counterValue += 1;
    },
};


decrementBtn.addEventListener('click', function () {
    counter.decrement();
    valueRef.textContent = counter.counterValue

         
});


incrementBtn.addEventListener('click', function () {
    counter.increment();
    valueRef.textContent = counter.counterValue

         
});












// // let valueCounterRef = 
// let counterValue = document.querySelector('#value');
// let counterValueNumber = Number(counterValue.textContent);
// counterValueNumber = 0;
// console.log(counterValue);//string
// console.log(counterValueNumber); //Number

// const decrement = counterValueNumber => counterValueNumber -= 1
// counterValue.textContent = "345";
//     console.log(decrement(counterValueNumber));
// ;
// decrementBtnRef.addEventListener('click', () => {
//       console.log(" Ти на вірному шляху");  
// });




// const decrement = counterValueNumber =>counterValue.textContent = `${counterValueNumber -= 1}`

// ;
// // console.log(decrement(counterValueNumber));
// incrementBtnRef.addEventListener('click', increment);

// const increment = counterValueNumber =>counterValue.textContent = `${counterValueNumber += 1}`
   
// ;

// console.log(increment(counterValueNumber));
 


