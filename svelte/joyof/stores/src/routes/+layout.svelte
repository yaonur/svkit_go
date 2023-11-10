<script lang="ts">
	import Logo from '$logo/Logo.svg';
	import '../app.css';
	import Navbar from '$ui/Navbar/';
	import {page} from "$app/stores";
	import {_} from 'svelte-i18n'
	import { init, register,locale} from 'svelte-i18n'
	import {afterUpdate} from "svelte";
	import type { ComponentType, SvelteComponent } from 'svelte'
	import type { SVGAttributes } from 'svelte/elements'

  
	type SvgComponent= ComponentType<SvelteComponent<SVGAttributes<SVGSVGElement>>>
	
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={Logo} />
</svelte:head>
<slot />
