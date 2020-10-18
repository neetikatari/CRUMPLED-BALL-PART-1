// CLASSES AND OBJECTS
// PROJECT NAME : SUPPLY MISSION -2
// AIM:  drop supplies and medical kits inside a designated red drop zone in the middle of a zombie apocalypse.
// USING: CLASSES AND OBJECT

/*
BOX CLASS is created to create insice which the package is dropped. 
box has 3 sixed left,right and bottom and all are static 
Package initially created is static, when down arrow is pressed the package is made free falling body.
The helicoptor can be controlled with left and right arrow to move it.
*/

//name space
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//global variables
var engine, world;
var ground
var paper

function setup(){

        createCanvas(1500,800);
        
        //engine and world creation 
        engine = Engine.create();
        world =engine.world;

        paper = new Paper(100,400,40)
        //ground BODIES OBJECT - static physic object
        ground = new Ground(width/2, height-40, width, 20)
        dustbin = new Dustbin (width-300, height -40)
     
        console.log(paper)

    }

function draw(){
        background(0);

        //update the engine as x and y axis keep changing
        Engine . update (engine);
        paper.display()
   
        ground.display()
        dustbin.display()
        
        console.log(paper.force.x)
    
       
}



function keyPressed() {
    if (keyCode === UP_ARROW) {

       Matter.Body.applyForce(paper.body,paper.body.position, {x:105,y:-85});
          
   }
}
