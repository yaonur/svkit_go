<script lang="ts">
	import Main from './Main.svelte';
	import Modal from './Params.svelte';
	import Motions from './Motions.svelte';
	import Params from './Params.svelte';
	// youtube link https://www.youtube.com/playlist?list=PLoKaNN3BjQX3Gl14MBygFf8buPIw9pAeK
	let pageSelector = 1;
</script>

<div class="flex gap-2">
	<button class="rounded-3xl bg-blue-400 p-2" on:click={() => (pageSelector = 1)}>Main</button>
	<button class="rounded-3xl bg-blue-400 p-2" on:click={() => (pageSelector = 2)}>Dynamic Params </button>
	<button class="rounded-3xl bg-blue-400 p-2" on:click={() => (pageSelector = 3)}>Modal</button>
	<button class="rounded-3xl bg-blue-400 p-2" on:click={() => (pageSelector = 4)}>Motions</button>
	<button class="rounded-3xl bg-blue-400 p-2" on:click={() => (pageSelector = 5)}>Forms</button>
	<button class="rounded-3xl bg-blue-400 p-2" on:click={() => (pageSelector = 6)}>Examples</button>
</div>

<div class=" pt-8 ">
	<a class="border border-blue-200 text-red-500" href="https://www.youtube.com/playlist?list=PLoKaNN3BjQX3Gl14MBygFf8buPIw9pAeK">YouTube Link</a>
	{#if pageSelector == 1}
		<Main />
	{:else if pageSelector == 2}
		<Params />
	{:else if pageSelector == 3}
		<Modal />
	{:else if pageSelector == 4}
		<Motions />
	{/if}
</div>
