class Block{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed);
        if((this.body.speed)<3){   
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(250,20,120)
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();}
        else{
          World.remove(world,this.body)
        }

      }
}