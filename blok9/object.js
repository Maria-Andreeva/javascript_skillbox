const bmwName = "BMW";
const bmwHpc = 340;
const bmwDoors = 2;
const bmwIsStarted = false;

const mercedesName = "Mercedes";
const mercedesHp = 200;
const mercedesDoors = 4;
const mercedesIsStarted = false;

const audiName = "Audi";
const audiHp = 250;
const audiDoors = 4;
const audiIsStarted = false;

// Объект - тип данных, который состоит из свойств, каждое свойство
// состоит из имени и значения. В значение вы можете записывать любой 
// тип данных и даже функцию.

//const car = new Object()
/*bmw.name = "BMW";
bmw.clor = "black";
bmw.hp = 340;
bmw.doors = 2;
bmw.isStarted = false;*/
const bmw = {
    name: "BMW",
    color: "black",
    hp: 340,
    doors: 2,
    isStarted: false
}

bmw.color = "green";
bmw.color = "red";

const engine = {
    hp: 340,
    capacity: 3,
    mileage: 60000
}

bmw.engine = engine;

delete bmw.hp;

console.log(bmw);
console.log(bmw.color);
console.log(bmw["color"]);

const fieldName = "color";
console.log(bmw[fieldName]);

const a = { a: 1 }
const b = { a: 1 }

console.log(a === b);

// Сравнение объектов
// Каждая ячейка памяти - это отдельная коробка.
// При сравнении "в лоб" происходит сравнение ссылок 
// на эти коробки, а не их содержимого, и получается false. 
 
