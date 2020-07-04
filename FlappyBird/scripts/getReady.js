class GetReady {
    constructor() {
        this.sX = 0;
        this.sY = 228;
        this.w = 173;
        this.h = 152;
        this.x = canvas.width / 2 - 173 / 2;
        this.y = 80;
    };

    draw(){
        if (gameState.current === gameState.getReady) {
            context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this. y, this.w, this.h);
        }
    };
}