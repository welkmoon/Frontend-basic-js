const form = document.querySelector('form');
const inputs = document.querySelectorAll('form input');
// console.log(form);

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const values = {};
    const inputs = event.target.querySelectorAll('input');
    // console.log(inputs);
    inputs.forEach(input => {
        values[input.name]=input.value;
    })
    console.log(values);
    event.target.reset();

});


inputs.forEach(input => {
    input.addEventListener('input', e => {
        e.target.value = e.target.value.replaceAll('<','').replaceAll('>','').replaceAll('</','')
    })
})

