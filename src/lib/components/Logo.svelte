<script lang="ts">
  import imgLogo from '$lib/images/logo-doubleD-text.png';
</script>

<picture>
    <source srcset={imgLogo} type="image/png" />
    <img src={imgLogo} alt="icon-speech-bubbles" />
  </picture>

<style>
  picture {
    display: inline-block;
  }

  img {
    width: 150px;
  }
</style>