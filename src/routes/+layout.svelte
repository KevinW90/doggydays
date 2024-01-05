<script>
	import '../app.css';
	import '@fontsource/fredoka-one';

	import Header from '$lib/components/Header.svelte';
	import { isMobile } from '$lib/stores';
	import { onMount } from 'svelte';
	import Footer from '$lib/components/Footer.svelte';

	let _isMobile = true;
	// resize event listener
	const handleResize = () => {
		// change value of isMobile if window width is greater than 768px
		_isMobile = window.innerWidth < 867;
	};

	$: isMobile.set(_isMobile);

	// init isMobile flag on mount
	onMount(() => {
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
