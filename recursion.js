'use strict';

/* Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии. */

function sumTo(n){
    if (n == 1){
        return n
    } else {
        return n + sumTo(n - 1)
    }
}

// console.log(sumTo(5))

function sumTo2(n){

    let result = 0;
    for (let i = 0; i <= n; i++){
        result += i
    }
    return result
}

// console.log(sumTo2(5))

function sumTo3(n){
    return n * (n + 1) / 2
}

// console.log(sumTo3(5))


function bench(fn, number){
    
    let startDate = Date.now()
    for (let i = 1; i < 2000; i++){ fn(number)};
    return Date.now() - startDate
}

let time1 = 0;
let time2 = 0;
let time3 = 0;

// for (let i = 0; i < 300; i++){
//     time1 += bench(sumTo, 500)
//     time2 += bench(sumTo2, 500)
//     time3 += bench(sumTo3, 500)
// }

// console.log(`
//     The sumTo function took ${time1}, 
//     The sumTo2 function took ${time2}, 
//     The sumTo3 function took ${time3}
// `)

const factorial = function(n){
    return (n == 1) ? n : n * factorial(n - 1)
}
// console.log(factorial(10))


/* Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

Напишите функцию fib(n) которая возвращает n-е число Фибоначчи. */

let array = []

function fibonacci(n){
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}


function nFibonacci(n) {
    let a = 0;
    let b = 1;
    let c;
    let array = [];

    // Если n == 0, вернуть только 0
    if (n === 0) {
        return [a];  // Возвращаем массив с единственным элементом 0
    }

    // Для n >= 1, начинаем с a = 0, b = 1 и строим последовательность
    array.push(a);  // Сначала добавляем 0 (F_0)
    array.push(b);  // Добавляем 1 (F_1)

    // Заполняем массив чисел Фибоначчи
    for (let i = 2; i <= n; i++) {
        c = a + b;
        array.push(c);
        a = b;
        b = c;
    }

    return array;
}

// console.log(nFibonacci(20));


/* Напишите функцию printList(list), которая выводит элементы списка по одному.
Сделайте два варианта решения: используя цикл и через рекурсию.
Как лучше: с рекурсией или без? */



let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list) {
    let tmp = list;
  
    while (tmp) {
      console.log(tmp.value);
      tmp = tmp.next;
    }
  
  }
  
//   printList(list);
  

function printList2(list){
    return (list.next == null) ? list.value : printList(list)
}

console.log(printList2(list));


/* Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию. */

function printReverseList(list) {

    if (list.next){
        printReverseList(list.next)
    }

    console.log(list.value)
}


console.log(printReverseList(list))


