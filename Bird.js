class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage('sprites/smoke.png');

    let trajectory = [];
    this.trajectory = trajectory;
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>9 && this.body.position.x>200){
      let birdxy = [this.body.position.x, this.body.position.y];
      this.trajectory.push(birdxy);
    }
    for(var x=0; x<this.trajectory.length; x++){
      image(this.smoke, this.trajectory[x][0], this.trajectory[x][1])
    }
  }
}
