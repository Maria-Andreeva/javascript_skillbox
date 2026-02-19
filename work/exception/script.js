function sanitize(html) {
  const el = document.createElement('div');
  el.innerHTML = html;
  return el.textContent;
}

let user;

function setUser(userData) {
  user = userData;
}

function getUser() {
  return user;
}

async function getFilms() {
  try {
    const user = getUser();
    const response = await fetch("https://sb-film.skillbox.cc/films", {
      headers: {
        email: user?.email
      }
    });

    const data = await response.json();

    if (!response.ok) {
      handleErrorResponse(data);
    }

    return data;
  } catch (error) {
    handleError(error);
    return [];
  }
}

function handleErrorResponse(data) {
  const isNeedAuth = data.errors.some(
      (error) => error.location === 'headers' && error.param === 'email'
  );

  if (isNeedAuth) {
    const err = new Error('Некорректный email');
    err.name = 'AuthError';
    throw err;
  }
}

function handleError(error) {
  if (error.name === 'AuthError') {
    throw error;
  }
  console.error(error);
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

function renderFilms(films) {
  const el = document.createElement('div');
  el.classList.add('films');

  if (films.length === 0) {
    el.innerText = 'Cписок фильмов пока пуст';
    return el;
  }

  films.forEach((film) => {
    const filmEl = document.createElement('div');
    filmEl.classList.add('films-card');
    filmEl.dataset.watched = film.isWatched;

    filmEl.textContent = `${film.title} (${film.releaseYear})`;
    el.append(filmEl);
  });

  return el;
}

function renderGlobalError(message) {
  const el = document.createElement('div');

  el.innerHTML = `
    <div class="error">
      <div class="error-title">Упс... Возникла ошибка</div>
      <div class="error-message">${sanitize(message)}</div>
    </div>
  `;

  return el;
}

function renderAuthForm(props) {
  const form = document.createElement('form');
  form.classList.add('authForm');

  form.innerHTML = `
    <label for="name">Ваше имя</label>
    <input id="name" type="text" name="name" required="true" placeholder="Василий" />
    <label for="email">Эл. почта</label>
    <input id="email" type="text" name="email" required="true" placeholder="example@mail.com" />
    <button class="authForm-submit" type="submit">Войти</button>
  `;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);

    props.onSubmit(formProps);
  });

  return form;
}

function initAuth() {
  const app = document.getElementById("app");
  app.innerHTML = '';

  app.append(renderAuthForm({
    onSubmit: (user) => {
      setUser(user);
      initApp();
    }
  }));
}

async function initApp() {
  const app = document.getElementById("app");
  app.innerHTML = '';

  try {
    const user = getUser();
    if (!user) {
      initAuth();
      return;
    }

    const films = await getFilms();
    app.append(renderTopBar(user));
    app.append(renderFilms(films));
  } catch (error) {
    console.error(error);

    if (error.name === 'AuthError') {
      initAuth();
      return;
    }

    app.append(renderGlobalError(error.message));
  }
}

function ensureNetworkBanner() {
  let el = document.querySelector('.networkBanner');

  if (!el) {
    el = document.createElement('div');
    el.className = 'networkBanner';
    document.body.append(el);
  }

  return el;
}

function showNetworkBanner(message) {
  const el = ensureNetworkBanner();
  el.textContent = message;
  el.style.display = 'block';
}

function hideNetworkBanner() {
  const el = ensureNetworkBanner();
  el.textContent = '';
  el.style.display = 'none';
}

const PING_URL = 'https://sb-film.skillbox.cc/ping';
const CHECK_EVERY_MS = 5000;
const SLOW_THRESHOLD_MS = 500;
// (для задания 5*) таймаут 1 сек - код ниже закомментирован
const ABORT_AFTER_MS = 1000;

let networkIntervalId = null;

/**
 * ЗАДАНИЕ 4:
 * - POST /ping каждые 5 сек
 * - если ошибка запроса -> "Проблема с сетью"
 * - если дольше 500 мс -> "Медленное соединение"
 * - если всё ок -> скрываем баннер
 */
async function pingOnce() {
  const startedAt = performance.now();

  try {
    const res = await fetch(PING_URL, { method: 'POST' });

    if (!res.ok) {
      throw new Error(`Ping failed: ${res.status}`);
    }

    const elapsed = performance.now() - startedAt;

    if (elapsed > SLOW_THRESHOLD_MS) {
      showNetworkBanner('Медленное соединение');
    } else {
      hideNetworkBanner();
    }
  } catch (error) {
    showNetworkBanner('Проблема с сетью');
    console.error('Ping error:', error);
  }
}

/**
 * ЗАДАНИЕ 5* - ВАРИАНТ С AbortController
 * Если ожидание ответа > 1 секунды -> прерываем fetch и показываем "Неполадки с сетью".
 * Сейчас закомментировано, потому что для сдачи задания 4 активна функция pingOnce выше.
 */
// async function pingOnce() {
//   const startedAt = performance.now();
//   const controller = new AbortController();
//
//   const timeoutId = setTimeout(() => controller.abort(), ABORT_AFTER_MS);
//
//   try {
//     const res = await fetch(PING_URL, {
//       method: 'POST',
//       signal: controller.signal,
//     });
//
//     if (!res.ok) {
//       throw new Error(`Ping failed: ${res.status}`);
//     }
//
//     const elapsed = performance.now() - startedAt;
//
//     if (elapsed > SLOW_THRESHOLD_MS) {
//       showNetworkBanner('Медленное соединение');
//     } else {
//       hideNetworkBanner();
//     }
//   } catch (error) {
//     showNetworkBanner('Неполадки с сетью');
//     console.error('Ping error:', error);
//   } finally {
//     clearTimeout(timeoutId);
//   }
// }

function startNetworkMonitoring() {
  if (networkIntervalId) return;

  pingOnce();
  networkIntervalId = setInterval(pingOnce, CHECK_EVERY_MS);
}

// запуск
startNetworkMonitoring();
initApp();
