<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Sauce Recipes";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Sauce Recipes</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image">
        <img src="" style="max-width: 100%" />
      </div>
      <div class="content">
        <div class="recipe">
          <h3 class="sauces-header">Miso Pesto:</h3>
          <ul class="sauces">
            <li>~4 cups spinach</li>
            <li>Garlic</li>
            <li>1 tablespoon miso</li>
            <li>Sesame oil</li>
            <li>Lemon juice</li>
            <li>Vegetable & olive oil</li>
            <li>S&P</li>
          </ul>

          <h3 class="sauces-header">Hong Kong Noodle:</h3>
          <ul class="sauces">
            <li>1/2 cups stock</li>
            <li>2 tablespoons corn starch</li>
            <li>2 tablespoons sugar</li>
            <li>1 teaspoon sesame oil oil</li>
            <li>1 teaspoon fish sauce</li>
          </ul>

          <h3 class="sauces-header">Teriyaki:</h3>
          Equal parts
          <ul class="sauces">
            <li>Brown sugar</li>
            <li>Mirin</li>
            <li>Soy sauce</li>
          </ul>

          <h3 class="sauces-header">Char Siu:</h3>
          <ul class="sauces">
            <li>1/3 cup hoisin</li>
            <li>1/4 cup honey</li>
            <li>1/4 cup soy sauce</li>
            <li>3 tablespoons Shaoxing/ Chinese rice wine</li>
          </ul>

          <h3 class="sauces-header">Miso Marinade:</h3>
          Toss with veggies before roasting
          <ul class="sauces">
            <li>2 tablespoons butter</li>
            <li>2 tablespoons miso</li>
            <li>2 tablespoons maple syrup</li>
            <li>1 tablespoon soy sauce</li>
            <li>1 tablespoon rice wine vinegar</li>
          </ul>
        </div>
      </div>
      <div class="imagef">
        <img src="" style="max-width: 100%" />
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
