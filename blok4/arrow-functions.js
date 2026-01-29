// Стрелочная функция - это укороченная запись обычной функции. - Всегда является анонимной!

const fn = () => {

}

function pow(n) {
    return n * n;
}
/*
const newPow = (n) => {
    return n * n;
}
*/

const newPow = (n) => n * n;

/*
const newPow = (n) => {
    const result = n * n;
    return result;
}
*/

console.log(newPow(10));
