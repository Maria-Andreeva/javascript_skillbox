const buttonAddEl = document.createElement('button')
buttonAddEl.textContent = 'Добавить элемент'
buttonAddEl.classList.add('button__add')
document.body.appendChild(buttonAddEl)

const buttonDelEl =  document.createElement('button')
buttonDelEl.textContent = 'Удалить элемент'
buttonDelEl.classList.add('button__del')
document.body.appendChild(buttonDelEl)

const listEl = document.createElement('ul')
document.body.insertBefore(listEl, buttonAddEl)

buttonAddEl.addEventListener('click', () => {
    const liEl = document.createElement('li')
    liEl.textContent = 'Новый элемент списка'
    listEl.appendChild(liEl)
})

buttonDelEl.addEventListener('click', () => {
    const lastLi = listEl.lastElementChild;
    if (lastLi) {
        listEl.removeChild(lastLi);
    }
})
