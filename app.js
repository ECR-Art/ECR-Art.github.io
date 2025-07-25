
// ---- FADE IN -----

const cards = document.querySelectorAll('.cards');
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeCards');
      observer.observe(entry.target);
    }
  });
});

cards.forEach((card)=>{
  observer.observe(card);
  card.addEventListener('mouseenter', () =>{
    if (card.classList.contains('fadeCards')) {
      card.style.transition = 'all .6s'
    }
  })
})
 

// ---- HOVER BOTÓN SAP -----

const sapContainer = document.querySelector('.main-SAP');
const btSap = document.querySelector('.bt-sap a');

btSap.addEventListener('mouseenter', () => {
  sapContainer.style.border = '1px solid #01a9ed';
});

btSap.addEventListener('mouseleave', () => {
  sapContainer.style.border = '1px solid gainsboro';
});

// ---- BARRA NAVEGACIÓN FIJA -----

const barNav = document.querySelector('.bar-fixed');

window.addEventListener('scroll', () => {
  const scY = window.scrollY;

  if (scY >= 250) {
    barNav.classList.add('visible');
  } else {
    barNav.classList.remove('visible');
  }
});

// ---- MENU DESPLEGABLE ----

const slideMenu = document.querySelector('.slide-menu');
const btSlider = document.querySelector('#bt-slider');
const Arrow = btSlider.firstElementChild;

btSlider.addEventListener('click', () => {
  if(!slideMenu.classList.contains('onSlide')){
    slideMenu.classList.add('onSlide');
    Arrow.style.transform = 'scaleX(.7)';
  } else if(slideMenu.classList.contains('onSlide')){
    slideMenu.classList.remove('onSlide');
    Arrow.style.transform = 'scaleX(-1)';
  }
})

window.addEventListener('click', (e) => {
  if(slideMenu && !slideMenu.contains(e.target) && slideMenu.classList.contains('onSlide')){
    slideMenu.classList.remove('onSlide');
    Arrow.style.transform = 'scaleX(-1)';
  }
})