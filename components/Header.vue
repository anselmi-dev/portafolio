<template>
  <div>
    <div
      class="transition duration-300 transform fixed right-0 top-0 h-screen bg-gray-500 z-50 py-3 w-1/2 sm:hidden overflow-y-auto"
      :class="{'translate-x-0 ease-out': showPanel, 'translate-x-full ease-in': !showPanel}"
    >
      <button
        @click="tooglePanel"
        title="tailwindcss"
        class="nav-toggle absolute pin-0 right-0 mr-3 p-2 focus:outline-none text-white leading-none border"
      >
        <i class="uil uil-times"></i> 
      </button>
      <nav
        class="main-nav sm:flex mt-12 sm:mt-0 flex-col sm:flex-row items-center relative flex-1 justify-end"
      >
        <!-- block:NavigationLinks -->
        <NavigationLinks/>
        <!-- end:block:NavigationLinks -->
      </nav>
    </div>
    <!-- block:Header -->
    <header class="w-full z-40 bg-white">
      <div
        class="container mx-auto h-16 flex justify-between items-center"
      >
        <a title="tailwindcss components" href="/">
            <Logo class="h-8 sm:w-8 lg:w-auto object-cover object-left"/>
        </a>
        <div class="hidden sm:block">
            <!-- block:NavigationLinks -->
            <NavigationLinks/>
            <!-- end:block:NavigationLinks -->
        </div>
      </div>
      <button
        @click="tooglePanel"
        class="sm:hidden absolute right-0 top-0 py-5 px-6 flex nav-toggle z-20 focus:outline-none"
      >
        <i class="uil uil-apps"></i>
      </button>
    </header>
    <!-- end:block:header -->
  </div>
</template>

<script>
export default {
    data () {
        return {
            showPanel: true
        }
    },
    beforeMount () {
        this.$nuxt.$on('app:toogle:panel', this.tooglePanel);
    },
    methods: {
        tooglePanel () {
            this.showPanel = !this.showPanel
        }
    }
}
</script>