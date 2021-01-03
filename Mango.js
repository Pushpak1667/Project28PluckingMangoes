class Mango extends Tree{

    constructor(x,y){
        super(x,y,70,80);
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
}