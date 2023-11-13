

const facts = {
  "current_page": 1,
  "data": [{
    "fact": "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.",
    "length": 114
  }, {
    "fact": "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.",
    "length": 97
  }, {
    "fact": "The technical term for a cat\u2019s hairball is a \u201cbezoar.\u201d",
    "length": 54
  }, {
    "fact": "A group of cats is called a \u201cclowder.\u201d",
    "length": 38
  }, {
    "fact": "A cat can\u2019t climb head first down a tree because every claw on a cat\u2019s paw points the same way. To get down from a tree, a cat must back down.",
    "length": 142
  }, {
    "fact": "Cats make about 100 different sounds. Dogs make only about 10.",
    "length": 62
  }, {
    "fact": "Every year, nearly four million cats are eaten in Asia.",
    "length": 55
  }, {
    "fact": "There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.",
    "length": 100
  }, {
    "fact": "Approximately 24 cat skins can make a coat.",
    "length": 43
  }, {
    "fact": "While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.",
    "length": 278
  }],
}

/*
1. Спочатку на екран має відмальовуватись три карточки з фактами.
2. По кліку на кнопку Load More відмальовувати ще три картки.
3. Імітувати завантаження фактів з сервера - по кліку спочатку показувати прелоадер 2 секунди, а потім відмальовувати картки
4. Коли будуть відмальовані всі факти - прибрати з екрану кнопку.
*/
let quantity = 3;
const postContainer = document.querySelector('.post-container');
const factsHTML = facts.data.map(el => `<p class="post">${el.fact}<p>`);
postContainer.insertAdjacentHTML('beforeend', factsHTML.slice(0, quantity).join(""));
const btn = document.querySelector('.btn');
const load = document.querySelector('#preloader')

btn.addEventListener('click', ()=>{
  load.classList.toggle('active');
  btn.style.display = 'none';
  setTimeout(()=>{
  load.classList.toggle('active');
  btn.style.display = 'block';
  postContainer.insertAdjacentHTML('beforeend', factsHTML.slice(quantity, quantity + 3).join(""));
  quantity += 3;
  if(facts.data.length <= quantity){
    btn.style.display = 'none';
  }
  },2000)
})




























// const btn = document.querySelector('.btn');
// const load = document.querySelector('#preloader');
// let quantity = 3;
// const postContainer = document.querySelector('.post-container');
// const factsHTML = facts.data.map(el => `<p class="post">${el.fact}</p>`);
// postContainer.insertAdjacentHTML('beforeend', factsHTML.slice(0, quantity).join(''));

// btn.addEventListener('click', () => {
//   load.classList.toggle('active')
//   btn.style.display = 'none';

//   setTimeout(() => {
//     load.classList.toggle('active')
//     btn.style.display = 'block';
//     postContainer.insertAdjacentHTML('beforeend', factsHTML.slice(quantity, quantity + 3).join(''));
//     quantity += 3;
//     if (facts.data.length <= quantity) {
//       btn.style.display = 'none';
//     }
//   }, 2000)
// })
