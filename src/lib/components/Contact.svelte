<script lang="ts">
	import Icon from '@iconify/svelte';
	import Button from './Button.svelte';
	import { enhance } from '$app/forms';
	import { CONTACT_ERRORS } from '$lib/errors/contact';
	import { validateContactForm } from '$lib/utils/validate';
	import emailjs from '@emailjs/browser';

	let name: string = '';
	let number: string = '';
	let services: string[] = [];

	let serviceOptions: string[] = ['walking', 'training', 'grooming'];

	let errors: string[] = [];

	// email service
	function sendEmail() {
		emailjs
			.sendForm('service_y2e48ee', 'dd_service_request', '#contact-form', 'JfM1exPF86e0BTlV5')
			.then(
				function (response) {
					console.log('SUCCESS!', response.status, response.text);
				},
				function (error) {
					console.log('FAILED...', error);
				}
			);
	}
</script>

<div id="contact">
	<div class="get-in-touch">
		<span class="section-title">Get In Touch</span>
		<form
			id="contact-form"
			method="POST"
			use:enhance={({ formElement, formData, action, cancel, submitter }) => {
				// `formElement` is this `<form>` element
				// `formData` is its `FormData` object that's about to be submitted
				// `action` is the URL to which the form is posted
				// calling `cancel()` will prevent the submission
				// `submitter` is the `HTMLElement` that caused the form to be submitted

				// check for errors in contact form
				errors = validateContactForm(formData);
				if (errors.length > 0) cancel();

				return async ({ result, update }) => {
					// `result` is an `ActionResult` object
					// `update` is a function which triggers the default logic that would be triggered if this callback wasn't set

					if (result.type === 'failure' && Array.isArray(result.data?.errors))
						errors = result.data?.errors;

					sendEmail();
					update();
				};
			}}
		>
			{#if errors.includes('name')}
				<div class="error-msg">{CONTACT_ERRORS.name.message}</div>
			{/if}
			<div class="form-section {errors.includes('name') && 'error'}">
				<Icon icon="ic:round-person" />
				<label>
					<input type="text" name="name" bind:value={name} placeholder="Name" />
				</label>
			</div>

			{#if errors.includes('phone')}
				<div class="error-msg">{CONTACT_ERRORS.phone.message}</div>
			{/if}
			<div class="form-section {errors.includes('phone') && 'error'}">
				<Icon icon="bi:phone-fill" />
				<label>
					<input type="text" name="phone" bind:value={number} placeholder="Phone Number" />
				</label>
			</div>

			<div class="form-section borderless">
				<Icon icon="fa-solid:question" /> I'm interested in:
			</div>
			{#if errors.includes('services')}
				<div class="error-msg">{CONTACT_ERRORS.services.message}</div>
			{/if}
			<div class="checkbox-group">
				{#each serviceOptions as service}
					<label class="form-section {errors.includes('services') && 'error'}">
						<input type="checkbox" name="services" bind:group={services} value={service} />
						{service}
					</label>
				{/each}
			</div>
			<Button role="primary" width="full">SEND</Button>
		</form>
	</div>
</div>

<style>
	#contact {
		background-color: var(--color-primary);
		padding: 1rem;

		font-family: 'Fredoka One';
	}

	.get-in-touch {
		background-color: var(--color-white);
		padding: 2rem;
		border-radius: 0.5rem;
	}

	.section-title {
		font-size: 1.5rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 1rem;
	}

	.error-msg {
		color: var(--color-danger);
		font-family: 'Truculenta', sans-serif;
	}

	.form-section {
		border: 2px solid var(--color-grey);
		border-radius: 0.5rem;
		display: flex;
		gap: 0.5rem;
		align-items: center;

		flex: 1;
		padding: 0.5rem;
	}

	.form-section.error {
		border-color: var(--color-danger);
		background-color: var(--color-danger-lite);
	}

	.form-section label {
		flex: 1;
	}

	.form-section:has([type='checkbox']:checked) {
		border-color: var(--color-primary);
		color: var(--color-primary);
		background-color: var(--color-primary-lite);
	}

	.form-section:has([type='text']:focus) {
		border-color: var(--color-primary);
	}

	.borderless {
		border-color: transparent;
	}

	.checkbox-group {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.checkbox-group .form-section {
		display: flex;
		justify-content: center;
		text-transform: capitalize;
		cursor: pointer;
	}

	[type='checkbox'] {
		visibility: hidden;
		display: block;
		height: 0;
		width: 0;
		position: absolute;
		overflow: hidden;
	}

	[type='text'] {
		width: 100%;
		font-family: 'Fredoka One';
		border: none;
		outline: none;
		background-color: inherit;
	}

	@media (min-width: 450px) {
		.checkbox-group {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	@media (min-width: 550px) {
		#contact {
			display: flex;
			justify-content: center;
		}

		.get-in-touch {
			width: fit-content;
		}
	}
</style>
