<template>
  <h1 class="title-card-animation">Card Animation</h1>
    <div class="card-container" >
        <div 
            class="card" 
            v-for="(card, index) in cards" :key="index"
            :style="{ backgroundImage: 'url(' + card.backgroundImage + ')'}"
        >
            <div class="card-content">
            <h2 class="card-title">{{card.titleText}}</h2>
            <p class="card-body">
                {{card.bodyText}}
            </p>
            <a href="#" class="button">{{card.buttonText}}</a>
            </div>
        </div>
    </div>
</template>

<script>
import backimg from "@/assets/card-bg.jpg";
export default {
    props:{
        cards:{
            default:[
            {
                titleText: 'titulo',
                bodyText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, rem',
                buttonText: 'Learn More',
                backgroundImage: backimg
            },
            {
                titleText: 'Novo titulo',
                bodyText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, rem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, rem',
                buttonText: 'Learn More',
                backgroundImage: backimg
            },
            {
                titleText: 'NOvo grande titulo',
                bodyText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, rem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, rem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, rem',
                buttonText: 'Learn More',
                backgroundImage: backimg
            },
            {
                titleText: 'Banana quadrado testo titulo',
                bodyText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, rem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, rem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, rem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, rem',
                buttonText: 'Learn More',
                backgroundImage: backimg
            },
        ]}
    }
};
</script>

<style lang="scss">
:root {
  --clr-accent-500: hsl(142, 94%, 41%);
  --clr-accent-400: hsl(142, 90%, 61%);

  --clr-card-body: rgb(255 255 255 / 0.6);
  --clr-card-title: rgb(255 255 255 / 0.7);

  --card-transition-time: 500ms;
}

.title-card-animation {
  color: var(--clr-text-title);
}

.card-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 30px;
}

.card {
  --card-boder-radius: 0.8rem;
//   background-image: url(@/assets/card-bg.jpg);
  background-size: cover;
  padding: 10rem 0 0;
  max-width: 35ch;
  border-radius: var(--card-boder-radius);
  overflow: hidden;

  transition: transform var(--card-transition-time) ease;

  .card-content > *:not(.card-title) {
    transition: opacity var(--card-transition-time) linear;
  }

  .card-content {
    --padding-card-content: 1.5rem;

    padding: var(--padding-card-content);
    background: linear-gradient(
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 0.3) 10%,
      hsl(0 0% 0% / 1)
    );

    .card-title {
      color: var(--clr-card-title);
      position: relative;
      width: max-content;
    }

    .card-title::after {
      content: "";
      position: absolute;
      left: calc(var(--padding-card-content) * -1);
      bottom: -2px;
      height: 4px;
      width: calc(100% + var(--padding-card-content));
      background: var(--clr-accent-400);

      transform-origin: left;
      transition: transform var(--card-transition-time) ease-in;
    }

    .card-body {
      color: var(--clr-card-body);
    }

    .button {
      cursor: pointer;
      display: inline-block;
      text-decoration: none;
      color: hsl(207 19% 9%);
      background-color: var(--clr-accent-400);
      padding: 0.5em 1em;
      opacity: 1;
      border-radius: var(--card-boder-radius);
    }

    .button:hover,
    .button:focus {
      opacity: 0.6;
    }
  }
}

.card:hover,
.card:focus-within {
  transform: scale(1.1);

  .card-title::after {
    transform: scaleX(1);
  }

  .card-content > *:not(.card-title) {
    opacity: 1;
    transition-delay: calc(
      var(--card-transition-time) + var(--card-transition-time)
    );
  }

  .card-content {
    transform: translateY(0);
    transition-delay: var(--card-transition-time);
  }
}

.card:focus-within .card-content {
  transition-delay: 0ms;
}

@media (hover) {
  .card-content {
    transform: translateY(70%);
    transition: transform var(--card-transition-time) ease-out;
  }

  .card-content > *:not(.card-title) {
    opacity: 0;
  }

  .card-title::after {
    transform: scaleX(0);
  }

  .card:hover,
  .card:focus-within {
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after{
       animation-duration: 0.1ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
        transition-delay: 0ms !important;
    }
}
</style>