<script lang="ts">
  import { isMobile } from '$lib/stores';
import Icon from '@iconify/svelte';

  const menuItems = [
    {
      role: 'link',
      name: 'home',
      link: '/'
    },
    {
      role: 'link',
      name: 'how it works',
      link: '#about'
    },
    {
      role: 'link',
      name: 'pricing',
      link: '#contact'
    },
    {
      role: 'dropdown',
      name: 'partners',
    },
    {
      role: 'link',
      name: 'contact',
      link: '#contact'
    },
  ];

</script>

<div class="menu">
  {#if $isMobile}
    <Icon icon="mdi:menu" />
  {:else}
    {#each menuItems as item}
      <div class="menu-item">
        {item.name}
        {#if item.role === 'dropdown'}
          <Icon icon="iconamoon:arrow-down-2-fill" />
        {/if}
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

    display: flex;
    align-items: center;

  }
</style>