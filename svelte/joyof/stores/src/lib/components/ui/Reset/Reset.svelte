<script lang="ts">
	import {counter} from '$lib/stores/counter';
	function reset(){
		counter.set(0)
	}
</script>

<button on:click={reset}>Reset</button>