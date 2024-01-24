
let slideIndex = 1;
showSlides(slideIndex);

setInterval(plusSlides, 5000);

document.getElementById("next-slide").addEventListener("click", (event) => plusSlides(1))

function plusSlides(n = 1) {
  showSlides(slideIndex += n);
}

document.getElementById("prev-slide").addEventListener("click", (event) => currentSlide(1))

function currentSlide(n = 1) {
  showSlides(slideIndex -= n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("slider-dot");

    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}