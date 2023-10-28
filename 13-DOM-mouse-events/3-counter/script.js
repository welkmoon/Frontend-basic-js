/**
 * Початкове значення кнопки повинно дорівнювати 0
 * При натисканні на кнопку збільшувати це значення на 1
 *
 */

const btn = document.querySelector('button');
// console.log(btn);

btn.addEventListener('click', (event)=>{
    ++event.target.innerText;
})