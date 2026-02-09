// try ... catch - конструкция для выполнения блока кода и обработки возникающих в нем ошибок.
// Если план A (try) не сработал, выполняется план Б (catch).
// В качестве аргументов catch передается объект ошибки, который состоит из двух полей:
// - name - указывающий на тип ошибки
// - message - краткое описание о проблеме



function sanitize(html) {
  const el = document.createElement('div');
  el.innerHTML = html;
  return el.textContent;
}

function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function renderTopBar(user) {
  const el = document.createElement('div');
  el.classList.add('topbar');

  el.innerHTML = `
    <span class="topbar-logo">Фильмотека</span>
    <div class="topbar-user user">
      <div class="user-name">${sanitize(user.name)}</div>
      <div class="user-email">${sanitize(user.email)}</div>
    </div>
  `;

  return el;
}

function renderGlobalError(message) {
  const el = document.createElement('div');

  el.innerHTML = `
    <div class="error">
      <div class="error-title">Упс... Возникла ошибка</div>
      <div class="error-message">${sanitize(message)}</div>
    </error>
  `;

  return el;
}



async function initApp() {
  try {
    const app = document.getElementById("app");
    app.innerHTML = '';

    const user = getUser();
    app.append(renderTopBar(user));
  } catch (error) {
    app.append(renderGlobalError(error.message));
    console.error(error);
  }
}

initApp();


// Ошибка - это способ приложения сообщить о проблеме
// try ... catch - не для скрытия проблем, а для их обработки
// Используйте console.error для фиксации ошибок, иначе усложните поиск проблемы