<script>
	// import some images to test

	import Circle from '$lib/components/Circle.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
</script>

<svelte:head>
	<title>DoggyDays</title>
	<meta name="description" content="DoggyDays landing page" />
</svelte:head>

<section>
	<Hero />
	<HowItWorks />
	<Pricing />
</section>

<style>
</style>
