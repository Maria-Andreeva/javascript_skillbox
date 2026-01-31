const photos = document.querySelectorAll(".photo");
const previewBlock = document.getElementById("preview");

photos.forEach(photo => {
    photo.addEventListener("click", () => {
    const imgSrc = photo.src;

    previewBlock.innerHTML = "";

    const bigImg = document.createElement("img");
    bigImg.src = imgSrc;

    previewBlock.appendChild(bigImg);
  });
});
