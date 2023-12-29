<script lang="ts">
	import Icon from '@iconify/svelte';
	import Button from './Button.svelte';
	import { page } from '$app/stores';
	import { applyAction, enhance } from '$app/forms';

	let name = '';
	let number = '';
	let services: string[] = [];

	let serviceOptions = ['walking', 'training', 'grooming'];

	let errors: any = [];

	$: console.log($page);
</script>

<div class="contact">
	<div class="get-in-touch">
		<span class="section-title">Get In Touch</span>
		<form
			method="POST"
			use:enhance={({ formElement, formData, action, cancel, submitter }) => {
				// `formElement` is this `<form>` element
				// `formData` is its `FormData` object that's about to be submitted
				// `action` is the URL to which the form is posted
				// calling `cancel()` will prevent the submission
				// `submitter` is the `HTMLElement` that caused the form to be submitted

				return async ({ result, update }) => {
					// `result` is an `ActionResult` object
					// `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
					console.log(result);

					if (result.type === 'failure') {
						errors = result.data?.errors;
					} else {
						errors = [];
						update();
					}
				};
			}}
		>
			<div class="form-section" class:error={errors.includes('name')}>
				<Icon icon="ic:round-person" />
				<label>
					<input type="text" name="name" bind:value={name} placeholder="Name" />
				</label>
			</div>
			<div class="form-section" class:error={errors.includes('phone')}>
				<Icon icon="bi:phone-fill" />
				<label>
					<input type="text" name="phone" bind:value={number} placeholder="Phone Number" />
				</label>
			</div>
			<div class="form-section borderless">
				<Icon icon="fa-solid:question" /> I'm interested in:
			</div>
			<div class="checkbox-group">
				{#each serviceOptions as service}
					<label class="form-section" class:error={errors.includes('services')}>
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
	.form-section.error {
		border-color: red;
	}

	.contact {
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

	.form-section {
		border: 2px solid var(--color-grey);
		border-radius: 0.5rem;
		display: flex;
		gap: 0.5rem;
		align-items: center;

		flex: 1;
		padding: 0.5rem;
	}

	.borderless {
		border-color: transparent;
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
	}

	@media (min-width: 450px) {
		.checkbox-group {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	@media (min-width: 867px) {
		.contact {
			display: flex;
			justify-content: center;
		}

		.get-in-touch {
			width: fit-content;
		}
	}

	/* .contact {
		background-color: var(--color-primary);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem 0;
	}

	.get-in-touch {
		background-color: var(--color-white);
		padding: 4rem;
		border-radius: 1rem;
		box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		font-family: 'Fredoka One';
	}

	.form-section {
		border: 2px solid var(--color-grey);
		border-radius: 0.5rem;

		display: flex;
		align-items: center;
		gap: 1rem;

		padding: 0.5rem;

		flex: 1;
	}

	.form-section.borderless {
		border-color: transparent;
	}

	.form-section label {
		flex: 1;
	}

	.checkbox-group {
		display: flex;
		gap: 1rem;
	}

	.checkbox-group .form-section {
		justify-content: center;
		text-transform: capitalize;
	}

	[type='checkbox'] {
		display: none;
	}

	[type='text'] {
		border: none;
		font-family: 'Fredoka One';
		margin: 0;
		width: 100%;
	} */
</style>
