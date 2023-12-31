// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import '@oppanator/sveltekit-svg/dist/svg';
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			data:{}
			user:{
				admin: boolean
				id: number
				name:string
			} | null
		}
		// interface PageData {}
		// interface Platform {}
		// declare interface Window {
		// 	onSubmit: () => void;
		//   }
	}
	// interface Window {
	// 	innerWidth: number;
	// }
}

export {};
