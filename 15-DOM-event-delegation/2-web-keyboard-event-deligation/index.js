/**
 * Оживити екранну клавіатуру. При натисканні на кнопки клавіатури додавати відповідний символ в input.
 * При натисканні кнопки Del очищати текст в input
 */

const quertyChars = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']

const getKeyHtml = (key) => `<div class='key'><span>${key}</span></div>`

const paintKeyboard = () => {
	const keyboardsContainers = document.querySelector('.keyboard-container');

	quertyChars.forEach((char, index) => {
		if (index < 12) {
			keyboardsContainers.children[0].insertAdjacentHTML('beforeend', getKeyHtml(char))
			return
		}

		if (index < 23) {
			keyboardsContainers.children[1].insertAdjacentHTML('beforeend', getKeyHtml(char))
			return
		}

		keyboardsContainers.children[2].insertAdjacentHTML('beforeend', getKeyHtml(char))
	})

	keyboardsContainers.insertAdjacentHTML('beforeend','<div class="key space"> </div>')
}

paintKeyboard(); 

const keyboardsContainers = document.querySelector('.keyboard-container');
const text = document.getElementById('text');
const deleteBtn = document.querySelector('.del-btn')

keyboardsContainers.addEventListener('click', (e) => {
	if (e.target === e.currentTarget){
		return;
	}
	if (e.target.className.includes('key') || e.target.closest('.key').className.includes('key')){
		text.value += e.target.textContent;
	}
})

deleteBtn.addEventListener('click', (e) => {
	text.value = ''
})