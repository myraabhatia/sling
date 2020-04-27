class Ball{
    constructor(x,y,width,height) {
      var options = {
         isStatic:true
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width; 
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX
      pos.y = mouseY
      rectMode(CENTER);
      fill("yellow");
    rect(pos.x, pos.y, this.width,this.height);
    }
  };