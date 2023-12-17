<script lang="ts">
  import logoDoubleDText from '$lib/images/logo-doubleD-text.png'
	import { isMobile } from '$lib/stores';
	import Button from './Button.svelte';
	import Logo from './Logo.svelte';
	import Menu from './Menu.svelte';

  
</script>

<header>
  {#if $isMobile}
    <Menu />
    <Logo />
    <div class="right"/>
  {:else}
    <div class="left">
    </div>
    <div class="center">
      <div>
        <Logo />
        <Menu />
      </div>

      <Button role="primary">
        Get Started
      </Button>
    </div>
    <div class="right">
    </div>
  {/if}
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  /* used to center the logo */
  .right {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 867px) {
    header {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }

    .center {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      grid-column: 2 / -2;
    }

    .center div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .right {
      width: auto;
    }
  }

  @media (min-width: 1750px) {
    .center {
      grid-column: 3 / -3;
    }
  }
</style>