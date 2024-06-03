<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Pizza Dough";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Pizza Dough</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image"></div>
      <div class="content">
        <div class="recipe">
          <h3 class="sauces-header">Regular:</h3>
          <ul class="sauces">
            <li>300g water (1 1/3 cups)</li>
            <li>30g olive oil (2 tablespoons)</li>
            <li>7g yeast (2 teaspoons)</li>
            <li>30g sugar (2 tablespoons)</li>
            <li>500g flour (4 cups, can use mixure of AP & bread)</li>
            <li>15g salt (2 teaspoons)</li>
          </ul>
          <h3>
            Knead till a smooth dough is formed adjusting water or flour levels
            as needed. Divide in half to make 2 balls. Proof for a few hours,
            punching down dough every ~40 min. Best if refrigerated overnight,
            up to a few days.
          </h3>

          <h3 class="sauces-header">Sourdough:</h3>
          <ul class="sauces">
            <li>50g mature starter</li>
            <li>150g water</li>
            <li>10g olive oil</li>
            <li>15g sugar</li>
            <li>9g salt</li>
            <li>300g flour</li>
          </ul>
          <h3>
            For one portion, knead till a smooth dough is almost formed (dough
            should be on wet side), adjusting water or flour levels as needed.
            Proof for 3 hours, folding four courners every 30 min. Cover and
            rest in fridge overnight. Next day remove and proof for additional 6
            hours before using.
          </h3>
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
