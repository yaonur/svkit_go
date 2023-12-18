<script lang='ts'>
	let name = 'world'
	function someAction(node,params){
		console.log("node:",node)
		console.log("params:",params)

		node.innerHTML = params;
		return {
			destroy(){
				console.log("destroy")
			}
		}
	
	}
</script>

<div class="flex flex-col gap-4">
	<p>Main Lesson</p>
	<h1 use:someAction={name}>Hello {name}! from h1</h1>
	<h2>Hello {name} from h2</h2>
</div>