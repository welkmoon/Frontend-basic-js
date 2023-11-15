const images = [
  'https://picsum.photos/600/500?v1',
  'https://picsum.photos/600/500?v2',
  'https://picsum.photos/600/500?v3',
  'https://picsum.photos/600/500?v4',
  'https://picsum.photos/600/500?v5',
  'https://picsum.photos/600/500?v6',
  'https://picsum.photos/600/500?v7',
  'https://picsum.photos/600/500?v8',
  'https://picsum.photos/600/500?v9',
]

const wrapper = document.querySelector('.img-wrapper');
const btnPrev = document.querySelector('.js-prev');
const btnNext = document.querySelector('.js-next');

// `<img width="600" height="500" src="${el}">`


const imagesHTML = images.map(el => `<img width="600" height="500" src="${el}">`);
wrapper.innerHTML = imagesHTML.join('');

let slide = 0;

btnNext.addEventListener('click', () => {
  slide++;
  wrapper.style.transform = `translateX(-${600 * slide}px)`
})

btnPrev.addEventListener('click', () => {
  slide--;
  wrapper.style.transform = `translateX(-${600 * slide}px)`
})


// wrapper.innerHTML = `<img width="600" height="500" src="${images[0]}">`

// let slide = 0;

// btnNext.addEventListener('click', () => {
//   wrapper.style.opacity = 0;

//   setTimeout(() => {
//     slide++;
//     wrapper.innerHTML = `<img width="600" height="500" src="${images[slide]}">`;
//     wrapper.style.opacity = 1;
//   }, 850);
// })

// btnPrev.addEventListener('click', () => {
//   wrapper.style.opacity = 0;

//   setTimeout(() => {
//     slide--;
//     wrapper.innerHTML = `<img width="600" height="500" src="${images[slide]}">`;
//     wrapper.style.opacity = 1;
//   }, 850);
// })


