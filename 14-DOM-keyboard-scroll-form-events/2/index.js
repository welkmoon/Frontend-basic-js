const ship = document.querySelector('#space-ship');
let x = 0;
let y = 0;

window.addEventListener('keydown', event =>{
    if(event.key === 'ArrowUp'){
        y = y - 5;
        ship.style.transform = `translate(${x}px,${y}px)`
    }
    else if(event.key === 'ArrowDown'){
        y = y + 5;
        ship.style.transform = `translate(${x}px,${y}px) rotate(180deg)`
    }
    else if(event.key === 'ArrowRight'){
        x = x + 5;
        ship.style.transform = `translate(${x}px,${y}px) rotate(90deg)`
    }
    else if(event.key === 'ArrowLeft'){
        x = x - 5;
        ship.style.transform = `translate(${x}px,${y}px) rotate(270deg)`
    }
})