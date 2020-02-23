'use strict';
//task-04


// const counter = document.querySelector('#counter');


// document.addEventListener('click', function(event) {
//     let value = Number(document.querySelector('#value').textContent);
//     if (event.target.dataset.action === 'decrement') {
//       value --;
      
//     } else if(event.target.dataset.action === 'increment') {
//         value ++;
//     }
//     document.getElementById('value').innerHTML=`${value}`
//   });

const counter = document.querySelector('#value');
const plus = document.querySelector('button[data-action="increment"]');
const minus = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

function increment() {
    counterValue +=1;
    return (counter.innerHTML = counterValue);
}
function decrement() {
  counterValue -= 1;
  return (counter.innerHTML = counterValue);
}

plus.addEventListener('click', increment);
minus.addEventListener('click', decrement);