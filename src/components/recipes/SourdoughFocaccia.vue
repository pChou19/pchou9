<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Sourdough Focaccia";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Sourdough Focaccia</h1>
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
            <li>180 grams active sourdough starter</li>
            <li>300 grams water</li>
            <li>1 tablespoon olive oil</li>
            <li>1/2 tablespoon honey</li>
            <li>1 1/2 teaspoon salt</li>
            <li>460 grams all-purpose flour</li>
          </ul>
          <h3>
            Adjust water and flour content accordingly till dough does not stick
            to sides of bowl.
          </h3>
          <h3>
            Proof in large bowl covered with damp towel for 6 hours in warm
            location.
          </h3>
          <h3>
            Fold four corners of dough onto itself and continue to proof for
            another 2 hours or overnight in fridge.
          </h3>
          <h3>
            Turn dough onto oiled and salted baking sheet. Stretch out and rest
            for 1-2 hours. Top with toppings.
          </h3>
          <h3>
            Bake @ 400&deg;F ~10 min, rotate (lower temp if getting too brown)
            and bake ~10 min.
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
