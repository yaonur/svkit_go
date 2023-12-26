<script lang="ts">
	import { page } from '$app/stores';
	import GetStarted from './GetStarted.svelte';
	import SimpleLayouts from './SimpleLayouts.svelte';

	let lesson: string;
	console.log($page.url.search);
	lesson = new URLSearchParams($page.url.search).get('les') || '';
	console.log(lesson);
</script>


<div>
	{#if lesson === 'getstarted'}
		<GetStarted />
	{:else if lesson === 'twosimple'}
		<SimpleLayouts />
	{:else}
		<div>Default kevin page</div>
	{/if}
</div>
