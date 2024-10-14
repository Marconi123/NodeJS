'use strict';
// let array1 = Array();
// let array2 = [];


// array2 = ['test', 'test2', 'test3']
// console.log(array2[2]);

// array2[2] = 'testNew3';

// console.log(array2.length);

// array2[3] = 'test4';
// console.log(array2.length);
// console.log(array2);
// console.log(array2.at(-1));


// array1 = ['test', 'test2', 'test3'];
// array1.push('testAdd');
// console.log(array1); //test, test2, test3, testAdd
// const testPop = array1.pop() //test, test2, test3
// console.log(`testPop equals ${testPop}`); //testAdd
// const testShift = array1.shift() //test
// console.log(`testShift equals ${testShift}`); //test
// array1.unshift('testUnshift') //testUnshift, test2, test3
// console.log(array1);


// for (let i = 0; i < array1.length; i++) {
//     console.log(array1[i]);
// };

// for (let name of array1) {
//     console.log(name);
// }
// // not a good idea to use it
// for (let key in array1) {
//     console.log(array1[key])
// };


// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// let styles = ['Джас', 'Блюз'];
// styles.push('«Рок-н-ролл»');
// // styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// console.log(styles.shift());
// styles.unshift('Рэп', 'Регги');

// let arr = ["a", "b"];

// arr.push(function () {
//     alert(this);
// })

// arr[2]();


// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
