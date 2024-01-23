// Реалізувати програму, яка циклічно показує різні картинки.

//// При запуску програми на екрані має відображатись перша картинка.
//// Через 3 секунди замість неї має бути показано друга картинка.
//// Ще через 3 секунди – третя.
//// Ще через 3 секунди – четверта.
//// Після того, як будуть показані всі картинки - цей цикл має розпочатися наново.

//// Після запуску програми десь на екрані має з'явитись кнопка з написом Припинити.
//// Після натискання на кнопку Припинити цикл завершується, на екрані залишається показаною та картинка, яка була там при натисканні кнопки.
//// Поруч із кнопкою Припинити має бути кнопка Відновити показ, при натисканні якої цикл триває з тієї картинки, яка в даний момент показана на екрані.
//// Розмітку можна змінювати, додавати потрібні класи, ID, атрибути, теги.

// Необов'язкове завдання підвищеної складності
//// При запуску програми на екрані повинен бути таймер з секундами та мілісекундами, що показує, скільки залишилося до показу наступної картинки.
//// Робити приховування картинки та показ нової картинки поступовим (анімація fadeOut/fadeIn) протягом 0.5 секунди.

const images = document.querySelectorAll('.images--item');
const btnWrapper = document.querySelector('.buttons--wrapper');
const timerContainer = document.querySelector('.timer');

const btnStop = document.createElement('button');
const btnRestart = document.createElement('button');

const slideshowDelay = 3000;
const timerDelay = 10;

const timers = [];

let iteration = localStorage.getItem('current image') || 0;

// let timerIsOn = true;

let seconds = 2;
let miliseconds = 99;

images.forEach((image, i) => {
	iteration != i
		? (image.dataset.active = false)
		: (image.dataset.active = true);
});

btnStop.textContent = 'Stop';
btnRestart.textContent = 'Restart';

btnStop.dataset.behavior = 'stop';
btnRestart.dataset.behavior = 'restart';
btnRestart.disabled = true;

btnWrapper.insertAdjacentElement('afterbegin', btnStop);
btnWrapper.insertAdjacentElement('beforeend', btnRestart);

localStorage.setItem('current image', iteration.toString());

//Listeners
window.addEventListener('load', (e) => {
	restartSlideshow();
});

// window.addEventListener('blur', (e) => {
// 	// console.log("Window's closed");
// 	if (timerIsOn) pauseSlideshow(timers);
// });

// window.addEventListener('focus', (e) => {
// 	// console.log('Window just opened');
// 	if (timerIsOn) restartSlideshow();
// });

btnWrapper.addEventListener('click', (e) => {
	if (e.target.dataset.behavior === 'stop') {
		pauseSlideshow(timers);
		// timerIsOn = false;
	}

	if (e.target.dataset.behavior === 'restart') {
		restartSlideshow();
		// timerIsOn = true;
	}
});

//Functions
const fadeIn = (el) => {
	setTimeout(() => {
		el.dataset.active = true;
	}, 10);
};

const fadeOut = (el) => {
	setTimeout(() => {
		el.dataset.active = false;
	}, 500);
};

function slideshowFunc() {
	restartTimer();

	fadeOut(images[iteration]);

	iteration = iteration === images.length - 1 ? 0 : parseInt(iteration) + 1;

	fadeIn(images[iteration]);

	if (iteration < images.length)
		localStorage.setItem('current image', iteration.toString());
}

function timerFunc() {
	timerContainer.textContent =
		miliseconds < 10
			? `00:0${seconds}:${miliseconds}0`
			: `00:0${seconds}:${miliseconds}`;
	miliseconds--;
	if (miliseconds < 0) seconds--, (miliseconds = 99);
}

function restartTimer() {
	seconds = 3;
	miliseconds = 0;
}

function restartSlideshow() {
	if (timers.length === 0) {
		// console.log('Starting timers..');

		btnStop.disabled = false;
		btnRestart.disabled = true;

		timers.push(setInterval(slideshowFunc, slideshowDelay));
		timers.push(setInterval(timerFunc, timerDelay));
	}
}

function pauseSlideshow(timers) {
	if (timers.length > 0) {
		// console.log('Stopping timers..');

		btnStop.disabled = true;
		btnRestart.disabled = false;

		for (let t of timers) clearInterval(t);
		timers.length = 0;

		restartTimer();
	}
}
