const email = 'vasilok1994@gmail.com'

async function getAllFilms() {
    const response = await fetch ('https://sb-film.skillbox.cc/films', {
        headers: {
            email,
        }
    })

    const data = await response.json();
    console.log(data);
}

//getAllFilms();

async function addFilm(film) {
    await fetch('https://sb-film.skillbox.cc/films', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            email
        },
        body: JSON.stringify(film)
    })

    getAllFilms()
}

/*addFilm({
    title: 'Matrix',
    genre: 'Fantasy',
    releaseYear: '1999',
    isWatched: true
})*/

async function deleteFilm(id) {
    const response = await fetch(`https://sb-film.skillbox.cc/films/${id}`, {
        method: 'DELETE',
        headers: {
            email
        }
    })

    const data = await response.json();
    console.log(data);

    getAllFilms()
}

/*deleteFilm(13);*/

async function clearAllFilms() {
    const response = await fetch('https://sb-film.skillbox.cc/films/', {
        method: 'DELETE',
        headers: {
            email
        }
    });

    const data = await response.json();
    console.log(data);

    getAllFilms()
}

clearAllFilms();