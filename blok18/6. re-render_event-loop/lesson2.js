// Перерисовка - это процесс, при котором браузер анализирует дерево узлов страницы DOM и при нахождении изменений,
// внесенных в результате выполнения кода, обновляет элементы страницы



const gusImg = document.createElement('img');
gusImg.src = 'gus.png';
gusImg.style = 'height: 100%; width: 100%;'

window.onload = () => {
  const button = document.getElementById('moveSquareButton');

  function moveSquare(distance) {
    const block = document.getElementById('square');
    block.style.transform = `translateX(${distance}px)`;
    block.style.transition = 'all ease 1s';
    setTimeout(() => {
      block.style.transform = 'translateX(0px)'
    }, 1000)
  }

  button.addEventListener('click', () => moveSquare(200));
}

// window.onload = () => {
//   const button = document.getElementById('moveSquareButton');

//   function moveSquare(distance) {
//     const block = document.getElementById('square');
//     // подвинуть квадрат
//     const move = () => {
//       block.style.transition = 'all 1s ease';
//       block.style.transform = `translateX(${distance}px)`;
//     }
//     // првратить в гуся
//     const transformToGoose = () => {
//       block.style.backgroundColor = 'transparent';
//       block.appendChild(gusImg);
//     }
//     // вернуть квадрат назад
//     const goBack = () => {
//       block.style.transform = `translateX(0px)`;
//     }

//     // сначала двигаем квадрат
//     move();
//     // планируем задачу по превращению в гуся
//     setTimeout(() => {
//       // превращаем в гуся
//       transformToGoose();
//       // планируем возвращение квадрата
//       setTimeout(() => {
//         // возвращаем назад
//         goBack();
//       }, 1000)
//     }, 1000)
//   }

//   button.addEventListener('click', () => moveSquare(200));
// }