<script>
import Menu from './Menu.vue'

export default {
  mounted() {
    document.title = "Wheat Bread";
  },
  components: { Menu }
}
</script>

<template>
  <div class="header">
    <h1>Wheat Bread</h1>
  </div>
  <div style="overflow:auto">
    <div class="main">
      <div class="image">
        <img src="../../assets/wheat-bread.jpg" style="max-width:100%" alt="Wheat bread on cutting board with bread pan">
      </div>
      <div class="content">
        <div class="recipe">
          <h2>For 1 1/2 lb loaf:</h2>
          <ul>
            <li>300g water (1 1/2 cups)</li>
            <li>100g ripe sourdough starter (optional)</li>
            <li>13g olive oil (1 tablespoon)</li>
            <li>20g honey or sugar (1 tablespoon)</li>
            <li>7g yeast (2 teaspoons)</li>
            <li>200g whole wheat flour (1 1/2 cups)</li>
            <li>200g AP or bread flour (1 1/2 cups)</li>
            <li>20g vital wheat gluten (2 tablespoons) (optional)</li>
            <li>8g salt (1 teaspoon)</li>
          </ul>
          <h3>Mix till smooth dough is formed, adjusting water or flour as needed. Proof for an hour, then punch down
            and knead dough to fit a loaf pan. Preheat oven to 400&deg;F. Proof in pan for another 10-15 or until risen to just below top of pan. Put pan on lowest rack and lower temp to 350&deg;F.</h3>
          <h3>If using in bread machine (T-fal Actibread), place ingredients in that order, then run program 5 adjusting
            water or flour as needed during mixing until a smooth dough is formed.</h3>
        </div>
        <div class="imagef">
          <img src="../../assets/wheat-bread.jpg" style="max-width:100%" alt="Wheat bread on cutting board with bread pan">
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
