// Callback - функции - это функции, которые передаются в качестве
// аргументов друним функциям и вызываются внутри этих функций.
// Они позволяют создавать более гибкий и мощный ход.

//Особенности callback-функции:
// 1. могут быть анонимными;
// 2. могут быть именованными;
// 3. могут пирнимать аргументы, как любая другая функция

/*function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function calc(a, b, funcName) {
    return funcName(a, b)
}

console.log(calc(5, 10, sum));
console.log(calc(5, 10, sub));*/

/*setInterval(hello, 2000)

function hello() {
    console.log("Хорошо, что Вы пришли к нам на сайт!");
}*/

const arr = [1, 2, 3];
arr.forEach(element => {
    console.log(element);
});