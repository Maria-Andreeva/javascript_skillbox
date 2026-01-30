const buttonEl = document.querySelector('.button');
let clicks = buttonEl.dataset.clicks;
console.log("Количество кликов: " + clicks);

buttonEl.onclick = function () {
    clicks++;
    buttonEl.dataset.clicks = clicks;
    console.log("Количество кликов: " + clicks);
}