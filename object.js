/* Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.  */

let user = new Object();
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
user.test = '';
delete user.name;

/* Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так: */

let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false

function isEmpty(obj) {
    for (let params in obj) {
        return true
    }
    return false
}

console.log(isEmpty(schedule));
/* Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0. */

let salaries = {
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
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(object) {
    for (let param in object) {
        if (typeof object[param] == 'number') {
            object[param] *= 2
        }
    }
}
