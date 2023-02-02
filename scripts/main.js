import RunningBall from "../scripts/RunningBall.js"
import EvadingBall from "../scripts/EvadingBall.js"

const canvas = document.getElementById("playground");
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const eballColor = 'red';
const spawnBallColor = 'lime'

let spawnballs = []

let eballs = []
eballs.push(new EvadingBall(eballColor, 450) );
eballs.push(new EvadingBall(eballColor, 400) );
eballs.push(new EvadingBall(eballColor, 350) );
eballs.push(new EvadingBall(eballColor, 300) );
eballs.push(new EvadingBall(eballColor, 250) );
eballs.push(new EvadingBall(eballColor, 200) );
eballs.push(new EvadingBall(eballColor, 150) );



let getCursorPosition = (canvas, event) => {
    let rect = canvas.getBoundingClientRect()
    let x = Math.floor(event.clientX - rect.left)
    let y = Math.floor(event.clientY - rect.top)
    // console.log("x: " + x + " y: " + y)
    if(x <75 && spawnballs.length < 3)spawnballs.push(new RunningBall(x,y));
}

canvas.addEventListener('mousedown', function(e) {
    getCursorPosition(canvas, e)
})


let animate = () => {
    ctx.clearRect(0, 0, 500, 500);
    ctx.strokeRect(0, 0, 500, 500);
    
    ctx.beginPath();
    ctx.moveTo(75, 0);
    ctx.lineTo(75, 500);
    ctx.strokeStyle = 'green'
    ctx.stroke();

    [...eballs].forEach(object => object.update());
    [...eballs].forEach(object => object.draw(ctx));

    [...spawnballs].forEach(object => object.update());
    [...spawnballs].forEach(object => object.draw(ctx, spawnBallColor));
    spawnballs = spawnballs.filter(object => !object.deleteMark)
    console.log(spawnballs)

    requestAnimationFrame(animate)
}
animate();

