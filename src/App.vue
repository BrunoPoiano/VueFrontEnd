<template>
  <div>
    <nav-bar />
    <!-- <theme-switcher /> -->
  </div>
  <div class="views">
    <router-view/>
  </div>
</template>

<script >
import NavBar from './components/NavBar.vue'
// import themeSwitcher from './components/themeSwitcher.vue'
export default{
  components: { 
    NavBar,
    // themeSwitcher,
  },
}
</script>

<style lang='scss'>

</style>
