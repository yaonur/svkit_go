<script lang="ts">
	let name = 'world';
	function someAction(node, params) {
		console.log('node:', node);
		console.log('params:', params);

		node.innerHTML = params;
		return {
			update(newParams) {
				console.log('update');
				node.innerHTML = newParams;
			},
			destroy() {
				console.log('destroy');
			}
		};
	}
</script>

<div class="flex flex-col gap-4">
	<p>Params</p>
	<input class="w-40 border border-black" bind:value={name} />
	<div use:someAction={name} />
	name : {name}
</div>
