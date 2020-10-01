class Tetromino {
  constructor(tetromino, color) {
    this.tetromino = tetromino;
    this.color = color;
    this.tetrominoNum = 0;
    this.activeTetromino = this.tetromino[this.tetrominoNum];
    this.x = 0;
    this.y = 0;
  }

  draw() {
    for (let row = 0; row < this.activeTetromino.length; row++) {
      for (let col = 0; col < this.activeTetromino.length; col++) {
        if (this.activeTetromino[row][col]) {
          drawSquare(this.x + col, this.y + row, this.color);
        }
      }
    }
  }
  delete() {
    for (let row = 0; row < this.activeTetromino.length; row++) {
      for (let col = 0; col < this.activeTetromino.length; col++) {
        if (this.activeTetromino[row][col]) {
          drawSquare(this.x + col, this.y + row, "white");
        }
      }
    }
  }
  rotate() {
    this.delete();
    this.tetrominoNum = (this.tetrominoNum + 1) % this.tetromino.length;
    this.activeTetromino = this.tetromino[this.tetrominoNum];
    this.draw();
  }
  moveDown() {
    this.delete();
    this.y++;
    this.draw();
  }
  moveRight() {
    this.delete();
    this.x++;
    this.draw();
  }
  moveLeft() {
    this.delete();
    this.x--;
    this.draw();
  }
}
