<script lang="ts">
	import {counter} from '$lib/stores/counter';
	function decrement(){
		counter.update((value:any)=>{
			return value-1;
		})
	}
</script>

<button on:click={decrement}>Decrement</button>