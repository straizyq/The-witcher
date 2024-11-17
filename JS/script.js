let slides = [
    '../images/witcher1.png', 
    '../images/witcher2.png'
];

let currentSlide = 0;
const slideElement = document.getElementById('slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showSlide(index) {
    const images = document.querySelectorAll('.slider img');
    images.forEach((img) => img.classList.remove('active'));
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
    images[currentSlide].src = slides[currentSlide];
    images[currentSlide].classList.add('active');
}
slides.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    if (index === currentSlide) img.classList.add('active');
    document.querySelector('.slider').appendChild(img);
});
prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
showSlide(currentSlide);