<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Kombucha BBQ Sauce";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Kombucha BBQ Sauce</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image">
        <img src="" style="max-width: 100%" />
      </div>
      <div class="content">
        <div class="recipe">
          <h3>Great use for extra homemade kombucha.</h3>
          <h2>In a pot cook:</h2>
          <ul>
            <li>Olive oil</li>
            <li>Half an onion diced</li>
            <li>Garlic cloves minced</li>
            <li>Red pepper flakes</li>
            <li>S&P</li>
          </ul>
          <h2>Add then simmer:</h2>
          <ul>
            <li>2 cups plain kombucha</li>
            <li>2 tablespoons tomato paste</li>
            <li>2 tablespoons white vinegar</li>
            <li>2 tablespoons miso paste</li>
            <li>2 tablespoons brown sugar</li>
            <li>1 teaspoon cocoa powder</li>
            <li>1 teaspoon cumin</li>
            <li>1 chipotle minced</li>
            <li>A few squirts of ketchup (to thicken)</li>
          </ul>
          Blend with immersion blender.
        </div>
      </div>
      <div class="menu" id="menu" />
      <div class="imagef">
        <img src="" style="max-width: 100%" />
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
