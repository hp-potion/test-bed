class Projectile {
  radius = 3;
  constructor(canvas, { position, velocity }) {
    this.canvas = canvas;
    this.position = position;
    this.velocity = velocity;
  }

  draw() {
    const canvasCtx = this.canvas.getContext("2d");
    canvasCtx.beginPath();
    canvasCtx.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2
    );
    canvasCtx.fillStyle = "red";
    canvasCtx.fill();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

export default Projectile;
