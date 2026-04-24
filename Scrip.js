const redBtn = document.querySelector('.red-btn');
const grayBtn = document.querySelector('.gray-btn');
const cartButton = document.getElementById('cartButton');
const imageCard = document.getElementById('imageCard');

redBtn.addEventListener('click', function() {
    cartButton.style.backgroundColor = 'red';
    imageCard.style.backgroundImage = 'url("Img/Carro rojo.jpg")';
});

grayBtn.addEventListener('click', function() {
    cartButton.style.backgroundColor = 'red';
    imageCard.style.backgroundImage = 'url("Img/Carro Gris.jpg")';
});