("use strict");
class Invader {
  constructor({ position }, type, canvas) {
    this.position = { x: position.x, y: position.y };
    this.velocity = { x: 0, y: 0 };
    this.rotation = 0;

    this.canvas = canvas;
    this.width = 0;
    this.height = 0;
    const image = new Image();
    const playerImgEl = document.querySelector("#invader-img");
    image.src = playerImgEl.src;

    image.onload = () => {
      const scale = 1;
      this.image = image;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position = {
        x: position.x,
        y: position.y,
      };
    };
  }

  draw() {
    // canvasCtx 는 canavs
    if (!this.image) return;
    const canvasCtx = this.canvas.getContext("2d");
    canvasCtx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update({ velocity }) {
    if (this.image) {
      this.draw();
      this.position.x += velocity.x;
      this.position.y += velocity.y;
    }
  }
}

export default Invader;
