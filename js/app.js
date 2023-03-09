const selector = document.querySelectorAll('a');
const pasarAdelante = document.querySelectorAll('#botonFlecha');
const pasarAtras = document.querySelectorAll('#botonFlecha1');
const claseocultar1 = document.querySelector('#ocultarDiv1');
const claseocultar2 = document.querySelector('#ocultarDiv2');
const claseocultar3 = document.querySelector('#ocultarDiv3');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');

let contador = 0;

function incrementarContador() {
    if (contador < 3) {
      contador++;
    } else {
      contador = 0;
    }
    actualizarVisibilidad();
  }
  
  setInterval(incrementarContador, 2500);

 selector.forEach(elemento => {
  elemento.addEventListener('mouseover', () => {
    elemento.style.color = '#5700d1';
  });
  elemento.addEventListener('mouseout', () => {
    elemento.style.color = '#B45AD3';
  });
});

pasarAdelante.forEach(boton => {
  boton.addEventListener('click', () => {
    

    if(contador < 2){
    contador++;
    }
    
    actualizarVisibilidad();
  });
  boton.addEventListener('mouseover', () => {
    boton.style.color = '#828181';
  });
  boton.addEventListener('mouseout', () => {
    boton.style.color = '#3d3c3c';
  });
});

pasarAtras.forEach(boton => {
  boton.addEventListener('click', () => {
   
    if(contador > 0){
    contador--;
    }

    actualizarVisibilidad();
  });
  boton.addEventListener('mouseover', () => {
    boton.style.color = '#828181';
  });
  boton.addEventListener('mouseout', () => {
    boton.style.color = '#3d3c3c';
  });
});

function actualizarVisibilidad() {
  if (contador === 0) {
    claseocultar1.classList.remove('ocultar');
    claseocultar2.classList.add('ocultar');
    claseocultar3.classList.add('ocultar');
    p1.style.color = '#cfcfcf'
    p2.style.color = '#5f5f5f'
    p3.style.color = '#cfcfcf'
    
  } else if (contador === 1) {
    claseocultar1.classList.add('ocultar');
    claseocultar2.classList.remove('ocultar');
    claseocultar3.classList.add('ocultar');
    p1.style.color = '#5f5f5f'
    p2.style.color = '#cfcfcf'
    p3.style.color = '#cfcfcf'
  } else if (contador === 2) {
    claseocultar1.classList.add('ocultar');
    claseocultar2.classList.add('ocultar');
    claseocultar3.classList.remove('ocultar');
    p1.style.color = '#cfcfcf'
    p2.style.color = '#cfcfcf'
    p3.style.color = '#5f5f5f'
  }
}

console.log(contador);