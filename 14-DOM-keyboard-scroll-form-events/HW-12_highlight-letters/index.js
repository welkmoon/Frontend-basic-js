const buttons = document.querySelectorAll('.btn');

window.addEventListener('keydown', (event) => {
    buttons.forEach(btn =>{
        btn.classList.remove('active');
        if(event.key.toLowerCase() === btn.dataset.key){
            btn.classList.add('active');
        }
    })
})