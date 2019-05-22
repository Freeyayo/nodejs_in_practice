process.stdin.resume();	//read from stdin so the program will run until CTRL-C or it`s killed
process.on("SIGHUP", () => {
	console.log("reloading configration ...")
})

console.log("PID: ",process.pid);
