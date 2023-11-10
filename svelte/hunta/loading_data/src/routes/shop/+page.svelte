<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    const {products} = data;
</script>

{#each products as product}
    <h2>{product.title}</h2>
    <p>{product.description}</p>
{/each}