var turtle;
var start;
var net;
var gameState = "start";
var interval;
function setup(){
    createCanvas(displayWidth - displayWidth/28, displayHeight - displayHeight/6);
    back = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
    turtle = new Turtle();
    start = new Start();
    net = new Net();
}
function preload(){
    backGround = loadImage("assets/background.png")
}

function draw(){
    //image(backGround,0,0, displayWidth , displayHeight);
    background("blue");
    back.addImage(backGround);
    back.velocityX = -3;
    back.scale = 1.5;
    if(back.x<100){
        back.x = displayWidth - displayWidth/28;

    }
    turtle.display();
    if(gameState === "start"){
        start.display();
    }
    if(gameState === "play"){
        start.hide();
        if(keyIsDown(32)){
            turtle.moveTurtleUp();
        }else{
            turtle.moveTurtleDown();
        }
        //function expression - when you are storing a function inside a variable
        interval = setInterval(net.spawnNet(),random(3000, 5000));
    }
    if(gameState === "end"){
        clearInterval(interval);
    }
    drawSprites();
}