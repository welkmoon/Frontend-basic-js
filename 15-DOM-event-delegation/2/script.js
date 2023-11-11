// На кліку на картинку - створювати дубль цієї картинки, наприкінці списку картинок.
// Використовувати делегування подій

const conteiner = document.querySelector(".conteiner")
console.log(conteiner);

conteiner.addEventListener('click', (e) => {
    
    if(e.target === e.currentTarget)  {
       return
    }
 const clone = e.target.cloneNode()
 conteiner.append(clone);

console.log(clone);
})