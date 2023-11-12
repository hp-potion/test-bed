("use strict");
class Player {
  constructor(type, canvas) {
    this.position = { x: canvas.width / 2, y: canvas.height - 100 };

    this.velocity = { x: 0, y: 0 };
    this.rotation = 0;

    this.canvas = canvas;
    this.width = 0;
    this.height = 0;
    const image = new Image();
    const playerImgEl = document.querySelector("#player-img");
    image.src =
      type === "local" ? "../assets/character/spaceship.png" : playerImgEl.src;
    console.log(playerImgEl.src);
    image.onload = () => {
      this.image = image;
      this.width = image.width / 5;
      this.height = image.height / 5;
    };
  }

  draw() {
    // canvasCtx 는 canavs
    if (!this.image) return;
    const canvasCtx = this.canvas.getContext("2d");
    canvasCtx.save();
    canvasCtx.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    );

    canvasCtx.rotate(this.rotation);
    canvasCtx.translate(
      -this.position.x - this.width / 2,
      -this.position.y - this.height / 2
    );
    canvasCtx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    canvasCtx.restore();
  }
  update() {
    if (this.image) {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }
  move(direction) {
    switch (direction) {
      case "left":
        this.velocity.x = -10;
        this.position.x += this.velocity.x;
        this.update();
        break;

      case "right":
        this.velocity.x = 10;
        this.position.x += this.velocity.x;
        this.update();
        break;
      case "forward":
        this.velocity.y = -10;
        this.position.y += this.velocity.y;
        this.update();
        break;
      case "backward":
        this.velocity.y = 10;
        if (this.position.y < this.canvas.height - 100)
          this.position.y += this.velocity.y;
        this.update();
        break;
      default:
        break;
    }
  }
}

export default Player;
