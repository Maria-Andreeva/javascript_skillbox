const API_URL = 'https://sb-film.skillbox.cc/films';
const EMAIL = 'ovikk@skillbox.ru';

const form = document.querySelector('#film-form');
const titleInput = document.querySelector('#title');
const genreInput = document.querySelector('#genre');
const releaseYearInput = document.querySelector('#releaseYear');
const isWatchedInput = document.querySelector('#isWatched');

const filmTableBody = document.querySelector('#film-tbody');
const errorBox = document.querySelector('#form-error');

const filterTitle = document.querySelector('#filterTitle');
const filterGenre = document.querySelector('#filterGenre');
const filterYear = document.querySelector('#filterYear');
const filterWatched = document.querySelector('#filterWatched');

const deleteAllBtn = document.querySelector('#deleteAllBtn');

function showError(message) {
    if (!errorBox) return;
    errorBox.textContent = message || '';
    errorBox.style.display = message ? 'block' : 'none';
}

function validateForm({ title, genre, releaseYear }) {
    if (!title.trim()) return 'Название не может быть пустым';
    if (!genre.trim()) return 'Жанр не может быть пустым';
    if (!releaseYear.trim()) return 'Год не может быть пустым';

    const year = Number(releaseYear);
    if (!Number.isInteger(year) || year < 1888 || year > 2100) {
        return 'Год должен быть числом (например 2003)';
    }
    return '';
}

function buildQueryFromFilters() {
    const url = new URL(API_URL);

    if (filterTitle && filterTitle.value.trim()) url.searchParams.set('title', filterTitle.value.trim());
    if (filterGenre && filterGenre.value.trim()) url.searchParams.set('genre', filterGenre.value.trim());
    if (filterYear && filterYear.value.trim()) url.searchParams.set('releaseYear', filterYear.value.trim());

    if (filterWatched && filterWatched.value !== 'all') {
        url.searchParams.set('isWatched', filterWatched.value); // "true" / "false"
    }

    return url.toString();
}

async function addFilm(film) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            email: EMAIL,
        },
        body: JSON.stringify(film), // ✅ ВАЖНО: JSON.stringify
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Ошибка добавления фильма');
    }
}

async function deleteFilm(id) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: { email: EMAIL },
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Ошибка удаления фильма');
    }
}

async function deleteAllFilms() {
    const res = await fetch(API_URL, {
        method: 'DELETE',
        headers: { email: EMAIL },
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Ошибка удаления всех фильмов');
    }
}

async function renderTable() {
    try {
        showError('');

        const url = buildQueryFromFilters();

        const res = await fetch(url, {
            headers: { email: EMAIL },
        });

        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Ошибка загрузки фильмов');
        }

        const films = await res.json();

        filmTableBody.innerHTML = '';

        films.forEach((film) => {
            const row = document.createElement('tr');
            row.innerHTML = `
        <td>${film.title}</td>
        <td>${film.genre}</td>
        <td>${film.releaseYear}</td>
        <td>${film.isWatched ? 'Да' : 'Нет'}</td>
        <td>
          <button type="button" class="small danger" data-action="delete" data-id="${film.id}">
            Удалить
          </button>
        </td>
      `;
            filmTableBody.appendChild(row);
        });
    } catch (e) {
        showError(e.message || 'Failed to fetch');
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();

    const film = {
        title: titleInput.value,
        genre: genreInput.value,
        releaseYear: releaseYearInput.value,
        isWatched: isWatchedInput.checked,
    };

    const error = validateForm(film);
    if (error) {
        showError(error);
        return;
    }

    try {
        await addFilm({
            ...film,
            releaseYear: String(Number(film.releaseYear)),
        });

        titleInput.value = '';
        genreInput.value = '';
        releaseYearInput.value = '';
        isWatchedInput.checked = false;

        await renderTable();
    } catch (e) {
        showError(e.message || 'Ошибка');
    }
}

filmTableBody.addEventListener('click', async (e) => {
    const btn = e.target.closest('button[data-action="delete"]');
    if (!btn) return;

    const id = btn.dataset.id;

    try {
        await deleteFilm(id);
        await renderTable();
    } catch (e2) {
        showError(e2.message || 'Ошибка удаления');
    }
});

if (deleteAllBtn) {
    deleteAllBtn.addEventListener('click', async () => {
        try {
            await deleteAllFilms();
            await renderTable();
        } catch (e) {
            showError(e.message || 'Ошибка удаления всех');
        }
    });
}

function debounce(fn, delay = 250) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), delay);
    };
}

const debouncedRender = debounce(renderTable, 250);

[filterTitle, filterGenre, filterYear].forEach((el) => {
    if (el) el.addEventListener('input', debouncedRender);
});
if (filterWatched) filterWatched.addEventListener('change', renderTable);

form.addEventListener('submit', handleFormSubmit);
renderTable();
