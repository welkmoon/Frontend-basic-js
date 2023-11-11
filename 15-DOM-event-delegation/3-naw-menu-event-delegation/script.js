/**
 * Завдання 1.
 *
 * Необхідно "оживити" навігаційне меню за допомогою JavaScript.
 *
 * При натисканні на елемент меню додавати до нього CSS-клас .active.
 * Якщо такий клас вже існує на іншому елементі меню, необхідно
 * з того, що попереднього елемента CSS-клас .active зняти.
 *
 * Кожен елемент меню — це посилання, що веде на google.
 * За допомогою JavaScript необхідно запобігти перехід по всіх посилання на цей зовнішній ресурс.
 *
 * Умови:
 * - У реалізації обов'язково використовувати прийом делегування подій (на весь скрипт слухач має бути один).
 */

const nav = document.querySelector('nav');

nav.addEventListener('click', (e) =>{
    e.preventDefault();
    if(e.target === e.currentTarget){
        return;
    }
    
    const active = nav.querySelector('a.active');

    if(active){
        active.classList.remove('active');
    }

    e.target.classList.add('active');

})