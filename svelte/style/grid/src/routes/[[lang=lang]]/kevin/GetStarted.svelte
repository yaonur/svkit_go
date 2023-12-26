<div class="container mt-10">
	<h1 class="text-xl mb-6">Grid as simple as possible</h1>
	<a href="https://www.youtube.com/watch?v=8QSqwbSztnA">Youtube Link</a>

	<div class="grid-even-columns">
		<div class="flow">
			<img class="icon w-10 h-auto" src="https://cdn-icons-png.flaticon.com/128/6422/6422213.png" alt="">
			<h3 class="font-bold">Store and sync</h3>
			<p>Keep all your files securely stored, up to date, and accessible from any device</p>
		</div>
		<div class="flow">
			<img class="icon w-10 h-auto" src="https://cdn-icons-png.flaticon.com/128/6422/6422213.png" alt="">
			<h3 class="font-bold">Store and sync</h3>
			<p>Keep all your files securely stored, up to date, and accessible from any device</p>
		</div>
		<div class="flow">
			<img class="icon w-10 h-auto" src="https://cdn-icons-png.flaticon.com/128/6422/6422213.png" alt="">
			<h3 class="font-bold">Store and sync</h3>
			<p>Keep all your files securely stored, up to date, and accessible from any device</p>
		</div>
		<div class="flow">
			<img class="icon w-10 h-auto" src="https://cdn-icons-png.flaticon.com/128/6422/6422213.png" alt="">
			<h3 class="font-bold">Store and sync</h3>
			<p>Keep all your files securely stored, up to date, and accessible from any device</p>
		</div>
	</div>
</div>

<style>
	.grid-even-columns {
		display:grid;
		gap: 1rem;
		/* grid-template-columns: 1fr 1fr 1fr 1fr; */
		/* gap: 1rem; */
	}
	@media(min-width:50em) {
		.grid-even-columns {
			grid-template-columns: repeat(2,1fr);
		}
	}
	@media(min-width:60em){
		.grid-even-columns {
			grid-template-columns: repeat(4,1fr);
		}
	}
</style>