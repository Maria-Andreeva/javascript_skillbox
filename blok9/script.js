// null - это специальное значение, которое означает, что переменная ничего не имеет

// !!! Важно! 
// undefined - значение не существует
// null - значение существует, но не определено

let undefinedVar;
let nullVar = null;
let emptyStringVar = "";
let zeroVar = 0;
let falseVar = false;

console.log(undefinedVar || "Результат");
console.log(nullVar || "Результат");
console.log(emptyStringVar || "Результат");
console.log(zeroVar || "Результат");
console.log(falseVar || "Результат");


console.log(undefinedVar ?? "Результат");
console.log(nullVar ?? "Результат");
console.log(emptyStringVar ?? "Результат");
console.log(zeroVar ?? "Результат");
console.log(falseVar ?? "Результат");


//const price = 0;
const price = undefined;

const result = price ?? "Цена не указана";

console.log(result);