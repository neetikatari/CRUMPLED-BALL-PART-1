class Paper{
    constructor(x,y,radius){
       this.x=x
       this.y=y
       this.radius=radius

       var options ={
           isStatic : false,
           restitution :0.04,
           friction:0.5,
           destity :1.2
       }
       this.body=Bodies.circle(this.x, this.y, this.radius,options) 
       World.add(world,this.body)
    }

    display(){
      push ()
      translate(this.body.position.x, this.body.position.y)
      fill ("purple")
      ellipseMode(RADIUS)
      ellipse(0,0,this.radius,this.radius)
      pop ()
        
    }
}