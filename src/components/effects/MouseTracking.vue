<template>
  <h1 class="title-mouse-tracking">MouseTracking</h1>
  <div class="mouse-tracking" @mousemove="mousePosition">
    <div class="main-text">
      <div class="box">
        <h3>{{ boxText }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    boxText: {
      default: "Bruno - Mouse tracking",
    },
  },
  setup() {
    const rotateY = ref("");
    const rotateX = ref("");

    return {
      rotateY,
      rotateX,
    };
  },

  methods: {
    mousePosition(e) {
      let middleX = window.innerWidth / 2;
      let middleY = window.innerHeight / 2;

      let offsetX = ((e.screenX - middleX) / middleX) * 45;
      let offsetY = ((e.screenY - middleY) / middleY) * 45 * -1;

      this.rotateY = offsetX + "deg";
      this.rotateX = offsetY + "deg";
    },
  },
};
</script>

<style lang='scss'>
.title-mouse-tracking {
  color: var(--clr-text-title);
}
.mouse-tracking {
  padding: 1rem;
  min-height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .main-text {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: fit-content;
    border-radius: 30px;
    background: var(--clr-bg-mouse-tracking);
    min-height: 7rem;

    transform-style: preserve-3d;
    transform: perspective(5000px) rotateY(v-bind(rotateY))
      rotateX(v-bind(rotateX));

    .box {
      > h3 {
        padding: 0.5em;

        white-space: nowrap;
        font-size: 2rem;
        font-weight: bold;
        color: var(--clr-txt-mouse-tracking);
      }

      > * {
        text-shadow: 0 0 0.3em currentColor;
      }
    }
  }
  .main-text::before,
  .main-text::after {
    content: "";
    position: absolute;
    border-radius: inherit;
  }

  .main-text::before {
    inset: 0.5rem;
    background: black;
    transform: translateZ(-39px);
    filter: blur(15px);
    opacity: 0.5;
  }

  .main-text::after {
    inset: -1rem;
    background: var(--diagonal-linear-gradient);
    transform: translateZ(-50px);
  }
}
</style>