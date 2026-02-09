/*function fetchData() {
    const response = fetch('https://sb-film.skillbox.cc/films')
    console.log(response);
}*/

async function fetchData() {
    const response = await fetch('https://sb-film.skillbox.cc/films', {
        headers: {
            email: 'vasilok1994@gmail.com',
        }
    })
    const data = await response.json()
    console.log(data);
}

fetchData()