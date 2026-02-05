const switchButton = document.getElementById('switch')
const body = document.getElementById('body')

function onLoad(){
    const currentTheme = localStorage.getItem('theme') ?? 'day'

    body.className = currentTheme

    switchButton.textContent = currentTheme === 'day' ? 'Поменять на ночную тему' : 'Поменять на дневную тему'
}

switchButton.onclick = function () {
    const currentTheme = body.className
    const newClass = currentTheme === 'day' ? 'night' : 'day'

    localStorage.setItem('theme', newClass)
    body.className = newClass

    switchButton.textContent = newClass === 'day' ? 'Поменять на ночную тему' : 'Поменять на дневную тему'
}

onLoad()