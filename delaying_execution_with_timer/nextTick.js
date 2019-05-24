const EventEmitter = require("events").EventEmitter;

function complexOperation(){
	const event = new EventEmitter();

	process.nextTick(() => {
		event.emit("success1");
	})

	event.emit("success2");

	return event;
}

complexOperation().on("success1", () => {
	console.log("success1 !")
})

complexOperation().on("success2", () => {
	console.log("success2 !")		//this won't be received
})

//the event would be emit before the listener has been subscribed