const buttonSortAscEl = document.createElement('button')
buttonSortAscEl.textContent = 'Сортировать по возрастанию'
buttonSortAscEl.classList.add('button__sort-ascending')
document.body.appendChild(buttonSortAscEl)

const buttonSortDescEl = document.createElement('button')
buttonSortDescEl.textContent = 'Сортировать по убыванию'
buttonSortDescEl.classList.add('button__sort-descending')
document.body.appendChild(buttonSortDescEl)


const preis = [100, 500, 250, 750, 300];
const listEl = document.createElement('ul')
document.body.insertBefore(listEl, buttonSortAscEl)


function render(arr) {
    listEl.innerHTML = "";
    arr.forEach(elem => {
        const liEl = document.createElement('li');
        liEl.textContent = elem;
        listEl.appendChild(liEl);
    });
}

render(preis);

buttonSortAscEl.addEventListener('click', () => {
    preis.sort((a, b) => a - b);
    render(preis);
})

buttonSortDescEl.addEventListener('click', () => {
    preis.sort((a, b) => b - a);
    render(preis);
})
