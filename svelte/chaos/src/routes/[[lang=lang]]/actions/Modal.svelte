<script lang="ts">
	import type { Action } from 'svelte/action';
	import { scale } from 'svelte/transition';

	interface Attributes {
		'on:outside'?:(event: CustomEvent) => void;
	}

	type clickOutsideAction=Action<HTMLElement,any,Attributes>;
	let open = false;

	function openModal() {
		open = true;
	}
	function closeModal() {
		open = false;
	}

	const clickOutside:clickOutsideAction= (element) => {
		function handleClick(event: MouseEvent) {
			const targetEl = event.target as HTMLElement;
			if (element == targetEl) {
				const clickOutsideEvent = new CustomEvent('outside', {
					detail: {
						target: targetEl
					}
				});
				element.dispatchEvent(clickOutsideEvent);
			}
			if (!element.contains(targetEl)) {
				console.log('outside');
				// const clickOutsideEvent = new CustomEvent('outside', {
				// 	detail: {
				// 		target: targetEl
				// 	}
				// });
				// element.dispatchEvent(clickOutsideEvent);
			} else {
				console.log('inside');
			}
		}

		document.addEventListener('click', handleClick);

		return {
			destroy() {
				document.removeEventListener('click', handleClick);
			}
		};
	};
</script>

<div>
	<p>Modal page</p>
</div>

<button on:click={openModal}>Open Modal</button>

{#if open}
	<div
		on:outside={closeModal}
		use:clickOutside
		class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
	>
		<div class="rounded-xl bg-white p-4" transition:scale>
			<p>Modal Content</p>
		</div>
	</div>
{/if}
