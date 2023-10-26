/**
 * Поліпшити скрипт із попереднього завдання.
 *
 * При кожному русі курсору по сторінці
 * Змінювати колір кожної літери елемента h1 на випадковий.
 */

/* Дано */
const PHRASE = 'Добро пожаловать!';

function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}
