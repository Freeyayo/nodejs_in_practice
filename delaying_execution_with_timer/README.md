### timerId.unref()

*	Calling this method any time before the *complex operation* finished.
It means you can use timers without calling clearTimerout or clearInterval


### process.nextTick()

*	Using ```setTimeout( function, 0 )``` isn't the optimum solution. If
we want to delay an operation just slightly, use ```process.nextTick()``` .
It allows you to *place a callback at the head of the next cycle* of the run 
loop.

### setImmediate(callback)

*	callbacks run this way will placed after any upcoming I/O events but before  ```setTimeout()``` and ```setInterval()```


> _Within a single iteration of the event loop_
> I/O events -> setImmediat -> setInterval -> process.nextTick

