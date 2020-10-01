const canvas = document.getElementById("tetris");
const ctx = canvas.getContext("2d");

const _ROW = 20;
const _COL = 20;
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

/*let board = [];
for (let row = 0; row < _ROW; row++) {
  board[row] = [];
  for (let col = 0; col < _COL; col++) {
    board[row][col] = vacant;
  }
}*/

let piece = new Tetromino(_PIECES[0][0], _PIECES[0][1]);

drawBoard();
piece.draw();
