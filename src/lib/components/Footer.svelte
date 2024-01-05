<script lang="ts">
	import Icon from '@iconify/svelte';

	let year = new Date().getFullYear();
</script>

<div class="footer">
	<span>
		<Icon icon="tabler:copyright" />
		{year} DoggyDays
	</span>
	<span>301 646 4398</span>
</div>

<style>
	.footer {
		background-color: var(--color-black);
		color: var(--color-white);
		font-family: 'Fredeoka One';

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		padding: 0.5rem 0;
	}

	span {
		display: flex;
		align-items: center;
	}
</style>
