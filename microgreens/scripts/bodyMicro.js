let currentIndex = 0;
const images = [
    'design/k.png',
    'design/logo.png',
    'design/k.png'
    // Добавит здесь пути к фотографиям
];

const currentImage = document.getElementById('current-image');

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});
//При нажатии на саму мини фотографию
function changeImage(index) {
    currentIndex = index;
    updateImage();
}

function updateImage() {
    currentImage.src = images[currentIndex];
}
