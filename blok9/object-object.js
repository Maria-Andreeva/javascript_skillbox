//Object - это зарезервированный объект в JS, который в себе содержит много полезных методов для работы с объектами.

//Object.create() - этот метод нужен для создания нового объекта, используя существующий объект.

const person = {
    name: "Петя",
    getName: function() {
        console.log(`Привет, меня зовут ${this.name}`);
    }
}

const person2 = Object.create(person);
person2.name = "Вася";

person.getName();
person2.getName();

// Object.assign() - этот метод нужен для слиянния двух объектов в один.
// Если мы передаем объекты с одинаковыми свойствами, то они перезаписываются.

const a = {
    a: 1,
    b: 2,
    c: 3
}

const b = {
    c: 5,
    d: 6
}

const object = Object.assign(a, b);

console.log(object);

// Object.entries() - возвращает массив массивов, состоящий из пар ключ-значение.
// Чаще всего это используется для циклов.

const car = {
    name: "Audi",
    hp: 280
}

const pair = Object.entries(car);

console.log(pair);


// Object.freeze() - нужен лоя того, чтобы "заморозить" объект.
// Бывает полезно, когда вы не хотите, чтобы дальше в коде кто-то
// мог поменять свойства вашего объекта.

Object.freeze(car);

car.name = "Mercedes";

console.log(pair);


// Object.keys() - возвращает название всех свойств в объекте.
// Очень полезно, когда вам необходимо циклом пройтись по всем свойствам объекта.

const keys = Object.keys(car)
//console.log(keys);

keys.forEach((key) => {
    console.log(car[key]);
})

//Object.values() - аналогичен Object.keys(), но уже возвращает значения
//всех свойств в объекте.

const values = Object.values(car);
console.log(values);
/*
values.forEach(() => {
    ...
})
*/

