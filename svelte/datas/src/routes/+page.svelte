<script>
    import {page} from '$app/stores';
    $: innerWidth = 0;

    export let data

    console.log("----------$page data in page")
    console.log($page)
    console.log("----------")
    console.log("------------ data in page")
    console.log(data)
    console.log("------------")
</script>

<svelte:window bind:innerWidth/>


