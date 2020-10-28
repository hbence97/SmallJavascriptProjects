class Tetromino {
  constructor(tetromino, color) {
    this.tetromino = tetromino;
    this.color = color;
    this.tetrominoNum = 0;
    this.activeTetromino = this.tetromino[this.tetrominoNum];
    this.x = 3;
    this.y = -2;
    this.nextPattern = this.tetromino[
      (this.tetrominoNum + 1) % this.tetromino.length
    ];
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
  collision(x, y, piece) {
    for (let row = 0; row < piece.length; row++) {
      for (let col = 0; col < piece.length; col++) {
        if (!piece[row][col]) continue;
        let newX = this.x + col + x;
        let newY = this.y + row + y;

        if (newX < 0 || newX >= _COL || newY >= _ROW) {
          return true;
        }
        if (newY < 0) {
          continue;
        }
        if (board[newY][newX] != vacant) {
          return true;
        }
      }
    }
    return false;
  }
  rotate() {
    let rotateCollision = 0;
    if (this.collision(this.x, this.y, this.nextPattern)) {
      if (this.x > _COL / 2) {
        rotateCollision = -1;
      } else {
        rotateCollision = 1;
      }
    }
    if (!this.collision(rotateCollision, 0, this.nextPattern)) {
      this.delete();
      this.x += rotateCollision;
      this.tetrominoNum = (this.tetrominoNum + 1) % this.tetromino.length;
      this.activeTetromino = this.tetromino[this.tetrominoNum];
      this.draw();
    }
  }
  moveDown() {
    if (!this.collision(0, 1, this.activeTetromino)) {
      this.delete();
      this.y++;
      this.draw();
    }
  }
  moveRight() {
    if (!this.collision(1, 0, this.activeTetromino)) {
      this.delete();
      this.x++;
      this.draw();
    }
  }
  moveLeft() {
    if (!this.collision(-1, 0, this.activeTetromino)) {
      this.delete();
      this.x--;
      this.draw();
    }
  }
}
