//Цепочка вызовов (методов) - это последовательность вызовов методов массивов,
//где результат каждого вызова используется в следующем методе.

const words = ["h", "e", "l", "l", "o"];
console.log(words.join("").toUpperCase());

const productsPrice = [1000, 500, 700, 2000];
/*
console.log(productsPrice.filter(item => item > 500));

const productsPriceFiltered = productsPrice.filter(item => item > 500);
//console.log(productsPrice);
//console.log(productsPriceFiltered);
const productsPriceFilteredSale = productsPriceFiltered.map(elem => elem * 0.8);
console.log(productsPriceFilteredSale);
*/

console.log(productsPrice
                    .filter(item => item > 500)
                    .map(elem => elem * 0.8)
                    .reduce((a,b) => a + b));

console.log(
    productsPrice
        .sort((a, b) => a - b)
        .shift()
);