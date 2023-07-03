<script>
import Menu from './Menu.vue'

export default {
  mounted() {
    document.title = "Kimchi";
  },
  components: { Menu }
}
</script>

<template>
  <div class="header">
    <h1>Kimchi</h1>
  </div>
  <div style="overflow:auto">
    <div class="main">
      <div class="image">
        <img src="../../assets/kimchi.jpg" style="max-width:100%" alt="Kimchi in mason jars">
      </div>
      <div class="content">
        <div class="recipe">
          <h2>Cut up and combine:</h2>
          <ul>
            <li>6 pounds napa cabbage</li>
            <li>70g (1/2 cup) salt</li>
          </ul>
          <h3>Let as much water from the cabbage drain out for two hours or so, mixing occasionally. Then rinse cabbage thouroghly.</h3>
          <h2>Cook to form a porridge:</h2>
          <ul>
            <li>2 cups water</li>
            <li>2 tablespoons glutionous rice flour or sweet rice flour</li>
            <li>2 tablesppons sugar (turbunado, brown, or white)</li>
          </ul>
          <h2>Prep veggies:</h2>
          <ul>
            <li>2 cups daikon in matchsticks</li>
            <li>1 cup carrot in matchsticks</li>
            <li>8 green onions chopped</li>
          </ul>
          <h2>Let porridge cool and then combine:</h2>
          <ul>
            <li>2 cups <a href="https://www.amazon.com/gp/product/B005G8IDTQ">gochugaru</a> hot pepper flakes</li>
            <li>1/2 cup fish sauce</li>
            <li>2 heads of garlic minced</li>
            <li>2 teaspoon ginger minced</li>
            <li>1 medium onion minced</li>
          </ul>
          <h3>Mix all ingredients together and store in mason jar or preferably a <a href="https://www.amazon.com/gp/product/B078WJGNXR">fermentation container</a>, pressing down to remove air bubbles. After a day store in fridge to continue fermenting.</h3>
        </div>
        <div class="imagef">
          <img src="../../assets/kimchi.jpg" style="max-width:100%" alt="Kimchi in mason jars">
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
