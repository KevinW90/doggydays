<script lang="ts">
	import iconSpeechBubbles from '../images/icon-speech-bubbles.png';
	import iconTarget from '../images/icon-target.png';
	import iconCalendar from '../images/icon-calendar.png';
	import iconTrust from '../images/icon-trust.png';

	const cards = [
		{
			title: 'consult',
			description:
				'An initial meeting to understand your dog’s needs. It can be up to 60 minutes and is completely free.',
			icon: iconSpeechBubbles
		},
		{
			title: 'goals',
			description:
				'Walks are based on goals. Choose what you’d like your dog to focus on while out and watch their growth.',
			icon: iconTarget
		},
		{
			title: 'schedule',
			description:
				'Choose a schedule that works to fit your dog’s needs. Walks are offered Monday thru Friday with some flexibility for time.',
			icon: iconCalendar
		},
		{
			title: 'services',
			description:
				'Your dog’s well-being is our priority, and we’re committed to making each session a joyous and enriching experience.',
			icon: iconTrust
		}
	];
</script>

<div id="how-it-works">
	<div class="shadow-text">How It Works</div>
	<div class="section-title">
		<h2>How It Works</h2>
	</div>

	<div class="cards">
		<div class="cards-container">
			{#each cards as card}
				<div class="card">
					<div class="card-icon">
						<picture>
							<source srcset={card.icon} type="image/png" />
							<img src={card.icon} alt={card.title} />
						</picture>
					</div>
					<div class="card-title">
						{card.title}
					</div>
					<div class="card-description">
						<p>{card.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	#how-it-works {
		position: relative;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;

		padding-top: 4rem;
		/* overflow: hidden; */
	}

	.shadow-text {
		height: fit-content;
		position: absolute;
		top: 0;
		right: -1.7ch;
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

		padding: 1rem;
	}

	.cards-container {
		display: flex;
		flex-direction: column;
		gap: 6rem;
	}

	.card {
		position: relative;
		padding: 4rem 1rem 1rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		background-color: var(--color-white);

		border-radius: 1rem;

		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	}

	picture {
		display: flex;
		align-items: center;
		width: 125px;
		height: 125px;
	}

	img {
		width: 100%;
		height: 100%;
	}

	.card-icon {
		position: absolute;
		top: calc(-50% + 2rem);
		left: 50%;
		transform: translateX(-50%);
	}

	.card-title {
		text-transform: uppercase;
		font-size: 1.25rem;
		font-family: 'Fredoka One';
	}

	.card-description {
		text-align: center;
	}

	@media (min-width: 600px) {
		#how-it-works {
			padding-top: 5rem;
			padding-bottom: 12rem;
		}

		.cards {
			padding: 2rem;
		}

		.cards-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}

		.card:nth-child(2),
		.card:nth-child(4) {
			translate: 0 50%;
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
			text-align: right;
			font-family: 'Fredoka One';
		}
	}

	@media (min-width: 867px) {
		.section-title {
			right: 4rem;
		}

		.cards {
			display: grid;
			grid-template-columns: repeat(12, 1fr);
			padding: 0;
		}

		.cards-container {
			grid-column: 2 / span 10;
		}

		.card {
			padding: 5rem 1rem 1rem;
			gap: 0.5rem;
			align-items: flex-start;
			text-align: left;
		}

		.card-icon {
			top: calc(-75px - 0.5rem);
		}

		picture {
			display: flex;
			align-items: center;
			width: 150px;
			height: 150px;
		}

		.card p {
			text-align: left;
		}
	}

	@media (min-width: 1000px) {
		.shadow-text {
			top: unset;
			bottom: -2.5rem;

			font-size: 10rem;
		}

		.cards-container {
			grid-template-columns: repeat(4, 1fr);
			gap: 1rem;
		}
	}

	@media (min-width: 1300px) {
		.cards-container {
			gap: 4rem;
		}

		.shadow-text {
			top: unset;
			bottom: -2.5rem;

			font-size: 12rem;
		}
	}

	@media (min-width: 1750px) {
		.section-title h2 {
			grid-column: 2 / span 9;
			text-align: right;
			font-family: 'Fredoka One';
		}

		.cards-container {
			grid-column: 3 / span 8;
		}

		.shadow-text {
			top: unset;
			bottom: -7rem;

			font-size: 17rem;
		}
	}
</style>
