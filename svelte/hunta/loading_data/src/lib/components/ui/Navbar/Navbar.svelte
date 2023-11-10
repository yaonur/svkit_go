<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    
</script>

<div class="flex justify-between {$$props.class}">
    <nav>
        <ul class="flex gap-2 bg-gray-300">
            <li><a href="/">Home</a></li>
            <li>
                <a href="/shop" data-sveltekit-preload-data>Shop</a>
            </li>
            <li>
                <a href="/movies">Movies</a>
            </li>
        </ul>
    </nav>
    
</div>