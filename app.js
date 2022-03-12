const images = [
    'image/img-1.jpg',
    'image/img-2.jpg',
    'image/img-3.jpg',
    'image/img-4.jpg',
    'image/img-5.jpg',
];
let sliderIndex = 0;
const sliderImg=document.getElementById('slider-img');
setInterval(() => {
    if (sliderIndex >= images.length) {
        sliderIndex = 0;
    }
    sliderImg.setAttribute('src',images[sliderIndex])
    sliderIndex++;
}, 1000)