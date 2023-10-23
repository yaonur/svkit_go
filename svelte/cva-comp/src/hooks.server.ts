// hooks.ts

import type { Handle } from '@sveltejs/kit';
import { init, register, locale } from 'svelte-i18n';


export const handle: Handle = async ({ event, resolve }) => {
	
	const lang = event.params.lang
	console.log(event.url.hostname)


	console.log("layout module")
	register('en', () => import('$lib/i18n/lang/en.json'));

	init({
		fallbackLocale: 'en',
		initialLocale: 'en'
	});
	if (lang) {
		locale.set(lang)
	} else{
		locale.set('en')
	}



	const response = await resolve(event);

	// Modify the response if needed

	return response;
};
