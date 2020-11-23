class Sling{
   constructor(bodyA,pointB){
     var options={
      bodyA : bodyA,
      pointB : pointB,
      stiffness:1,
      angularStiffness:1,
      length : 220
     }
      this.pointB = pointB;
      this.pointX = bodyA.x;
      this.pointY = bodyA.y-250;
      this.bodies = Constraint.create(options);
      World.add(world, this.bodies);
   }

 display(){
     if(this.bodies.bodyA){
         var pointA = this.bodies.bodyA.position;
         var pointB = this.pointB;
         push()
         strokeWeight(3.5);
         stroke("white");
         line(pointB.x,pointB.y,pointA.x,pointA.y);
         pop();
     }
 } 
}
