<template>
  <div>
    <form class="color-picker" action="">
      <fieldset>
        <legend class="visually-hidden">Escolha um tema</legend>
        <label for="light" class="visually-hidden">light</label>
        <input
          type="radio"
          name="theme"
          id="light"
          :checked="userTheme == 'light'"
          @click="saveThemeState('light')"
        />

        <label for="pink" class="visually-hidden">pink</label>
        <input
          type="radio"
          name="theme"
          id="pink"
          :checked="userTheme == 'pink'"
          @click="saveThemeState('pink')"
        />

        <label for="blue" class="visually-hidden">blue</label>
        <input
          type="radio"
          name="theme"
          id="blue"
          :checked="userTheme == 'blue'"
          @click="saveThemeState('blue')"
        />

        <label for="green" class="visually-hidden">green</label>
        <input
          type="radio"
          name="theme"
          id="green"
          :checked="userTheme == 'green'"
          @click="saveThemeState('green')"
        />

        <label for="dark" class="visually-hidden">dark</label>
        <input
          type="radio"
          name="theme"
          id="dark"
          :checked="userTheme == 'dark'"
          @click="saveThemeState('dark')"
        />
      </fieldset>
    </form>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
  setup() {

    const userTheme = ref('light');

    onMounted(() => {
      userTheme.value = localStorage.getItem('storedData')
    })

    return{
      userTheme
    }
  },
  methods: {
    saveThemeState(index) {
      localStorage.setItem("storedData", index);
    },
  },
};
</script>

<style lang='scss'>

.color-picker input[type="radio"]:checked {
  background: var(--clr-radio);
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  widows: 1px;
}

.color-picker > fieldset {
  border: 0;
  display: flex;
  gap: 2rem;
  width: fit-content;
  background: var(--clr-theme-picker);
  padding: 1rem 3rem;
  margin-inline: auto;
  border-radius: 0 0 1rem 1rem;

  input[type="radio"] {
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    outline: 3px solid var(--clr-radio);
    outline-offset: 3px;
    border-radius: 50%;
  }
}

</style>