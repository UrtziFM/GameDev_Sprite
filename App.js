const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const canvasWidth  = canvas.width = 600;
const canvasHeight = canvas.height = 600;

const  playerImage = new Image();
playerImage.src = "Assets/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;

function animate(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    //ctx.fillRect(100, 50, 100, 100);
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, frameX*spriteWidth, frameY*spriteHeight,
        spriteHeight, spriteHeight, 0, 0, spriteWidth, spriteHeight);
        if( frameX < 6){
            frameX++;
        } else {
            frameX = 0;
        }
        requestAnimationFrame(animate);
};
animate();