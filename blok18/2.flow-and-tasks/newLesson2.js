// Ядра и потоки
// Ядра - физические самостоятельные вычислительные блоки, расположенные в процессоре
// Потоки - программные самостоятельные вычислительные области, каждая из которых может решать свою отдельную задачу

// Очередь задач
// Очередь задач - структура данных, которая хранит выполняющиеся задачи браузера.
// Организована по принципе "последняя поступившая задача выполнится последней".

// Движок JavaScript и Задача (Task)
// Движок JavaScript (далее - движок) - механизм исполнения JS-кода в браузере
// Задача (Task) - это набор синхронных блоков кода, выполняемых друг за другом


const heavyCalc = () => {
  let startTime = Date.now()
  const endTime = Date.now() + 500;
  while (startTime < endTime) {
    startTime = Date.now();
  }

  return Math.round(Math.random() * 900 + 1);
}

// 1============

// window.onload = () => {
//   function foo() {
//     console.log('foo');
//     setTimeout(() => {
//       console.log('baz');
//       console.log(new Date().toLocaleString());
//       setTimeout(() => console.log('not final', new Date().toLocaleString()), 0)
//       heavyCalc(); // 2 секунды
//       console.log('bar')
//     }, 1000)
//     console.log('final');
//   }

//   foo();
// }

// 2============

const showTime = (tag) => {
  // получаем текущее время и выводим его в виде удобно читаемой строки
  const time = new Date().toLocaleTimeString();
  // создаем блок в который поместим строку со временем и добавим его в конец body
  const div = document.createElement("div");
  div.style.backgroundColor = 'lightgrey';
  div.innerHTML = `<br /> ${tag} ${time} <br />`;
  document.body.append(div);
}

const drivers = [
  'Водитель Андрей',
  'Водитель Павел',
  'Водитель Семён',
  'Водитель Костя',
  'Водитель Витя',
  'Водитель Дима',
  'Водитель Филипп',
  'Водитель Кирилл',
  'Водитель Саша',
  'Водитель Леша',
]
// считаем длину маршрута для каждого
const calcDrivers = (showResult) => {
  drivers.forEach((item, index) => {
    // для каждого водителя создаем отдельную задачу в очереди по рассчету пути
    setTimeout(() => {
      const distance = heavyCalc();
      // так как showResult принимает массив, 
      // то создаем массив передавая результат в квадратных скобках
      showResult([`${item} - ${distance} км.`])
      // так как теперь рассчет водителей выполняется асинхронно, 
      // то вывод финального времени производим после того как рассчитали последнего водителя
      if (index === drivers.length - 1) {
        showTime('после: ');
      }
    })
  })
}

// выводим результат
const showResult = (resultItems) => {
  const resultBlock = document.getElementById('result');

  resultItems.forEach((item) => {
    const div = document.createElement("div");
    div.style.backgroundColor = 'azure';
    div.innerHTML = `<br /> ${item}`;
    resultBlock.append(div);
  })
}

window.onload = () => {
  const buttonCalc = document.getElementById('calc');
  buttonCalc.addEventListener('click', () => {
    showTime('до: ');
    calcDrivers(showResult);
  })

  const buttonNiceJourney = document.getElementById('niceJourney');
  buttonNiceJourney.addEventListener('click', () => {
    const resultBlock = document.getElementById('result');
    resultBlock.append('Хорошего пути!');
  })
}