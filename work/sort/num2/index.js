const personHeigh = [164, 157, 160, 143, 170]


function renderList(array) {
    listEl.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const liEl = document.createElement("li");
        liEl.textContent = `${i + 1}) ${array[i]}`;
        listEl.append(liEl);
    }
}

const h1El = document.createElement("h1")
h1El.textContent = "Рост учеников"
document.body.append(h1El)

const btnAddEl = document.createElement("button")
btnAddEl.textContent = "Добавить рост"
btnAddEl.classList.add("btn", "btn-add");
document.body.append(btnAddEl)

const btnFilterEl = document.createElement("button")
btnFilterEl.textContent = "Фильтровать"
btnFilterEl.classList.add("btn", "btn-filter");
document.body.append(btnFilterEl)

const listEl = document.createElement("ul")
listEl.classList.add("heigh__list");
document.body.append(listEl);

btnFilterEl.onclick = function () {
    personHeigh.sort((a, b) => a - b);
    renderList(personHeigh);
};

btnAddEl.onclick = function () {
    const addHeigh = Number(prompt("Введите рост ученика"));

    if (!addHeigh) {
        alert("Рост не введен!");
        return;
    }

    if (isNaN(addHeigh) || addHeigh < 50 || addHeigh > 210) {
        alert("Рост ученика введен неверно!");
        return;
    }

    personHeigh.push(addHeigh);
    renderList(personHeigh);
};

renderList(personHeigh);