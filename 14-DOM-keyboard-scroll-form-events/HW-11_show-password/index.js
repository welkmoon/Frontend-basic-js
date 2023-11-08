const icons = document.querySelectorAll('.fas');
const form = document.querySelector('.password-form');
const error = document.createElement('span');

icons.forEach(icon => {
    icon.addEventListener('click', e =>{
        const input = document.querySelector(`.${e.target.dataset.icon}`);

        if (input.type === 'password'){
            input.type = 'text';
            e.target.setAttribute('class', 'fas fa-eye-slash icon-password')
        } else {
            input.type = 'password';
            e.target.setAttribute('class', 'fas fa-eye icon-password')
        }
    })
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = event.target.querySelectorAll('input');
    // console.log(inputs);
    const values = {};
    inputs.forEach((input,index) => {
        values[index] = input.value;
    })
    if(values[0] === values[1]){
        alert('You are welcome');
    } else {
        error.style.color = 'red';
        error.innerHTML= `Потрібно ввести однакові значення`;
        const inputError = document.querySelector('.password-repeat');
        inputError.after(error);

    }

})