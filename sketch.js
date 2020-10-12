var monkey,scene,monkeyimg,scene,scene1,bananaimg,banana,stone,stoneimg,score,PLAY,END,gameState,time,monkeyimg2,basket,basketimg,basketbananaimg,basketbanana,touchtime;

function preload(){
  monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  monkeyimg2=loadAnimation("Monkey_03.png");
  scene1=loadImage("jungle.jpg");
  bananaimg=loadImage("banana.png");
  stoneimg=loadImage("stone.png");
  basketimg=loadImage("basketphoto.PNG");
  basketbananaimg=loadImage("bananana.PNG");
 heartimg=loadImage("heart.PNG");
}
function setup() {
  createCanvas(500,400);
 flasktime=0;
  score=0;
  time=0;
scene=createSprite(10, 0.700, 200, 200);
  scene.addImage("jungle",scene1);
  scene.velocityX = -4;
  //scene.scale = 0.2;
  
 capture=createSprite(440, 300.700, 200, 200);
capture.addImage("cap",basketimg);
 capture.visible=false;
  capture.scale=0.3;
  
  monkey=createSprite(40, 250, 20, 50);
  monkey.addAnimation("running",monkeyimg);
  monkey.scale=0.1;
  flaskGroup=new Group();
  bananaGroup=new Group();
 stoneGroup=new Group();
 
  invisibleGround = createSprite(200,260,400,10);
  invisibleGround.visible = false;
  
  basketbanana = createSprite(440,280, 20, 5);
           basketbanana.addImage("bannana",basketbananaimg);
            basketbanana.scale = 0.7;
  heart=createSprite(20,380,10,10);
  heart.addImage("heart",heartimg);
  heart.scale=0.1;
  
  heart2=createSprite(80,380,10,10);
  heart2.addImage("heart",heartimg);
  heart2.scale=0.1;
  gameState=PLAY;
  END=2;
 touchtime=0;
  maxscale=0;
}

function draw() {
  background("DARKGREEN");
  
  if((gameState="PLAY")||(gameState="END")){
    stroke("black");
    textSize(15);
    fill("white");
    text("Score  : "+ score,400,398);
    
  }
  //for moving background
 if (scene.x < 0) {
     scene.x = scene.width / 2;
    }
 
  if (monkey.isTouching(bananaGroup)) {
            capture.visible=true;
            bananaGroup.destroyEach();
            //monkey.velocityY = 2;
            score = score + 2;
           basketbanana.visible=true;
   if(maxscale<=2){
       monkey.scale=monkey.scale+0.1;
   }
           
           maxscale=maxscale+1;  
        }
      else{
          capture.visible=false;  
         basketbanana.visible=false;
 } 
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
   monkey.collide(invisibleGround);
  
   if (monkey.isTouching(stoneGroup)) {
    maxscale=0;
            monkey.scale=0.1; 
     touchtime=touchtime+1;
heart.destroy();
        }
  if(touchtime==2){
    gameState = END;
    heart2.destroy();
            stroke("white")
            textSize("80");
            fill("white");
            text("GAME  OVER", 200, 150);
            capture.visible=false;
             scene.visible=false;
           scene.velocityX=0;
      bananaGroup.visible=false;
            stoneGroup.setVelocityXEach(0);
            monkey.velocityX = 0;
     monkey.scale=0.1;
  }
  
  if(gameState===END){
     bananaGroup.setVisibleEach(false);
  }
  food();
  
  obstacles();
  drawSprites();
}
  function food() {
         if (World.frameCount % 70 === 0&&(gameState==="PLAY")) {
            var banana = createSprite(500,100, 20, 5);
            banana.addImage("bannana",bananaimg);
            banana.scale = 0.1;
            banana.y = Math.round(random(20, 200))
            // banana.x = randomNumber(40, 300);
            banana.velocityX = -7;
            bananaGroup.add(banana);
            bananaGroup.lifetime = 67;
 
     bananaGroup.debug = true;
        }
    

    }

    function obstacles() {
        if (World.frameCount % 250 === 0&&(gameState==="PLAY")) {
            var stone = createSprite(400, 260, 20, 5);
            stone.addImage("Stone",stoneimg);
            stone.scale = 0.2;

           stone.setCollider("circle", 0, 0, 100);
    stone.debug = false;
            stone.x = Math.round(random(400, 400));
            stone.velocityX = -8;
            stoneGroup.add(stone);
            stoneGroup.lifetime = 50;
          
          switch(score){
            case 10:monkey.scale=0.12;
              break;
               case 20:monkey.scale=0.14;
              break;
               case 30:monkey.scale=0.16;
              break;
               case 40:monkey.scale=0.18;
              break;
              default: break;
          }
          
        }

    }
    