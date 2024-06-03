<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Veggie Stock";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Veggie Stock</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image">
        <img
          src="../../assets/veggie-stock.jpg"
          style="max-width: 100%"
          alt="Container of frozen veggie scraps"
        />
      </div>
      <div class="content">
        <div class="recipe">
          <h3>Freeze your veggie scraps and make stock!</h3>
          <p>Example of scraps I save:</p>
          <ul>
            <li>Onion ends and skins</li>
            <li>Carrot ends and skins</li>
            <li>Garlic skins</li>
            <li>Red & green pepper stems</li>
            <li>Celery ends</li>
          </ul>
          Once you have enough veggies to fill up a pot, just fill the pot up
          with water. Simmer for a few hours and then
          <a href="https://amzn.to/2VNmaXp">strain</a> out into a container.
          Lasts in the fridge for a few weeks or in freezer for longer.<br /><br />
          Experiment with different veggies. I personally don't like using
          potato skins and some may not like using pepper scraps.<br /><br />
          Stock is great for making many dishes like the
          <a href="#/recipes/one-pot-pasta/">one pot pasta</a> and
          <a href="#/recipes/seitan/">seitan</a>.
        </div>
        <div class="imagef">
          <img
            src="../../assets/veggie-stock.jpg"
            style="max-width: 100%"
            alt="Container of frozen veggie scraps"
          />
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
