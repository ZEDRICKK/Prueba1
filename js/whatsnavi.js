const selector = document.querySelectorAll('a');
const whatsD1 = document.querySelector('#whatsD1');
const whatsN1 = document.querySelector('#whatsN1');
const whatsD2 = document.querySelector('#whatsD2');
const whatsN2 = document.querySelector('#whatsN2');
const whatsD3 = document.querySelector('#whatsD3');
const whatsN3 = document.querySelector('#whatsN3');
const whatsD4 = document.querySelector('#whatsD4');
const whatsN4 = document.querySelector('#whatsN4');


selector.forEach(elemento => {
    elemento.addEventListener('mouseover', () => {
      elemento.style.color = '#5700d1';
    });
    elemento.addEventListener('mouseout', () => {
      elemento.style.color = '#B45AD3';
    });
  });
  

  whatsD1.addEventListener('mouseover', () => {
    whatsD1.style.color = '#5700d1';
    whatsD1.classList.add('ocultar');
    whatsN1.classList.remove('ocultar');
  });
  whatsD1.addEventListener('mouseleave', () => {
    whatsD1.style.color = '#B45AD3';
    whatsD1.classList.remove('ocultar');
    whatsN1.classList.add('ocultar');
  });

  whatsD2.addEventListener('mouseover', () => {
    whatsD2.style.color = '#5700d1';
    whatsD2.classList.add('ocultar');
    whatsN2.classList.remove('ocultar');
  });
  whatsD2.addEventListener('mouseleave', () => {
    whatsD2.style.color = '#B45AD3';
    whatsD2.classList.remove('ocultar');
    whatsN2.classList.add('ocultar');
  });

  whatsD3.addEventListener('mouseover', () => {
    whatsD3.style.color = '#5700d1';
    whatsD3.classList.add('ocultar');
    whatsN3.classList.remove('ocultar');
  });
  whatsD3.addEventListener('mouseleave', () => {
    whatsD3.style.color = '#B45AD3';
    whatsD3.classList.remove('ocultar');
    whatsN3.classList.add('ocultar');
  });

  whatsD4.addEventListener('mouseover', () => {
    whatsD4.style.color = '#5700d1';
    whatsD4.classList.add('ocultar');
    whatsN4.classList.remove('ocultar');
  });
  whatsD4.addEventListener('mouseleave', () => {
    whatsD4.style.color = '#B45AD3';
    whatsD4.classList.remove('ocultar');
    whatsN4.classList.add('ocultar');
  });
  