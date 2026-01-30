// Методы навигации по DOM

// parentNode
// nextElementSibling
// previousELementSibling
// firstChild
// lastChild

const headingEl = document.querySelector('.heading')
console.log(headingEl.parentNode);

console.log(headingEl.previousElementSibling);
console.log(headingEl.previousSibling);

console.log(headingEl.nextElementSibling);

headingEl.nextElementSibling.textContent = "New text heading";

console.log(headingEl.nextElementSibling.nextElementSibling);


const contentEl = document.querySelector('.content')
console.log(contentEl.firstElementChild);
console.log(contentEl.lastElementChild);