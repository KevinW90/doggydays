<script lang="ts">
	import Button from './Button.svelte';
	import puppyOnGrass from '$lib/images/puppy-on-grass.png';
	import Circle from './Circle.svelte';
	import { onMount } from 'svelte';
	import { hero } from '$lib/stores';

	onMount(() => {
		hero.set(document.querySelector('#hero')!);
	});
</script>

<div id="hero">
	<Circle id={1} size="md" color="purple" />
	<Circle id={2} size="xs" color="green" />
	<Circle id={3} size="sm" color="purple" />
	<Circle id={4} size="xs" color="yellow" />
	<Circle id={5} size="sm" color="yellow" />
	<Circle id={6} size="xl" color="green" />
	<div class="left">
		<h1>Personalized Dog Walking and Training</h1>
		<p>
			Scheduled and goal-based dog walking from people who care; and every walk is a potential
			training opportunity.
		</p>
		<div class="actions">
			<Button role="primary">
				<a href="#contact">Get Started</a></Button
			>
			<Button role="transparent">
				<a href="#pricing">See Pricing</a>
			</Button>
		</div>
	</div>
	<div class="right">
		<picture>
			<source srcset={puppyOnGrass} type="image/png" />
			<img src={puppyOnGrass} alt="doggydays logo" />
		</picture>
	</div>
</div>

<style>
	#hero {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		text-align: center;
		padding: 1rem 0;
	}

	#hero div:not(.actions) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	h1 {
		font-family: 'Fredoka One';
		margin: 0;
	}

	p {
		font-family: 'Truculenta', sans-serif;
		margin: 0;
	}

	.actions {
		display: flex;
		gap: 1rem;
	}

	picture {
		display: flex;
		align-items: center;
	}

	img {
		width: 100%;
		max-width: 1000px;
	}

	@media (min-width: 867px) {
		#hero {
			display: grid;
			grid-template-columns: repeat(12, 1fr);
			gap: 0;

			text-align: left;
		}

		#hero div:not(.actions) {
			align-items: flex-start;
		}

		.left {
			grid-column: 2 / span 4;
		}

		h1 {
			font-size: 3rem;
		}

		p {
			font-size: 1.5rem;
		}

		.actions {
			padding-top: 1rem;
		}

		.right {
			grid-column: 6 / span 7;
		}
	}

	@media (min-width: 1201px) {
		h1 {
			font-size: 3.5rem;
		}

		p {
			font-size: 1.75rem;
		}
	}

	@media (min-width: 1500px) {
		h1 {
			font-size: 4rem;
		}

		p {
			font-size: 2rem;
		}
	}

	@media (min-width: 1750px) {
		.left {
			grid-column: 3 / span 5;
		}

		.right {
			grid-column: 8 / span 4;
		}
	}
</style>
