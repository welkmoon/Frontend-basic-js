/**
 * Завдання 1.
 *
 * Створити елемент h1 з текстом «Натисніть будь-яку клавішу».
 *
 * При натисканні будь-якої клавіші клавіатури змінювати текст елемента h1 на:
 * «Натиснена клавіша: ІМ'Я_КЛАВИШІ».
 */

const title = document.createElement('h1');
title.innerText = 'Натисніть будь яку клавішу';
document.body.append(title);

window.addEventListener('keydown',(event)=>
title.innerText =`Натиснена клавіша: ${event.key}`
)



