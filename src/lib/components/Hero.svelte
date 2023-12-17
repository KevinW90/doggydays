<script>
	import Button from "./Button.svelte";
  import puppyOnGrass from "$lib/images/puppy-on-grass.png";

</script>
<div class="hero">
  <div class="left">
    <h1>Personalized Dog Walking and Training</h1>
    <p>Scheduled and goal-based dog walking from people who care; and every walk is a potential training opportunity.</p>
    <div class="actions">
      <Button role="primary">Get Started</Button>
      <Button role="transparent">See Pricing</Button>
    </div>
  </div>
  <div class="right">
    <picture>
      <source srcset={puppyOnGrass} type="image/png" />
      <img src={puppyOnGrass} alt="doggydays logo" />
    </picture>
  </div>
</div>

<style>
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    text-align: center;
    padding: 1rem;
  }

  .hero div:not(.actions) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  h1 {
    font-family: "Fredoka One";
    margin: 0;
  }

  p {
    font-family: "Truculenta", sans-serif;
    margin: 0;
  }

  .actions {
    display: flex;
    gap: 1rem;
  }

  picture {
    display: flex;
    align-items: center;
  }

  img {
    width: 100%;
    max-width: 1000px;
  }

  @media (min-width: 867px) {
    .hero {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 0;

      text-align: left;
    }

    .hero div:not(.actions) {
      align-items: flex-start;
    }

    .left {
      grid-column: 2 / span 4;
    }

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
    }

    .actions {
      padding-top: 1rem;
    }

    .right {
      grid-column: 6 / span 7;
    }
  }

  @media (min-width: 1201px) {
    h1 {
      font-size: 3.5rem;
    }

    p {
      font-size: 1.75rem;
    }
  }

  @media (min-width: 1500px) {
    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 2rem;
    }
  }

  @media (min-width: 1750px) {
    .left {
      grid-column: 3 / span 5;
    }

    .right {
      grid-column: 8 / span 4;
    }
  }
</style>