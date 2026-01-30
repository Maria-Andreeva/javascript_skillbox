const photoEl = document.querySelector('.photo');
console.log(photoEl.getAttribute('src', 'newphoto.png'));
console.log(photoEl.getAttribute('src'));
photoEl.setAttribute('class', 'photo photo1');
photoEl.removeAttribute('title');

console.log(photoEl.hasAttribute('title'));
