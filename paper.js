class Paper{
constructor(x,y){
    var options ={
      isStatic: false,
      'restitution':0.7,
      'friction':0.5,
      'density': 7
    }
    this.body=Bodies.rectangle(x,y,30,30,options);
    this.width=30;
    this.height=30;
    this.image = loadImage("sprites/paperimage.png")


}


display() {
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("white");
    image(this.image,0,0, this.width, this.height);
    pop();
}

}