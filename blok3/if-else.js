const color = "green";
const isPedestrians = false;

if (color == "green" && !isPedestrians) {
    console.log("Проезжаем светофор");
} else if (color == "yellow") {
    console.log("Приготовиться");
} else {
    console.log("Стоим на месте");

}


const isPetyaWalk = false;
const isMashaWalk = true;

// или
if (isPetyaWalk || isMashaWalk) {
    console.log("Я иду гулять");
} else {
    console.log("Я не иду гулять");
}

// и
if (isPetyaWalk && isMashaWalk) {
    console.log("Я иду гулять");
} else {
    console.log("Я не иду гулять");
}
// не
if (!isPetyaWalk) {
    console.log("Я иду гулять");
} else {
    console.log("Я не иду гулять");
}



// Практика по теме «Работа с условным оператором и логическими выражениями»

/*В программе сохранён пароль qwerty.
    Ввод: qwerty.
    Вывод: Пароли совпадают.
    Пример 2
В программе сохранён пароль qwerty.
    Ввод: qwe.
    Вывод: Пароли не совпадают.
*/

const password = "qwerty";
const confirmPassword = prompt("Введите пароль");

if (password == confirmPassword) {
    console.log("Пароли совпадают");
} else {
    console.log("Пароли не совпадают");
}


