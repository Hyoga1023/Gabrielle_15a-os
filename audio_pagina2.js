// audio.js
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.05;

    // Intenta reproducir automáticamente
    const playAudio = () => {
        audio.play().catch(error => {
            // Si falla (por políticas del navegador), reproduce al primer clic
            document.body.addEventListener('click', function() {
                audio.play();
            }, { once: true });
        });
    };

    // Iniciar cuando la página esté lista
    playAudio();
});