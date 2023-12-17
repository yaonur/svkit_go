<script lang='ts'> 
let show = false
let content = ''

function greet (element:HTMLElement,content:string){
	console.log('greet', element)
	const greetEvent = new CustomEvent('greetEvent',{detail:'hey from event'})
	element.dispatchEvent(greetEvent)
	element.animate([
		{opacity: 0},
		{opacity: 1}
	],{
		duration: 1000,
		fill: 'forwards'
	})
	return {
		update (content:string){
			console.log('update', element)
			console.log({content})
		},
		destroy(){
			console.log('destroy', element)
		}
	}
}
function handleGreet(event:CustomEvent){
	console.log('handleGreet event', event)
	console.log('evetnt.detail', event.detail)
}
</script>

<div class="flex flex-col justify-center items-center h-max bg-red-200 ">
	<p>Actions patge</p>
	
	<label for="">
		<input bind:checked={show} type="checkbox">
		Toggle
	</label>
	
	<br/>
	
	{#if show}
	<input type="text" bind:value={content}>
	<div on:greetEvent ={handleGreet} use:greet={content}>Action</div>
	{/if}
</div>