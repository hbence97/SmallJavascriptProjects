class Score {
    constructor() {
        this.highScore = parseInt(localStorage.getItem('highScore')) || 0;
        this.value = 0;
    }

    draw() {
        context.fillStyle = 'white';
        context.strokeStyle = 'black';

        if (gameState.current === gameState.game) {
            context.lineWidth = 2;
            context.font = '35px Teko';
            context.fillText(this.value, canvas.width / 2, 50);
            context.strokeText(this.value, canvas.width / 2, 50);
        } else if (gameState.current === gameState.gameOver) {
            context.font = '25px Teko';
            context.fillText(this.value, 225, 186);
            context.strokeText(this.value, 225, 186);

            context.fillText(this.highScore, 225, 228);
            context.strokeText(this.highScore, 225, 228);
        }
    }
    reset() {
        this.value = 0;
    }
}