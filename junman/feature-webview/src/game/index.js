import Player from "./object/Player.js";

const canvas = document.querySelector("#game-canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = new Player("local");

function animate() {
  requestAnimationFrame(animate);
  player.draw(c);
}

animate();
