### timerId.unref()

*	Calling this method any time before the *complex operation* finished.
It means you can use timers without calling clearTimerout or clearInterval


### process.nextTick()

*	Using ```setTimeout( function, 0 )``` isn't the optimum solution. If
we want to delay an operation just slightly, use ```process.nextTick()``` 