const drawSquare = (x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x * square, y * square, square, square);

  ctx.strokeStyle = "grey";
  ctx.strokeRect(x * square, y * square, square, square);
};

const drawBoard = () => {
  for (let row = 0; row < _ROW; row++) {
    for (let col = 0; col < _COL; col++) {
      drawSquare(row, col, vacant);
    }
  }
};
