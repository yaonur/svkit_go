<script>
   import {counter} from '$lib/stores/counter';
	import Decrement from '$ui/Decrement';
	import Increment from '$ui/Increment';
	import Reset from '$ui/Reset';
    let count=0

    counter.subscribe((value)=>{
        count = value
    });
    counter.set(5)
</script>


<div>
    <h1>The count is {count}</h1>
    <Increment />
    <Decrement />
    <Reset />
</div>
