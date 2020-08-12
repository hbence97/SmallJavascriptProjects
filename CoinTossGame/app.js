const buttons = document.querySelector('.buttons');
const heads = document.querySelector('.heads');
const tails = document.querySelector('.tails');
const playerSelected = document.querySelector('.player-selected');
const computerSelected = document.querySelector('.computer-selected');
const imageHeads = document.querySelector('.image-heads');
const imageTails = document.querySelector('.image-tails');
let userScore = document.querySelector('.user-score');
let compScore = document.querySelector('.comp-score');
const selectionsH2 = document.querySelector('.selections h2');
const win = document.querySelector('.win');
const lose = document.querySelector('.lose');
const tryAgain = document.querySelector('.try-again');

buttons.addEventListener('click', e => {
    e.preventDefault();

    if (e.target == heads || e.target == tails) {
        imageHeads.style.display = 'none';
        imageTails.style.display = 'none';
    }
    
    let coinFlip = Math.floor(Math.random() * 2) + 1;;
    let playerChoice;
    
    if (e.target == heads) {
        if (coinFlip === 1) {
            imageHeads.style.display = 'block';
            playerChoice = 'Heads';
            playerSelected.innerHTML = playerChoice;
            computerSelected.innerHTML = 'Tails';
            userScore.innerHTML++;
        } else {
            imageTails.style.display = 'block';
            playerChoice = 'Heads';
            playerSelected.innerHTML = playerChoice;
            computerSelected.innerHTML = 'Tails';
            compScore.innerHTML++;
        }
    } else if (e.target == tails) {
        if (coinFlip === 2) {
            imageTails.style.display = 'block';
            playerChoice = 'Tails';
            playerSelected.innerHTML = playerChoice;
            computerSelected.innerHTML = 'Heads';
            userScore.innerHTML++;
        } else {
            imageHeads.style.display = 'block';
            playerChoice = 'Tails';
            playerSelected.innerHTML = playerChoice;
            computerSelected.innerHTML = 'Heads';
            compScore.innerHTML++;
        }
    }

    if (userScore.innerHTML > 6 || compScore.innerHTML > 6) {
        buttons.style.display = 'none';
        imageHeads.style.display = 'none';
        imageTails.style.display = 'none';
        selectionsH2.style.display = 'none';
    }

    if (userScore.innerHTML == 7) {
        win.style.display = 'block';
        tryAgain.style.display = 'block';
    } else if (compScore.innerHTML == 7) {
        lose.style.display = 'block';
        tryAgain.style.display = 'block';
    }
});