// Опишіть своїми словами, що таке екранування, і навіщо воно потрібне в мовах програмування
// Екранування - це процес, коли в мові програмування використовуються спеціальні символи, 
// які використовуються для введення спеціальних символів, які зазвичай не можуть бути введені безпосередньо в рядок.
// Наприклад, щоб ввести сам символ кавичок у рядок, потрібно використовувати спеціальний символ "" (зворотній слеш) перед кожним символом кавичок. 
// Це називається екрануванням символів. Аналогічно, щоб ввести символ переведення рядка у середині рядка, потрібно використовувати символи "\n".
// Екранування важливе в програмуванні, оскільки дозволяє вводити спеціальні символи у рядки, що їх використовують, 
// без порушення синтаксису мови програмування. Це допомагає уникнути помилок і забезпечує правильну обробку рядків програмою.

// Які засоби оголошення функцій ви знаєте?
// 1-Оголошення за допомогою ключового слова function
// 2-Функціональний вираз
// 3-Стрілочна функція
// 4-Методи об'єктів

// Що таке hoisting, як він працює для змінних та функцій?
// Hoisting - це механізм в JavaScript, який дозволяє оголошувати змінні та функції перед тим, як вони будуть фактично визначені у коді,
// тобто "піднімає" їх до початку області видимості.
// Змінні та функції, оголошені за допомогою ключових слів var та function, можуть бути використані в коді до їх фактичного оголошення.
// У випадку з функціями, це означає, що функції можуть бути визначені після виклику.

const createNewUser = () => {
    const firstName = prompt('Enter your name');
    const lastName = prompt('Enter your lastname');
    const date = prompt('Enter your date of birthday (dd.mm.yyyy)');
    
    const [day, month, year] = date.split(".");
    const formattedBirthday = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`.replaceAll('.', '-');
  
    const newUser ={
        firstName,
        lastName,
        birthday: new Date(formattedBirthday),
        getLogin() {
            return this.firstName.slice(0,1).toLowerCase() + this.lastName.toLowerCase();
        },
        getAge() {
            const today = new Date();
            let age = today.getFullYear() - this.birthday.getFullYear();
            const month = today.getMonth() - this.birthday.getMonth();
            if (month < 0 || (month === 0 && today.getDate() < this.birthday.getDate())) {
              age--;
            }
            return age;
          },
        getPassword() {
            return this.firstName.slice(0,1).toUpperCase() + this.lastName.toLowerCase() + this.birthday.getFullYear();
        }
        
    };

    return newUser;
}

const user = createNewUser();
console.log(user.getAge());
console.log(user.getPassword());

