import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async (page) => {
    // console.log("layout load")
    // console.log(page)
    // console.log("------------------------------------")
    return {
        layoutLocalPage:page,
        layoutClient: "data from layout load"
    };
}
