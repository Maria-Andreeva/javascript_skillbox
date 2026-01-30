// Задача. Понять, как можно обойти объект в цикле.
// 2 способа, как обойти объект в цикле:
//    1. for ...in перебирает все перечисляемые свойства объекта
//    2. Object.keys(obj) возвращает массив со всеми именами 
//       перечисляемых свойств объекта        

// for...in - этот цикл очень похож на обычный цикл for, но отличается
// кодом внутри круглых скобок.
// for...in проходится по всем элементам внутри объекта или массива.

const object = {
    a: 1,
    b: 2,
    c: 3
}

for (const property in object) {
    console.log(`Свойство ${property} имеет значение ${object[property]}`);
}

// Object.keys(obj) - этот метод возвращает массив имен всех свойств объекта.

Object.keys(object).forEach((property) => {
    console.log(`Свойство ${property}`);
})

/* --------------------------------------- */

const registrationForm = {
    firstName: "Петя",
    lastName: "Иванов",
    birthDate: "19.12.1990",
    password: "qwerty"
}

Object.keys(registrationForm).forEach((field) => {
    if (!registrationForm[field]) {
        console.log("Форма заполнена не до конца");
    }
})