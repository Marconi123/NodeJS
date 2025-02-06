let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
  };
  
  meetup.place = room;       
  room.occupiedBy = meetup; 
  
// JSON.stringify(meetup, function replacer(key,value){
//     console.log(`${key} : ${value}`)
//     return (key == 'occupiedBy') ? undefined : value
// }, 2);

// JSON.stringify(meetup);

// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
    name: "Василий Иванович",
    age: 35
  };


let userJSON = JSON.parse(JSON.stringify(user)); 

/* В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.

Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.

Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup: */

let room2 = {
    number: 23
  };
  
  let meetup2 = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room2
  };
  
  room2.occupiedBy = meetup2;
  meetup.self = meetup2;
  
  console.log(JSON.stringify(meetup2, function replacer(key, value){
    return (key != "" && value == meetup2) ? undefined : value;
  }));

  /* в результате должно быть:
  {
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
  }
  */


  let company = { // тот же самый объект, сжатый для краткости
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };

  function getSallary(department){
    if (Array.isArray(department)){
        return department.reduce((acc, current) => acc + current.salary, 0)
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)){
            sum += getSallary(subdep)
        }
        return sum
    }
  }

  console.log(getSallary(company));