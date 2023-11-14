<script lang="ts">
	import {counter} from '$lib/stores/counter';
	function increment(){
		counter.update((value)=>{
			return value+1;
		})
	}
</script>

<button on:click={increment}>Increment</button>