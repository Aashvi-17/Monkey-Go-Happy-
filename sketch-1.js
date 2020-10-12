var fixed , moving;

function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 100, 50);
  fixed.shapeColor="blue";
  fixed.debug=true;

 moving=createSprite(500,200,100,150);
 moving.shapeColor="blue"
moving.debug=true;

}

function draw() {
  background("pink");
  moving.x=World.mouseX;
moving.y=World.mouseY;  

if(fixed.x - moving.x < fixed.width/2 + moving.width/2 && moving.x - fixed.x < fixed.width/2 + moving.width/2 &&
  fixed.y - moving.y < fixed.height/2 + moving.height/2 && moving.y - fixed.y < fixed.height/2 + moving.height/2){
  fixed.shapeColor="red";
  moving.shapeColor="red";
}
else{
  fixed.shapeColor="blue";
  moving.shapeColor="blue";
}
  drawSprites();
}