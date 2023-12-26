<script lang="ts">
	import '../app.css';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { setLanguageTag, sourceLanguageTag, type AvailableLanguageTag } from '$paraglide/runtime';
	import { availableLanguageTags } from '$paraglide/runtime';
	import { route } from '$lib/i18n-routing';

	$: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;

	$: setLanguageTag(lang);
	$: pathName = $page.url.pathname;
	console.log('pathName layout', $page.url.pathname);
	if (browser && ($page.url.pathname == '/' || !availableLanguageTags.includes(lang))) {
		// console.log("path name wrong");
		goto(`/en`);
	}

	let kevinOptions = [
        { name: 'Get started with grid', url: '/en/kevin?les=getstarted' },
        { name: 'Two simple layouts that work better with Grid', url: '/en/kevin?les=twosimple' },
        { name: 'Option 3', url: '/en/kevin' },
    ];

    function navigate(event) {
        goto(kevinOptions[event.target.selectedIndex].url);
    }
</script>

<div class="text-white bg-slate-600 h-svh">
	<div class="grid grid-cols-4 gap-2">
        <a class="bg-blue-200 text-black" href="/en">main</a>
        <div class="group inline-block relative bg-blue-200 text-black">
            <a href="#" class="px-4 py-2">Kevin</a>
            <div class="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition ease-out duration-100 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {#each kevinOptions as option}
                    <a href={option.url} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">{option.name}</a>
                {/each}
            </div>
        </div>
    </div>
	{#key lang}
		<slot />
	{/key}
</div>
