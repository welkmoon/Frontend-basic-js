/**
Реалізувати слайдер.
- При натисканні на кнопки змінювати зображення на відповідний слайд з папки igm.
- Змінювати лічильник слайдів.

 Advanced:
 Реалізувати анімований слайдер.
 */

const btnContainer = document.querySelector('.btn-container');
const img = document.querySelector('.slider img');
const counter = document.querySelector('.slider p');
counter.innerText=`1/${btnContainer.children.length}`

btnContainer.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget){
        return;
    }

    img.src = `./img/${e.target.dataset.src}`;
    img.alt = `${e.target.dataset.alt}`;
    counter.innerText=`${e.target.dataset.counter}/${btnContainer.children.length}`;
})

