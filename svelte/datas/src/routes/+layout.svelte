<script lang="ts">
	import Logo from '$logo/Logo.svg';
	import '../app.pcss';
	import Navbar from '$ui/Navbar/';
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={Logo} />
</svelte:head>
<div class="bg-pink-200">
	<a href="/" class="p-4">Home</a>
	<a href="/protected" class="p-4">Protected</a>
</div>
<slot />
