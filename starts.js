// Seleccionamos nuestro canvas exclusivo
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

// Ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Clase para las estrellitas
class Star {
  constructor(randomY = true) {
    this.reset(randomY);
  }

  reset(randomY = false) {
    this.x = Math.random() * canvas.width; // posición X aleatoria
    this.y = randomY
      ? Math.random() * canvas.height // posición Y aleatoria (para inicio)
      : -10; // después, vuelven a salir arriba
    this.size = Math.random() * 2 + 1; // tamaño 1–3 px
    this.speed = Math.random() * 1 + 0.5; // velocidad lenta
    this.opacity = Math.random() * 0.5 + 0.3; // transparencia 0.3–0.8
  }

  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.reset(false); // cuando sale, vuelve desde arriba
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.fill();
  }
}

// Generar un número limitado de estrellitas
const stars = [];
const MAX_STARS = 120; // ajusta este número según rendimiento

for (let i = 0; i < MAX_STARS; i++) {
  stars.push(new Star(true)); // al inicio, posición aleatoria en pantalla
}

// Animación principal
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    star.update();
    star.draw();
  }

  requestAnimationFrame(animate);
}

// Iniciar animación
animate();
