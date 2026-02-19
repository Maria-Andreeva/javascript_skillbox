const STORAGE_KEY = 'films';

function getFilms() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function setFilms(films) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(films));
}

const form = document.querySelector('#film-form');
const titleInput = document.querySelector('#title');
const genreInput = document.querySelector('#genre');
const releaseYearInput = document.querySelector('#releaseYear');
const isWatchedInput = document.querySelector('#isWatched');

const filmTableBody = document.querySelector('#film-tbody');
const sortSelect = document.querySelector('#sortBy');
const errorBox = document.querySelector('#form-error');

let editingId = null;

function showError(message) {
    if (!errorBox) return;
    errorBox.textContent = message;
    errorBox.style.display = message ? 'block' : 'none';
}

function validateForm({ title, genre, releaseYear }) {
    if (!title.trim()) return 'Заполните название фильма.';
    if (!genre.trim()) return 'Заполните жанр фильма.';
    if (!releaseYear.trim()) return 'Заполните год выпуска.';

    const year = Number(releaseYear);
    if (!Number.isInteger(year) || year < 1888 || year > 2100) {
        return 'Год должен быть числом (пример: 1999).';
    }

    return '';
}

function sortFilms(films, sortBy) {
    const copy = [...films];

    switch (sortBy) {
        case 'title':
            copy.sort((a, b) => a.title.localeCompare(b.title, 'ru'));
            break;
        case 'genre':
            copy.sort((a, b) => a.genre.localeCompare(b.genre, 'ru'));
            break;
        case 'releaseYear':
            copy.sort((a, b) => Number(a.releaseYear) - Number(b.releaseYear));
            break;
        default:
            break;
    }

    return copy;
}

function renderTable() {
    const films = getFilms();
    const sortBy = sortSelect ? sortSelect.value : 'none';
    const sorted = sortFilms(films, sortBy);

    filmTableBody.innerHTML = '';

    sorted.forEach((film) => {
        const row = document.createElement('tr');

        row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? 'Да' : 'Нет'}</td>
      <td>
        <button type="button" data-action="edit" data-id="${film.id}">Редактировать</button>
        <button type="button" data-action="delete" data-id="${film.id}">Удалить</button>
      </td>
    `;

        filmTableBody.appendChild(row);
    });
}

function clearForm() {
    titleInput.value = '';
    genreInput.value = '';
    releaseYearInput.value = '';
    isWatchedInput.checked = false;
    editingId = null;

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.textContent = 'Submit';

    showError('');
}

function addFilm(film) {
    const films = getFilms();
    films.push(film);
    setFilms(films);
}

function updateFilm(updatedFilm) {
    const films = getFilms();
    const idx = films.findIndex((f) => f.id === updatedFilm.id);
    if (idx === -1) return;

    films[idx] = updatedFilm;
    setFilms(films);
}

function handleFormSubmit(e) {
    e.preventDefault();

    const filmData = {
        title: titleInput.value,
        genre: genreInput.value,
        releaseYear: releaseYearInput.value,
        isWatched: isWatchedInput.checked,
    };

    const error = validateForm(filmData);
    if (error) {
        showError(error);
        return;
    }

    if (editingId === null) {
        const film = {
            id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
            ...filmData,
            releaseYear: String(Number(filmData.releaseYear)), // нормализуем
        };
        addFilm(film);
    } else {
        const film = {
            id: editingId,
            ...filmData,
            releaseYear: String(Number(filmData.releaseYear)),
        };
        updateFilm(film);
    }

    renderTable();
    clearForm();
}

function handleTableClick(e) {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;

    const action = btn.dataset.action;
    const id = btn.dataset.id;

    if (action === 'delete') {
        const films = getFilms().filter((f) => f.id !== id);
        setFilms(films);

        if (editingId === id) clearForm();

        renderTable();
    }

    if (action === 'edit') {
        const film = getFilms().find((f) => f.id === id);
        if (!film) return;

        titleInput.value = film.title;
        genreInput.value = film.genre;
        releaseYearInput.value = film.releaseYear;
        isWatchedInput.checked = !!film.isWatched;

        editingId = id;

        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.textContent = 'Обновить';

        showError('');
        titleInput.focus();
    }
}

function handleSortChange() {
    renderTable();
}

form.addEventListener('submit', handleFormSubmit);
filmTableBody.addEventListener('click', handleTableClick);
if (sortSelect) sortSelect.addEventListener('change', handleSortChange);

renderTable();
