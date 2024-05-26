// vite.config.js / vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default {
	plugins: [sveltekit(), SvelteKitPWA()]
};
