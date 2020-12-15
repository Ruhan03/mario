class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      
      mario= createSprite(410,600,50,50);
      mario.addAnimation("mario",marioIm);
      mario.scale=0.5;

      
      
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      if(allPlayers !== undefined){
        var index = 0;
  
         
          if (index === player.index){
            stroke(10);
           // camera.position.x = mario.x/2;
           // camera.position.y = gd.y;
           if(keyWentDown("d")){
            mario.x=mario.x+3;
            mario.changeAnimation("mario",marioImg);
          }
          if(keyWentDown("a")){
            mario.x=mario.x-3;
            mario.changeAnimation("mario",marioIm);
          }
          }
         
        }
        if(mario.isTouching(invisibleGd)){
          mario.velocityX=0;
        }
        else{
    console.log(out);
        }
  
      }
    }