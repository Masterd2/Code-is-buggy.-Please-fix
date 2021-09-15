class Game {
  constructor(){}
  
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
      player = new Player()
      var meanVar=await database.ref('playerCount').once("value");
      if (meanVar.exists()){
        playerCount=meanVar.val;
        //player.getCount();
      }
      form = new Form()
      form.display();
    }
  }
}
