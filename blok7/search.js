const arr = ["Кофе", "Сок", "Чай", "Вода", "Молоко"]
const search = "Вода"

//let result = false;

function find(arr, search) {
    //let result = -1;

    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i])
        if (arr[i] === search) {
            //result = true;
            //result = i;
            //break;

            return i;
        }
    }
    //return result;
    return -1;
}

//console.log(result)
console.log(find(arr, "Смузи"))
console.log(find(arr, "Молоко"))
console.log(find(arr, "Вода"))