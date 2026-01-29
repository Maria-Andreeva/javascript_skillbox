const a = 10;

function calc() {
    const b = 20;

    console.log(a + b);
    console.log(b); // - тут видно
}

calc();

console.log(a); // - тут видно, глобальная
// console.log(b); // - тут невидно - локальная

// Область видимости - это сущность в JS, которая определяет границы действия переменных.

/* ---------------------------------------------------------------------------------------- */
const globalVar = "global";

function globalFn() {
    const a = "globalFn";

    function localFn1() {
        const b = "localFn1";
        const a = "localFn1 a";
        console.log(b, a, globalVar);

    }

    function localFn2() {
        const c = "localFn2";
        //console.log(c, a, globalVar);
    }

    localFn1();
    localFn2();

    //console.log(a, globalVar)

}

globalFn();
//console.log(globalVar);
