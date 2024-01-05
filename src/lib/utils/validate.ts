export function validateContactForm(formData: FormData, from: string = 'client'): string[] {
	// get form data
	const name = formData.get('name');
	const phone = formData.get('phone')?.toString();
	const services = formData.getAll('services');

	console.log(name, phone, services);

	let errors: string[] = [];
	// TEST: name not equal to `dev`
	// if (from === 'server') if (name !== 'dev') errors = [...errors, 'name'];
	if (!name) errors = [...errors, 'name'];
	if (phone?.length !== 10) errors = [...errors, 'phone'];
	if (services.length <= 0) errors = [...errors, 'services'];

	return errors;
}
