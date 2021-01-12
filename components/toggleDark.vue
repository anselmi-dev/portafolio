<template>
  <div>
    <div
        @click="changeMode()"
        class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
    >
        <input
          type="checkbox"
          v-model="dark"
          class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
            class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        >
        </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dark: true
    };
  },
  methods: {
    changeMode() {
        this.$colorMode.preference =
            this.$colorMode.preference === "light" ? "dark" : "light";
        this.dark = !this.dark
    }
  }
};
</script>

<style lang="scss">
$border-green-400: #333;
$right-0: border-right 0;
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  // @apply: right-0 border-green-400;
  right: 0;
  border-color: #68d391;
}
.toggle-checkbox:checked + .toggle-label {
  // @apply: bg-green-400;
  background-color: #68d391;
}
</style>
