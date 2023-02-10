<script>
export default {
  mounted() {  
    document.title = "Patrick Chou";  
  }
}
</script>

<template>
  <div class="header">
    <h1><a href="/" style="text-decoration:none">Patrick Chou</a></h1>
  </div>
  <div style="overflow:auto">
    <div class="main">
      <div class="home-content">
        <div style="text-align: center">
          <h2><a href="/recipes">Recipe Collection</a></h2>
          <h2><a href="/metro">Metro Schedule</a></h2>
          <h2><a href="/about">About</a></h2>
        </div>
        <img src="../assets/mountain.png" style="margin-left: auto; margin-right: auto; display: block;"
          alt="Painted mountain with small building">
      </div>
    </div>
  </div>
</template>


