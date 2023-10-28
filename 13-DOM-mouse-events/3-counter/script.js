/**
 * Початкове значення кнопки повинно дорівнювати 0
 * При натисканні на кнопку збільшувати це значення на 1
 *
 */

const btn = document.querySelector('button');

btn.addEventListener('click', (event)=> {
    ++event.target.innerText;
})