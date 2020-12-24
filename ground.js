class ground{
    constructor(y){
    
    var options = {
    isStatic: true,
    'restitution': 0.3,
    'friction': 1,
    'density': 2
    }

this.body = Bodies.rectangle(400,y,800,40,options);
this.width = 800;
this.height = 40;


World.add(world,this.body);
}

display(){
var pos = this.body.position;
push();
translate(pos.x,pos.y);
rectMode(CENTER);
fill("green");
rect(0,0,this.width,this.height);
pop();
}
}