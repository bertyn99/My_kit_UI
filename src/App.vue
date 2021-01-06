<template>
  <!-- <nav>
    <router-link>fg</router-link>
  </nav> -->
  <Accueil></Accueil>
</template>

<script>
import Accueil from "./views/Accueil.vue";

export default {
  name: "App",
  components: {
    Accueil,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
