// Función para mostrar las alertas encadenadas
function mostrarAlertas() {
  console.log('Iniciando alertas...');
  
  // Primera alerta - Fondo amarillo
  document.body.className = 'bg-amarillo';
  
  Swal.fire({
    title: "Y... Ahora",
    text: "Se viene lo bueno!",
    icon: "warning",
    confirmButtonText: "Siguiente",
    background: '#000000',
    color: '#FFCD00',
    confirmButtonColor: '#FFCD00',
    customClass: {
      confirmButton: 'btn-texto-negro'
    }
  })
    .then(() => {
      console.log('Primera alerta completada');
      // Segunda alerta - Fondo azul
      document.body.className = 'bg-azul';
      
      return Swal.fire({
        title: "Para la Quinceañera",
        text: "Un regalo con mucho amor",
        icon: "warning",
        confirmButtonText: "Continuar",
        background: '#000000',
        color: '#FFCD00',
        confirmButtonColor: '#FFCD00',
        customClass: {
          confirmButton: 'btn-texto-negro'
        }
      });
    })
    .then(() => {
      console.log('Segunda alerta completada');
      // Tercera alerta - Fondo rojo
      document.body.className = 'bg-rojo';
      
      return Swal.fire({
        title: "De quienes te consideramos valiosa ❤️",
        text: "y nos importas!",
        icon: "warning",
        confirmButtonText: "Una mas!",
        background: '#000000',
        color: '#FFCD00',
        confirmButtonColor: '#FFCD00',
        customClass: {
          confirmButton: 'btn-texto-negro'
        }
      });
    })
    .then(() => {
      console.log('Tercera alerta completada');
      // Cuarta alerta - Fondo violeta
      document.body.className = 'bg-violeta';
      
      Swal.fire({
        title: "¡Sabemos!",
        text: "Que te va a gustar!",
        icon: "success",
        confirmButtonText: "Ahora si Jue!",
        background: '#000000',
        color: '#FFFFFF',
        confirmButtonColor: '#8B5CF6',
        customClass: {
          confirmButton: 'btn-texto-blanco'
        }
      }).then(() => {
        console.log('Cuarta alerta completada');
        // Redirigir a pagina4.html
        window.location.href = "pagina4.html";
      });
    })
    .catch((error) => {
      console.error('Error en las alertas:', error);
    });
}

// Verificar que SweetAlert2 esté cargado
if (typeof Swal !== 'undefined') {
  console.log('SweetAlert2 cargado correctamente');
  // Ejecutar las alertas al cargar la página
  window.addEventListener('load', mostrarAlertas);
} else {
  console.error('SweetAlert2 no está cargado');
  // Fallback: intentar cargar después de un pequeño delay
  setTimeout(() => {
    if (typeof Swal !== 'undefined') {
      mostrarAlertas();
    } else {
      alert('Error: SweetAlert2 no se pudo cargar');
    }
  }, 1000);
}