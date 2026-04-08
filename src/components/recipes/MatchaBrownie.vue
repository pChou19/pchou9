<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Matcha Brownie";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Matcha Brownie</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image"></div>
      <div class="content">
        <div class="recipe">
          <h2>In sauce pan brown 1 stick of butter then add in:</h2>
          <ul>
            <li>110g white chocolate</li>
            <li>20g matcha sifted</li>
            <li>100g confectioners' sugar sifted</li>
            <li>50g brown sugar</li>
            <li>Salt</li>
            <li>2 eggs</li>
          </ul>
          <h2>Fold in 60g flour. Pour into oiled or lined baking pan.</h2>
          <h2>Bake at 325&deg;F for 45 min</h2>
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
