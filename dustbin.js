class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
     
      
      
      this.width = width;
      this.height = height;
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
      //this.dustbinImg = loadImage("dustbingreen.png");
      
     }
    
    
     display(){
      
      var pos =this.body.position;
     //rectMode(CENTER)
     RectMode(CENTER)
     stroke("black")
      rect(pos.x , pos.y, this.width, this.height);
      //image(this.dustbinImg,pos.x,pos.y,150,100);
     
    }
  };