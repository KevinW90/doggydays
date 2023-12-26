<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	export let role: string = ''; // primary, secondary, ...
	export let width: string = 'fit'; // fit, full, ...
	export let pad: boolean = true; // true, false
	export let action: MouseEventHandler<HTMLButtonElement> = () => {};
</script>

<button class="btn {role} {width}" class:pad on:click={action}>
	<slot />
</button>

<style>
	.btn {
		border: none;
		border-radius: 0.5rem;
		font-family: 'Fredoka One';
		white-space: nowrap;
		color: inherit;
		padding: 0;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.btn.pad {
		padding: 1rem;
	}

	.btn.fit {
		width: fit-content;
	}

	.btn.full {
		width: 100%;
	}

	.primary {
		background-color: var(--color-primary);
		color: var(--color-white);
	}

	.inverse {
		color: var(--color-primary);
		background-color: var(--color-white);
	}

	.transparent {
		background-color: transparent;
	}
</style>
