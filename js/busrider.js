function BusRider(name){
    this.name = name;
}

BusRider.prototype = {
    addListener: function(event, handler){
        if (!(this instanceof BusRider))
            throw new Error("I work only with BusRiders!");

        this.eventBus.addListener(event, handler);
    },
    eventBus: new EventBus(),
    say: function(message){
        this.eventBus.triggerEvent("say", message, this);
    }
};

yossi = new BusRider("yossi");
shem = new BusRider("shem");

shem.addListener("say", function(message, sender){
    console.log("Shem is sad about " + sender.name + " " + message);
});

yossi.say("leaving the bus");


