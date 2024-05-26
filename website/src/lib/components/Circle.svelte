<script lang="ts">
	import { hero } from '$lib/stores';
	import { onMount } from 'svelte';

	export let size: string;
	export let color: string;
	export let id: number;

	// set the size of the circle
	let circleWidth = 0;
	let x = 0;
	let y = 0;

	// TODO: create a function to compare dim to breakpoints found in the hero component

	$: {
		let dim = $hero ? Math.floor($hero?.offsetWidth) : 0;
		let isLandscape: boolean = dim > 867;

		switch (size) {
			case 'xs':
				circleWidth = !isLandscape ? dim * 0.1 : dim * 0.05;
				break;
			case 'sm':
				circleWidth = !isLandscape ? dim * 0.2 : dim * 0.1;
				break;
			case 'md':
				circleWidth = !isLandscape ? dim * 0.3 : dim * 0.3;
				break;
			case 'xl':
				circleWidth = !isLandscape ? dim * 1 : dim * 0.7;
				break;
		}

		switch (id) {
			case 1:
				if (!isLandscape) {
					x = -10;
					y = -20;
				} else {
					x = -15;
					y = -50;
				}
				break;
			case 2:
				if (!isLandscape) {
					x = 5;
					y = 20;
				} else {
					x = 10;
					y = 95;
				}
				break;
			case 3:
				if (!isLandscape) {
					x = 35;
					y = 20;
				} else {
					x = 30;
					y = 80;
				}
				break;
			case 4:
				if (!isLandscape) {
					x = 25;
					y = 5;
				} else {
					x = 45;
					y = 5;
				}
				break;
			case 5:
				if (!isLandscape) {
					x = 10;
					y = 40;
				} else {
					if (dim > 1750) {
						x = 45;
						y = 90;
					} else {
						x = 50;
						y = 90;
					}
				}
				break;
			case 6:
				if (!isLandscape) {
					x = 60;
					y = -15;
				} else {
					x = 65;
					y = -50;
				}
				break;
		}
	}

	const COLORS: {
		[key: string]: string;
	} = {
		green: '#D1EDEA',
		yellow: '#FFEACC',
		purple: '#E9CCFF'
	};
</script>

<div
	class="circle"
	style="width: {circleWidth}px; height: {circleWidth}px; top: {y}%; left: {x}%; background-color: {COLORS[
		color
	]};"
></div>

<style>
	.circle {
		position: absolute;
		z-index: -1;
		border-radius: 50%;
	}
</style>
