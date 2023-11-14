import { writable,type Updater } from 'svelte/store';

export function createCountStore(initialValue: number,onChange?: (value: number) => void) {
	const count = writable(initialValue);

	function update(updater:Updater<number>) {
		console.log("inside update called with updater function:",updater)
		count.update((current)=>{
			console.log("inside count.update will pass current to updater function:",current)
			const newValue = updater(current);
			console.log("inside count.update updater function returned:",newValue)
			console.log('inside update will call onChange with newValue if the value is different from previous:',newValue)
			if(newValue !== current) {
				console.log('ONCHANGE:inside count.update will call onChange with newValue:',newValue)
				const customFunctionValue= onChange?.(newValue);
				console.log('ONCHANGE:inside count.update onChange function returned:',customFunctionValue)
			}
			return newValue;
		});
	}

	function increment() {
		update((n) => n + 1);
	}
	function decrement() {
		update((n) => n - 1);
	}

	function square() {
		update((n) => n * n);
	}
	function reset() {
		update(()=>initialValue);
	}

	return {
		...count,
		increment,
		decrement,
		square,
		reset
	};
}
