<script lang="ts">
	import tippy, { type Props } from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	let content = 'Tooltip';

	type Options = Partial<Props>;
	function tooltip(element: HTMLElement, options: Options) {
		console.log('tooltip action element', element);
		console.log('tooltip action options', options);
		const tooltip = tippy(element, options);

		return {
			update(options: Options) {
				tooltip.setProps(options);
			},
			destroy() {
				tooltip.destroy();
			}
		};
	}
</script>

<div class="flex flex-col gap-4">
	<p>Tooltip page</p>
	<div>
		<input class="border border-black" bind:value={content} />
		<button use:tooltip={{content:content,arrow:false}} class="w-20 bg-secondary p-2">Hover</button>
	</div>
</div>
