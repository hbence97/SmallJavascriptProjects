const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

let frames = 0;
const DEGREE = Math.PI/180;

const sprite = new Image();
sprite.src = 'images/sprite.png';

const sfxDie = new Audio('audio/sfx_die.wav');
const sfxFlap = new Audio('audio/sfx_flap.wav');
const sfxCollision = new Audio('audio/sfx_collision.wav');
const sfxPoint = new Audio('audio/sfx_point.wav');
const sfxSwooshing = new Audio('audio/sfx_swooshing.wav');

const gameState = {
    current: 0,
    getReady: 0,
    game: 1,
    gameOver: 2
}

const startButton = {
    x: 120,
    y: 263,
    w: 83,
    h: 29
}

canvas.addEventListener('click', e => {
    switch(gameState.current) {
        case gameState.getReady:
            sfxSwooshing.play();
            gameState.current = gameState.game;
            break;
        case gameState.game:
            sfxFlap.play();
            bird.flap();
            break;
        case gameState.gameOver:
            let rect = canvas.getBoundingClientRect();
            let clickX = e.clientX - rect.left;
            let clickY = e.clientY - rect.top;

            if (clickX >= startButton.x && clickX <= startButton.x + startButton.w && clickY >= startButton.y &&
                clickY <= startButton.y + startButton.h) {
                    pipes.reset();
                    bird.speedReset();
                    score.reset();
                    gameState.current = gameState.getReady;
                }
            break;
    }
});

const bird = new Bird();
const foreground = new Foreground();
const background = new Background();
const getReady = new GetReady();
const gameOver = new GameOver();
const pipes = new Pipes();
const score = new Score();

function draw() {
    context.fillStyle = '#70c5ce';
    context.fillRect(0, 0, canvas.width, canvas.height);

    background.draw();
    foreground.draw();
    bird.draw();
    pipes.draw();
    getReady.draw();
    gameOver.draw();
    score.draw();
}

function update() {
    bird.update();
    foreground.update();
    pipes.update();
}

function gameLoop() {
    update();
    draw();
    frames++;

    requestAnimationFrame(gameLoop);
}

gameLoop();