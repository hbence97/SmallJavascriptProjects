class Foreground {
    constructor() {
        this.sX = 276;
        this.sY = 0;
        this.w = 224;
        this.h = 112;
        this.x = 0;
        this.y = canvas.height - 112;
    };

    draw(){
        context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this. y, this.w, this.h);
        context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.w, this. y, this.w, this.h);
    };
}