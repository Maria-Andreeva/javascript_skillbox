// .then - специальный метод объекта промис, принимает на вход два коллбэка обработчика результатов
// .then(resultConsumer, rejectConsumer)

// Он принимает на вход два коллбэка:
// resultConsumer(result) - функция, принимающая на вход result - значение, с которым выполнился resolve(result)
// rejectConsumer(error) - функция, принимающая на вход error - значение, с которым отклонился промис reject(error)

// .catch - специальный метод объекта промис, принимает на вход коллбэк обработчика ошибки .catch(rejectConsumer)

// .finally - метод объекта промис, выполняющийся при любом случае завершения промиса resolve или reject



const mockFilms = [
  { name: 'Рембо', genre: 'Боевик' },
  { name: 'Любовь и голуби', genre: 'Драма' },
  { name: 'Терминатор', genre: 'Боевик' },
  { name: 'Матрица', genre: 'Боевик' },
  { name: 'Унесённые ветром', genre: 'Драма' }
]


const getFilms = () => fetch("https://sb-film.skillbox.cc/films", {
  headers: {
    email: 'test@test.ru'
  }
});

window.onload = () => {


  // 2

  const filmsPromise = new Promise((resolve) => {
    resolve(getFilms()); // Возвращает новый промис Response
  })
    .then((response) => {
      return response.json(); // Возвращает новый промис с результатом запроса
    })
    .then((data) => { return [...data, ...mockFilms] });

  filmsPromise.then((films) => console.log('Все фильмы', films.map((film) => film.name)))


  filmsPromise.then((films) => {
    const list = films.filter((film) => film.genre === 'Боевик')
    console.log('Боевики ', list);
    return list
  })
    .then((list) => {
      console.log('Их количество: ', list.length)
    })


  filmsPromise.then((films) => {
    const list = films.filter((film) => film.genre === 'Драма');
    console.log('Драмы: ', list)
    return list;
  })
    .then((list) => {
      console.log('Их количество: ', list.length)
    })


  // filmsPromise.then((films) => {
  //   const list = films.filter((film) => film.genre === 'Комедия');
  //   if (!list.length) {
  //     return Promise.reject('Нет комедий')
  //   }
  //   console.log('Комедии: ', list)
  //   return list;
  // })
  //   .then((list) => {
  //     console.log('Их количество: ', list.length)
  //   })
  //   .catch((error) => console.error(error))
  //   .finally(() => {
  //     console.log('Приятного просмотра!')
  //   })


  const processComedies = async () => {
    const films = await filmsPromise;
    const comedies = films.filter((film) => film.genre === 'Комедия');
    if (!comedies.length) {
      return Promise.reject('Нет комедий')
    }
    console.log('Комедии: ', comedies)
    return comedies;
  }

  // processComedies()
  //   .then((list) => {
  //     console.log('Их количество: ', list.length)
  //   })
  //   .catch((error) => console.error(error))
  //   .finally(() => {
  //     console.log('Приятного просмотра!')
  //   })

  const logComedies = async () => {
    try {
      const comedies = await processComedies();
      console.log('Их количество: ', comedies.length)
    }
    catch (error) {
      console.error(error)
    }
    finally {
      console.log('Приятного просмотра!')
    }
  }

  logComedies();

}