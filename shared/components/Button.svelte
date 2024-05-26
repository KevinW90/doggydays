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
    background-color: green;

    border: none;
    font-family: 'Fredoka One';
  }

  .small {
    /* Add styles for small size button */
  }

  .normal {
    padding: 1rem;
    border-radius: .5rem;
  }

  .large {
    /* Add styles for large size button */
  }

  .primary {
    background-color: pink;
    color: white;
  }
</style>