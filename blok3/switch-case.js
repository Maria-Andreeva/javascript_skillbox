// Тернарный оператор

const tumbler = false;

if (tumbler) {
    console.log("Свет включен");
} else {
    console.log("Свет выключен");
}

//or

tumbler ? console.log("Свет включен") : console.log("Свет выключен");

/* --------------------------------------------------------- */

const age = 21;

const person = age < 1 ? "грудной ребенок"
    : age >= 1 && age <= 12 ? "ребенок"
    : age >= 13 && age <= 16 ? "подросток"
    : age >= 17 && age <= 21 ? "юноша"
    : age >= 22 && age <= 60 ? "взрослый"
    : age >= 61 && age <= 75 ? "пожилой"
    : age >= 76 && age <= 90 ? "старик"
    : "долгожитель";

console.log(person)

/*через тернарный оператор больше, чем одно ветвление - не очень, лучше использовать if-else*/

const age2 = 21;

let person2;

if (age2 < 1) {
    person2 = "грудной ребенок";
} else if (age2 >= 1 && age2 <= 12 ) {
    person2 = "ребенок";
} else if (age2 >= 13 && age2 <= 16 ) {
    person2 = "подросток";
} else if (age2 >= 17 && age2 <= 21 ) {
    person2 = "юноша";
} else if (age2 >= 22 && age2 <= 60 ) {
    person2 = "взрослый";
} else if (age2 >= 61 && age2 <= 75 ) {
    person2 = "пожилой";
} else if (age2 >= 76 && age2 <= 90 ) {
    person2 = "старик";
} else {
    person2 = "долгожитель";
}

console.log(person2)

// Конструкция switch-case

const day = 6;
let dayName;

switch (day) {
    case 1:
        dayName = "Понедельник";
        break;
    case 2:
        dayName = "Вторник";
        break;
    case 3:
        dayName = "Среда";
        break;
    case 4:
        dayName = "Четверг";
        break;
    case 5:
        dayName = "Пятница";
        break;
    /*case 6:
        dayName = "Суббота";
        break;
    case 7:
        dayName = "Воскресенье";
        break;*/
    case 6:
    case 7:
        dayName = "Выходной";
        break;

    default:
        dayName = "Некорректный день";
        break;
}

console.log(dayName)


// Пример реализации программы из задания 1:

const isRain = true;

isRain ? console.log("Идёт дождь") : console.log("Дождя нет");


// Пример реализации программы из задания 2:

const maxPrice = 1000;
const minPrice = 200;
const price = Number(prompt("Введите сумму"));

if (price > maxPrice) {
    console.log("Цена слишком большая");
} else if (price < minPrice) {
    console.log("Цена слишком маленькая");
} else {
    console.log("Цена нормальная");
}


// Пример реализации программы из задания 3:

const freeCashier = Number(prompt("Введите номер кассы"));

switch (freeCashier) {
    case 1:
        console.log("Свободная касса №1");
        break;
    case 2:
        console.log("Свободная касса №2");
        break;
    case 3:
        console.log("Свободная касса №3");
        break;
    case 4:
        console.log("Свободная касса №4");
        break;
    default:
        console.log("Все кассы заняты");
        break;
}