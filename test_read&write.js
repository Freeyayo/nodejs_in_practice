const fs = require("fs");

let encoded;

function read(){
	return new Promise((resolve, reject) => {
		fs.readFile(__dirname + "/test_text.txt", function(err, data){
			let buf = data;
			encoded = buf.toString("base64");
			resolve(encoded)
		})
	})
}

async function readFileFun(){
	let base64 = await read();
	console.log(base64)
	fs.writeFile(__dirname + "/TEXT.txt", Buffer.from(base64,"base64"), err=>{
		if(err)console.log(err)
	})
}

readFileFun();

