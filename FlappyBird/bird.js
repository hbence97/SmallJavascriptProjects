class Bird {
    constructor() {
        this.animation = [
        {sX: 276, sY: 112},
        {sX: 276, sY: 139},
        {sX: 276, sY: 164},
        {sX: 276, sY: 139},
    ];
        this.x = 50;
        this.y = 150;
        this.w = 34;
        this.h = 26;
        this.frame = 0;
        this.gravity = 0.25;
        this.flapping = 4.6;
        this.speed = 0;
    };

    draw() {
        let bird = this.animation[this.frame];
        context.drawImage(sprite, bird.sX, bird.sY, this.w, this.h, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
    }
    flap() {
        this.speed = -this.flapping;
    };
    update(){
        this.period = gameState.current === gameState.getReady ? 10 : 5;
        this.frame += frames % this.period === 0 ? 1 : 0;
        this.frame = this.frame % this.animation.length;

        if (gameState.current === gameState.getReady) {
            this.y = 150;
        } else {
            this.speed += this.gravity;
            this.y += this.speed;
            if(this.y + this.h / 2 >= canvas.height - foreground.h) {
                this.y = canvas.height - foreground.h - this.h / 2;
                if (gameState.current === gameState.game) {
                    gameState.current = gameState.gameOver;
                }
            }
        }
    };
}