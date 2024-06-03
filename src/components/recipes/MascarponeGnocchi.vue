<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Lemon Mascarpone Gnocchi";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Lemon Mascarpone Gnocchi</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image">
        <img
          src="../../assets/gnocchi.jpg"
          style="max-width: 100%"
          alt="Lemon mascarpone gnocchi with sauce and parmesan"
        />
      </div>
      <div class="content">
        <div class="recipe">
          <h2>Mix together dough:</h2>
          <ul>
            <li>1 cup (8 oz) mascarpone room temp</li>
            <li>1 egg room temp</li>
            <li>1 egg yolk room temp</li>
            <li>Zest of a lemon</li>
            <li>Nutmeg</li>
            <li>S&P</li>
          </ul>
          <h2>Gratually beat in:</h2>
          <ul>
            <li>3/4 cup flour</li>
          </ul>
          Use two spoons to form gnocchi and lighlty coat in flour. Use hands to
          roll into ball shape. Boil in salted water till gnocchi float.
          <h2>Toss gnocchi in:</h2>
          <ul>
            <li>1 tablespoon butter</li>
            <li>Olive oil</li>
            <li>Juice of the lemon</li>
            <li>Garlic cloves smashed</li>
            <li>Cooking water if needed</li>
            <li>Parmesan</li>
          </ul>
        </div>
        <div class="imagef">
          <img
            src="../../assets/gnocchi.jpg"
            style="max-width: 100%"
            alt="Lemon mascarpone gnocchi with sauce and parmesan"
          />
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
