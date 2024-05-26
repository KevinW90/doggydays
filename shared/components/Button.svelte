<script lang="ts">
  // the text to display on the button
  export let text = 'Default Button Text';
  // the type of button (primary, secondary, etc.)
  export let variant = 'primary';
  // the size of the button (small, normal, large)
  export let size = 'normal';
  export let full: boolean = false;

  import '$styles/colors.css'
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
    padding: .5rem;
    border-radius: .25rem;
  }

  .normal {
    padding: 1rem;
    border-radius: .5rem;
  }

  .large {
    padding: 1.5rem;
    border-radius: .75rem;
    font-size: 1.25rem;
  }

  .primary {
    background-color: var(--color-primary);
    color: white;
  }

  .secondary {
    background-color: var(--color-grey-2);
    color: var(--color-primary);
  }
</style>