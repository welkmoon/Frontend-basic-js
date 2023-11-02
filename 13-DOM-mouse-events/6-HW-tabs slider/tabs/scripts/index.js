const tabsTitle = document.querySelectorAll('.tabs-title');
const tabsContent = document.querySelectorAll('.tabs-content li');
// console.log(tabsTitle);
// console.log(tabsContent);

tabsTitle.forEach(el => el.addEventListener('click', event => {
    
    tabsTitle.forEach(elem => elem.classList.remove('active'));
    tabsContent.forEach(elem => {
        elem.classList.add('hidden-tab-content');
        if (elem.dataset.tab === event.target.innerText) {
            elem.classList.remove('hidden-tab-content');
        }
      }
    );
   
    el.classList.add('active');



}))