const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

let frames = 0;

const sprite = new Image();
sprite.src = 'images/sprite.png';

const gameState = {
    current: 0,
    getReady: 0,
    game: 1,
    gameOver: 2
}

const bird = new Bird();
const foreground = new Foreground();
const background = new Background();
const getReady = new GetReady();
const gameOver = new GameOver();

canvas.addEventListener('click', () => {
    switch(gameState.current) {
        case gameState.getReady:
            gameState.current = gameState.game;
            break;
        case gameState.game:
            bird.flap();
            break;
        case gameState.gameOver:
            gameState.current = gameState.getReady;
            break;
    }
});

function draw() {
    context.fillStyle = '#70c5ce';
    context.fillRect(0, 0, canvas.width, canvas.height);

    background.draw();
    foreground.draw();
    bird.draw();
    bird.update();
    getReady.draw();
    gameOver.draw();
};

function update() {
    bird.update();
};

function gameLoop() {
    frames++;
    draw();

    requestAnimationFrame(gameLoop);
};

gameLoop();