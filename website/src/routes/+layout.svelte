<script>
	import '../app.css';
	import '@fontsource/fredoka-one';

	import Header from '$lib/components/Header.svelte';
	import { isMobile } from '$lib/stores';
	import { onMount } from 'svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Icon from '@iconify/svelte';

	let _isMobile = true;
	// resize event listener
	const handleResize = () => {
		// change value of isMobile if window width is greater than 768px
		_isMobile = window.innerWidth < 867;
	};

	let showScrollButton = false;
	const handleScroll = () => {
		if (document.documentElement.scrollTop > 20) showScrollButton = true;
		else showScrollButton = false;
	};

	$: isMobile.set(_isMobile);

	// init isMobile flag on mount
	onMount(() => {
		handleResize();
		window.addEventListener('resize', handleResize);

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div class="app">
	{#if showScrollButton}
		<a class="back-to-top" href="#header"> <Icon icon="iconamoon:arrow-up-2" />Back to top</a>
	{/if}
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.back-to-top {
		position: fixed;
		bottom: 2rem;
		right: 1rem;
		z-index: 2;

		display: flex;
		align-items: center;

		color: black;
		text-decoration: none;
		cursor: pointer;

		padding: 0.5rem;
		border-radius: 999px;
		background-color: var(--color-grey);
	}
</style>
