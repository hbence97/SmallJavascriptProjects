class GameOver {
    constructor() {
        this.sX = 175;
        this.sY = 228;
        this.w = 225;
        this.h = 202;
        this.x = canvas.width / 2 - 225 / 2;
        this.y = 90;
    }

    draw() {
        if (gameState.current === gameState.gameOver) {
            context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this. y, this.w, this.h);
        }
    }
}   