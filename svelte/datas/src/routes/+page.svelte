<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	$: innerWidth = 0;

	export let data: PageData;

	// console.log("----------$page data in page")
	// console.log($page)
	// console.log("----------")
	// console.log('------------ data in page');
	// console.log(data);
	// console.log('------------');
</script>

<svelte:window bind:innerWidth />
{#if data.user}
	<h1>Logged in</h1>
	<form action="?/logout" method="POST">
		<button class="bg-blue-200" type="submit">Logout</button>
	</form>
{:else}
	<form action="?/login" method="POST">
		<button class="bg-green-300 px-8 py-4">Login</button>
	</form>
	<h1>Logged out</h1>
{/if}
