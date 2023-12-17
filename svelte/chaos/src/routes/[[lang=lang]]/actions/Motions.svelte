<script lang="ts">
	import { animate, stagger } from 'motion';
	import type { Action } from 'svelte/action';
	// import { AnimationControls, AnimationOptions, ProgressFunction } from "";
	import type { AnimationOptions, AnimationControls } from 'motion';
	interface Attributes {
		'on:finished'?: (event: CustomEvent) => void;
	}
	const text: Action<HTMLElement, any, Attributes> = (
		element: HTMLElement,
		{
			options,
			action
		}: { options: AnimationOptions; action: (animation: { animation: AnimationControls }) => void }
	) => {
		const letters = element.innerText.trim().split('');
		element.innerHTML = '';
		letters.forEach((letter) => {
			element.innerHTML += `<span class="inline-block">${letter}</span>`;
		});

		const animation = animate(
			[...element.children],
			{
				color: 'orangered',
				y: [0, 30, -30, 0],
				rotate: 360
			},
			{ duration: 1, delay: stagger(0.1), ...options }
		);
		action({ animation });
		animation.finished.then(() => {
			element.dispatchEvent(new CustomEvent('finished'));
		});
	};
</script>

<div class="flex flex-col gap-8">
	<p>Motions page</p>
	<h1
		on:finished={() => console.log('finished')}
		use:text={{
			options: { duration: 1 },
			action({ animation }) {
				// animation.stop();
			}
		}}
	>
		Motions on Action
	</h1>
</div>
