<script lang="ts">
	import { isMobile } from '$lib/stores';
	import Icon from '@iconify/svelte';
	import Button from './Button.svelte';

	// TODO: navigation and styling

	const menuItems = [
		{
			role: 'link',
			name: 'home',
			link: '/#header'
		},
		{
			role: 'link',
			name: 'how it works',
			link: '/#how-it-works'
		},
		{
			role: 'link',
			name: 'pricing',
			link: '/#pricing'
		},
		// {
		// 	role: 'dropdown',
		// 	name: 'partners'
		// },
		{
			role: 'link',
			name: 'contact',
			link: '/#contact'
		}
	];

	let isOpen = !$isMobile;

	const toggleMenu = () => {
		isOpen = !isOpen;
	};
</script>

<nav class="menu" class:mobile-open={$isMobile && isOpen}>
	{#if isOpen}
		<ul>
			{#each menuItems as item}
				<li class="menu-item">
					<a
						href={item.link}
						on:click={() => {
							if ($isMobile) isOpen = false;
						}}
					>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>

		{#if $isMobile}
			<div class="menu-close">
				<Button role="transparent" pad={false} action={toggleMenu}>
					<Icon icon="mdi:close" />
				</Button>
			</div>
		{/if}
	{:else}
		<Button role="transparent" pad={false} action={toggleMenu}>
			<Icon icon="mdi:menu" />
		</Button>
	{/if}
</nav>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}

	.menu.mobile-open {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 75%;
		z-index: 999;

		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 3.5rem 1rem 1rem;

		background-color: var(--color-primary);
		color: var(--color-white);
	}

	.menu-close {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.menu-item {
		width: 100%;

		text-transform: capitalize;
		font-family: 'Fredoka One';
		white-space: nowrap;
		padding: 1rem;
		font-size: 1.5rem;

		display: flex;
		align-items: center;
	}

	@media (min-width: 867px) {
		ul {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			height: 100%;
		}

		.menu-item {
			padding: 0;
			font-size: 1rem;
		}
	}
</style>
