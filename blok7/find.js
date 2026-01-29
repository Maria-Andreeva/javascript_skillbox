function find (arr, search) {
    let result = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            result = i;
            break;
        }
    }

    return result;
}

const users = ["Яна", "Олег", "Витя", "Саша", "Таня", "Яна",  "Василий", "Евгения", "Настя"]


function renderList(arr) {

    const listEl = document.createElement("ul");

    for (let i = 0; i < arr.length; i++) {
        const liEl = document.createElement("li");
        liEl.textContent = `${i + 1}) ${arr[i]}`;
        listEl.append(liEl);
        // console.log(users[i])
    }

    document.body.append(listEl);

}

const searchBtn = document.createElement("button");
searchBtn.textContent = "Поиск";
document.body.append(searchBtn);

searchBtn.onclick = function () {
    //alert("google mode")
    const search = prompt( "Укажите имя для поиска");

    const findIndex = find(users, search);

    if (findIndex > -1) {
        document.querySelector(`li:nth-child(${findIndex + 1})`).style.color = "red";
    } else {
        alert("Имя не найдено!")
    }
    //console.log(findIndex);
}

renderList(users);