<script lang="ts">
  import { isMobile } from '$lib/stores';
import Icon from '@iconify/svelte';

  const menuItems = [
    {
      name: 'home',
      link: '/'
    },
    {
      name: 'how it works',
      link: '/about'
    },
    {
      name: 'pricing',
      link: '/contact'
    },
    {
      name: 'partners',
    },
    {
      name: 'contact',
      link: '/contact'
    },
  ];

  $: console.log(!isMobile)
</script>

<div class="menu">
  {#if $isMobile}
    <Icon icon="mdi:menu" />
  {:else}
    {#each menuItems as item}
      <div class="menu-item">
        {item.name}
      </div>
    {/each}
  {/if}
</div>

<style>
  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    height: 100%;
  }

  .menu-item {
    height: 100%;
    text-transform: capitalize;
    font-family: "Fredoka One";
    white-space: nowrap;
  }
</style>