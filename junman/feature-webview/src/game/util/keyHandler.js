function playerKeyHandler(keys, player) {
  if (keys.a.pressed && player.position.x > 0) {
    player.velocity.x = -5;
    player.rotation = -0.3;
  } else if (keys.d.pressed && player.position.x < player.canvas.width - 20) {
    player.velocity.x = 5;
    player.rotation = 0.3;
  } else {
    player.velocity.x = 0;
    player.rotation = 0;
  }

  if (keys.w.pressed && player.position.y > 0) {
    player.velocity.y = -5;
  } else if (keys.s.pressed && player.position.y < player.canvas.height - 100) {
    player.velocity.y = 5;
  } else {
    player.velocity.y = 0;
  }
}

export { playerKeyHandler };
