<template>
  <div>
    <h1 class="page-title">
      Normal PAge
    </h1>

      <div class="content-cards">
        <div class="cards" v-for="(card, index) in cards" :key="index">
          <h3 class="card-title">
            {{card.title}}
          </h3>
          <p class="card-content">
            {{card.content}}
          </p>
        </div>
      </div>
  </div>
</template>

<script >
import { ref } from 'vue'
export default {
  setup(){
      const cards = ref ([
        {
          title: 'What is Lorem Ipsum?',
          content: `We can declare reactive state using Reactivity APIs and expose them to the template by returning an object from setup(). .`
        },
        {
          title: 'What is Lorem Ipsum?',
          content: `We can declare reactive state using Reactivity APIs and expose them to the template by returning an object from setup(). .`
        },
        {
          title: 'What is Lorem Ipsum?',
          content: `We can declare reactive state using Reactivity APIs and expose them to the template by returning an object from setup(). .`
        }
      ])

    return {
      cards
    }
  }
}
  

</script>

<style lang='scss'>

  .page-title{
    color: var(--clr-text-title);
  }

  .content-cards{
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    > *{
      flex: 1;
      min-width: 18rem;
      max-width: 18rem;
      border-radius: 14px;
      padding: 0.5rem;
      border-top: 4px solid var(--clr-card-heading);
      background: var(--clr-card-bg);
    }

    .card-title{
      display: flex;
      justify-content: start;
      margin: 0.4rem 0;
      font-size: 1.4rem;
      color: var(--clr-text-title);
    }

    .card-content{
      color: var(--clr-text-content);
      font-size: 1.2rem;
    }
  }
</style>