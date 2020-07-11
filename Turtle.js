class Turtle{
    constructor(){
        this.turtle = createSprite(100,100, 50,50);
        this.image= loadImage("assets/turtle.png");
    }
    display(){
        this.turtle.addImage(this.image);
    }
    moveTurtleUp(){
        this.turtle.y = this.turtle.y - 10;
    }
    moveTurtleDown(){
        this.turtle.y +=4;
    }
    calculateScore(){

    }
}
