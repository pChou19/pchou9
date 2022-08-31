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
        <h2>Software Developer <br>
          Washington, DC <br>
          <a href="https://ist.psu.edu/" target="_blank" rel="noreferrer">IST</a> @ Penn State Alum
        </h2>
        <img src="../assets/mountain.png" style="margin-left: auto; margin-right: auto; display: block;"
          alt="Painted mountain with small building">
        <br><br>
        <div style="text-align: center">
          <h3><a href="/recipes">Recipe Collection</a></h3>
          <h3><a href="/about">About</a></h3>
        </div>
      </div>
    </div>
  </div>
</template>


