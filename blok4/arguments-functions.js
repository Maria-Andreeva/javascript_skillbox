function checkAge(age) {
    if (age < 18) {
        console.log("Несовершеннолетний");
    } else {
        console.log("Совершеннолетний");
    }
}

checkAge(16);
checkAge(21);


/* -------------------------------------------------- */

function sum (a, b, c) {
    console.log(a + b + c)
}

sum (10, 20, 30) // 60
sum (10, 20) // NaN

function sum2 (a = 0, b = 0, c = 0) {
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        console.log(a + b + c)
    } else {
        console.log("Неверные параметры")
    }
}

sum2 (10, 20, 30) // 60
sum2 (10, 20) // 30, c = 0 - по умолчанию
sum2 (10, 20, "строка") // Неверные параметры
