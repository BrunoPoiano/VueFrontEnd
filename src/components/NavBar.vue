<template>
  <div class="nav-bar">
    <div class="links">
      <router-link class="link" :to="{ name: 'VuexPage' }">
        <span> Shapes </span>
      </router-link>
      <router-link class="link" :to="{ name: 'NormalPage' }">
        <span> Theme Switch </span>
      </router-link>
      <router-link class="link" :to="{ name: 'gridPage' }">
        <span> Grip </span>
      </router-link>
      <router-link class="link" :to="{ name: 'effectsPage' }">
        <span> Effects </span>
      </router-link>
    </div>
    <theme-switcher-two />
  </div>
</template>

<script>
import themeSwitcherTwo from "@/components/themeSwitcherTwo.vue";
export default {
  components: {
    themeSwitcherTwo,
  },
};
</script>

<style  lang='scss'>
.nav-bar {
  background: #3e3e3e;
  display: grid;
  grid-template-columns: 90% 10%;
  padding: 10px;
  position:relative;
  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    .link {
      padding: 5px 10px;
      background: #2d2d2d;
      span {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: rgb(169 169 169);
      }
      border-radius: 15px;
    }

    .link:hover {
      background: black;
      span {
        color: white;
      }
    }
    .router-link-active {
      background: black;
      span {
        color: white;
      }
    }
  }
}
</style>