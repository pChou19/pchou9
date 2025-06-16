<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Granola Recipe";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Granola</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image">
        <img src="" style="max-width: 100%" />
      </div>
      <div class="content">
        <div class="recipe">
          <h2>Combine:</h2>
          <ul>
            <li>2 cups rolled oats</li>
            <li>3/4 cups nuts</li>
            <li>1/4 cup total olive and/or coconut oil</li>
            <li>1/4 cup maple syrup</li>
            <li>Salt</li>
            <li>Vanilla extract</li>
          </ul>
          <h3>Bake @ 350&deg;F for 20 min till golden</h3>
        </div>
      </div>
      <div class="imagef">
        <img src="" style="max-width: 100%" />
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
