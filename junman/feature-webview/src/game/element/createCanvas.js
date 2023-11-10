("use strict");
/**
 * Create canvas element.
 * @param {HTMLElement} container Element to append canvas to.
 * @param {number} width
 * @param {number} height
 * @param {string} opt_classname
 * @return {HTMLCanvasElement}
 */
function createCanvas(container, width, height) {
  var canvas = document.createElement("canvas");
  canvas.className = "game-canvas";
  canvas.width = width;
  canvas.height = height;
  container.appendChild(canvas);

  return canvas;
}

module.exports = createCanvas;
