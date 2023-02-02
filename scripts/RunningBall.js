export default class RunningBall {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.deleteMark = false
    }
    update(){
        this.x += 5;
        if(this.x > 500){this.deleteMark = true}
    }
    draw(ctx, color){
        ctx.beginPath()
        ctx.fillStyle = color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }
}