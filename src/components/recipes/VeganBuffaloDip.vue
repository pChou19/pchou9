<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Vegan Buffalo Dip";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Vegan Buffalo Dip</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image"></div>
      <div class="content">
        <div class="recipe">
          <h2>Blend:</h2>
          <ul>
            <li>1 cup raw cashews (soaked at least 30 min & drained)</li>
            <li>1 can chickpeas or cannellini beans</li>
            <li>3/4 cup Frank's Red Hot</li>
            <li>1/2 tablespoon lemon juice</li>
            <li>1/2 cup water</li>
            <li>2 tablespoons nutritional yeast</li>
            <li>Onion powder</li>
            <li>Garlic powder</li>
            <li>Salt & pepper</li>
          </ul>
          <h2>Bake in dish @ 375&deg;F</h2>
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
