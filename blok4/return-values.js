function pow(n) {
    const a = n * n;

    return a;
}

/*pow(3);

const result = pow(3);
console.log(result);*/
console.log(pow(3));

/* ---------------------------------------- */

function returnIf(a, b) {
    if (a > b) {
        return "A больше В";
    }
    return "A меньше В";
}

const result = returnIf(10, 2);
console.log(result);

/* ---------------------------------------- */

function myFunction (a, b) {
    return a + b;
}

const result2 = myFunction(1, 3);
console.log(result2);

/* ---------------------------------------- */

function square(number) {
    return number * number; // Возвращаем результат умножения числа на самого себя.
}
const result3 = square(5); // Вызываем функцию и сохраняем результат.
console.log(result3); // Выводим результат в консоль (25).
