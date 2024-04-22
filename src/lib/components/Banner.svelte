<script>
	import { showCalculator } from '$lib/stores';
	let showBanner = true;

	function dismissBanner() {
		showBanner = false;
	}
</script>

{#if showBanner}
	<div class="banner">
		<p>
			Price changes starting April 29, 2024! Check out the <button
				class="calculator-btn"
				on:click={() => ($showCalculator = true)}>price calculator</button
			> to see how this impacts your bill.
		</p>
		<button class="dismiss-button" on:click={dismissBanner}>Dismiss</button>
	</div>
{/if}

<style>
	.banner {
		width: 100%;
		background-color: var(--color-warning-lite);
		padding: 20px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1000;
	}

	.calculator-btn {
		color: var(--color-primary);
		cursor: pointer;
		background-color: transparent;
		border: none;
		outline: none;
	}

	.dismiss-button {
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}
</style>
