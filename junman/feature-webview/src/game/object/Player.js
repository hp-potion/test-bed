class Player {
  constructor(type) {
    this.position = { x: 200, y: 200 };

    this.velocity = { x: 0, y: 0 };

    const image = new Image();
    const playerImgEl = document.querySelector(".player-img");
    image.src =
      type === "local" ? "../assets/character/spaceship.png" : playerImgEl.src;
    this.image = image;
    this.width = 100;
    this.height = 50;
  }
  draw(c) {
    // c 는 canavs
    // c.fillStyle = "red";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

export default Player;
