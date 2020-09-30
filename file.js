class Form{
    constructor(){

        this.input=createInput("NAME");
        this.button=createButton("PLAY");
        this.greetings=createElement("h3");

    }

    display(){
        var title=createElement("h2");
        title.html("Multi-Player Car Game");
        title.position(130,0);
        this.input=createInput("NAME");
        this.button=createButton("PLAY");
        this.greetings=createElement("h3");
        this.input.position(130,160);
        this.button.position(250,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var NAME=this.input.value();
            PlayerCount+=1;
            player.update(NAME);
            player.updateCount(PlayerCount);
            this.greetings.html("HELLO" + NAME);
            this.greetings.position(130,160);
        })
    }
}