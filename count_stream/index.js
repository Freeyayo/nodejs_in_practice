const CountStream = require("./CountStream");

CountStream.init();
CountStream.setMatcher("book");

const https = require("https");		//depends on what kind of url which need to be got

https.get("https://www.manning.com/", (res) => {
	res.pipe(CountStream);		//pipe the data from website to countSteam
})

CountStream.on("total", (count) => {
	console.log(`Totla matches: ${count}`)
})

