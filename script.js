// SCRIPT SCROLL SUAVE INTERNO INICIO

function initScrollSuave() { 
  const linksInternos = document.querySelectorAll('.menu-nav a[href^="#"');
    if (linksInternos.length){
      function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;
        window.scrollTo({
          top: topo,
          behavior: 'smooth'
        })
      }

      linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}}

initScrollSuave();

// SCRIPT SCROLL SUAVE INTERNO FIM

// SCRIPT ANIMAÇÃO SCROLL INICIO

function initAnimatedSection() { 
  const animatedSection = document.querySelectorAll('.js-scroll');
  if(animatedSection.length){ 
    function animaScroll() { 
      const metadeTela = window.innerHeight * 0.6;
      animatedSection.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = (sectionTop - metadeTela)
          if (sectionVisible < 0) {
            section.classList.add('ativo')
          }
        })    
    }    
  }    
  window.addEventListener('scroll', animaScroll);
}



initAnimatedSection();