'user strict'
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

const newDate = new Date(2012, 1, 25, 3, 12);

// alert(newDate);

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

const weekdays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

function getWeeDay(date){
    return weekdays[date.getDay()]
};

// console.log(getWeeDay(newDate));

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

function getLocalDay(date){
    let day = date.getDay()
    if (day == 0) {
        day = 7
    }

    return day
}

/* Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
Функция должна надёжно работать при значении days=365 и больших значениях: */

// function getDateAgo(date, days){
//     return new Date(date - (3600 * 24 * 1000) * days).getDate();
// }

function getDateAgo(date, days){
    let copyDate = new Date(date);

    copyDate.setDate(date.getDate() - days)

    return copyDate.getDate();
}


// console.log(getDateAgo(new Date(2021, 11, 11), 366))

/*Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль). */

function getLastDayOfMonth(year, month){
    return new Date(year, month + 1, 0).getDate()
}

// console.log(getLastDayOfMonth(2025, 0))

/* Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то: */

let date = new Date(2028, 11, 2, 15, 29, 23, 926 )

function getSecondsToday(date){
    let copyDate = new Date(date)
    return (copyDate.getHours() * 3600) + (copyDate.getMinutes() * 60) + copyDate.getSeconds()
}

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow(){
    const today = new Date(Date.now())

    const tomorrow = new Date(
        today.getFullYear(), 
        today.getMonth(), 
        today.getDate() + 1);
    
    return Math.round((tomorrow - today) / 1000)
}

// console.log(getSecondsToTomorrow())

/* Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00. */

// function formatDate(date){
//     let diff = Date.new() - date

//     console.log(copyDate.toString().split(' '))

//     console.log(diff)
//     if (diff < 1000) {
//         console.log(`Right now!`)
//     } else if (diff < 3_600_000 ){
//         console.log(`${Math.round(diff / (1000 * 60))} minutes ago`)
//     } else {
//         // console.log()
//     }
// }


function formatDate(date) {
    let diff = new Date() - date; 
  
    if (diff < 1000 && diff > 0) { 
      return 'Right now';
    }
  
    let sec = Math.floor(diff / 1000); 
  
    if (sec < 60) {
      return sec + ' seconds ago';
    }
  
    let min = Math.floor(diff / 60000); 
    if (min < 60) {
      return min + ' minutes ago';
    }

    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
        d.getHours(),
        d.getMinutes()
    ]
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }
  
// console.log(formatDate(new Date(2025,1,2,19,23,12)))
// console.log(formatDate(new Date(2025,1,2,0,20,12)))
// console.log(formatDate(Date.now()))