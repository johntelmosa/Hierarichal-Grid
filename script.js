const calm = false;   // TEST: forces the effects on
const tiles = document.querySelectorAll(".tile");

console.log("script.js loaded | reduce motion:", calm, "| tiles found:", tiles.length);

if (!calm) {
  tiles.forEach((tile, i) => {
    tile.style.setProperty("--i", i);
    tile.classList.add("reveal");

    tile.addEventListener("mousemove", (e) => {
      const box = tile.getBoundingClientRect();
      const x = (e.clientX - box.left) / box.width - 0.5;
      const y = (e.clientY - box.top) / box.height - 0.5;
      tile.style.transform =
        `perspective(700px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
    });

    tile.addEventListener("mouseleave", () => {
      tile.style.transform = "";
    });
  });
}