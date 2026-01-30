
const titleEl = document.querySelector('.title');
titleEl.textContent = "Text in JS"

titleEl.style.color = "red";
titleEl.style.backgroundColor = "grey";

console.log(titleEl.tagName.toLocaleLowerCase());
console.log(`Название id: ${titleEl.id}`);
console.log(titleEl.className);


titleEl.classList.add('super--heading');
//titleEl.classList.remove('title');
titleEl.classList.toggle('title2');
console.log(titleEl.classList.contains('title'));