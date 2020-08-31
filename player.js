class Player{
constructor(){
 this.index=null;
 this.distance=0;
 this.name=null;
}
getCount(){
var Playercountreft=database.ref("playerCount")
Playercountreft.on("value",function(data){
playerCount=data.val();

});

}
updateCount(count){
    database.ref("/").update({
        playerCount:count

    })
    

}
update(){
    var playerindex="players/player"+this.index;
    database.ref().set({
        name:name
    })
}
}