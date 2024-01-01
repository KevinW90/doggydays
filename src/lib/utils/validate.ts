export function validateContactForm(formData: FormData): string[] {
	// get form data
	const name = formData.get('name');
	const phone = formData.get('phone')?.toString();
	const services = formData.getAll('services');

	let errors: string[] = [];
	if (!name) errors = [...errors, 'name'];
	if (phone?.length !== 10) errors = [...errors, 'phone'];
	if (services.length <= 0) errors = [...errors, 'services'];

	return errors;
}
