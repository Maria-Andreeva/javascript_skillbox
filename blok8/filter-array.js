//filter
/*const array = [1, 2, 3, 4, 5]

console.log(array.filter(item => item % 2));
console.log(array.filter(item => item >= 4));


const productPrice = [1000, 500, 1500, 2000];

console.log(productPrice.filter(priceInfo));

function priceInfo(elem) {
    return elem > 1000   
}*/

const array = [1000, 200, 3000, 40, 50]

//map
console.log(array.map(item => item * 0.9));

//reduce
console.log(array.reduce((acc, price) => acc + price));
console.log(array.reduce((acc, price) => acc * price));

//sort
console.log(array.sort((a, b) => a - b ));
console.log(array.sort((a, b) => b - a ));