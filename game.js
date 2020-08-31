class Game{
    constructor(){

    }
    getState(){
        var gameStatereft=database.ref("gameState")
        gameStatereft.on("value",function(data){
            gameState=data.val()
        })


    }
    update(State){
        database.ref("/").update({
            gameState:State
        })
        }
        async start(){
            if(gameState===0){
            player=new Player();
            var playercountref=await database.ref("playerCount").once("value")
            if(playercountref.exists()){
            playerCount=playercountref.val();
            player.getCount();
        }
         
            
            form=new Form();
            form.display();
            }
            
        }
        play(){
            form.hide();
            textSize(30);
            text("GaMe  StArT",120,100);
            Player.getPlayerInfo();
            if(allPlayers!==undefined){
                var displayposition=130;
           for(var plr in allPlayers){
               if(plr==="player"+player.index){
             fill("red");
             }
             else{
                 fill("black");
             }
             displayposition+=20
           }
            }
        }
}