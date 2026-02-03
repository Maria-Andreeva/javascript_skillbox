const textInput = document.getElementById('cardText');
const colorSelect = document.getElementById('colorSelect');
const card = document.getElementById('card');

textInput.addEventListener('input', () => {
  card.textContent = textInput.value || 'Ваша карта';
});

textInput.addEventListener('focus', () => {
  textInput.classList.add('focused');
});

textInput.addEventListener('blur', () => {
  textInput.classList.remove('focused');
});

colorSelect.addEventListener('change', () => {
    const value = colorSelect.value;
  
    if (value === 'multicolor') {
      card.style.background =
        'linear-gradient(45deg, red, blue, green)';
    } else {
      card.style.background = value;
    }
  });

