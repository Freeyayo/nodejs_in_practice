const CountStream = require("./CountStream");

CountStream.init();
CountStream.setMatcher("book");

const https = require("https");

https.get("https://www.manning.com/", (res) => {
	res.pipe(CountStream);
})

CountStream.on("total", (count) => {
	console.log(`Totla matches: ${count}`)
})

