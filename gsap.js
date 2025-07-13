// gsap.js
import { gsap } from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";
import { MotionPathPlugin } from "https://cdn.skypack.dev/gsap/MotionPathPlugin";

// Registrar plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// Array de imágenes para cada sección
const images = [
  "img/0_Años.jpg",
  "img/1_Años.jpg",
  "img/2_Años.jpg",
  "img/3_Años.jpg",
  "img/4_Años.jpg",
  "img/5_Años.jpg",
  "img/6_Años.jpg",
  "img/7_Años.jpg",
  "img/8_Años.jpg",
  "img/9_Años.jpg",
  "img/10_Años.jpg",
  "img/11_Años.jpg",
  "img/12_Años.jpg",
  "img/13_Años.jpg",
  "img/14_Años.jpg",
  "img/15_Años.jpg"
];

// Relación de altura de pantalla con el elemento
let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

// Bandera para aplicar efecto solo a la primera sección
let firstEffectApplied = false;

// 🎨 Fondo animado en scroll para cada sección
gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg");
  section.bg.style.backgroundImage = `url(${images[i % images.length]})`;

  // Animación de fondo parallax
  gsap.fromTo(
    section.bg,
    {
      backgroundPosition: () =>
        i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
    },
    {
      backgroundPosition: () =>
        `50% ${window.innerHeight * (1 - getRatio(section))}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: () => (i ? "top bottom" : "top top"),
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true
      }
    }
  );

  // Primer fade-in al hacer scroll
  if (!firstEffectApplied) {
    gsap.fromTo(
      section,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
          onEnter: () => {
            firstEffectApplied = true;
          }
        }
      }
    );
  }
});


// 📍 Animación de línea SVG (cronológica)
gsap.fromTo(
  ".theLine",
  { strokeDashoffset: 2000 },
  {
    strokeDashoffset: 0,
    duration: 3,
    ease: "none",
    scrollTrigger: {
      trigger: "#svg-stage",
      scrub: true,
      start: "top center",
      end: "bottom center"
    }
  }
);

// 🔵 Bola animada siguiendo la línea
gsap.to(".ball01", {
  scrollTrigger: {
    trigger: "#svg-stage",
    scrub: true,
    start: "top center",
    end: "bottom center"
  },
  motionPath: {
    path: ".theLine",
    align: ".theLine",
    alignOrigin: [0.5, 0.5]
  },
  duration: 3,
  autoAlpha: 1
});

// 🔴 Pulsos de bolas + textos en el tiempo
gsap.timeline({
  scrollTrigger: {
    trigger: "#svg-stage",
    scrub: true,
    start: "top center",
    end: "bottom center"
  }
})
  .to(".ball02, .text01", { autoAlpha: 1, scale: 2 }, 0.2)
  .to(".ball03, .text02", { autoAlpha: 1, scale: 2 }, 0.33)
  .to(".ball04, .text03", { autoAlpha: 1, scale: 2 }, 0.46)
  .to(".ball05, .text04", { autoAlpha: 1, scale: 2 }, 0.6)
  .to(".ball06, .text05", { autoAlpha: 1, scale: 2 }, 0.75);
