class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:1,
            length:220,
            angularStiffness:1
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
    }
    
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke("white");
        strokeWeight(3.5);
        line(pointB.x, pointB.y, pointA.x, pointA.y);
    }
}  
};