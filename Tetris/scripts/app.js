const canvas = document.getElementById("tetris");
const ctx = canvas.getContext("2d");

document.addEventListener("keydown", e => {
  if (e.keyCode == 37) {
    piece.moveLeft();
  } else if (e.keyCode == 38) {
    piece.rotate();
  } else if (e.keyCode == 39) {
    piece.moveRight();
  } else if (e.keyCode == 40) {
    piece.moveDown();
  }
});

const _ROW = 20;
const _COL = 10;
const square = 20;
const vacant = "white";

const _PIECES = [
  [Z, "#f00000"],
  [S, "#00f000"],
  [T, "#a000f0"],
  [O, "#f0f000"],
  [L, "#f0a000"],
  [I, "#00f0f0"],
  [J, "#0000f0"],
];

let board = [];
for (let row = 0; row < _ROW; row++) {
  board[row] = [];
  for (let col = 0; col < _COL; col++) {
    board[row][col] = vacant;
  }
}

let piece = new Tetromino(_PIECES[0][0], _PIECES[0][1]);

let dropStart = Date.now();
function drop() {
  let now = Date.now();
  if (now - dropStart > 1000) {
    piece.moveDown();
    dropStart = Date.now();
  }
  requestAnimationFrame(drop);
}

drawBoard();
piece.draw();
drop();
