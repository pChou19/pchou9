<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Coconut Sticky Rice";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Coconut Sticky Rice</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image"></div>
      <div class="content">
        <div class="recipe">
          <h2>To make in rice cooker:</h2>
          <ul>
            <li>1 cup glutinous/sweet rice</li>
            <li>1 can coconut milk</li>
            <li>1/4 cup sugar</li>
          </ul>
          <h3>
            Rinse the rice then soak in water for at least 10 minutes. Cook in rice cooker using sweet rice setting. Leave in cooker additional 30 minutes after.
          </h3>
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
