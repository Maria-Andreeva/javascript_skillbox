/* Циклы - простой способ сделать какое-то действие несколько раз. */
/*

let i = 0;

while (i <= 3) {
    console.log("Hello while");
    i++;
}*/

/* бесконечный цикл
while (true) {
    console.log(1);
    break; //точка остановки
}*/


/*
let ready = confirm("Согласен ли?");

while (ready === false) {
    alert("Вам нужно согласиться с условиями")
    ready = confirm("Согласен ли?");
}*/
// or
while (!confirm("Согласен ли?")) {
    alert("Вам нужно согласиться с условиями")
}

// ---------------------------------------------------------------
let pass;
let counter = 0;

do {
    if (counter > 1) {
        if (confirm("Хотите выйти")) {
            break;
        }
    }
    pass = prompt("Введите пароль");
    counter++;
} while (pass !== "пароль");