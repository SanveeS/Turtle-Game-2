class Net{
    constructor(){
        this.net = null;
        this.image = loadImage("assets/fishingnet.png");
    }
    display(){
    }
    spawnNet(){
        //if (frameCount % 100 === 0) {
            this.net = createSprite(500,500,30,30);
            this.net.velocityX = -3;
            this.net.addImage(this.image);
             //assign lifetime to the variable
            this.net.lifetime = 200;
            console.log("working");
            //adjust the depth
            //cloud.depth = trex.depth;
            //trex.depth = trex.depth + 1;
            
            //add each cloud to the group
            //cloudsGroup.add(cloud);
         //}
    }
}