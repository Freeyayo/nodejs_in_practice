
const fs = require("fs");

const args = {
	"-h": displayHelp,
	"-r": readFile
}

function displayHelp(){
	console.log("args : ",args)
}

function readFile(file){
	console.log("reading file ...");
	fs.createReadStream(__dirname + "/" + file).pipe(process.stdout)   // directly display on terminal
}

if(process.argv.length > 2){
	process.argv.forEach( (arg, index) => {
		if(args[arg]){
			args[arg](process.argv[index + 1])
		}
	} )
}
