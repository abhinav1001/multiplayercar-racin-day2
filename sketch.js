var database;
var gameState=0;
var playerCount;
var form,player,game;
var canvas;
var distance=0;
function setup(){
    canvas=createCanvas(400,400);
    database=firebase.database();
    game=new Game()
   game.getState()
   game.start()
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1);
    }
   
}


