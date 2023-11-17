// Реалізувати можливість зміни колірної теми користувача.

// Технічні вимоги:
// Взяти будь-яке готове домашнє завдання з HTML/CSS.
// Додати на макеті кнопку "Змінити тему".
// При натисканні на кнопку - змінювати колірну гаму сайту (кольори кнопок, фону тощо) на ваш розсуд. При повторному натискання - повертати все як було спочатку - начебто для сторінки доступні дві колірні теми.
// Вибрана тема повинна зберігатися після перезавантаження сторінки

/* HOMEWORK 12: */
const btnWrapper = document.querySelector('.btn-wrapper');
const wrapper = btnWrapper.querySelectorAll('.btn');
const keysArr = Array.from(
	wrapper,
	({ dataset, textContent }) =>
		(dataset.id = textContent.trim().toLowerCase())
).filter(Boolean);

let lastPressed = null;

document.addEventListener('keydown', (e) => {
	const pressedKey = e.key.toLowerCase();
	if (keysArr.includes(pressedKey)) {
		if (lastPressed)
			wrapper[
				keysArr.indexOf(lastPressed)
			].style.backgroundColor = '';

		wrapper[
			keysArr.indexOf(pressedKey)
		].style.backgroundColor = 'blue';
		lastPressed = pressedKey;
	}
});
/* END OF HOMEWORK 12 */

const BASE_CSS_PATH = './css/base-styles.css';
const ADD_CSS_PATH = './css/additional-styles.css';

const link = document.querySelector('link');
const button = document.querySelector('.btn-theme');

if (!localStorage.getItem('base theme'))
	localStorage.setItem('base theme', BASE_CSS_PATH);
if (!localStorage.getItem('additional theme'))
	localStorage.setItem('additional theme', ADD_CSS_PATH);

let currentTheme = !localStorage.getItem('current theme')
	? localStorage.getItem('base theme')
	: localStorage.getItem('current theme');

link.href = currentTheme;

if (!localStorage.getItem('current theme'))
	localStorage.setItem('current theme', currentTheme);

button.addEventListener('click', (e) => {
	currentTheme === localStorage.getItem('base theme')
		? (currentTheme = localStorage.getItem(
				'additional theme'
		  ))
		: (currentTheme = localStorage.getItem('base theme'));
	link.href = currentTheme;
	localStorage.setItem('current theme', currentTheme);
});
