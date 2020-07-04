class Pipes {
    constructor() {
        this.positions = [];
        this.top = { sX : 553, sY : 0 };
        this.bottom = { sX : 502, sY : 0 };
        this.w = 53;
        this.h = 400;
        this.gap = 85;
        this.maxYPos = -150;
        this.dX = 2;
    };

    draw() {
        for (let i = 0; i < this.positions.length; i++) {
            let p = this.positions[i];

            let topYPos = p.y;
            let bottomYPos = p.y + this.h + this.gap;

            context.drawImage(sprite, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.w, this.h);
            context.drawImage(sprite, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.w, this.h);
        };
    };
    update() {
        if (gameState.current !== gameState.game) return;

        if (frames % 100 === 0) {
            this.positions.push({
                x : canvas.width,
                y : this.maxYPos * (Math.random() + 1)
            });
        };

        for (let i = 0; i < this.positions.length; i++) {
            let p = this.positions[i];
            p.x -= this.dX;
            
        };
    };
}