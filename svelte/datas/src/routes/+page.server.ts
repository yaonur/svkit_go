import type { PageServerLoad,Actions } from './$types';
import {redirect} from "@sveltejs/kit";

export const load: PageServerLoad = async ({locals,cookies}) => {
    console.log("page.server.ts load req")
    // cookies.delete("user")

    // console.log(req.locals)
    // console.log("------------------------------------")
    const {data,user}=locals
    return {
        ...data,user

    };
};
export const actions: Actions = {
    logout: async ({locals,cookies}) => {
        console.log("page.server.ts logout")
        console.log(locals)
        console.log(cookies.get("user"))
        cookies.delete("user")
        throw redirect(301,"/")
    },
    login: async ({locals,cookies}) => {
        console.log("page.server.ts login")
        cookies.set("user", JSON.stringify({admin: true,id:111,name:"onur"}))
        throw redirect(301,"/")
    }
}