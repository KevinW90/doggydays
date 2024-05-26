import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { validateContactForm } from '$lib/utils/validate';

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const data = await request.formData();

		const errors = validateContactForm(data, 'server');

		if (errors.length > 0)
			return fail(400, {
				errors
			});

		// TODO: send an email with the data (sendgrid)
	}
} satisfies Actions;
