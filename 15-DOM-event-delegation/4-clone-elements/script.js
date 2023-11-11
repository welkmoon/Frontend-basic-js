// На кліку на картинку - створювати дубль цієї картинки, наприкінці списку картинок.
// Використовувати делегування подій

const imgContainer = document.querySelector('.conteiner');

imgContainer.addEventListener('click', (e) => {
   if (e.target === e.currentTarget){
      return;
   }
   const clone = e.target.cloneNode();
   imgContainer.append(clone);
})