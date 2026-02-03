const form = document.querySelector('.form');
const tableBody = document.querySelector('.product-table tbody');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const title = form.elements.title.value.trim();
  const weight = Number(form.elements.weight.value);
  const distance = Number(form.elements.distance.value);

  if (!title) return;

  if (weight < 0 || distance < 0) {
    alert('Вес и расстояние не могут быть отрицательными');
    return;
  }

  const price = (weight * distance) / 10;

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${title}</td>
    <td>${weight.toFixed(1)}</td>
    <td>${distance.toFixed(1)}</td>
    <td>${price.toFixed(2)}</td>
  `;

  tableBody.appendChild(row);

  form.reset();
});
