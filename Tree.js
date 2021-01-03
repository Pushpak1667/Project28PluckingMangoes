class Tree{
    constructor(x,y,width,height){
     var options = {
         isStatic : true
     }   
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
this.image = loadImage("tree.png");


    }
    display(){
        var treePos = this.body.position
        imageMode(CENTER);
        image(this.image,treePos.x,treePos.y,this.width,this.height);
        

    }
}