import type { Actions } from './$types';

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const data = await request.formData();

		console.log(data);
	}
} satisfies Actions;
