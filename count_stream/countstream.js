const Writable = require("stream").Writable;

const CountStream = {
	init(){
		this.count = 0
	},
	setMatcher(matchText){
		this.matcher = new RegExp(matchText,"ig")
	},
	_write(chunk, encoding, cb){
		let matches = chunk.toString().match(this.matcher);

		if(matches){
			this.count += matches.length;
		}

		cb();
	},
	end(){
		this.emit("total",this.count);	//emit "total" , deliver "count"
	}
}

Object.setPrototypeOf(CountStream, new Writable())

module.exports = CountStream;

