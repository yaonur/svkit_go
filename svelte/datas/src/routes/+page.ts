import type { PageLoad } from './$types'

export const load: PageLoad = async ({data}) => {
    // console.log("page.ts load")
    // console.log(page)
    // console.log("------------------------------------")
    return {
        ...data,
        pageLocal: "data from pageTs load"
    };
}