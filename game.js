class Game{
    constructor(){


    }
    getState(){
        var gameStateref=database.ref("GameState");
        gameStateref.on("value", 
        function(data){
            GameState = data.val()
        })
    }

    update(state){
        database.ref("/").update({
            GameState:state
        })
    }

    start(){
        if(GameState===0){
            player=new Player();
            //var playerCountref=await database.ref("PlayerCount").once("value")
            player.getCount();
            form=new Form();
            form.display();
        }
    }

    play(){
        console.log("I HAVE WON THE MATCH");
        //form.hide();
        textSize(30);
        text("GAME START",120,100);
        Player.getPlayerinfo();
        if(allPlayer!==undefined){
            var display_position=130;
            for(var plr in allPlayer){
                if(plr==="Player"+player.index)
                    fill("red");
                else
                    fill("black");
                display_position=display_position+20;
                textSize(15);
                text(allPlayer[plr].name+": "+allPlayer[plr].distance,120,display_position);
            }
        }

        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+50;
            player.update();
        }

       }
}