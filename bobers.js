class Bob {
  constructor(x, y,) {
    var options = {
      isStatic:false,
      restitution : 0.9,
      friction : 0.1,
      density : 0.4
    }
    this.body = Bodies.circle(x,y,43,options);
    World.add(world, this.body);
  };
  display()
  {
    var  pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      fill(random(0,255),random(0,255),random(0,255));
      stroke(random(0,255),random(0,255),random(0,255));
      strokeWeight(5);
      ellipse(0,0,43*2);
      pop();
  };
};