class Dustbinblue extends BaseClass{
    constructor(x, y, width, height){
        
        super(x,y,width,height);

        this.image = loadImage("sprites/trashcan.png");
     
    }display(){
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
    }