<script lang="ts">
	import { showCalculator } from '$lib/stores';

	let numberOfWalks = 0;
	let numberOfDogs = 1;
	let walkTime = 20;

	let priceTable: { [key: number]: number } = {
		20: 20,
		30: 30,
		60: 50
	};

	$: payment =
		numberOfWalks * numberOfDogs * priceTable[walkTime] -
		(numberOfDogs > 1 ? (numberOfDogs - 1) * numberOfWalks * 5 : 0);
	console.log(payment);
</script>

{#if $showCalculator}
	<div id="price-calculator">
		<div class="content">
			<div class="dismiss">
				<button class="close" on:click={() => ($showCalculator = false)}>X</button>
			</div>
			<div class="header">Price Calculator</div>

			<div class="question range">
				Walks per Week:
				<label>
					<input type="range" min="0" max="10" bind:value={numberOfWalks} />
					{numberOfWalks}
				</label>
			</div>

			<div class="question range">
				Number of Dogs:
				<label>
					<input type="range" min="1" max="4" bind:value={numberOfDogs} />
					{numberOfDogs}
				</label>
			</div>

			<div class="question radio">
				Walk Time (mins):
				<label>
					<input type="radio" value={20} bind:group={walkTime} />
					20
				</label>
				<label>
					<input type="radio" value={30} bind:group={walkTime} />
					30
				</label>
				<label>
					<input type="radio" value={60} bind:group={walkTime} />
					60
				</label>
			</div>

			<div class="footer">
				<div>Weekly payment</div>
				<div class="payment">${payment}</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	#price-calculator {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);

		position: fixed;
		top: 0;
		left: 0;
		z-index: 1001;

		display: flex;
		justify-content: center;
		align-items: center;

		padding: 1rem;
	}

	.content {
		position: relative;
		width: 100%;
		height: fit-content;
		background-color: white;
		border-radius: 1rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.content > *:not(:last-child) {
		padding: 1rem;
	}

	.header {
		font-size: 2rem;
		font-family: 'fredoka one', cursive;
	}

	.footer {
		width: 100%;
		background-color: var(--color-primary);
		padding: 1rem 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		border-radius: 0 0 1rem 1rem;
	}

	.payment {
		font-size: 2rem;
		color: white;
		font-family: 'Fredoka One', cursive;
	}

	input[type='range'] {
		-webkit-appearance: none;
		appearance: none;
	}

	input[type='range']::-webkit-slider-runnable-track {
		background-color: var(--color-primary-lite);
		height: 0.5rem;
		border-radius: 99px;
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 1rem;
		height: 1rem;
		background-color: var(--color-primary);
		border-radius: 99px;
		cursor: pointer;
		margin-top: -0.25rem;
	}

	@media (min-width: 768px) {
		.content {
			width: fit-content;
		}
	}
</style>
