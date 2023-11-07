// 1. При положенні скролла сторінки більше 100px додавати до хедеру стилі для тіні (`class="shadow"`). При положенні скролла менше 100px тіні не повинно бути.
// 2. При положенні скролл сторінки більше висоти показувати кнопку scrollToTop. При менше – приховувати.
// 3. При натисканні на кнопку - плавно скролити до початку документа.

const header = document.querySelector('.header');
const btn = document.querySelector('#scroll-to-top');

window.addEventListener('scroll', (event)=>{
    if(scrollY > 100){
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }

    if(scrollY > innerHeight){
        btn.style.display="block";
    } else {
        btn.style.display="none";
    }
})

btn.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior:'smooth',
    });
})
