/*const arr1 = new Array();
const arr2 = [];

console.log(arr1);
console.log(arr2);
*/

const products = ["стул", "шкаф", "комод"];
/*
console.log(products);
console.log(products[0]);
console.log(products[1]);

products[0] = "стол";
console.log(products)

products[3] = "новый стул"
console.log(products)


products[6] = "диван"
console.log(products)


products[products.length] = "табуретка"
console.log(products)
*/

//products.push("стол"); // добавить значение в конец массива
//products.pop(); // удалить последний элемент массива, удаляет и запоминает последний элемент

//products.shift();// удалить первый элемент массива и сместить следующие в начало, удаляет и запоминает удаленный элемент
//products.unshift("табуретка"); // добавление элемента в начало списка с дальнейшим смещением всех последующих


const lastProduct = products.pop();

const firstProduct = products.shift();

console.log(products);
console.log(lastProduct, firstProduct);

// ОЧЕРЕДЬ: все по порядку - от первого и до последнего
// push()
// shift()


// CТЕК: обратный порядок - последнее стало первым
// push()
// pop()