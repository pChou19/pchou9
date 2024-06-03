<script>
import Menu from "./Menu.vue";

export default {
  mounted() {
    document.title = "Basics";
  },
  components: { Menu },
};
</script>

<template>
  <div class="header">
    <h1>Basics</h1>
  </div>
  <div style="overflow: auto">
    <div class="main">
      <div class="image"></div>
      <div class="content">
        <div class="recipe">
          <h3>Pantry</h3>
          <p>
            I always have the following items stocked and use in many recipes:
          </p>
          <ul>
            <li>Onions</li>
            <li>Garlic</li>
            <li>
              Spices
              <ul>
                <li>Paprika</li>
                <li>Red pepper flakes</li>
                <li>Chili powder</li>
                <li>Cumin</li>
                <li>Coriander powder</li>
              </ul>
            </li>
            <li>Tomato Paste</li>
            <li>Soy Sauce</li>
            <li>Rice Vinegar</li>
            <li>Sesame Oil</li>
            <li>Mirin</li>
            <li>Hot sauces</li>
          </ul>
          <h3>Equipment</h3>
          <p>
            Here are tools I routinely use and think are worth buying from
            Amazon for a small apartment kitchen:
          </p>
          <ul>
            <li>
              <a href="https://amzn.to/2XL9J0h">Bamboo steamer</a> with
              <a href="https://amzn.to/2tTWigT">liner</a> and
              <a href="https://amzn.to/2XNInGH">ring</a>
            </li>
            <li><a href="https://amzn.to/2XKL7Vs">Mini Food Processor</a></li>
            <li><a href="https://amzn.to/2UsrOhD">Crock-Pot</a></li>
            <li><a href="https://amzn.to/2XNHzS8">Pepper Grinder</a></li>
            <li><a href="https://amzn.to/2VNmaXp">Strainer 9"</a></li>
            <li><a href="https://amzn.to/2SORB1L">Measuring Cups</a></li>
            <li><a href="https://amzn.to/2EWTC8u">Measuring Spoons</a></li>
            <li><a href="https://amzn.to/2XMxK72">Oil Dispenser</a></li>
            <li><a href="https://amzn.to/2u0RwOp">Microplane</a></li>
            <li><a href="https://amzn.to/2SSdYDF">Mandoline</a></li>
            <li><a href="https://amzn.to/2tXWP1g">Can Opener</a></li>
            <li><a href="https://amzn.to/2tWU2Ft">Whisk</a></li>
            <li><a href="https://amzn.to/2EJnDYc">Electric Kettle</a></li>
          </ul>

          <h3>Homegrown Herbs</h3>
          <p>
            Currently I grow basil, thyme, and chives on my small windowsill
            "graden". I've found these are the easiest to take care of and ones
            I use most frequently. <br />Basil grows fairly fast so I will trim
            the leaves and freeze them until I have enough to make a pesto.
          </p>
        </div>
      </div>
      <Menu></Menu>
      <div class="imagef"></div>
    </div>
  </div>
</template>
