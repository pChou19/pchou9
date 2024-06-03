<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Steamed Seitan";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Steamed Seitan</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image">
        <img
          src="../../assets/seitan.jpg"
          style="max-width: 100%"
          alt="Vegan steamed seitan wraped in foil"
        />
      </div>
      <div class="content">
        <div class="recipe">
          <h2>Cook:</h2>
          <ul>
            <li>1 onion</li>
            <li>Garlic</li>
            <li>2 tablespoons tomato paste</li>
            <li><a href="#/recipes/basics">Spices</a> to taste</li>
          </ul>
          <h2>Blend above with:</h2>
          <ul>
            <li>1 cup veggie broth</li>
            <li>1 tablesppon soy sauce</li>
            <li>1/4 cup chickpea flour</li>
            <li>2 tablespoons nutritional yeast</li>
          </ul>
          <h2>Mix in & knead:</h2>
          <ul>
            <li>1 & 1/2 cups vital wheat gluten*</li>
          </ul>
          <p>
            Wrap dough with foil into two logs, twisting ends tightly.<br />
            Steam for 30 minutes then flip and steam for 30 more minutes.<br />
            Let cool then unwrap and store in airtight container in fridge
            overnight.<br /><br />
            Slice into small strips and pan fry. Toss with your sauce of choice
            and serve over rice.
          </p>
          <br />
          <p>
            <a href="https://amzn.to/2EJ9pGM"
              >*Or exactly one box of these on Amazon</a
            >
          </p>

          Also on Amazon the <a href="https://amzn.to/2XL9J0h">Steamer</a> I use
          combined with <a href="https://amzn.to/2tTWigT">liner</a> and
          <a href="https://amzn.to/2XNInGH">ring.</a>
        </div>
        <br />
        <div class="imagef">
          <img
            src="../../assets/seitan.jpg"
            style="max-width: 100%"
            alt="Vegan steamed seitan wraped in foil"
          />
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
