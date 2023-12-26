<script lang="ts">
	import { availableLanguageTags } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';
	import { page } from '$app/stores';
	import { route } from '$lib/i18n-routing';
</script>

<div class="container">
	<div class="item">Item 1</div>
	<div class="item">Item 2</div>
	<div class="item">Item 3</div>
	<div class="item">Item 4</div>
	<div class="item">Item 5</div>
	<div class="item">Item 6</div>
	<div class="item">Item 7</div>
	<div class="item">Item 8</div>
	<div class="item">Item 9</div>
</div>

<style lang='postcss'> 
	.container{
		max-width:960px;
		margin:100px auto;
		padding:10px;
		display:grid;
		grid-template-columns: repeat(3,1fr);
		gap:10px;
	}
	.item {
		background: steelblue;
		color:#fff;
		font-size:20px;
		padding:20px;
		border: skyblue 1px solid;
	}
</style>