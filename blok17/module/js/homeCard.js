//import {getButtonEl, getCardEl, getCenterWrapEl, getDescEl, getTiteEl} from "./components.js";
import {navigate} from "./navigate.js";
import * as components from "./components.js";

// Создание главной карточки
export default function createHomeCard(containerEl) {
    const cardEl = components.getCardEl()

    const titleEl = components.getTiteEl("Добро пожаловать на сайт")

    const descEl = components.getDescEl("Войдите в личный кабинет. Если Вы, еще не зарегистрированы, пройдите регистрацию!")

    const centerWrapEl = components.getCenterWrapEl()

    const loginButtonEl = components.getButtonEl("Войти")
    const regButtonEl = components.getButtonEl("Регистрация")

    loginButtonEl.addEventListener("click", function () {
        navigate("login")
    })
    regButtonEl.addEventListener("click", function () {
        navigate("reg")
    })

    centerWrapEl.append(loginButtonEl, regButtonEl)
    cardEl.append(titleEl, descEl, centerWrapEl)
    containerEl.append(cardEl)
}