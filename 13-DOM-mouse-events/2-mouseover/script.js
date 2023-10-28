/**
 * При наведенні на блок 1 робити
 * блок 2 зеленим кольором
 * А при наведенні на блок 2 робити
 * блок 1 червоним кольором
 *
 */

const blockOne = document.getElementById('block-1');
const blockTwo = document.getElementById('block-2');

blockOne.addEventListener('mouseover', ()=> {
    blockTwo.style.backgroundColor='green';
})
blockOne.addEventListener('mouseout', ()=> {
    blockTwo.style.backgroundColor='';
})

blockTwo.addEventListener('mouseover', ()=> {
    blockOne.style.backgroundColor='red';
})
blockTwo.addEventListener('mouseout', ()=> {
    blockOne.style.backgroundColor='';
})