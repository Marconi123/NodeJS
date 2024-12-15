/* Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
ucFirst("вася") == "Вася"; */

function ucFirst(str) {
  //   debugger;
  //   let result = "";
  //   let count = 1;
  //   for (let i of str) {
  //     if (str.startsWith(i) && count == 1) {
  //       result += i.toUpperCase();
  //       count += 1;
  //       continue;
  //     }
  //     result += i;
  //   }
  //   return result;

  return (result = str[0].toUpperCase() + str.slice(1));
}
// console.log(ucFirst("васвфывфывфывфывфывфф"));

/* Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false */

function checkSpam(str) {
  return str.toLowerCase().includes("viagra") ||
    str.toUpperCase().includes("XXX")
    ? true
    : false;
}

// console.log(checkSpam("buy ViAgRA now"));
// console.log(checkSpam("free xxxxx"));
// console.log(checkSpam("innocent rabbit"));

/* Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка. */

function truncate(str, maxlength) {
  return str.length - 1 > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

/*
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
*/

let extractCurrencyValue = (str) => {
  return str.slice(1);
};

// console.log(extractCurrencyValue("$120"));
