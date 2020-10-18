class Dustbin {
    constructor(x,y){

            this.x=x
            this.y=y
            
        this.bottom = Bodies.rectangle (this.x, this.y-20, 200, 20,{isStatic :true} )
        this.left =   Bodies.rectangle (this.x - 100, this.y-60, 20, 100,{isStatic :true} )
        this.right =  Bodies.rectangle (this.x + 100,this.y-60, 20, 100,{isStatic :true} )

        World.add(world,this.bottom)
        World.add(world,this.left)
        World.add(world,this.right)
    }
    display(){
        push ()
        fill ("red")
        rectMode(CENTER)
        rect(this.bottom.position.x, this.bottom.position.y,200, 20)
        rect(this.left.position.x, this.left.position.y,20, 100)
        rect(this.right.position.x, this.right.position.y,20, 100)
        pop ()
    }
}