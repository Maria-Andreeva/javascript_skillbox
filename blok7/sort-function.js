// sort
let A = 7
let B = 3
let C = 1

console.log(A, B, C)

if (A>B) {
    let temp = A
    A = B
    B = temp
}
if (B>C) {
    let temp = B
    B = C
    C = temp
}
if (A>B) {
    let temp = A
    A = B
    B = temp
}

console.log(A, B, C)

// Сортировка методом "пузырька" - "проход" по массиву несколько раз, причем на каждой итерации
// он сравнивает пару элементов массива и меняет их местами, если того требует условие сортировки.
// Цикл работает до тех пор, пока все элементы не выстроятся в нужном порядке.

const arr = [7, 3, 9, 4, 5]

console.log(arr)

function sort(arr) {
    for (let i= 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

console.log(sort(arr))