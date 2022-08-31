<script>
import Menu from './Menu.vue'

export default {
  mounted() {
    document.title = "Overview";
  },
  components: { Menu }
}
</script>

<template>
  <div class="header">
    <h1>Overview</h1>
  </div>
  <div style="overflow:auto">
    <div class="main">
      <div class="image">

      </div>
      <div class="content">
        <div class="recipe">
          <p>This is a collection of recipes that I've saved from various parts of the internet. I wanted to put
            everything into one simple mobile friendly place and purposefully brief.
            <br><br>So far every recipe is vegetarian and could be made or adapted to be vegan.
          </p>
          <p>Questions? <a href="https://twitter.com/pChou19" target="_blank" rel="noreferrer">Find me on Twitter
              @pChou19</a></p>
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>
