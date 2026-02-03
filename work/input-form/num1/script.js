const form = document.querySelector('.form');

const title = document.getElementById('resultTitle');
const resultBlock = document.getElementById('resultBlock');

const resName = document.getElementById('resName');
const resEmail = document.getElementById('resEmail');
const resGender = document.getElementById('resGender');
const resRating = document.getElementById('resRating');
const resInterests = document.getElementById('resInterests');
const resComment = document.getElementById('resComment');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  resName.textContent = form.elements.name.value;
  resEmail.textContent = form.elements.mail.value;

  resGender.textContent =
    form.elements.gender.value === 'man' ? 'Мужской' : 'Женский';

  resRating.textContent = form.elements.range.value;
  resComment.textContent = form.querySelector('textarea').value || '—';

  const interests = [];
  form.querySelectorAll('input[name="interest"]:checked')
    .forEach(item => interests.push(item.nextSibling.textContent.trim()));

  resInterests.textContent = interests.join(', ') || '—';

  title.style.display = 'block';
  resultBlock.style.display = 'block';
});
