// hooks.ts

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async (req) => {
	req.event.locals.data={dataFromHook: 'data from hook'}
	req.event.cookies.set('cookieFromHook', 'cookieFromHookValue')
	console.log("hooks.server.ts event")
	console.log(req.event.locals)
	console.log("------------------------------------")


	const response = await req.resolve(req.event);

	// Modify the response if needed

	return response;
};
