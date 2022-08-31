<script>
import Menu from './Menu.vue'

export default {
  mounted() {
    document.title = "One Pot Pasta";
  },
  components: { Menu }
}
</script>

<template>
  <div class="header">
    <h1>One Pot Pasta</h1>
  </div>
  <div style="overflow:auto">
    <div class="main">
      <div class="image">
        <img src="../../assets/one-pot-pasta.jpg" style="max-width:100%" alt="Vegan one pot pasta">
      </div>
      <div class="content">
        <div class="recipe">
          <h2>In one pot:</h2>
          <ul>
            <li>1/2 large onion diced</li>
            <li>Garlic minced</li>
            <li>Tomato paste</li>
            <li>1 can fire-roasted tomato (~28 oz)</li>
            <li>1 can sun-dried tomato, drained & juliened (~8 oz)</li>
            <li>1 jar capers, drained (~3.5 oz)</li>
            <li>1 lb box of fusilli or similiar</li>
            <li>~4 cups stock (enough to cover pasta)</li>
            <li>S&P</li>
          </ul>
          <h3>Cook onion, garlic, & tomato paste then add rest of the ingredients. Bring to boil then simmer till pasta
            is cooked ~15 min. Garnish with basil and a dollop of ricotta.</h3>
        </div>
        <div class="imagef">
          <img src="../../assets/one-pot-pasta.jpg" style="max-width:100%" alt="Vegan one pot pasta">
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
