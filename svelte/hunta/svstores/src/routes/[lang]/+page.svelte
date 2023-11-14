<script lang="ts">
	import {createCountStore} from '$lib/stores/countStore';
	export const count = createCountStore(2,onChange);

	function onChange(value:number){
		console.log('<--- this is the onChange function we passed to store---> count change to', value)
		return value*2
	}

	
</script>

<h1>Count: {$count}</h1>
<button class="bg-blue-300 px-4 py-2" on:click={count.increment}>+1</button>
<button class="bg-blue-300 px-4 py-2" on:click={count.decrement}>-1</button>
<button class="bg-blue-300 px-4 py-2" on:click={count.square}>square</button>
<button class="bg-blue-300 px-4 py-2" on:click={count.reset}>reset</button>
