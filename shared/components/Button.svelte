<script lang="ts">
  // the text to display on the button
  export let text = 'Default Button Text';
  // the type of button (primary, secondary, etc.)
  export let variant = 'primary';
  // the size of the button (small, normal, large)
  export let size = 'normal';
  export let full: boolean = false;
</script>

<button class={`button ${size} ${variant}`} class:full={full}>
  {text}
</button>

<style>
  .button {
    border: none;
    font-family: 'Fredoka One';
  }

  .small {
    padding: var(--sp-quarter) var(--sp-half);
    border-radius: var(--sp-quarter);
  }
  
  .normal {
    padding: var(--sp-base);
    border-radius: var(--sp-half);
  }

  .large {
    padding: var(--sp-one-and-a-half);
    border-radius: var(--sp-three-quarters);
    font-size: var(--sp-one-and-a-quarter);
  }

  .primary {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  .secondary {
    background-color: var(--color-grey-2);
    color: var(--color-primary);
  }
</style>