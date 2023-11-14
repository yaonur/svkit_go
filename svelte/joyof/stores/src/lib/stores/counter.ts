
// @ts-nocheck

function createCounter(count){
	let currentValue =count
	//keep track of subscribers
	const subscribers= new Set()

	// add subscriber
	function subscribe(subscriber){
		console.log('subscribed a listener subscriber is:',subscriber)
		subscribers.add(subscriber)
		console.log('subscribers are:',subscribers)
	}

	// notify subscribers
	function update(updater){
		// count = updater(count)
		// subscribers.forEach(subscriber=>subscriber(count))
		set(updater(count))
	}
	function set(newValue){
		console.log('set new value to:',newValue)
		count = newValue
		subscribers.forEach(subscriber=>subscriber(count))
	}

	return {subscribe,update,set}
}

export const counter =createCounter(0)