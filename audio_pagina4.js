// audio.js
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.4;

    const playAudio = () => {
        audio.play().catch(error => {
            document.body.addEventListener('click', function() {
                audio.play();
            }, { once: true });
        });
    };

    playAudio();
});