import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (req) => {
    console.log("page.server.ts load req")
    console.log(req.locals)
    console.log("------------------------------------")
    return {
        // req.locals,
        dataFromServerReq:req.locals,
        pageServer: "data from page.server load"
    };
};