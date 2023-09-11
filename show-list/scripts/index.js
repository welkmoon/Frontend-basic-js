// Опишіть, як можна створити новий HTML тег на сторінці.
// 1. document.createElement(). Цей метод створює новий HTML елемент і повертає посилання на нього. 
// Далі можна налаштувати його атрибути та вміст.
// 2. Також можна створити HTML рядок зі своїм новим тегом та додати його до DOM 

// Опишіть, що означає перший параметр функції insertAdjacentHTML і опишіть можливі варіанти цього параметра.
// Метод insertAdjacentHTML() дозволяє вставляти HTML рядки в різні місця елементів DOM. Перший параметр цієї функції - це рядок, який визначає, куди саме вставити HTML-код.
// beforebegin: HTML рядок буде вставлений як попередній сусід елементу, тобто перед початком самого елемента.
// afterbegin: HTML рядок буде вставлений як перший дочірній елемент вказаного елемента, тобто на початку вмісту елемента.
// beforeend: HTML рядок буде вставлений як останній дочірній елемент вказаного елемента, тобто в кінці вмісту елемента.
// afterend: HTML рядок буде вставлений як наступний сусід елемента, тобто після закриваючого тега вказаного елемента.

// Як можна видалити елемент зі сторінки?
// Щоб видалити елемент зі сторінки, можна використати метод remove() або removeChild().
// Метод remove() видаляє елемент з документу
// Метод removeChild() видаляє вибраний дочірній елемент з батьківського елемента

const createList = (array, parent = document.body) => {
    const ul = document.createElement('ul');
    parent.appendChild(ul); // додаємо ul до parent, або до body, якщо parent не передано
    
    array.forEach(item => { 
      const li = document.createElement('li'); 
      li.innerText = item; 
      ul.appendChild(li); // додаємо li до ul
    });
  }
  
  const array = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
  createList(array);