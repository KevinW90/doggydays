<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import Icon from '@iconify/svelte';

	const cards = [
		{
			title: 'Basic',
			price: 15,
			time: 20
		},
		{
			title: 'Premium',
			price: 20,
			time: 30
		},
		{
			title: 'Super',
			price: 35,
			time: 60
		}
	];

	onMount(() => {
		const cardContainer: HTMLElement | null = document.querySelector('.pricing .cards-container');
		cardContainer!.scrollLeft = cardContainer!.offsetWidth + cardContainer!.offsetWidth / 3;
	});
</script>

<div id="pricing">
	<div class="shadow-text">Pricing Plans</div>
	<div class="section-title">
		<h2>Pricing Plans</h2>
	</div>

	<div class="cards">
		<div class="cards-container">
			{#each cards as card, i}
				<div class="card {card.title}">
					<div class="title">{card.title}</div>
					<div class="price">
						<span class="dollar-sign">$</span>
						<span class="cost">{card.price}</span>
						<span class="per-walk">/ walk</span>
					</div>
					<div class="discount">
						<Icon icon="iconamoon:discount-light" />
						-${5 * (i + 1)}/ea extra dog
					</div>
					<div class="time">
						<Icon icon="mdi:alarm-clock" />
						{card.time} minutes
					</div>
					<Button role={i === 1 ? 'inverse' : 'primary'} width="full">
						<a href="#contact">SELECT</a>
					</Button>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	#pricing {
		position: relative;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;

		padding-top: 4rem;
	}

	.shadow-text {
		height: fit-content;
		position: absolute;
		top: 0;
		left: -1.7ch;
		z-index: -1;

		font-family: 'Fredoka One';
		font-size: 4rem;
		font-weight: 900;
		white-space: nowrap;
		color: #fafafa;
		opacity: 0.4;
	}

	.section-title {
		display: none;
	}

	.cards {
		width: 100%;

		padding: 1rem 0;
	}

	.cards-container {
		display: grid;
		gap: 1rem;
		grid-auto-flow: column;
		grid-auto-columns: calc(75% - 16px * 2);
		grid-template-rows: auto;
		padding: 1rem 0;

		overflow-x: scroll;
		scroll-snap-type: x mandatory;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.cards-container::before,
	.cards-container::after {
		content: '';
		width: 1rem;
	}

	.cards-container::-webkit-scrollbar {
		display: none;
	}

	.cards-container > * {
		scroll-snap-align: center;
	}

	.card {
		border: 2px solid var(--color-grey);
		border-radius: 0.5rem;
		padding: 1rem;

		background-color: white;

		display: flex;
		flex-direction: column;
		gap: 2rem;
		justify-content: center;
		align-items: center;
	}

	.card.Premium {
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: var(--color-white);
		box-shadow: 0 0 10px 5px rgba(23, 163, 152, 0.25);
	}

	.card.Premium .title {
		background-color: var(--color-white);
		color: black;
	}

	.card.Premium .per-walk {
		color: rgba(255, 255, 255, 0.6);
	}

	.title {
		width: 100%;
		background-color: var(--color-grey-lite);
		font-family: 'Fredoka One';
		text-align: center;

		border-radius: 0.25rem;
		padding: 0.5rem 0;
	}

	.price {
		position: relative;
		font-family: 'Fredoka One';
	}

	.dollar-sign {
		position: absolute;
		top: 0;
	}

	.cost {
		font-size: 2rem;

		margin-left: 0.5rem;
	}

	.per-walk {
		color: var(--color-grey-dark);
	}

	.time,
	.discount {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 0.5rem;

		padding-left: 2rem;
	}

	@media (min-width: 600px) {
		#pricing {
			padding-top: 5rem;
			padding-bottom: 12rem;
		}

		.section-title {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(12, 1fr);
			position: absolute;
			top: 0;
			left: 0;
		}

		.section-title h2 {
			grid-column: 2 / span 10;
			text-align: left;
			font-family: 'Fredoka One';
		}

		.cards-container {
			width: 100%;
			display: flex;
			justify-content: center;
			padding: 0 1rem;
		}

		.cards-container::before,
		.cards-container::after {
			display: none;
		}

		.card {
			flex: 1;
			max-width: 275px;
		}

		.card.Premium {
			box-shadow: none;
		}
	}

	@media (min-width: 867px) {
		.section-title {
			right: 4rem;
		}
	}

	@media (min-width: 1000px) {
		.shadow-text {
			top: unset;
			bottom: 7rem;

			font-size: 10rem;
		}
	}

	@media (min-width: 1300px) {
		.shadow-text {
			top: unset;
			font-size: 12rem;
		}
	}

	@media (min-width: 1750px) {
		.section-title h2 {
			grid-column: 2 / span 9;
			font-family: 'Fredoka One';
		}

		.shadow-text {
			top: unset;
			bottom: 2rem;
			font-size: 17rem;
		}
	}
</style>
