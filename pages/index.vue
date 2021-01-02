<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        anselmi.dev
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>

    <div x-data="{ open: false }">
      <button x-on:click="open = true">
        Open Dropdown
      </button>
      <ul
        x-show="open"
        x-on:click="open = false"
      >
        Dropdown Body
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>
