import Invader from "./Invader.js";

class Grid {
  constructor(canvas) {
    this.canvas = canvas;
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 1, y: 0 };
    this.invaders = [];

    const rows = Math.floor(Math.random() * 5 + 2);
    const cols = Math.floor(Math.random() * 10 + 1);

    this.width = cols * 30;

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        this.invaders.push(
          new Invader(
            {
              position: {
                x: 30 * x,
                y: 30 * y,
              },
            },
            "extension",
            canvas
          )
        );
      }
    }
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.y = 0;
    if (
      this.position.x + this.width > this.canvas.width ||
      this.position.x <= 0
    ) {
      this.velocity.x = -this.velocity.x;
      this.velocity.y = 30;
    }
  }
}

export default Grid;
