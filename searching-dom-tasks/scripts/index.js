// Опишіть своїми словами що таке Document Object Model (DOM)
// це стандарт, що визначає, як браузер повинен представляти веб-сторінки в пам'яті комп'ютера. Це деревоподібна структура, 
// яка складається з вузлів, які представляють елементи HTML сторінки, а також їх атрибути та текстовий вміст.
// DOM дозволяє змінювати зміст і структуру сторінки, використовуючи JavaScript.

// Яка різниця між властивостями HTML-елементів innerHTML та innerText?
// Властивість innerHTML повертає HTML-код всередині елемента, включаючи теги HTML, а
// innerText повертає тільки текстовий вміст елемента без HTML-тегів. 

// Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?
// Є кілька способів, за допомогою яких можна звернутися до елементів сторінки за допомогою JavaScript. Розглянемо декілька з них:

// Метод getElementById(): Цей метод повертає елемент на сторінці з вказаним ідентифікатором (id)
// Метод getElementsByClassName(): Цей метод повертає масив елементів на сторінці з вказаним класом. 
// Метод getElementsByTagName(): Цей метод повертає масив елементів на сторінці з вказаним тегом. 
// Метод querySelector(): Цей метод повертає перший елемент на сторінці, що відповідає заданому CSS-селектору.
// Метод querySelectorAll() - це метод об'єкту document, який дозволяє отримати список всіх елементів на сторінці, 
// які відповідають заданому CSS-селектору, він повертає об'єкт NodeList, який містить усі знайдені елементи в порядку їх з'явлення на сторінці. 
// NodeList схожий на масив, але не є ним, тому що він не має всіх методів, які є в масиві. Проте, до його елементів можна звертатися за індексом, як до елементів масиву.

// Я вважаю найкращими способами методи  querySelector() та querySelectorAll() бо їх можна використовувати в поєднанні з іншими методами та властивостями DOM, 
// а також пошук по css селекрорах є доволі зручний та може бути достатньо деталізованим

// ---------1--------
const pgElements = document.querySelectorAll("p");
console.log(pgElements);

pgElements.forEach((elem)=>{
    elem.style.backgroundColor = "#ff0000";
})


// ---------2--------


const optionsListElement = document.querySelector("#optionsList");
console.log(optionsListElement);

const parentElement = optionsListElement.parentNode;
console.log(parentElement);

const childElements = optionsListElement.childNodes;
childElements.forEach((childElement) => {
    console.log(childElement.nodeName + ': ' + childElement.nodeType);
  });


//   ---------3--------


const testParagraph = document.querySelector('#testParagraph');
console.log(testParagraph);
testParagraph.innerText = "This is a paragraph";


// ---------4--------


const liElements = document.querySelectorAll(".main-header li");
liElements[0].classList.remove("main-nav-item-active");
liElements.forEach(li => {
    li.classList.replace("main-nav-item", "nav-item")
})
console.log(liElements);


// ---------5--------


const sectionTitles = document.querySelectorAll('.section-title');
sectionTitles.forEach(title => {
    title.classList.remove('section-title');
  });
console.log(sectionTitles);