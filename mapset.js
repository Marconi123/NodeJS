
const person = {
    name: 'Jack',
    surname: 'Mansion',
    friends: {
      from: 1,
      to: 5
    },
  
    // [Symbol.iterator](){
    //   return {
    //   current: this.friends.from,
    //   last: this.friends.to,
  
    //   next(){
    //     if (this.current <= this.last){
    //       return {done: false, value: this.current++}
    //       } else {
    //       return {done: true}
    //      }
    //     }
    //   }
    // }
  }  
  
  // let arr = Array.from(person, num => num * num);
  
  // console.log(arr);
  
  person[Symbol.iterator] = function(){
    return {
      current: this.friends.from,
      last: this.friends.to,
  
      next(){
        if (this.current <= this.last){
          return {done: false, value: this.current++};
        } else {
          return {done: true};
        }
      }
    }
  }
  
  for (let item of person){
    // console.log(item);
  }
  
  let map = new Map()
  map.set(1, 500)
  .set(true,1000)
  .set(3,1500)
  
  // console.log(map)
  
  let object = {
    name: 'Vlad',
    surname: 'Galkin',
    age: 21,
    15: 22
  }
  
  
  let map1 = new Map(Object.entries(object));
  
  function unique(array) {
    return Array.from(new Set(array))
  }

  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  // console.log(unique(values)); // Hare,Krishna,:-O
  

let map2 = new Map();
map2.set("name", "John");
// console.log(map2)
let keys = Array.from(map2.keys())
keys.push("more");
// console.log(keys)


function clearok(arr) {
  let map = new Map()
  for (let word of arr){
    let sorted = word.toLowerCase().split('').sort().join('')
    map.set(sorted, word)
  }
  return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(clearok(arr));

/* Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0. */

let sumSalaries = function(salaries){
  let sum = 0;
  if (salaries.length != 0 ){
  let salary = Object.values(salaries)
  for (salary of salary){
    sum += salary
  }
}
  return sum
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// console.log(sumSalaries(salaries))

let user = {
  name: 'John',
  age: 30
};

function count(obj) {
  return Object.keys(obj).length
}

let {height, width, title} = { title: "Menu", height: 200, width: 100 }
// console.log(`Height: ${height}, Width:${width}, Title:${title}`)


/* Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение. */

let salaries5 = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


function topSalary(salaries) {

  let highSalaryName = null;
  let highSalary = 0;

  for (let [name, salary] of Object.entries(salaries)){
    if (salary > highSalary){
      highSalary = salary
      highSalaryName = name
    }
  }  
  return highSalaryName
};

// topSalary(salaries5)



const objectTest = {
  name: 'Vlad',
  surname: 'Galkin',
  specData:{ 
    age: 19,
    familySize: 5,
    friends: ['Danik', 'Vladik'],
    friendsInformation: [
      {
        name: 'Vladik',
        age: 22
      },
      {
        name: 'Danik',
        age: 23
      }
    ]
  }
}

const {
  name:n, 
  specData: 
    {
    friends, 
    friendsInformation
  }
} = objectTest;

