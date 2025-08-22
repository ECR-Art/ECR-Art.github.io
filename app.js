
// ---- PRELOAD -----

const preload = document.querySelector('.preload');
const overflowBody = document.querySelector('.hiddenWhileLoad');

window.onload = () => {
  preload.classList.add('fadeOut');
  overflowBody.classList.remove('hiddenWhileLoad');
}

// ---- FADE IN ELEMENTOS-----

const cards = document.querySelectorAll('.cards');
const fadeElements = document.querySelectorAll('.fadeElement');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeScroll');
      observer.unobserve(entry.target);
    }
  });
}, {threshold:0.15});

fadeElements.forEach((element)=> {
  observer.observe(element);
})

// ---- ESTABLECIENDO DURACIÓN DEL HOVER A LAS CARDS ----

cards.forEach((card)=>{
  observer.observe(card);
  card.addEventListener('mouseenter', () =>{
    if (card.classList.contains('fadeScroll')) {
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
    Arrow.classList.add('arrow');
  } else if(slideMenu.classList.contains('onSlide')){
    slideMenu.classList.remove('onSlide');
    Arrow.classList.remove('arrow');
  }
})

window.addEventListener('click', (e) => {
  if(slideMenu && !slideMenu.contains(e.target) && slideMenu.classList.contains('onSlide')){
    slideMenu.classList.remove('onSlide');
    Arrow.classList.remove('arrow');
  }
})