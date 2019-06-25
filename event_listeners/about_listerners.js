const EventEmitter = require("events").EventEmitter;

class Pulse extends EventEmitter{
	constructor(){
		super();
		this.on("newListener", (event, listener) => {	//if using class, "newListener" should be add here 
			console.log(`eventName : ${event}, listener : ${listener}`)
		})
	}
	start(){
		this.emit("event")
	}
	stop(){
		console.log(`listeners of "event : "${this.listeners("event")}`)
	}
}

const pulse = new Pulse();

pulse.on('event', () => {
      console.log("this is event listener");	//this will cause "newListener" to fire
});

pulse.on('event', () => {
      console.log("this is event listener 2");	//this will cause "newListener" to fire too
});

pulse.stop();