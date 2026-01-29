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

const books = ["Мастер и Маргарита", "Гарри Поттер", "Над пропастью во ржи", "Властелин колец", "Дюна", "Отцы и дети"]


function renderList(books) {
    listEl.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
        const liEl = document.createElement("li");
        liEl.textContent = `${i + 1}) ${books[i]}`;
        listEl.append(liEl);
    }

    document.body.append(listEl);

}

const h1El = document.createElement("h1")
h1El.textContent = "Домашняя библиотека"
document.body.append(h1El)

const btnAddEl = document.createElement("button")
btnAddEl.textContent = "Добавить книгу"
btnAddEl.classList.add("btn", "btn-add");
document.body.append(btnAddEl)

const btnSearchEl = document.createElement("button")
btnSearchEl.textContent = "Найти"
btnSearchEl.classList.add("btn", "btn-search");
document.body.append(btnSearchEl)

const listEl = document.createElement("ul")
listEl.classList.add("books__list");
document.body.append(listEl);

btnSearchEl.onclick = function () {
    const search = prompt( "Введите искомую книгу");

    const findIndex = find(books, search);

    if (findIndex > -1) {
        document.querySelector(`li:nth-child(${findIndex + 1})`).style.background = "yellow";
    } else {
        alert("Книга не найдена!")
    }
}

btnAddEl.onclick = function () {
    const addBook = prompt( "Введите название новой книги");

    if (!addBook) {
        alert("Название книги не введено!");
        return;
    }

    books.push(addBook);

    renderList(books);

};

renderList(books);