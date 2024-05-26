<script lang="ts">
  // the text to display on the button
  export let text = '';
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
  }

  .small {
    /* Add styles for small size button */
  }

  .medium {
    /* Add styles for medium size button */
  }

  .large {
    /* Add styles for large size button */
  }

  .primary {
    background-color: blue;
  }
</style>