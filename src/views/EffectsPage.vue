<template>
  <div class="container">
    <h1 class="title">Effects</h1>
    <div>
      <pop-out />
    </div>
    <div>
      <mouse-tracking />
    </div>
    <div>
      <neon-button />
    </div>
    <div>
      <card-animation />
    </div>
  </div>
</template>

<script>
import PopOut from "@/components/effects/PopOut.vue";
import MouseTracking from "@/components/effects/MouseTracking.vue";
import NeonButton from "@/components/effects/NeonButton.vue"
import CardAnimation from "@/components/effects/CardAnimation.vue"
export default {
  components: {
    PopOut,
    MouseTracking,
    NeonButton,
    CardAnimation,
  },
};
</script>

<style lang='scss'>
.container {
  .title {
    color: var(--clr-text-title);
  }
  margin: 4rem;

  > div {
    min-height: 30rem;
  }
}
</style>