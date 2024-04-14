<script lang="ts">
	import Icon from '@iconify/svelte';

	let year = new Date().getFullYear();
</script>

<div class="footer">
	<div class="top">
		<div class="section" id="description">
			<div class="title">doggydays</div>
			<div class="content">
				DoggyDays is your premier goal-based dog walking and training service. We are committed to
				excellence in the Fort Washington, MD area.
			</div>
		</div>
		<!-- <div class="section">
			<div class="title">services</div>
			<div class="content">
				<div>Dog Walking</div>
				<div>Dog Training</div>
				<div>Dog Grooming</div>
			</div>
		</div> -->
		<!-- <div class="section">
			<div class="title">useful links</div>
			<div class="content"></div>
		</div> -->
		<div class="section">
			<div class="title">legal</div>
			<div class="content">
				<a href="/tos">Terms of Service</a>
			</div>
		</div>
		<div class="section">
			<div class="title">contact</div>
			<div class="content">
				<a href="tel:3016864398">+1 301 686 4398</a>
				<a href="mailto:kevin@doggydays.app">kevin@doggydays.app</a>
			</div>
		</div>
	</div>
	<div class="bottom">
		<Icon icon="tabler:copyright" />
		&nbsp;
		{year} DoggyDays
	</div>
</div>

<style>
	.footer {
		color: var(--color-white);
		font-family: 'Fredoka One';

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.top {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		place-items: center;
		gap: 2rem;
		padding: 3rem;
		background-color: var(--color-grey-dark);
	}

	.bottom {
		width: 100%;
		background-color: var(--color-black);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem 0;
	}

	.section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.title,
	.content {
		text-align: center;
	}

	.title {
		text-transform: uppercase;
	}
	.content {
		font-family: 'Truculenta';
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	@media (min-width: 768px) {
		.top {
			grid-template-columns: repeat(6, 1fr);
			align-items: first baseline;
		}

		.section {
			justify-content: flex-start;
			align-items: flex-start;
		}

		.content {
			text-align: left;
		}

		#description {
			grid-column: span 2;
		}
	}
</style>
