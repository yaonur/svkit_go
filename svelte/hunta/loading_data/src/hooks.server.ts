// hooks.ts

import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';



export const handle: Handle = async ({ event, resolve }) => {
	

	const response = await resolve(event);

	// Modify the response if needed

	return response;
};
