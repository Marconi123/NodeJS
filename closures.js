'use strict';

const { buildPath } = require("selenium-webdriver/lib/http");

function closureA(a){

    return function(b){
        return a + b
    }
}

// console.log(closureA(5)(-1));


/* У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.

Они должны использоваться таким образом:
arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива */

let arr = [1, 2, 3, 4, 5, 6, 7]; 

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}

function inArray(arr){
    return function(x){
        return arr.includes(x)
    }
}

// alert( arr.filter(inArray([1, 2, 10])) );


let users = [
    { name: "Иван", age: 20, surname: "Иванов" },
    { name: "Пётр", age: 18, surname: "Петров" },
    { name: "Анна", age: 19, surname: "Каренина" }
  ];

/* 
Обычный способ был бы таким:

// по имени (Анна, Иван, Пётр)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Пётр, Анна, Иван)
users.sort((a, b) => a.age > b.age ? 1 : -1);

Можем ли мы сделать его короче, например вот таким?

users.sort(byField('name'));
users.sort(byField('age'));

То есть чтобы вместо функции мы просто писали byField(fieldName).
Напишите функцию byField, которая может быть использована для этого. */

function byField(field){
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

// console.log(users.sort(byField('age')));

// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.


// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//       let shooter = function() { // функция shooter
//         alert( i ); // должна выводить порядковый номер
//       };
//       shooters.push(shooter); // и добавлять стрелка в массив
//       i++;
//     }
  
//     // ...а в конце вернуть массив из всех стрелков
//     return shooters;
//   }
//   let army = makeArmy();

  function makeArmy() {

    let shooters = [];
  
    for (let i = 0; i < 10; i++) {
      let shooter = function() { // функция shooter
        // alert( i ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // 0
  army[5](); // 5
  
  function positiveSum(arr) {
   return arr.filter(n => (n > 0)).reduce((acc, n) => acc += n, 0);
  }

//   console.log(positiveSum([1,2,5,21,-2,12,-22]))

//   alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
//   alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

let say = function func(re){
}

/* Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.

P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так. */



function makeCounter() {
    let count = 0;

    function counter(){
        return count++
    }

    counter.set = value => count = value

    return counter
}

let count = makeCounter();

count.set(10)

const sum = function(a){
    return function(b){
        return a+b
    }
}

// console.log(sum(1)(5));)

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };


  let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    // stomach: [],
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
//   console.log( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
//   console.log( lazy.stomach ); // apple

Function.prototype.defer = function(ms){
    let f = this
    return function(...args){
        setTimeout(() => f.apply(this, args), ms)
    }
}

function f() {
    console.log("Hello!");
  }
  
//   f.defer(1000); 


function f(a, b) {
    console.log( a + b );
  }
  
  // f.defer(1000)(1, 2);

  function fib(num){

    if (num === 1) return 0;
    if (num === 2 || num === 3) return 1;

    let a = 1;
    let b = 1;
    let c = 0;

    for(let i = 3; num > i; i++){
      c = a + b
      a = b
      b = c
    }

    return c

  }

  // console.log(fib(24))

  function fibR(num){
    return num <= 1 ? num : fibR(num - 2) + fibR(num - 1)
  }

  // console.log(fibR(7))