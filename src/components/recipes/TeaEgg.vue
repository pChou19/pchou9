<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Chinese Tea Egg";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Chinese Tea Egg</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image"></div>
      <div class="content">
        <div class="recipe">
          <h2>Soft boil and peel eggs (6 minutes in boiling water then ice bath)</h2>
          <h2>Bring to boil in sauce pan:</h2>
          <ul>
            <li>4 tablespoons soy sauce</li>
            <li>2 tables tamari or dark soy sauce</li>
            <li>1 star anise</li>
            <li>2 bay leaves</li>
            <li>1 teaspoon Sichuan pepeprcorns</li>
            <li>1 cinnamon stick</li>
            <li>2 cups water</li>
          </ul>
          <h3>Brew 2 tablespoons black tea in broth for 6 min.</h3>
          <h3>Marinate eggs in broth overnight.</h3>
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
