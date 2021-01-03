class Ground extends Tree{
    constructor(x,y,width,height){
        super(x,y,width,height);
        World.add(world,this.body);
    }
    display(){
        super.display();
        var pos = this.body.position;
        rectMode(CENTER);
        fill("grey");
        
        rect(pos.x,pos.y,this.width,this.height);
    }
}