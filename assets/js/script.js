window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let navbar = document.getElementById("navbar")

    if (scroll > 0) {
        navbar.classList.add("scroling_navbar")
    } else {
        navbar.classList.remove("scroling_navbar");  
    }

});

let questions = document.querySelectorAll(".question-button");
	 
for(let question of questions){
    question.addEventListener("click", (event) => {
        event.target.classList.toggle("active-question");
    
        if(event.target.nextElementSibling.style.maxHeight == 0){
            event.target.nextElementSibling.style.maxHeight = event.target.nextElementSibling.scrollHeight + "px";
        }
        else{
            event.target.nextElementSibling.style.maxHeight = "";
        }
    });
}

let slideIndex = 1;
showSlides(slideIndex);

setInterval(plusSlides, 5000);


// let questions = document.querySelectorAll(".question-button");

function plusSlides(n = 1) {
  showSlides(slideIndex += n);
}

// let questions = document.querySelectorAll(".question-button");

function currentSlide(n) {
  showSlides(slideIndex = n);
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