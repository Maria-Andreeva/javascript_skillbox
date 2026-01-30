// DOM-дерево - это иерархическое представление HTML-документа.
// Браузер использует HTML-парсер, который считывает каждую строку HTML-кода.
// Узел в DOM-дереве может быть любым элементом HTML.

// Методы получения доступа к DOM

// getElementById
// getElementsByClassName
// getElementByTagName
// querySelector
// querySelectorAll

const headingEl = document.getElementById('heading');
console.log(headingEl);

const titleEl = document.getElementsByTagName('h1');
console.log(titleEl);

const textEl = document.getElementsByClassName('text');
console.log(textEl);
for (let i = 0; i < textEl.length; i++) {
    const element = textEl[i];
    console.log(element);
}

const headingQs = document.querySelector('#h2');
console.log(headingQs);

const titleQs = document.querySelector('h1');
console.log(titleQs);

const textQs = document.querySelectorAll('p');
console.log(textQs);
textQs.forEach(element => {
    console.log(element);
})