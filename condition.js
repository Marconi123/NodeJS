/* Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» */

let language = prompt('Какое «официальное» название JavaScript?')
// if (language == 'ECMAScript') {
//     alert("Верно!")
// } else {
//     alert("Не знаете? ECMAScript!")
// };


/* Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа. */

let number = prompt('Input your number')
if (number > 0) {
    alert('1')
} else if (number < 0) {
    alert('-1')
} else {
    alert('0')
}


// Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}

let newResult = (a + b < 4) ? "Мало" : "Много";


/* Перепишите if..else с использованием нескольких операторов '?'.
Для читаемости рекомендуется разбить код на несколько строк. */

let message;

if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}

let newLogin = prompt('Кто ты?')
let newMssage =
    (login == 'Сотрудник') ? 'Привет' :
        (login == 'Директор') ? 'Здравствуйте' :
            (login == '') ? 'Нет логина' :
                '';