class Player{
    constructor(){
        
        this.NAME=null;
        this.distance=0;
        this.index=null;

    }
    getCount(){
        var playerCountref=database.ref("PlayerCount");
        playerCountref.on("value", 
        function(data){
            PlayerCount = data.val()
        })
    }

    updateCount(count){
        database.ref("/").update({
            PlayerCount:count
        })
    }

    update(){
        var playerIndex="Players/Player"+ this.index;
        database.ref(playerIndex).set({
            NAME:this.NAME,
            distance:this.distance
        })
    }

    static getPlayerinfo(){
        var Playerinfo=database.ref("Players");
        Playerinfo.on("value",
            (data)=>{
                allPlayer=data.val()
            }
       );
    }
}


