const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const circle = document.querySelector(".circle");

let playerScore = 0;
let enemyScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(playerChoice, computerChoice) {
  playerScore++;
  const compLabel = 'Computer'.fontsize(3).sub();
  userScore.innerHTML = playerScore;
  result.innerHTML = `${playerChoice} beats ${compLabel}${computerChoice}. You Won!`;
  circle.classList.add('win');
  setTimeout(() => {circle.classList.remove('win')}, 500);
}

function lose(playerChoice, computerChoice) {
  enemyScore++;
  const compLabel = 'Computer'.fontsize(3).sub();
  computerScore.innerHTML = enemyScore;
  result.innerHTML = `${compLabel}${computerChoice} beats ${playerChoice}. You Lost!`;
  circle.classList.add('lose');
  setTimeout(() => {circle.classList.remove('lose')}, 500);
}

function draw() {
  result.innerHTML = "It's a draw!";
  circle.classList.add('draw');
  setTimeout(() => {circle.classList.remove('draw')}, 500);
}

function game(playerChoice) {
  const computerChoice = getComputerChoice();
  switch (playerChoice + " " + computerChoice) {
    case "Rock Scissors":
    case "Scissors Paper":
    case "Paper Rock":
      win(playerChoice, computerChoice);
      break;
    case "Rock Paper":
    case "Paper Scissors":
    case "Scissors Rock":
      lose(playerChoice, computerChoice)
      break;
    case "Rock Rock":
    case "Paper Paper":
    case "Scissors Scissors":
      draw(playerChoice, computerChoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", () => game("Rock"));

  paper.addEventListener("click", () => game("Paper"));

  scissors.addEventListener("click", () => game("Scissors"));
}

main();