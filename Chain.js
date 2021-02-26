class Chain {
    constructor(bodyA, bodyB) {
     var options = {
         bodyA: bodyA,
         bodyB: bodyB,
         length: 10,
         stiffness: 0.04
     }
     this.chain = Constraint.create(options);
     World.add(world, this.chain);
              
 }   
    display() {
  
        //this point is referring to bodyA
        var pointA = this.chain.bodyA.position;
        //this point is referring to bodyB
        var pointB = this.chain.bodyB.position;
        push();
        strokeWeight(6);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        //line(x1,y1,x2,y2);
        pop();
        
        
    }

}