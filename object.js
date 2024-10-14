/* Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.  */

const user = new Object();
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
user.test = '';
delete user.name;

/* Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так: */

const schedule = {};
// alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
// alert(isEmpty(schedule)); // false

function isEmpty(obj) {
    for (let params in obj) {
        return true
    }
    return false
}

console.log(isEmpty(schedule));
/* Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0. */

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

function countSalaries(object) {
    for (let name in object) {
        sum += object[name]
    }
}

countSalaries(salaries)


// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// до вызова функции
const menu = {
    width: 200,
    height: 300,
    title: "My menu",
    sizes: {
        m: 30,
        s: 20
    }
};

multiplyNumeric(menu);

function multiplyNumeric(object) {
    for (let param in object) {
        if (typeof object[param] == 'number') {
            object[param] *= 2
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
        this.a = +prompt('a?');
        this.b = +prompt('b?');
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
    }
};

// ladder.up().up().up().showStep().down().down().showStep()

// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true

let obj = {};

function A() { return obj };
function B() { return obj }

// alert(new A() == new B()); // true


/* Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:
Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue. */

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt('Enter yout number');
    };
}

// let acc = new Accumulator(1);
// acc.read();
// acc.read();

// console.log(acc.value);

function updateLight(current) {
    return
    (current === 'green') ? 'yellow' :
        (current === 'yellow') ? 'red' : 'green'
};

// console.log(updateLight('red')); 

/* Создайте калькулятор при помощи конструктора, new Calculator
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств. */

function Calculator() {

    this.read = function read() {
        this.a = +prompt('a?');
        this.b = +prompt('b?');
    }

    this.sum = function sum() {
        return this.a + this.b
    }

    this.mul = function mul() {
        return this.a * this.b
    }

    // console.log((new.target));
}

const newCalculator = new Calculator();

// newCalculator.address = '';

// console.log(newCalculator);
// newCalculator.read();
// console.log(newCalculator.sum());
// console.log(newCalculator.mul());


// SYMBOL data type;
const newID = Symbol(12)
const newID2 = Symbol('test')

// console.log(`NewID is ${newID.toString()}`)
// console.log(`NewID description is ${newID.description}`);

// console.log(`NewI2 is ${newID2.toString()}`)
// console.log(`NewID2 description is ${newID2.description}`);

const quarterOf = (month) => {
    return (month >= 3) ? '1' : (month > 3 && month >= 6) ? '2' : (month > 6 && month <= 9) ? '3' : '4';
}