import type { PageServerLoad } from './$types';
import {PUBLIC_SOMEKEY} from '$env/static/public'
import {SOMEKEY} from '$env/static/private'

export const load = (async () => {
    console.log({PUBLIC_SOMEKEY,SOMEKEY})
    return {};
}) satisfies PageServerLoad;