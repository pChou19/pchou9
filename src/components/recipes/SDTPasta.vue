<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Sun-Dried Tomato Pasta Salad";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Sun-Dried Tomato Pasta Salad</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image">
        <img
          src="../../assets/sdt-pasta.jpg"
          style="max-width: 100%"
          alt="Pasta with tomatoes, black olives, and sun-dried tomato sauce"
        />
      </div>
      <div class="content">
        <div class="recipe">
          <h2>Dressing, in blender:</h2>
          <ul>
            <li>1 jar sun-dried tomatoes (~7 oz)</li>
            <li>~1 cup olive oil (use oil from tomatoes)</li>
            <li>4 cloves garlic</li>
            <li>3 tablespoons red wine vinegar</li>
            <li>Salt & pepper</li>
          </ul>
          <h2>Salad:</h2>
          <ul>
            <li>Corkscrew pasta</li>
            <li>Kalamata or other olives</li>
            <li>Cherry tomatoes halved</li>
            <li>Basil</li>
            <li>Parmesan cheese</li>
          </ul>
          <h3>
            Toss together (may not use all of the dressing) and I prefer serving
            chilled (run pasta under cold water).
          </h3>
        </div>
        <div class="imagef">
          <img
            src="../../assets/sdt-pasta.jpg"
            style="max-width: 100%"
            alt="Pasta with tomatoes, black olives, and sun-dried tomato sauce"
          />
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
