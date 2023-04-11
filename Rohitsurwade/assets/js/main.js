const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

window.onload = function(){
  var img = document.getElementById('my-image');
  img.classList.add('animate');
}

const fadeElements = document.querySelectorAll('.fade-in');

function fadeIn() {
  for (let i = 0; i < fadeElements.length; i++) {
    const element = fadeElements[i];
    const elementHeight = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const isVisible = (elementHeight < windowHeight);
    
    if (isVisible) {
      element.classList.add('fade-in-active');
    }
  }
}

document.addEventListener('scroll', fadeIn);
