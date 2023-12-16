<script lang="ts">
  import { isMobile } from '$lib/stores';
import Icon from '@iconify/svelte';
	import Button from './Button.svelte';

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

  let isOpen = !$isMobile;

  const toggleMenu = () => {
    isOpen = !isOpen;
    console.log('isOpen', isOpen)
  }

  $: console.log(isOpen)
</script>

<div class="menu" class:mobile-open={$isMobile && isOpen}>
  {#if isOpen}
    {#each menuItems as item}
      <div class="menu-item">
        {item.name}
      </div>
    {/each}

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
</div>

<style>
  .menu.mobile-open {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 75%;
  
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
    font-family: "Fredoka One";
    white-space: nowrap;
    padding: 1rem;
    font-size: 1.5rem;

    display: flex;
    align-items: center;
  }

@media (min-width: 867px) {
  .menu {
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