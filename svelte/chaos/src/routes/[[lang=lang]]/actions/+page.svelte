<script lang="ts">
	import type { PageData } from './$types';
	import Actions from './Actions.svelte';
	import Modal from './Modal.svelte';
	import Motions from './Motions.svelte';
	import Tooltip from './Tooltip.svelte';

	export let data: PageData;
	let pageSelector = 1;
</script>

<div class="flex gap-2">
	<button class="rounded-3xl bg-blue-400 p-2" on:click={() => (pageSelector = 1)}>Actions</button>
	<button class="rounded-3xl bg-blue-400 p-2" on:click={() => (pageSelector = 2)}>Tooltip </button>
	<button class="rounded-3xl bg-blue-400 p-2" on:click={() => (pageSelector = 3)}>Modal</button>
	<button class="rounded-3xl bg-blue-400 p-2" on:click={() => (pageSelector = 4)}>Motions</button>
	<button class="rounded-3xl bg-blue-400 p-2" on:click={() => (pageSelector = 5)}>Forms</button>
	<button class="rounded-3xl bg-blue-400 p-2" on:click={() => (pageSelector = 6)}>Examples</button>
</div>

<div class=" pt-8 ">
	{#if pageSelector == 1}
		<Actions />
	{:else if pageSelector == 2}
		<Tooltip />
	{:else if pageSelector == 3}
		<Modal />
	{:else if pageSelector == 4}
		<Motions />
	{/if}
</div>
