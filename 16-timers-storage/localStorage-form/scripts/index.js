/**
 Реалізуйте функціонал збереження в localStorage всіх даних, введених у поля форми.
(Це робиться для того, щоб зберегти введені дані при випадковому перезавантаженні сторінки).

* Щоразу при виході з поля (подія ```blur```) зберігати дані в localStorage 
форматі key = input.name, value = input value;
* При перезавантаженні перевіряти наявність запису в localStorage і відновлювати його в полі якщо є;
* Реалізувати все через один запис в localStorage, в якому зберігатиметься об'єкт з полями 
key = input.name, value = input value; Використовувати JSON.stringify та JSON.parse
 */


const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
// inputs.forEach(input => {
//     input.addEventListener('blur', e => {
      
//         localStorage.setItem(e.target.name, e.target.value)
//     })
//     if (localStorage.getItem(input.name)) {
//         input.value = localStorage.getItem(input.name)
//     }
// })

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     inputs.forEach(input => {
//         localStorage.removeItem(input.name)
//     })
//     e.target.reset()
// })

// console.log(inputs)


const registerFormValues = {};
inputs.forEach(input => {
    input.addEventListener('blur', e =>{
        registerFormValues[e.target.name] = e.target.value;
        localStorage.setItem('registerFormValues', JSON.stringify(registerFormValues));
    })
    if(localStorage.getItem('registerFormValues')){
        const registerObj = JSON.parse(localStorage.getItem('registerFormValues'));
        input.value = registerObj[input.name] || '';
    }
})

form.addEventListener('submit', e =>{
    e.preventDefault;
    localStorage.removeItem('registerFormValues');
    e.target.reset();
})







// const registerFormValues = {};

// inputs.forEach(input => {
//     input.addEventListener('blur', e => {
//         registerFormValues[e.target.name] = e.target.value
//         localStorage.setItem('registerFormValues', JSON.stringify(registerFormValues))
//     })
//     if (localStorage.getItem('registerFormValues')) {
//         const registerObj = JSON.parse(localStorage.getItem('registerFormValues'));
//         input.value = registerObj[input.name] || '';

//         // if (registerObj[input.name]) {
//         //     input.value = registerObj[input.name]
//         // } else {
//         //     input.value = '';
//         // }
//     }
// })
// form.addEventListener('submit', e => {
//     e.preventDefault()
//     localStorage.removeItem('registerFormValues');
//     e.target.reset()
// })