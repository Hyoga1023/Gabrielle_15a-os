document.addEventListener("DOMContentLoaded", () => {
  const arrowDown = document.getElementById("arrowDown");
  const nextButton = document.querySelector(".carousel-control-next");
  const carousel = document.getElementById("carouselExampleIndicators");

  // Activar la flecha derecha al inicio (titilar)
  if (nextButton) {
    nextButton.classList.add("pulsing");
  }

  if (carousel) {
    carousel.addEventListener("slid.bs.carousel", () => {
      const activeItem = carousel.querySelector(".carousel-item.active");
      const allItems = carousel.querySelectorAll(".carousel-item");

      const isLastSlide =
        Array.from(allItems).indexOf(activeItem) === allItems.length - 1;

      if (isLastSlide) {
        if (arrowDown) {
          arrowDown.classList.add("visible", "pulsing");
        }
        if (nextButton) {
          nextButton.classList.remove("pulsing");
        }
      }
    });
  }

  // Acción al hacer clic en la flecha hacia abajo
  if (arrowDown) {
    arrowDown.addEventListener("click", () => {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    });
  }
});
