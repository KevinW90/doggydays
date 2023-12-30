import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const phone = data.get('phone') as string;
		const services = data.getAll('services');

		console.log(data);

		const errors = [];
		if (!name) errors.push('name');
		if (phone.length !== 10) errors.push('phone');
		if (services.length <= 0) errors.push('services');

		if (errors.length > 0)
			return fail(400, {
				errors
			});
	}
} satisfies Actions;
