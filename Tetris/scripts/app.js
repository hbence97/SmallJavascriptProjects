const canvas = document.getElementById("tetris");
const ctx = canvas.getContext("2d");
const scoreboard = document.getElementById("score");
const highScoreboard = document.getElementById("high-score");
const button = document.querySelector(".button");

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
let board = [];
let piece;
let gameOver = false;
let score = 0;
let highScore = localStorage.getItem("tetrisHighScore");
let isRowFull;

const _PIECES = [
  [Z, "#f00000"],
  [S, "#00f000"],
  [T, "#a000f0"],
  [O, "#f0f000"],
  [L, "#f0a000"],
  [I, "#00f0f0"],
  [J, "#0000f0"],
];

for (let row = 0; row < _ROW; row++) {
  board[row] = [];
  for (let col = 0; col < _COL; col++) {
    board[row][col] = vacant;
  }
}

button.addEventListener("click", e => {
  window.location.reload();
});

const randomTetromino = () => {
  let randomNum = Math.floor(Math.random() * _PIECES.length);
  return new Tetromino(_PIECES[randomNum][0], _PIECES[randomNum][1]);
};

piece = randomTetromino();

const newPiece = () => {
  piece = randomTetromino();
};

const lockTetromino = () => {
  for (let i = 0; i < piece.activeTetromino.length; i++) {
    for (let j = 0; j < piece.activeTetromino.length; j++) {
      if (!piece.activeTetromino[i][j]) {
        continue;
      }
      if (piece.y + i < 0) {
        alert("Game Over");
        gameOver = true;
        break;
      }
      board[piece.y + i][piece.x + j] = piece.color;
    }
  }

  for (let row = 0; row < _ROW; row++) {
    isRowFull = true;
    for (let col = 0; col < _COL; col++) {
      isRowFull = isRowFull && board[row][col] != vacant;
    }
    if (isRowFull) {
      for (let r = row; r > 0; r--) {
        for (let col = 0; col < _COL; col++) {
          board[r][col] = board[r - 1][col];
        }
      }
      for (let j = 0; j < _COL; j++) {
        board[0][j] = vacant;
      }
      score += 10;
    }
  }

  drawBoard();
  scoreboard.innerHTML = score;
};

let dropStart = Date.now();
function drop() {
  let now = Date.now();
  if (now - dropStart > 900) {
    piece.moveDown();
    if (piece.collision(0, 1, piece.activeTetromino)) {
      lockTetromino();
      newPiece();
    }
    dropStart = Date.now();
  }
  if (!gameOver) {
    requestAnimationFrame(drop);
  }

  if (localStorage.getItem("tetrisHighScore") === null) {
    localStorage.setItem("tetrisHighScore", 0);
  }

  if (score > highScore) {
    localStorage.setItem("tetrisHighScore", score);
  }
  highScoreboard.innerHTML = highScore;
}

drawBoard();
piece.draw();
drop();
