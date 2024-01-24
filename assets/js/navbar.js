window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let navbar = document.getElementById("navbar")

    if (scroll > 0) {
        navbar.classList.add("scroling_navbar")
    } else {
        navbar.classList.remove("scroling_navbar");  
    }

});