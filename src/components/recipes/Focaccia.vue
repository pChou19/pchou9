<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Focaccia";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Focaccia</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image">
        <img
          src="../../assets/focaccia.jpg"
          style="max-width: 100%"
          alt="Focaccia with tomatoes and olives"
        />
      </div>
      <div class="content">
        <div class="recipe">
          <h2>Knead into a dough:</h2>
          <ul>
            <li>5g sugar (1 teaspoon)</li>
            <li>300g water (1 1/4 cup)</li>
            <li>8g active dry yeast (1 tablespoon)</li>
            <li>450g all purpose flour (3 cups)</li>
            <li>8g salt (1 teaspoon)</li>
          </ul>
          <h3>
            Knead till dough is smooth and doesn't stick to the sides of the
            bowl, adjusting water and flour as needed.
          </h3>
          <h3>Proof dough in large bowl covered with damp towel for 1 hour.</h3>
          <h3>
            Coat a baking sheet with olive oil and sprinkle with salt. Flip
            dough onto baking sheet and gently use your fingers to spread the
            dough to cover the sheet.
          </h3>
          <h3>
            Continue to proof for another 20 minutes then place toppings such as
            tomatoes, olives, garlic, and herbs. Gently push toppings into the
            dough then sprinkle top with more salt.
          </h3>
          <h3>
            Bake @ 450&deg;F for ~20 min, rotating halfway. Lower tempurature if
            browning too quikcly.
          </h3>
        </div>
        <div class="imagef">
          <img
            src="../../assets/focaccia.jpg"
            style="max-width: 100%"
            alt="Focaccia with tomatoes and olives"
          />
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
