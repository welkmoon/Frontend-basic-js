/**
 * Дан скріпт який рендерить карточки. При натисканні на карточку відбувається перехід на сторінку конкретної картки. \
 *
 * Додати на кожну картку кнопки видалення та додавання в обране. HTML кнопок представлений нижче:
 *
 *        <button class='delete'>
 *          <img src='./svg/delete.svg' alt='Delete'>
 *        </button>
 *
 *        <button class='favourite'>
 *          <img src='./svg/star-plus.svg' alt='Add to favourite'>
 *        </button>
 *
 *
 * При натисканні на кнопку видалення запитувати чи дійсно користувач хоче видалити картку (показувати тайтл картки).
 * Якщо користувач натискає OK - видаляти картку.
 *
 * При натисканні на кнопку додавання в обране підсвічувати іконку жовтим кольором та змінити колір фону картки.
 * При повторному натисканні - повертати до дефолтного стану.
 *
 */

const getCardElem = (id) =>  {
	const container = document.createElement('div');
	container.className = 'card';

	container.addEventListener('click', () => {
		window.location.assign(`${window.location.href.replace('index.html', '')}/card/index.html?id=${id}`)
	})

	container.innerHTML = `
			<h2>Card ${id}</h2>
			<p>${'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deleniti eius et iure laudantium numquam quas qui recusandae ullam. Aliquid consectetur facere fugiat laborum quam, ratione recusandae similique tenetur vel velit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deleniti eius et iure laudantium numquam quas qui recusandae ullam. Aliquid consectetur facere fugiat laborum quam, ratione recusandae similique tenetur vel velit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deleniti eius et iure laudantium numquam quas qui recusandae ullam. Aliquid consectetur facere fugiat laborum quam, ratione recusandae similique tenetur vel velit voluptas!'.slice(0, Math.floor(Math.random() * 702))}</p>
	
			<div class='btn-container'>
			<button class='delete'>
            <img src='./svg/delete.svg' alt='Delete'>
            </button>
 
            <button class='favourite'>
            <img src='./svg/star-plus.svg' alt='Add to favourite'>
   1        </button>
			</div>
`;

	return container;
}

const cardContainer = document.querySelector('.card-container');

for (let i = 1; i < 500; i++) {
	cardContainer.append(getCardElem(i));
}

const favouriteBtn = document.querySelectorAll('.favourite');
const deleteBtn = document.querySelectorAll('.delete');
console.log(deleteBtn);

deleteBtn.forEach(button => {
	button.addEventListener('click', e =>{
		e.stopPropagation();
		const question = confirm(`Чи дійсно ви хочете видалити картку ${e.target.closest('.card').querySelector('h2').innerText}?`);
		if(question){
			e.target.closest('.card').remove();
		}
	})

})

favouriteBtn.forEach(button => {
	button.addEventListener('click', e =>{
		e.stopPropagation();
		e.target.closest('.card').classList.toggle('card-favourite');
	})
})
