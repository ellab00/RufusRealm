// Image Slider
let sliderImages = document.querySelectorAll('#slider img');
let currentIndex = 0;

function showNextImage() {
    sliderImages[currentIndex].classList.remove('visible');
    currentIndex = (currentIndex + 1) % sliderImages.length;
    sliderImages[currentIndex].classList.add('visible');
}

setInterval(showNextImage, 3000);
