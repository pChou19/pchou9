<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Black Sesame Cookies";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Black Sesame Cookies</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image"></div>
      <div class="content">
        <div class="recipe">
          <h2>Mix:</h2>
          <ul>
            <li>2 cups black sesame seeds</li>
            <li>8 tablespoons vegetable oil</li>
            <li>2 bananas mashed</li>
            <li>1/4 cup sugar</li>
            <li>1 cup white chocolate</li>
          </ul>
          <h3>
            Toast black sesame seeds then blend to a paste, slowly adding in
            oil. Bake at 350&deg;F for 20 minutes.
          </h3>
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
