<template>
  <router-view />
  <div class="footer shadow"></div>
  <div class="fname">
    <a href="/" style="text-decoration: none; color: gray;">Patrick Chou</a>
    <button @click="toggleTheme" class="theme-toggle"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
      <svg width="32" height="32" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
        <path class="icon-path"
          d="M492-280q83 0 141.5-58.5T692-480q0-83-58.5-141.5T492-680q-22 0-43 4.5T408-662q54 25 85.5 74T525-480q0 59-31.5 108T408-298q20 9 41 13.5t43 4.5ZM480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: false,
    };
  },
  mounted() {
    // Check localStorage for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDark = savedTheme === 'dark';
    } else {
      // If no saved preference, use system preference
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      this.applyTheme();
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    },
    applyTheme() {
      if (this.isDark) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
    },
  },
};
</script>

<style scoped>
.theme-toggle {
  display: block;
  margin: 10px auto 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.15s;
  border-radius: 50%;
  width: 32px;
  height: 32px;
}

.theme-toggle svg .icon-path {
  fill: #959898;
}
</style>

<style>
.dark-mode .theme-toggle svg .icon-path {
  fill: gray;
}
</style>
