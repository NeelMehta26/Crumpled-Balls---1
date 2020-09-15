class Paper{
    constructor(x, y, d){
        var options = {
            'restitution':0.3,
            'friction': 0.5,
            'density': 1.2,
            'isStatic': false
        }

        this.body = Bodies.circle(x, y, d, options);
        this.diameter = d;
        World.add(world, this.body);
    }

    display(){
        push ();
        circleMode(Center);
        fill ('orange');
        strokeWeight(3);
        stroke('blue');
        circle(0, 0, this.d);
        pop ();
    }
}