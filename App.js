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
let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    }
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for  (let j = 0; j < state.frames; j++){
        let positionX = j *  spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y:positionY});
    }
    spriteAnimations[state.name] = frames;
});

console.log(animationStates);

function animate(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations["idle"].loc.length;
    frameX = spriteWidth * position;
    ctx.drawImage(playerImage, frameX, frameY*spriteHeight,
        spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
        
        gameFrame++;

        requestAnimationFrame(animate);
};
animate();