const data = document.querySelector('#date');
console.log(data);
const newDate = new Date();
console.log(newDate);
const year = newDate.getFullYear();
const month = newDate.getMonth();
const day = newDate.getDate();
console.log(year);
console.log(month);
console.log(day);

const arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log(arrMonth[month]);

data.innerText = `${day} ${arrMonth[month]} ${year}`


const dogs = document.querySelectorAll('.dog-gallery img');
dogs.forEach(el => {
    // el.setAttribute('alt', el.dataset.alt);
    el.alt = el.dataset.alt;


    if (el.src === "") {
        el.remove();
    }
    // console.log(el.dataset.alt)
    console.log(el.dataset.reseved);


    if (el.dataset.reseved) {
        const div = document.createElement('div');
        div.className = "img-container";
        div.innerHTML = `
        <p class="img-desc">RESERVED</p>
        <div class="reserved"></div
        `
        const img = el.cloneNode(true);
        div.prepend(img);
        console.log(div);

        el.replaceWith(div)

    }
})

console.log(dogs)

