const boxes = document.querySelectorAll(".box");
const flowersContainer = document.getElementById("flowers");

boxes.forEach(box => {
  box.addEventListener("click", () => {
    createFlower();
  });
});

function createFlower() {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.innerText = "🌸";

  flower.style.left = Math.random() * window.innerWidth + "px";
  flower.style.top = Math.random() * window.innerHeight + "px";

  flowersContainer.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 3000);
}
