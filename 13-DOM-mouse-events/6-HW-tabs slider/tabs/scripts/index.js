const tabsTitle = document.querySelectorAll('.tabs-title');
const tabsContent = document.querySelectorAll('.tabs-content li');

tabsTitle.forEach(el => el.addEventListener('click', event =>{
    tabsTitle.forEach(elem => elem.classList.remove('active'));
    tabsContent.forEach(elem => {
        elem.classList.add('hidden-tab-content');
        if (elem.dataset.tab===event.target.innerText){
            elem.classList.remove('hidden-tab-content');
        }
    })
    el.classList.add('active');
}))





































// const tabsTitle = document.querySelectorAll('.tabs-title');
// const tabsContent = document.querySelectorAll('.tabs-content li');


// tabsTitle.forEach(el => el.addEventListener('click', event => {
    
//     tabsTitle.forEach(elem => elem.classList.remove('active'));
//     tabsContent.forEach(elem => {
//         elem.classList.add('hidden-tab-content');
//         if (elem.dataset.tab === event.target.innerText) {
//             elem.classList.remove('hidden-tab-content');
//         }
//       }
//     );
//     el.classList.add('active');
// }))