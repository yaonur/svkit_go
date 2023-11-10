
// @ts-nocheck

function createCounter(count){
	let currentValue =count
	//keep track of subscribers
	const subscribers= new Set()

	// add subscriber
	function subscribe(subscriber){
		subscribers.add(subscriber)
	}

	// notify subscribers
	function update(updater){
		set(updater(count))
	}
	function set(newValue){
		count =newValue
		subscribers.forEach(subscriber=>subscriber(count))
	}

	return {subscribe,update,set}
}

export const counter =createCounter(0)