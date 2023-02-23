<template>
  <div class="color-picker-two">
    <div class="switch">
      <label
        for="light"
        :class="userTheme == 'light' ? 'checked' : ''"
        @click="userTheme = 'light'"
        >light</label
      >
      <input
        type="radio"
        name="theme"
        id="light"
        :checked="userTheme == 'light'"
        @click="saveThemeState('light')"
      />
      <label
        for="dark"
        :class="userTheme == 'dark' ? 'checked' : ''"
        @click="userTheme = 'dark'"
        >dark</label
      >
      <input
        type="radio"
        name="theme"
        id="dark"
        :checked="userTheme == 'dark'"
        @click="saveThemeState('dark')"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from '@vue/runtime-core';
export default {
  setup() {
    const userTheme = ref("light");

    onMounted(() => {
      userTheme.value = localStorage.getItem("storedData");
    });

    return {
      userTheme,
    };
  },

  methods: {
    saveThemeState(index) {
      localStorage.setItem("storedData", index);
    },
  },
};
</script>

<style lang='scss'>
.color-picker-two {
  --border-radius: 20px;
  display: flex;
  margin-inline: auto;
  background: #626262;
  z-index: 999;
  width: fit-content;
  padding: 0.3em 1em;
  border-radius: var(--border-radius);
  position: absolute;
  right: 0;
  .switch {
    padding: 0.3rem;
    display: flex;
    gap: 5px;

    label {
      transition: background 0.5s ease-in-out;
      transition: color 0.3s ease-in-out;
      padding: 5px 10px;
      cursor: pointer;
      outline: none;
      border: none;
      color: black;
      background: gray;
      border-radius: var(--border-radius);
    }
    input {
      display: none;
    }

    .checked {
      color: white;
      background: black;
    }
  }
}
</style>