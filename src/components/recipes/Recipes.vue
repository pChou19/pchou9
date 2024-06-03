<script>
export default {
  mounted() {
    document.title = "Recipes";
  },
};
</script>

<template>
  <div class="header">
    <h1>Recipe Collection</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="topmenu">
        <div class="menu">
          <h3>Main</h3>
          <a href="/recipes/sdt-pasta">Sun-Dried Tomato Pasta Salad</a>
          <a href="/recipes/seitan">Steamed Seitan</a>
          <a href="/recipes/one-pot-pasta">One Pot Pasta</a>
          <a href="/recipes/mascarpone-gnocchi">Lemon Mascarpone Gnocchi</a>
          <a href="/recipes/glutinous-oil-rice">Glutinous Oil Rice</a>
        </div>
        <div class="menu">
          <h3>Appetizers</h3>
          <a href="/recipes/kimchi">Kimchi</a>
          <a href="/recipes/onion-rings">Falafel Onion Rings</a>
          <a href="/recipes/vegan-buffalo-dip">Vegan Buffalo Dip</a>
          <a href="/recipes/coleslaw">Coleslaw</a>
        </div>
        <div class="menu">
          <h3>Bread & Dough</h3>
          <a href="/recipes/focaccia">Focaccia</a>
          <a href="/recipes/sourdough-focaccia">Sourdough Focaccia</a>
          <a href="/recipes/pizza-dough">Pizza Dough</a>
          <a href="/recipes/wheat-bread">Wheat Bread</a>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="topmenu">
        <div class="menu">
          <h3>Other</h3>
          <a href="/recipes/sauces">Sauces</a>
          <a href="/recipes/veggie-stock">Veggie Stock</a>
          <a href="/recipes/kombucha-bbq">Kombucha BBQ Sauce</a>
        </div>
        <div class="menu">
          <h3>Dessert</h3>
          <a href="/recipes/black-sesame-cookies">Black Sesame Cookies</a>
        </div>
        <div class="menu">
          <h3>Info</h3>
          <a href="/recipes/basics">Basics & Equipment</a>
          <a href="/recipes/overview">Overview</a>
        </div>
      </div>
    </div>
    <div class="break"><br /><br /></div>
  </div>
</template>
