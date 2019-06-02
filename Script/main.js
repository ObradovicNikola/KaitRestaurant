let slideIndex = 1;
showSlides(slideIndex);
autoShowSlides();

function currentSlide(x) {
    showSlides(slideIndex = x);
}

function plusSlides(i) {
    showSlides(slideIndex += i);
}

function showSlides(x) {

    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (x > slides.length) {
        slideIndex = 1;
    }

    if (x < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" current", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " current";
}

function autoShowSlides() {
    showSlides(slideIndex);
    slideIndex++;
    setTimeout(autoShowSlides, 4000);
}

function dropMenu() {
    let x = document.getElementsByClassName("nav")[0];
    if (!document.getElementById("toggle").checked) {
        x.style.height = "500px";
    } else {
        x.style.height = "70px";
    }
}

function goHome() {
    window.location = "index.html";
}

function updateMenu() {
    const width = window.outerWidth;
    let x = document.getElementsByClassName("nav")[0];
    if (width > 800){
        x.style.height = "70px";
        document.getElementById("toggle").checked = false;
    }
    else if (document.getElementById("toggle").checked) {
        x.style.height = "500px";
    }
}