import {navigate} from "./navigate.js";
import * as components from "./components.js";

/*import { getCardEl as test } from "./components.js"
console.log(test())*/

// Создание карточки входа
export default function loginCard(containerEl) {
    const cardEl = components.getCardEl()

    const titleEl = components.getTiteEl("Вход в аккаунт")

    const formEl = components.getFormEl()

    let loginInputEl = components.getInputEl("text", "email", "E-mail")
    let passwordInputEl = components.getInputEl("password", "password", "Пароль")

    let loginButtonEl = components.getButtonEl("Войти")

    const centerWrapEl = components.getCenterWrapEl()
    const homeLinkEl = components.getLinkEl("На главную")
    const regLinkEl = components.getLinkEl("Регистрация")

    homeLinkEl.addEventListener("click", function (event) {
        event.preventDefault()
        navigate()
    })

    regLinkEl.addEventListener("click", function (event) {
        event.preventDefault()
        navigate("reg")
    })

    formEl.addEventListener("submit", function (event) {
        event.preventDefault()
        alert("Вход в аккаунт")
    })

    centerWrapEl.append(homeLinkEl, regLinkEl)
    formEl.append(loginInputEl, passwordInputEl, loginButtonEl)

    cardEl.append(titleEl, formEl, centerWrapEl)
    containerEl.append(cardEl)
}