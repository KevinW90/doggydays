<script lang="ts">
  import logoDoubleDText from '$lib/images/logo-doubleD-text.png'
	import { isMobile } from '$lib/stores';
	import Logo from './Logo.svelte';
	import Menu from './Menu.svelte';

  
</script>

<header>
  {#if $isMobile}
    <Menu />
    <Logo />
    <div />
  {:else}
    <div class="left">
      <Logo />
      <Menu />
    </div>
    <div>
      get started
    </div>
  {/if}
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
</style>