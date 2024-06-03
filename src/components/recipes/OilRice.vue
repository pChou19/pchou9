<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Glutinous Oil Rice";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Glutinous Oil Rice</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image"></div>
      <div class="content">
        <div class="recipe">
          <h2>In rice cooker:</h2>
          <ul>
            <li>3 cups glutionouse rice</li>
            <li>2 tablespoons oyster sauce</li>
            <li>2 tablespoons soy sauce</li>
            <li>1 tablespoon sesame oil</li>
            <li>1 1/2 cup water</li>
          </ul>
          <h3>Soak for 30 min then cook on sweet rice setting.</h3>
          <h2>Cook:</h2>
          <ul>
            <li>Onion or shallots</li>
            <li>
              6 sliced dried shiitake mushrooms (reconstituted in boiled water)
            </li>
            <li>White pepper</li>
            <li>1 tablespoon sesame oil</li>
            <li>Soy sauce</li>
            <li>Cooked rice</li>
          </ul>
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
