<script>
	import '../app.pcss';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});

	async function logout() {
		await supabase.auth.signOut();
	}
</script>

<svelte:head>
	<title>Enceladus-1: the DALL-E wrapper</title>
	<meta name="description" content="It's on Enceladus" />
</svelte:head>

<div class="flex min-h-screen flex-col font-mono">
	<header class="flex items-center justify-between px-12 py-6">
		<a class="text-4xl font-bold tracking-wide" href="/">Enceladus-1</a>
		{#if session}
			<div>
				<a href="/dashboard" class="border-2 border-black p-1 text-lg tracking-tighter">Dashboard</a>
				<button on:click={logout} class="border-2 border-black p-1 text-lg tracking-tighter">Sign Out </button>
			</div>
		{:else}
			<a href="/login" class="border-2 border-black p-1 text-lg tracking-tighter">Login or Signup</a>
		{/if}
	</header>

	<slot />
</div>
