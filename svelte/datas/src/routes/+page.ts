import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async (page) => {
    console.log("page.ts load")
    console.log(page)
    console.log("------------------------------------")
    return {
        pageLocalPage:page,
        pageLocal: "data from pageTs load"
    };
}