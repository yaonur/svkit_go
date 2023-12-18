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
	// if(browser) console.log($page.params.lang)
	if (browser && ($page.url.pathname == '/' || !availableLanguageTags.includes($page.params.lang as AvailableLanguageTag))) {
		console.log("path name wrong", $page.url.pathname);
		goto(`/en`);
	}
</script>

<div class="h-screen">
	<div class="flex gap-4">
		{#each availableLanguageTags as lang, i}
			<a href={route($page.url.pathname, lang)} hreflang={lang}>{lang}</a>
		{/each}
	</div>
	<div class="flex gap-4 bg-slate-200">
		<a class="rounded-xl bg-secondary-200 p-2" href={route('actions',lang)}>Actions</a>
		<a class="rounded-xl bg-secondary-200 p-2" href={route('lihautanactions',lang)}>Lihautan Actions</a>
	</div>
	{#key lang}
		<slot />
	{/key}
</div>
