class Start{
    constructor(){
        this.button = createSprite(displayWidth/2, displayHeight/2, 60, 20);
        this.image = loadImage('assets/playbutton.png');
    }
    hide(){
        this.button.visible = false;
    }
    display(){
        this.button.addImage(this.image);
        if(mousePressedOver(this.button)){
            gameState ="play";
        }
    }
}