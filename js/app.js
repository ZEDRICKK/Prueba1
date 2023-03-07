
const selector = document.querySelectorAll('a');

selector.forEach(elemento => {
   
    elemento.addEventListener('mouseover', () => {
     
        elemento.style.color = '#5700d1';

    });

    elemento.addEventListener('mouseout', () => {
        elemento.style.color = '#B45AD3';

  });

  
  });

