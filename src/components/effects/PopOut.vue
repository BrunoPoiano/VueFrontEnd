<template>
  <div class="popout">
    <h1 class="title-popout">pop-out</h1>
    <div style="display: flex; justify-content: space-evenly">
      <div class="person" v-for="(person, index) in persons" :key="index">
        <div class="person__container">
          <img class="person__circle" :src="person.background" alt="" />
          <img
            class="person__img"
            :src="person.image"
            alt="imagem de usuario"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import background from "@/assets/background.png";
import eu from "@/assets/without-background/eu-w-b.png";
import tony from "@/assets/without-background/tony-w-b.png";
export default {
  setup() {
    const persons = ref([
      {
        image: eu,
        background: background,
      },

      //   {
      //     image: tanjiro,
      //     background: background,
      //   },

      {
        image: tony,
        background: background,
      },
    ]);
    return {
      persons,
    };
  },
};
</script>

<style lang="scss">
.title-popout {
  color: var(--clr-text-title);
}
.popout {
  padding: 1rem;

  img {
    max-width: 100%;
    display: block;
  }

  .person {
    --transform-speed: 250ms;
    --person-img-scale: scale(1);
    max-width: 20rem;
    margin-inline: auto;
    position: relative;
    transform: scale(0.8);
    .person__container {
      aspect-ratio: 1/1.5;
      display: grid;
      align-items: end;
      border-radius: 0 0 100vw 100vw;
      overflow: hidden;
      transition: transform var(--transform-speed) ease;
      .person__circle {
        position: absolute;
        inset: auto 0 0;
        width: 100%;
        aspect-ratio: 1/1;
        margin-inline: auto;
        border-radius: 50%;
        object-fit: cover;
      }

      .person__img {
        position: relative;
        z-index: 2;
        top: 2rem;
        transform: var(--person-img-scale);
        transition: transform var(--transform-speed) ease;
      }
    }

    .person__container:hover {
      transform: scale(1.2);
    }

    .person__container:hover .person__img {
      transform: var(--person-img-scale) translateY(-2rem);
    }
  }
}
</style>