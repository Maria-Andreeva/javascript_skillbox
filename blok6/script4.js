const contentEl = document.querySelector('.content');
const comments = ["нравится", "очень круто, все оценил", "подходит для новичков"]


// for in
/*
for (const key in comments) {
    console.log(key)
    console.log(comments[key])
}

//Изначально ключи string format
for (const key in comments) {
    if (key == 1) {
        console.log(comments[key]);
    }
}*/

// for of

for (const item  of comments) {
    console.log(item);
    const h3El = document.createElement("h3");
    h3El.textContent = item;
    contentEl.append(h3El);
}
