<script lang="ts">
	import Icon from '@iconify/svelte';
	import Button from './Button.svelte';

	let services: string[] = [];

	let serviceOptions = ['walking', 'training', 'grooming'];
</script>

<div class="contact">
	<div class="get-in-touch">
		<span class="section-title">Get In Touch</span>
		<form>
			<div class="form-section">
				<Icon icon="ic:round-person" />
				<label>
					<input type="text" placeholder="Name" />
				</label>
			</div>
			<div class="form-section">
				<Icon icon="bi:phone-fill" />
				<label>
					<input type="text" placeholder="Phone Number" />
				</label>
			</div>
			<div class="form-section borderless">
				<Icon icon="fa-solid:question" /> I'm interested in:
			</div>
			<div class="checkbox-group">
				{#each serviceOptions as service}
					<label class="form-section">
						<input type="checkbox" bind:group={services} value={service} />
						{service}
					</label>
				{/each}
			</div>
			<Button role="primary" width="full">SEND</Button>
		</form>
	</div>
</div>

<style>
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
