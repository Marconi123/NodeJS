'use strict';
// let result =  prompt("Какое «официальное» название JavaScript?");
// function checkName (x){
//         if (x == 'ECMAScript') {    
//             alert('Верно!')
//       } else {
//         alert("«Не знаете? ECMAScript!")
//      }
// }
// checkName (result);

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.

// let number = prompt('Input your number');
// function checkNumber (x){
//     if (x > 0) {
//         alert(1);
//     } else if (x < 0) {
//         alert(-1); 
//     } else if (x == 0) {
//         alert(0);
//     }
// }

// checkNumber(number);

// let message = (number > 0) ? "1" : (number < 0) ? "-1" : "0"; 
// alert (message);

// let result1;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// let result = (a + b < 4) ? "Мало" : "Много";


// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let login = prompt ('Your job title');
// let message = (login == 'Сотрудник') ? 'Привет' : 
// (login == 'Директор') ? 'Здравствуйте' : 
// (login == '') ? 'Нет логина' : '';
// alert (message);

// let value = NaN;

// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;

// alert(value);

// NaN && (value = 10); => ничего, остаётся NaN
// NaN || (value = 20);  => тут уже value = 20
// 20 &&= 30; => true &&= true b и value = 30 (вернуло последнее)
// 30 ||= 40 => true ||= true и value = 30 тк первое значение true

// let age = prompt('What is your age?', 14)
// function checkAge (x){
//     if (x >= 14 &&  x <= 90) {
//         alert ('You are between 14 and 90')
//     } else {
//         alert ('You are under 14 or over 90');
//     }
// } 

// checkAge(age);

// (age >= 14 && age <= 90 && alert('Wow, you did it!')); NOT CORRECT ONE, JUST A JOKE

// function checkAgeTwo(x) {
//     if (!(age >= 14 && age <= 90)){
//         alert('You are NOT between 14 and 90')
//     } else {
//         alert('You are BETWEEN 14 and 90');
//     }
// }

// checkAgeTwo(age);

// function checkAgeThree(x){
//     if (x < 14 || x > 90) {
//         alert('You are NOT between 14 and 90 / 3') 
//     } else {
//         alert('You are BETWEEN 14 and 90 / 3');
//     }
// }

// checkAgeThree(age);

// let login = prompt('Кто там')

// function checkLogin(x){
//   if (x === 'Admin') {
//     let password = prompt('Пароль') 
//         if (password === 'Я главный') {
//             alert ('Здравтсвуйте!') 
//         } else if (password === null || password === '' ) {
//             alert('Отменено!')
//         } else {
//             alert('Неверный пароль')
//         } 
//   }  else if (x === null || x === '') {
//     alert('Отменено!')
//   } else {
//     alert('Я вас не знаю')
//   }
// } 

// checkLogin(login);

// let num1 = 10,
//     num2 = 20,
//     result;

// if (result === null || result === undefined) {
//     if (num1 !== null && num1 !== undefined) {
//       result = num1;
//     } else {
//       result = num2;
//     }
//   }
  
// result ??= num1 ?? num2

// for (let i = 0; i < 10; i++) {

//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 == 0) continue;
  
//     alert(i); // 1, затем 3, 5, 7, 9
//   }

// let k = 0;
// while (++k < 5) alert( k );
// Префиксный вариант ++i:
// Постфиксный вариант i++
// let i = 0;
// while (i++ < 5) alert( i );

/*
for (let i = 0; i < 5; i++) alert( i );
0 < 5 -> alert -> i = 1 
1 < 5 -> alert -> i = 2
2 < 5 -> alert -> i = 3
3 < 5 -> alert -> i = 4
4 < 5 -> alert -> i = 5
from 0 to 4 

for (let i = 0; i < 5; ++i) alert( i );
0 < 5 -> alert -> i = 1 
1 < 5 -> alert -> i = 2
2 < 5 -> alert -> i = 3
3 < 5 -> alert -> i = 4
4 < 5 -> alert -> i = 5
from 0 to 4 
*/

// При помощи цикла for выведите чётные числа от 2 до 10.

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) alert(i);
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }

/* Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно. */

// let number;
// do {
//     number = prompt('Введите число больше 100 / do ... while')
// } while (number < 100 && number) {
// }

// let number2;
// while(number2 < 100 && number2 !== null && number2 != '' ) {
//     number2 = prompt('Введите число больше 100 / while')
// }

// let number3 = +prompt('Введите число больше 100 / for');
// for (; number3 <= 100 && number3;) {
//     number3 = prompt('Введите число больше 100 / for');
// }

/* 
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.
*/

// let n = 10;
// nextNumber: 
// for (let i =2; i < 10; i++ ) {
//     for(let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextNumber;
//     }
//     alert(i);
// }