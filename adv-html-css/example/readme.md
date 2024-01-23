# Gulp

## Що таке Gulp
Це таск-менеджер, який має допомогти нам автоматизувати нудні процеси в розробці. З його допомогою можна зробити:

* об'єднання всіх файлів зі стилями в один
* додавання до префіксів до всіх css властивостей, які цього потребують
* об'єднання js файлів в один
* переклад JavaScript коду з нових стандартів на ES5
* і т.д.

## Початок роботи з Gulp
Насамперед потрібно переконатися, що у Вас створений npm проект і в ньому вже є файл `package.json`.

Якщо Ви вперше на комп'ютері встановлюєте Gulp, то варто почати з виконання кодманди - `npm install gulp-cli --global`. Після встановлення на Вашому комп'ютері з'явиться можливість звертатися до такс-менеджера в консолі. Це потрібно для того, щоб післяналаштування можна було запускати Gulp.


Після цього можна встановити сам таск-менеджер вже у конкретний проект. Для цього виконуємо в консолі команду – `npm install gulp --save-dev`.

## Налаштування роботи Gulp
Для налаштування потрібно у папці проекту створити файл `gulpfile.js`. Після запуску таск-менеджера саме цей файл буде відповідати за те, як і в якій послідовності потрібно запускати.

Щоб здійснювати налаштування, додавати завдання та вибудовувати їх послідовність потрібно:
* визначитися зі списком модулів, які знадобляться
* встановити кожен із них, згідно з їхньою документацією
* у самому верху `gulpfile.js` імпортувати ці модулі. Приклад зазвичай теж є у документації.


Щоб імпортувати ці модулі, є два способи.

1) Старіший за допомогою функції `require`:
   ```js
   const gulp = require ('gulp');
   const clean = require ('gulp-clean');
   const concat = require('gulp-concat');
   ```
2) Новіший, просунутий з використанням оператора `import`:
   ```js
   import gulp from 'gulp';
   import clean from 'gulp-clean';
   import concat from 'gulp-concat';
   ```
    Але варто врахувати, що для того, щоб цей варіант спрацював, у файлі `package.json` потрібно додати властивість ``type'': 'module'`.


## Кроки

```javascript
const gulp = require ("gulp"); // зберігаємо в змінну gulp великий об'єкт, що дозволяє створювати завдання, зчитувати та переміщати файли
```

```javascript
// зберігаємо в змінну concat функцію, що об'єднує всі передані їй файли в один, і при необхідності - його перейменовує
const concat = require ("gulp-concat");
```

```javascript
// Створюємо завдання на переміщення та об'єднання файлів - як бачите, Gulp сам тільки ставить завдання, знаходить і переміщає файли - все інше за нього роблять інші модулі
gulp.task("concatCss", function(){
     return gulp.src("src/css/*.css").
     pipe(concat("all.css")).
     pipe(gulp.dest("dist/css"));
});
```

```javascript
/*
// загальний синтаксис завдань у Gulp:
*/

gulp.task('task_name', function() {
     return gulp.src('source_files', { allowEmpty: true }) // шлях до файлів-вихідників
     .pipe(plugin_name()) // проганяємо їх через плагін
     .pipe(gulp.dest('destination_derictory')) // шлях до папки, куди поміщаємо кінцеві файли
})

// `gulp.src` - методи, з якого ми говоримо gulp-у які файли взяти. Перший аргумент – шлях до файлів, другий аргумент – об'єкт із додатковими налаштуваннями.
// `{allowEmpty: true}` - налаштування, яка говорить таск-менеджеру що файлів цим шляхом може і не бути. У разі він просто продовжити виконання інших завдань.
// `.pipe()` - метод, який викликається в результаті виконання `gulp.src()`. Призначений для опису того, що хочемо зробити з файлами. Прийнято використовувати по одному `.pipe()` на кожен етап обробки файлів. Тобто. якщо потрібно зібрати всі js файли в один і потім перетворити їх до стандарту ES5, то обидві ці операції будуть виконуватись в окремих `.pipe()` один за одним.
```
```javascript
// Хорошим тоном є створювати кожному за завдання окремих функцій і потім прописування їх назв у тасках

const moveCSS = () =>
     gulp.src("./src/css/*.css").
     pipe(gulp.dest("./dist/css/"));


const moveCss = () => gulp.src("./src/css/*.css").pipe(gulp.dest("./dist/css/")); // можна писати і так, але попередній варіант наочніший

gulp.task('moveCss', moveCSS)
```


## API
[src](https://gulpjs.com/docs/en/api/src) & [dest](https://gulpjs.com/docs/en/api/dest)

```javascript
const {src, dest} = require('gulp');

exports.moveCss = () => {
     return src('src/css/*').pipe(dest('dist/'))
}

exports.moveJs = () => {
     return src('src/js/*').pipe(dest('dist/'))
}
````

[task](https://gulpjs.com/docs/en/api/task)

```javascript
const {task} = require('gulp');

task('name', () => {});
````

[watch](https://gulpjs.com/docs/en/api/watch)
[chokidar](https://gulpjs.com/docs/en/api/watch#chokidar-instance)

```javascript
const { task, watch } = require ( 'gulp');

// watch(globs, [options], [task])
task('dev', () => watch('path', () => {}));

```

[series](https://gulpjs.com/docs/en/api/series) & [parallel](https://gulpjs.com/docs/en/api/parallel)

```javascript

// gulp.parallel та gulp.series приймають назву функцій, які мають виконуватися
gulp.task("moveFiles", gulp.parallel(moveCSS, moveIMG));

// Якщо ж назви вказані в лапках, це назва тасок.
gulp.task("moveHtml", () => gulp.src('src/normal-flow.html').pipe(gulp.dest('dist'))));
gulp.task("moveFiles", gulp.parallel("moveHtml", moveCSS, moveIMG));

// Якщо ці таски не було створено, то команда gulp moveFiles викликає помилку
```

## Plugins
- [gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
- [gulp-gulp-terser](https://www.npmjs.com/package/gulp-terser)
- [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [gulp-clean](https://www.npmjs.com/package/gulp-clean)
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- [browser-sync](https://browsersync.io/docs/gulp)
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)

