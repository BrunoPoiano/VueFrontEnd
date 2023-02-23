<template>
  <div class="css-shapes">
    <header>
      <h1 class="title">Css shapes</h1>
    </header>

    <section class="diagonal">
      <div class="wrapper">
        <h2 class="section-title">Diagonal</h2>
        <p>
          {{ content }}
        </p>
      </div>
    </section>

    <section>
      <div class="wrapper">
        <h2 class="section-title">Conteudo buffer</h2>
        <p>
          {{ content }}
        </p>
      </div>
    </section>

    <section class="spikes">
      <div class="wrapper">
        <h2 class="section-title">spikes</h2>
        <p>
          {{ content }}
        </p>
      </div>
    </section>

    <section>
      <div class="wrapper">
        <h2 class="section-title"> Filler section</h2>
        <p>
          {{ content }}
        </p>
      </div>
    </section>

    <section class="wavy">
      <div class="wrapper">
        <h2 class="section-title">Wavy</h2>
        <p>
          {{ content }}
        </p>
      </div>
    </section>

    <section>
      <div class="wrapper">
        <h2 class="section-title">Filler section</h2>
        <p>
          {{ content }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const content = ref(
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste laudantium ipsum autem ipsa, laboriosam aliquid quas perferendis culpa consectetur iusto nisi numquam nam blanditiis temporibus deleniti totam vero ipsam necessitatibus."
    );

    return {
      content,
    };
  },
};
</script>

<style lang='scss'>
.css-shapes {
  .title {
    color: var(--clr-text-title);
    text-align: center;
  }

  section {
    padding-block: 5rem;
    .wrapper {
      max-width: 50rem;
      margin-inline: auto;
      padding-inline: 1rem;
      .section-title {
        color: var(--clr-text-title);
      }

      p {
        color: var(--clr-text-title);
      }
    }
  }

  .diagonal {
    --skew-angle: -6deg;

    position: relative;
    isolation: isolate;

    ::after {
      content: "";
      background: var(--diagonal-linear-gradient);
      position: absolute;
      z-index: -1;
      inset: 0;
      transform: skewY(var(--skew-angle));
    }
  }

  .spikes {
    --spike-color: var(--clr-body-bg);
    --spike-width: 90px;
    --spike-height: 8px;

    position: relative;
    background: var(--spikes-linear-gradient);
  }

  .spikes::before,
  .spikes::after {
    content: "";
    position: absolute;
    width: 100%;
    height: var(--spike-height);
    background: var(--spike-color);

    -webkit-mask-image: var(--spike-svg);
    -webkit-mask-size: var(--spike-width) var(--spike-height);

    mask-image: url("@/assets/spikes.svg");
    mask-size: var(--spike-width) var(--spike-height);
  }

  .spikes::before {
    top: 0;
  }

  .spikes::after {
    bottom: 0;
    transform: rotate(0.5turn);
  }


  .wavy{
    background: var(--wavy-linear-gradient);
    
    //https://css-generators.com/wavy-shapes/
    --mask:
    radial-gradient(107.38px at 50% 144.55px,#000 99%,#0000 101%) calc(50% - 98px) 0/196px 51% repeat-x,
    radial-gradient(107.38px at 50% -95.55px,#0000 99%,#000 101%) 50% 49px/196px calc(51% - 49px) repeat-x,
    radial-gradient(107.38px at 50% calc(100% - 144.55px),#000 99%,#0000 101%) calc(50% - 98px) 100%/196px 51% repeat-x,
    radial-gradient(107.38px at 50% calc(100% + 95.55px),#0000 99%,#000 101%) 50% calc(100% - 49px)/196px calc(51% - 49px) repeat-x;
    -webkit-mask: var(--mask);
    mask: var(--mask);

  }
}
</style>