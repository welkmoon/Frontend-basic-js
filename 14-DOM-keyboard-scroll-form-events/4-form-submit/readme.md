1. При натисканні на сабміт збирати всі значення з інпутів в об'єкт і виводити в консоль. Очищати усі поля введення. Сторінка не повинна перезавантажуватись!
```js
   {
      name: 'John',
      tel: '+76546623462',
   }
```
2. Реалізувати подію сабміта форми при натисканні Enter [https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit)
3. При введенні в інпут тексту забороняти вводити спец. символи html тегів (`<`, `>`, `</`)
4. За розфокусом з інпуту repeatPassword перевіряти чи відповідають введені дані полю password. Якщо ні – показувати помилку (додавати текст червоного кольору під полем введення). За фокусом приховувати помилку.