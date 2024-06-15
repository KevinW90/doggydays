<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Banner from '$lib/components/Banner.svelte';
	import PriceCalculator from '$lib/components/PriceCalculator.svelte';
</script>

<svelte:head>
	<title>DoggyDays</title>
	<meta name="description" content="DoggyDays landing page" />
	<script
		type="text/javascript"
		src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
	></script>
</svelte:head>

<section>
	<PriceCalculator />
	<Hero />
	<HowItWorks />
	<Pricing />
	<Contact />
</section>

<style>
</style>
