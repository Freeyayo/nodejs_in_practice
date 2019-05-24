function monitor(){
	console.log(process.memoryUsage())
}

let id = setInterval(monitor, 1000);
id.unref();

setTimeout(() => {
	console.log("Done !")
}, 1100)	

//>>>	{ rss: 20545536,
// 		  heapTotal: 6537216,
// 		  heapUsed: 4035592,
// 		  external: 8272 }
//>>> 	Done!


///////////////////////////////

function monitor(){
	console.log(process.memoryUsage())
}

let id = setInterval(monitor, 1000);
id.unref();

setTimeout(() => {
	console.log("Done !")
}, 900)	

//>>> 	Done!


///////////////////////////////

function monitor(){
	console.log(process.memoryUsage())
}

let id = setInterval(monitor, 1000);
id.unref();

setTimeout(() => {
	console.log("Done !")
}, 3000)	

//>>>	{ rss: 20545536,
// 		  heapTotal: 6537216,
// 		  heapUsed: 4035592,
// 		  external: 8272 }
//>>>	{ rss: 20545536,
// 		  heapTotal: 6537216,
// 		  heapUsed: 4035592,
// 		  external: 8272 }
//>>> 	Done!


///////////////////////////////