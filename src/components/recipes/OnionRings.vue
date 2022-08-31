<script>
import Menu from './Menu.vue'

export default {
  mounted() {
    document.title = "Falafel Onion Rings";
  },
  components: { Menu }
}
</script>

<template>
  <div class="header">
    <h1>Falafel Onion Rings</h1>
  </div>
  <div style="overflow:auto">
    <div class="main">
      <div class="image">
            <img src="../../assets/onion-rings.jpg" style="max-width:100%" alt="Vegatarian falafel crusted onion-rings">
         </div>
         <div class="content">
            <div class="recipe">
            <h2>Preheat oven @ 450&deg;F</h2>
            <h2>Mix in bowl:</h2>
            <ul>
               <li>2 eggs</li>
               <li>1/4 cup mayonnaise</li>
               <li>Garlic powder</li>
               <li>Cumin</li>
            </ul>
            <h2>Separate bowl:</h2>
            <ul>
               <li>Knorr Falafel Mix</li>
            </ul>
            <h3>Toss onion rings in flour. Dip in wet mixture then falafel mix. Bake on oiled sheet for ~8 minutes.</h3>
            </div>
             <div class="imagef">
                 <img src="../../assets/onion-rings.jpg" style="max-width:100%" alt="Vegatarian falafel crusted onion-rings">
             </div>
         </div>
      <Menu></Menu>
    </div>
  </div>
</template>
