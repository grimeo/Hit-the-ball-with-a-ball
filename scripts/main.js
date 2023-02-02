import RunningBall from "../scripts/RunningBall.js"
import EvadingBall from "../scripts/EvadingBall.js"

const canvas = document.getElementById("playground");
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const eballColor = 'white';
const spawnBallColor = 'black'

let spawnballs = []

let eballs = []
eballs.push(new EvadingBall(eballColor, 450) );
eballs.push(new EvadingBall(eballColor, 400) );
eballs.push(new EvadingBall(eballColor, 350) );
eballs.push(new EvadingBall(eballColor, 300) );
eballs.push(new EvadingBall(eballColor, 250) );

let animate = () => {
    ctx.clearRect(0, 0, 500, 500);
    ctx.strokeRect(0, 0, 500, 500);
    
    [...eballs].forEach(object => object.update());
    [...eballs].forEach(object => object.draw(ctx));
    [...spawnballs].forEach(object => object.update());
    [...spawnballs].forEach(object => object.draw(ctx, spawnBallColor));

    requestAnimationFrame(animate)
}
animate();


let getCursorPosition = (canvas, event) => {
    let rect = canvas.getBoundingClientRect()
    let x = Math.floor(event.clientX - rect.left)
    let y = Math.floor(event.clientY - rect.top)
    // console.log("x: " + x + " y: " + y)
    spawnballs.push(new RunningBall(x,y))
}

canvas.addEventListener('mousedown', function(e) {
    getCursorPosition(canvas, e)
})