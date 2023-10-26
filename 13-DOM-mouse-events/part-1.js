/**
 * Створити елемент h1 з текстом «Ласкаво просимо!».
 *
 * Під елементом h1 додати елемент button з текстом «Розфарбувати».
 *
 * При натисканні кнопки змінювати колір кожної літери елемента h1 на випадковий.
 */


const PHRASE = 'Слава Україні!';
const title = document.createElement("h1");
const btn = document.createElement("button");
btn.innerText="Розфарбувати";
titleArray = PHRASE.split("").map(elem => {
  return`<span>${elem}</span>`
});
title.innerHTML=titleArray.join("");
// btn.addEventListener("click", () => {
//   for(let span of title.children){
//     span.style.color=getRandomColor();
//   }
// })
document.body.addEventListener('mousemove', () => {
  for(let span of title.children){
    span.style.color=getRandomColor();
  }
})


document.body.append(title,btn);

function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}


