class Background {
    constructor() {
        this.sX = 0;
        this.sY = 0;
        this.w = 275;
        this.h = 226;
        this.x = 0;
        this.y = canvas.height - 226;
    };

    draw() {
        context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this. y, this.w, this.h);
        context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.w, this. y, this.w, this.h);
    };
}