const menuNav = document.querySelector('.menu-nav')
const navLinks = document.querySelector('.nav-links')
menuNav.addEventListener('click',()=>(
navLinks.classList.toggle('mobile-menu')
))
