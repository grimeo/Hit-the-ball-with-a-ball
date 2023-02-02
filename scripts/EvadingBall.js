export default class EvadingBall{
    constructor(color, x){
        this.x = x;
        this.y =  Math.floor(Math.random() * 400);
        this.radius = 20;
        this.Ydirection = 5;
        this.color = color;
        this.goingdown = true
    }

    update(){

        if(this.y <= 500 && this.goingdown == true){
            if(this.y >= 500 - this.radius) {
                this.goingdown = false;
                this.Ydirection = this.Ydirection * -1
            }
        }
        if(this.y <= 500 && this.goingdown == false ){
              if(this.y <= 2 + this.radius) {
                this.goingdown = true;
                this.Ydirection = this.Ydirection * -1
              }
        }
        this.y += this.Ydirection
    }
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
        ctx.closePath()
    }
}