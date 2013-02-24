function EventBus(){
    var listeners = {};

    this.addListener = function(event, handler){
        if (!listeners[event])
            listeners[event] = [];

        listeners[event].push(handler);
    };

    this.triggerEvent = function(event, data, sender){
        var eventListeners = listeners[event];
        if (!eventListeners)
            return false;

        eventListeners.forEach(function(listener){
            listener(data, sender);
        });
    };
}