 var mario,marioImg;
 var bgImg,gd;
 var mush1,mush2;
 var mush1Img,mush2Img;
 var invisibleGd,gameOverImg;
 var gameOver,marioIm,marioI;
 var form,game,playerCount=0;
var gameState=1,player;
var allPlayers;
  
 function preload(){
  
   marioImg=loadAnimation("Images/M1.png","Images/M2.png","Images/M3.png");
   marioIm=loadImage("Images/M2.png");
   bgImg=loadImage("Images/marko.png");
   mush1Img=loadImage("Images/mus1.png");
   mush2Img=loadImage("Images/mus2.png");
   gameOverImg=loadImage("Images/GameOver.JPG");

}
 
function setup() {

  
  createCanvas(displayWidth,displayHeight);
  database=firebase.database();
  gd = createSprite(400,600,40,20);
 // gd.addAnimation("gd",bgImg);
  gd.scale=0.8;

  invisibleGd = createSprite(410,590,120,10);
  invisibleGd.visible = false;

 

  game=new Game();
  game.getState();
  game.start();

 
 /* mario.setCollider();
camera.position.x=mario.x;
camera.position.y=gd.y;
*/

  
}

function draw() {
  if(playerCount===1){
    game.update(1);
    }
    if(gameState === 1){
      
      game.play();
    }
    if(gameState === 2){
      game.end();
    }
   
    
   background();  
  drawSprites();

}


function sp(){
  if(mario.isToucing()){
     mario.scale=0.5;
  }
}




function spawnMusrooms(){
  if(frameCount% 120 ===0) {
     mush1 = createSprite(600,800,10,40);
     mush1.scale=0.09;
  mush1.addImage("mush1",mush1Img);
          
  }
 }

function spawnMushrooms(){
  if(frameCount%60===0){
    mush2=createSprite();
    mush2.addImage("mush2",mush2Img);
            
  }
}
