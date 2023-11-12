import Player from "./object/Player.js";
import Projectile from "./object/Projectile.js";
import Grid from "./object/Grid.js";
import keys from "./command/keys.js";
import { playerKeyHandler } from "./util/keyHandler.js";

const canvas = document.querySelector("#game-canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = new Player("extension", canvas);
const projectiles = [];
const grids = [new Grid(canvas)];

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);

  player.update();
  grids.forEach((grid) => {
    grid.update();
    grid.invaders.forEach((invader) => {
      invader.update({ velocity: grid.velocity });
    });
  });

  projectiles.forEach((projectile, idx) => {
    if (projectile.position.y + projectile.radius <= 0) {
      projectiles.splice(idx, 1);
    } else {
      projectile.update();
    }
  });

  playerKeyHandler(keys, player);
}

animate();

addEventListener("keydown", ({ key }) => {
  key = key.toLowerCase();
  switch (key) {
    case "a":
    case "arrowleft":
      keys.a.pressed = true;
      break;
    case "d":
    case "arrowright":
      keys.d.pressed = true;
      break;
    case "w":
    case "arrowup":
      keys.w.pressed = true;
      break;
    case "s":
    case "arrowdown":
      keys.s.pressed = true;
      break;
    case " ":
      keys.space.pressed = true;
      projectiles.push(
        new Projectile(canvas, {
          position: {
            x: player.position.x + player.width / 2,
            y: player.position.y,
          },
          velocity: {
            x: 0,
            y: -5,
          },
        })
      );
      break;
    default:
      break;
  }
});

addEventListener("keyup", ({ key }) => {
  key = key.toLowerCase();
  switch (key) {
    case "a":
    case "arrowleft":
      keys.a.pressed = false;
      break;
    case "d":
    case "arrowright":
      keys.d.pressed = false;
      break;
    case "w":
    case "arrowup":
      keys.w.pressed = false;
      break;
    case "s":
    case "arrowdown":
      keys.s.pressed = false;
      break;
    default:
      break;
  }
});
