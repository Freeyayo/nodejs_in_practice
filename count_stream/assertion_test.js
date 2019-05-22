const CountStream = require("./CountStream");
const fs = require("fs");
const assert = require("assert");

CountStream.init();
CountStream.setMatcher("passport");

let passed = 0;

CountStream.on("total", (count) => {
	console.log(count)
	assert.equal(count, 1);
	passed++;
})

fs.createReadSream(__dirname + "/passport.txt").pipe(CountStream);

process.on("exit", () => {
	console.log("passport number: ", passed);
})