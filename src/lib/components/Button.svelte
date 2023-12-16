<script lang="ts">
  export let role: string = ''; // primary, secondary, ...
  export let width: string = 'fit'; // fit, full, ... 
</script>

<button class="btn {role} {width}">
  <slot></slot>
</button>

<style>
  .btn {
    padding: 1rem;
    border: none;
    border-radius: .5rem;
    font-family: "Fredoka One";
    white-space: nowrap;

  }

  .btn.fit {
    width: fit-content;
  }

  .btn.full {
    width: 100%;
  }

  .primary {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  .transparent {
    background-color: transparent;
  }
</style>