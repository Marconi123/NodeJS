// Чему будут равны переменные a, b, c и d в примере ниже?

let a = 1, b = 1;

let c = ++a; // a = 2 , c = 2
let d = b++; // d = 1, b = 2

// Чему будут равны переменные a и x после исполнения кода в примере ниже?

let g = 2;
let x = 1 + (g *= 2); // g = 4, x = 5

// Какой результат будет у выражений ниже?

"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6 
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // '  -9   5'
"  -9  " - 5 //  -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // 2


/* Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
правьте её. Результат должен быть 3. */

// let f = +prompt("Первое число?", 1);
// let h = +prompt("Второе число?", 2);

// alert(f + h); // !12 => 3

// function countPositivesSumNegatives(input) {

//     let positiveNumber = 0;
//     let sumOfNegative = 0;

//     if (input != null && input.length > 0) {
//         for (let number of input) {
//             if (number > 0 && number != 0) {
//                 positiveNumber += 1
//             } else { sumOfNegative -= number }
//         }
//         return [positiveNumber, -sumOfNegative];
//     }
//     return [];
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// const array0 = [];
// console.log(countPositivesSumNegatives(array0));

// function betterThanAverage(classPoints, yourPoints) {
//     let averageScore = 0;

//     for (let score of classPoints) {
//         averageScore += score
//     }

//     return averageScore / classPoints.length > yourPoints ? false : true
// }

// console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21));

// function grow(x) {
//     let sum = 1;
//     for (let number of x) {
//         number == x[0] ? sum = number : sum *= number;
//     }
//     return sum;
// }