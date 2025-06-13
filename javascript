// Función para mostrar el contenido y deslizar la pantalla
function mostrarContenido() {
  document.querySelector('.pantalla-inicial').style.display = 'none';
  document.getElementById('contenido').style.top = '0';
}

// Control de música
let player = document.getElementById('video');

function pausarMusica() {
  player.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}

function cambiarCancion() {
  player.src = "https://www.youtube.com/embed/X19X?autoplay=1"; // Cambia la canción aquí
}
