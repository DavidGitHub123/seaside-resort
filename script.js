// Global variables
const menuToggleIcon = document.getElementById('menu-toggle-icon');
const navMobile = document.getElementById('nav');
const headerElement = document.getElementById('header');
const navLinks = document.querySelectorAll('.list-link');
console.log(navLinks)

// Toggle navigation
const toggleMenu = () => {
    // Adds class active on click
   navMobile.classList.toggle('active');
   // Sets the dark background to cover contents below header
   headerElement.classList.toggle('active');
}

// Calls the toggleMenu function above
menuToggleIcon.addEventListener('click', toggleMenu);


// Add/remove header border bottom on scroll
const headerScrollEvent = () => {
  if(this.scrollY >= 30){
      headerElement.classList.add('active-scroll');
  }else{
      headerElement.classList.remove('active-scroll');
  }
}

window.addEventListener('scroll', headerScrollEvent)


// with the dropdown menu, add selected link styles to the link clicked and close navigation when clicking the links
// 2:11
navLinks.forEach(link => link.addEventListener('click', () => {
    navMobile.classList.remove('active');
    headerElement.classList.remove('active');

    let current = document.getElementsByClassName('current');
    current[0].className = current[0].className.replace(' current', "");
    link.className += " current";
}));


// // Scroll Reveal
const sr = ScrollReveal({
    distance: '25px',
    duration: 2500
});

sr.reveal(`.image-left, .popular-destinations-data, .plan-trip-data`, {
    origin: 'left'
})

sr.reveal('.image-center', {
    origin: 'bottom'
})

sr.reveal(`.image-right, .showcase-data`, {
    origin: 'right'
})

sr.reveal('.beach-data-wrapper', {
    origin: 'bottom',
    interval: 250
})

sr.reveal('.newsletter', {
   origin: 'top'
})

sr.reveal(`.footer-container-inner > div, .footer-separator, .copyright`, {
   origin: 'bottom',
   interval: 250
})




