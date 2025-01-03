/* Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.  */

const user = new Object();
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
user.test = "";
delete user.name;

/* Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так: */

const schedule = {};
// alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
// alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let params in obj) {
    return true;
  }
  return false;
}

// console.log(isEmpty(schedule));
/* Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0. */

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

function countSalaries(object) {
  for (let name in object) {
    sum += object[name];
  }
}

countSalaries(salaries);

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// до вызова функции
const menu = {
  width: 200,
  height: 300,
  title: "My menu",
  sizes: {
    m: 30,
    s: 20,
  },
};

multiplyNumeric(menu);

function multiplyNumeric(object) {
  for (let param in object) {
    if (typeof object[param] == "number") {
      object[param] *= 2;
    }
  }
}

// Object.assign(menu, salaries);
// console.log(menu);

// const menuClone = Object.assign({}, menu)
// console.log(menu, menuClone)

// const clone = {};
// for (let key in menu) {
//     clone[key] = menu[key]
// }

// console.log(clone);
/* Создайте калькулятор
важность: 5
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};
*/

const calculatorCurrent = {
  read() {
    this.a = +prompt("a?");
    this.b = +prompt("b?");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// console.log(calculatorCurrent.sum());
// console.log(calculatorCurrent.mul());

const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  },
};

// ladder.up().up().up().showStep().down().down().showStep()

// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true

let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

// alert(new A() == new B()); // true

/* Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:
Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue. */

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("Enter yout number");
  };
}

// let acc = new Accumulator(1);
// acc.read();
// acc.read();

// console.log(acc.value);

function updateLight(current) {
  return;
  current === "green" ? "yellow" : current === "yellow" ? "red" : "green";
}

// console.log(updateLight('red'));

/* Создайте калькулятор при помощи конструктора, new Calculator
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств. */

function Calculator() {
  this.read = function read() {
    this.a = +prompt("a?");
    this.b = +prompt("b?");
  };

  this.sum = function sum() {
    return this.a + this.b;
  };

  this.mul = function mul() {
    return this.a * this.b;
  };

  this.calculate = function calculate(str){
    let result = str.split(' ')
  };
}

// console.log(newCalculator.calculate("12 + 32"))
// newCalculator.address = '';

// console.log(newCalculator);
// newCalculator.read();
// console.log(newCalculator.sum());
// console.log(newCalculator.mul());

// SYMBOL data type;

// const newID = Symbol(12);
// const newID2 = Symbol("test");

// console.log(`NewID is ${newID.toString()}`)
// console.log(`NewID description is ${newID.description}`);

// console.log(`NewID2 is ${newID2.toString()}`)
// console.log(`NewID2 description is ${newID2.description}`);

const quarterOf = (month) => {
  return month >= 3
    ? "1"
    : month > 3 && month >= 6
    ? "2"
    : month > 6 && month <= 9
    ? "3"
    : "4";
};

const userVlad = {
  name: "Vladislav",
  surname: "Galkin",
  age: 23,
  age1: 24,
  age2: 29,
  friend: ["Danik", "Vladik", "Vlados"],

  // [Symbol.toPrimitive](hint) {
  //     return hint == 'string' ? `${this.surname}` : this.age
  // }

  //     toString() {
  //         return `${this.age2}`
  //     },

  //     valueOf() {
  //         return this.age
  //     }
};

// console.log(test);
// alert(test)
// console.log(test + 23)

/* Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. Foreachofthem,create an object with properties for their fullname, mass,and height (Mark Miller and John Smith)
2. Createa'calcBMI'method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
3. Log to the console who has the higher BMI,together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

function NewUser(fullName, mass, height) {
  (this.fullName = fullName),
    (this.mass = mass),
    (this.height = height),
    this.bmi;

  NewUser.prototype.calculateBMI = function () {
    return (this.bmi = this.mass / this.height ** 2);
  };
}

let mark = new NewUser("Mark Miller", 78, 1.69);
let john = new NewUser("John Smith", 92, 1.95);

john.calculateBMI();
mark.calculateBMI();

// console.log(
//   mark.bmi > john.bmi
//     ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
//     : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
// );

/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
getMaxSubSum(arr) должна возвращать эту сумму. */
const getMaxSubSum = (arr) => {
  let maxSum = 0;
  let partialMax = 0;
  for (let i of arr) {
    partialMax += i;
    maxSum = Math.max(maxSum, partialMax);
    if (partialMax < 0) partialMax = 0;
  }
  return maxSum;
};

// console.log(getMaxSubSum([1, 2, 5, -2, -3, 100, 94, -1]));

const removeExclamationMarks = (s) => {
  let result = "";
  for (let i of s) {
    if (i == "!") continue;
    result += i;
  }
  return result;
};

// console.log(removeExclamationMarks("Te!st!!"));
const nbYear = (p0, percent, aug, p) => {
  for (var age = 0; p0 < p; age++) {
    p0 += Math.floor((p0 * percent) / 100 + aug);
  }
  return age;
};

// console.log(nbYear(1500000, 0.25, 1000, 2000000));

const numberArray = [62, 42, 3, 5, 22, 1, 7, 19, 232, 123, 123, 22, 22, 23, 62, 42];
const objectsArray = [
  { name: "Danik", age: 23, budget: 7000 },
  { name: "Marcus", age: 22, budget: 5000 },
  { name: "Vlados", age: 19, budget: 2000 },
  { name: "Vlad", age: 21, budget: 3000 },
  { name: "Mickey", age: 19, budget: 7000 },
];
const stringArray = ['Привет','Андрей','Тут','Жить','А где']

// objectsArray.forEach(function (value, index, array) {
//   console.log(`The item is ${value.name}, has the ${index} index`);
// });

// objectsArray.find(function (value, index, obj) {
// console.log(`The name is ${value.name}, the index is ${index}`);
// });


// console.log(objectsArray.sort());

// function compareAB(a, b){
//   return (a > b) ? 1 : (a === b) ? 0 : -1
// }

// function compareBudget(a, b){
//   return (a.budget > b.budget) ? 1 : (a.budget === b.budget) ? 0 : -1
// }

// console.log(numberArray.sort(compareAB));
// console.log(objectsArray.sort(compareBudget));

// console.log(numberArray.sort(function(a, b) {return console.log (a - b)}))


// console.log([1, -2, 15, 2, 0, 8].sort(function(a, b) {
//   return  a - b;
// }));
 
// console.log(stringArray.sort((a, b) => a.localeCompare(b)))
// let name = 'Влад, Даник, Владик'
// let arr = name.split(', ', 2)

// console.log(arr);
// console.log(arr.join(';'))

// console.log(numberArray.reduce(function(sum, value){
//   return sum+=value
// }, 0));


/* Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный. */

function filterRange(arr, a, b){
  return arr.filter(value => value >= a && value <= b)
}

/* Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать. */


function filterRangeInPlace(arr, a, b){
  return arr.filter(value => (a <= value && value <= b))
};

// let arr = [5, 3, 8, 1];

// console.log(filterRangeInPlace(arr, 1, 4)); // удалены числа вне диапазона 1..4

// const arr = [5, 2, 1, -10, 8].sort(function(a,b) {
//   return (a > b) ? -1 : (a == b) ? 1 : 0
// });

// console.log(arr)

// function copySorted(arr){
//   return arr.slice().sort()
// }

// const arrLet = ["HTML", "JavaScript", "CSS"];

// console.log(copySorted(arrLet), arrLet)

/* У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён. */
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(value => value.name)
// users.forEach(item => names.push(item.name));

// console.log( names ); // Вася, Петя, Маша

/*
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
*/

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(value => ({fullname: value.name + ' ' + value.surname, id: value.id }))

// console.log(usersMapped)

/* 
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
*/

function sortByAge(arr){
  arr.sort((a,b) => a.age - b.age )
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

// console.log(arr)
// sortByAge(arr);
// console.log(arr)

// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя

/* Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов.  */

function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5)
  console.log(arr)
}

// shuffle(numberArray);

/* 
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
*/

function getAverageAge(array){
  return array.reduce((sum, user, index, users) => Math.round((sum + user.age / users.length)), 0)
}

// console.log(arr.reduce((sum, user, index, users) => Math.round((sum + user.age / users.length)), 0))

// console.log(getAverageAge(arr))

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(array) {
  let results = []
  for (let i of array){
    if (!results.includes(i)){
      results.push(i)
    }
  }
  return results
}

// console.log(unique(strings));

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
console.log(usersById)