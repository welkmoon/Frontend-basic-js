const icons = document.querySelectorAll('.fas');
const form = document.querySelector('.password-form');
const error = document.createElement('span');

icons.forEach(icon => {
    icon.addEventListener('click', (event)=>{
        const input = document.querySelector(`.${event.target.dataset.icon}`);
        // console.log(input)
        if(input.type === 'password'){
            input.type = 'text';
            event.target.setAttribute('class', 'fas fa-eye-slash icon-password')
        } else {
            input.type = 'password';
            event.target.setAttribute('class', 'fas fa-eye icon-password')
        }

    })
})

form.addEventListener('submit',(event) => {
    event.preventDefault();
    const inputs = event.target.querySelectorAll('input');
    const values = {};
    inputs.forEach((input, index) =>{
        values[index] = input.value;
    })
    // console.log(values)
    if(values[0] === values[1]){
        alert('You are welcome')
    } else{
        error.style.color = 'red';
        error.innerText=`Потрібно ввести однакові значення`;
        const inputError = document.querySelector('.password-repeat');
        inputError.after(error);

    }

})