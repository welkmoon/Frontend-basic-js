/**
 * При наведенні на блок 1 робити
 * блок 2 зеленим кольором
 * А при наведенні на блок 2 робити
 * блок 1 червоним кольором
 *
 */

const blokOne = document.getElementById("block-1");
const blokTwo = document.getElementById("block-2");

blokOne.addEventListener('mouseover', ()=>{
    blokTwo.style.backgroundColor="green";
})
blokOne.addEventListener('mouseout', ()=>{
    blokTwo.style.backgroundColor="";
})

blokTwo.addEventListener('mouseover', ()=>{
    blokOne.style.backgroundColor="red";
})
blokTwo.addEventListener('mouseout', ()=>{
    blokOne.style.backgroundColor="";
})