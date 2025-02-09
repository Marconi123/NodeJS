/* Сумма пользовательских чисел
важность: 5
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
Запустить демо
P.S. Есть «подводный камень» при работе с типами. */

function numberAccept() {
  let a = +prompt(`What is your A number ?`);
  let b = +prompt(`What is your B number ?`);
  return a + b;
}

/* Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null. */

function readNumber() {
  let number = prompt(`What is your number?`);
  //   if (number === null) {
  //     return alert(`Not a number`);
  //   } else {
  //     return isFinite(number) ? number : readNumber();
  //   }
  return number === null || number === ""
    ? alert(`Not a Number`)
    : isFinite(number)
    ? +number
    : readNumber();
}

// let x = readNumber();

/* 
Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max). */

function random(min, max) {
  //   let result = Math.random() * max;
  //   return result < min || result > max ? random(min, max) : console.log(result);

  return min + Math.random() * (max - min);
}

// let x = random(6, 7);
// console.log(x);

/*
Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.
*/

function randomInteger(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

let y = randomInteger(2, 5);
console.log(y);

