function monitor(){
	console.log(process.memoryUsage())
}

let id = setInterval(monitor, 1000);
id.unref();

setTimeout(() => {
	console.log("Done !")
}, 1100)