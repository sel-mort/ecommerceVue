<template>
  <Navbar />
  <router-view/>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,600&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation:wght@700&family=Montserrat:wght@400;600;700;800&family=Space+Grotesk:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin:  0;
}

#app {
  font-family: 'Space Grotesk', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
