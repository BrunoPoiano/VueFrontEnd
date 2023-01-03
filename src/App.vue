<template>
  <div>
    <nav-bar />
  </div>
  <div class="views">
    <router-view/>
  </div>
</template>

<script >
import NavBar from './components/NavBar.vue'
export default{
  components: { NavBar },
}
</script>

<style lang='stylus'>
.views{
  padding: 20px;
  height: 100%;
}
</style>
