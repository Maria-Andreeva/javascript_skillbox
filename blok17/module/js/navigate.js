import {getLoaderEL} from './components.js';

// Отрисовка карточки
// Назвать функцию navigate
export async function navigate(cardName) {
    const appEl = document.getElementById("app")
    appEl.innerHTML = ''

    const loaderEl = getLoaderEL();
    appEl.append(loaderEl);

    switch (cardName) {
        case "login":
            const loginCard = await import("./loginCard.js");
            loginCard.default(appEl)
            loaderEl.remove();
            break
        case "reg":
            const regCard = await import("./regCard.js");
            regCard.default(appEl)
            loaderEl.remove();
            break
        default:
            const homeCard = await import("./homeCard.js");
            homeCard.default(appEl)
            loaderEl.remove();
    }
}