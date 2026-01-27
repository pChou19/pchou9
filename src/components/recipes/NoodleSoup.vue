<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Taiwanese Noodle Soup";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Taiwanese Noodle Soup</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image"></div>
      <div class="content">
        <div class="recipe">
          <h2>Saute in a large pot:</h2>
          <ul>
            <li>Yellow onion</li>
            <li>Scallions</li>
            <li>Salt & pepper</li>
            <li>Coriander powder</li>
            <li>Garlic</li>
            <li>Carrots</li>
            <li>Plum tomatoes diced in chunks</li>
            <li>Veggie meat ("steak" or seitan)</li>
            <li>Baby bok choy</Li>
            <li>Tomato paste (~1 tablespoon)</li>
            <li>Doubanjian chili bean paste (~1 tablespoon)</li>
          </ul>
          <h2>Add broth:</h2>
          <ul>
            <li>1/4 cup soy sauce</li>
            <li>1/4 cup tamari or dark soy sauce</li>
            <li>1/2 cup Shaoxing wine</li>
            <li>1 tablespoon sugar</li>
            <li>Sugar (~1 tablespoon)</li>
            <li>5 cups water (taste and adjust as needed)</li>
          </ul>
          <h2>In a reusable tea bag and add to broth:</h2>
          <ul>
            <li>2 star anise</li>
            <li>1 tablespoon Sichuan peppercorns</li>
            <li>Cinnamon stick</li>
            <li>6 dried red chilies</li>
            <li>2 bay leaves</li>
          </ul>
          <h3>
            Simmer for a few hours. Serve with white noodles or rice and <a href="/recipes/tea-egg">tea egg</a>.
          </h3>
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
