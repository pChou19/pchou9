<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Coleslaw";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Coleslaw</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image">
        <img
          src="../../assets/coleslaw.jpg"
          style="max-width: 100%"
          alt="Coleslaw in container"
        />
      </div>
      <div class="content">
        <div class="recipe">
          <h2>Mix together:</h2>
          <ul>
            <li>2 bags shredded coleslaw mix (~9 oz each)</li>
            <li>1/2 to 3/4 cup mayonnaise (err on the side of using less)</li>
            <li>3 tablespoons apple cider vinegar</li>
            <li>Granulated sugar</li>
            <li>S&P</li>
          </ul>
          <h3>Best after letting sit in fridge for a few hours.</h3>
        </div>
        <div class="imagef">
          <img
            src="../../assets/coleslaw.jpg"
            style="max-width: 100%"
            alt="Coleslaw in container"
          />
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
