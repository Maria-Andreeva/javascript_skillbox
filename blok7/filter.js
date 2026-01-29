const arr = [19, 21, 11, 5, 18]

function filter(arr, minAge) {
    const result = [];
    for (const item of arr) {
        if (item >= minAge) {
            result.push(item);
        }
    }
    return result;
}

console.log(filter(arr, 18));
console.log(filter(arr, 10));
