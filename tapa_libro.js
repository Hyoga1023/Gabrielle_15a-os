document.addEventListener('DOMContentLoaded', () => {
    const book = document.querySelector('.book');
    const openButton = document.getElementById('openBook');

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = 'pagina1.html';
    document.head.appendChild(link);
    
    openButton.addEventListener('click', () => {
        book.classList.add('open'); 

        setTimeout(() => {
            window.location.href = 'pagina1.html';
        }, 600); 
    });
});

// Sección para bloquear la visualización de la página en dispositivos no móviles
document.addEventListener("DOMContentLoaded", function () {
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const screenCheck = window.innerWidth <= 768; // Ancho típico de móviles

  if (!isMobile || !screenCheck) {
    // Bloquear la visualización de la página
    document.body.innerHTML = ''; // Borra el contenido

    // Muestra el mensaje con SweetAlert2
    Swal.fire({
      icon: 'error',
      title: 'Que dijo? Navidad?',
      text: 'Esta aplicación solo está disponible para dispositivos móviles. Por favor accede desde tu celular.',
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: 'Entendido'
    });
  }
});
