const buttonEl = document.querySelector('.button');
const buttonEl2 = document.querySelector('.button2');
const textEl = document.querySelector('.text')

const btnEl = document.querySelector('.btn')

/*buttonEl.onclick = function () {
    console.log('click');
}

buttonEl.onclick = function () {
    console.log('new text');
}

buttonEl.onclick = function () {
    console.log('new text 2');
}*/
/*
buttonEl.addEventListener('click', function (event) {
    console.log("click new");
    //console.log(event);
})

buttonEl.addEventListener('click', function (event) {
    console.log("click new 2");
})
*/
/*
buttonEl.addEventListener('click', function () {
    textEl.textContent = 'Товар добавлен в корзину';
})

buttonEl.addEventListener('click', function () {
    textEl.classList.toggle('like');
});


btnEl.addEventListener('click', function (e) {
    e.preventDefault();
});
*/

// Замыкания
const counterBox = () => {
    let counter = 0;

    const increment = () => {
        counter++;
        console.log(`Нажали ${counter}`);
    }

    return increment;
}

const counterInfo = counterBox();
const counterInfo2 = counterBox()

buttonEl.addEventListener('click', counterInfo);
buttonEl2.addEventListener('click', counterInfo2);