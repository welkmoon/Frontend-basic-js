const getRandomRGB = () => `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`

const getCardHtml = (index) => `
  <div class='flip-card'>
    <div class='flip-card-inner'>

      <div class='flip-card-front js-click' style='background-color: ${getRandomRGB()}'>
      	<h1>Card ${index}</h1>
			</div>

      <div class='flip-card-back'>
        <h1>Random Number</h1>
        <h2>${Math.floor(Math.random() * 100)}</h2>
      </div>

    </div>
  </div>
`

const cardContainer = document.querySelector('.card-container')

const cardHtmlArray = new Array(100).fill(null).map((el, index) => getCardHtml(index));

cardContainer.insertAdjacentHTML('beforeend', cardHtmlArray.join(''))

// const cardCollection = document.querySelectorAll('.flip-card-inner')
// cardCollection.forEach(card => {
// 	card.addEventListener('click', (event) => {
// 		event.currentTarget.classList.toggle('show-card-back')
// 	})
// })

cardContainer.addEventListener('click', (e) => {
  console.log(e.target);

  if (e.target === e.currentTarget) {
    return;
  }

  e.target.closest('.flip-card-inner').classList.toggle('show-card-back');

  
})
