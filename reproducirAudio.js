
document.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio('./mp3/Ha_llegado_un_angel.mp3');

  audio.autoplay = true;

  // Control de volumen (opcional)
  audio.volume = 0.3; // Rango: 0.0 a 1.0

  audio.play().catch(error => {
    console.warn("Reproducción bloqueada por el navegador:", error);
  });
});
