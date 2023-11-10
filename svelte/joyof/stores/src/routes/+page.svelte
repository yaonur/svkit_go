<script>
   import {counter} from '$lib/stores/counter';
	import Decrement from '$ui/Decrement';
	import Increment from '$ui/Increment';
	import Reset from '$ui/Reset';
   let value=1

    counter.subscribe((value) => {
        console.log(value);
    });
</script>


<div>
    <h1>The count is {counter}</h1>
    <Increment />
    <Decrement />
    <Reset />
</div>
