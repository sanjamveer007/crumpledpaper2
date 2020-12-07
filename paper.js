class Paper{

	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1

		}
		
		//this.radius=radius;
		this.body = Bodies.circle(x,y,25, options)
		World.add(world, this.body);
		this.image = loadImage("paper.png")

	}
	display(){
			
			var paperpos=this.body.position;		

			push();
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			
			image(this.image,0,0,50,50);
			pop();
			
	}

}