/**
 * Початкове значення лічильника 0
 * При натисканні на + збільшувати лічильник на 1
 * При натисканні на - зменшувати лічильник на 1
 *
 * ADVANCED: не давати можливості задавати лічильник менше 0
 *
 */
const Counter = document.getElementById('counter');
const decrement = document.getElementById('decrement-btn');
const increment = document.getElementById('increment-btn');
let value = 0;

increment.addEventListener('click', (e)=>{
    Counter.innerText = `Counter:${++value}`
});

decrement.addEventListener('click', (e)=>{
    Counter.innerText = `Counter:${--value}`
})