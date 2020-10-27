class chain{
    constructor(bodyA, pointB){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }


    display(){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();
           line(pointA.x-25, pointA.y, pointB.x-5, pointB.y);
           line(pointA.x-25, pointA.y, pointB.x+30, pointB.y);
           pop();
        
    }
    
}