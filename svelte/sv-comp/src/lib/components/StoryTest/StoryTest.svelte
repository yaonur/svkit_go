<script lang='ts'> 
export let primary:boolean	
</script>

<div>
	<h1>Test</h1>
	<slot>
		<p>This is slot</p>
		<p>is Primary:{primary}</p>
	</slot>
</div>



