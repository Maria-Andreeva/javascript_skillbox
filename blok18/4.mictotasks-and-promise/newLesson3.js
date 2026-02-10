// Promise (обещание)
// Promise (далее - обещание / промис) - объект-обертка над неизвестным значением, которое будет
// получено или не получено "позже". Используется для реализации асинхронного кода

// Promise (executor) принимает коллбэк executor, в который передает обработчики resolve и reject
// Созданный экземпляр класса Promise имеет внутренние поля status и value

// status - может принимать значения pending, fulfilled, rejected
// value - принимает значение, с которым промис завершился


// 1 ==========

window.onload = () => {
  console.log(new Promise((resolve) => {
    console.log('World')
    resolve('Hello')
  }))


  console.log(new Promise((resolve) => {
    console.log('World')
    setTimeout(() => resolve('Hello'))
    console.log('Good Morning')
  }))
}



// 2 ===================


const getX = (executor) => {
  //setTimeout(() => executor(undefined))
  setTimeout(() => executor(10))
}

window.onload = () => {
  const a = new Promise((resolve, reject) => {
    getX((x) => {
      if (x !== undefined) {
        resolve(x);
      }

      reject(new Error('x not found'))
    })
  })
  console.log(a)
  setTimeout(() => console.log(a))
}