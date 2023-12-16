<script lang="ts">
  import imgLogo from '$lib/images/logo-doubleD-text.png';
</script>

<picture>
    <source srcset={imgLogo} type="image/png" />
    <img src={imgLogo} alt="doggydays logo" />
  </picture>

<style>
  picture {
    display: inline-block;
  }

  img {
    width: 125px;
  }

  @media (min-width: 601px) {
    img {
      width: 150px;
    }
  }
</style>