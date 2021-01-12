<template>
    <div class="wrapper bg-white dark:bg-gray-800">
      <Header/>
      <div class="wrapper__content">
        <div class="container-layout">
          <div class="relative -mx-20">
            <social-link id="social-link-fixed"/>
          </div>
            <Nuxt />
        </div>
      </div>
      <Footer/>
    </div>
</template>

<script>
export default {
  head: {
    title: "Nuxt.js with TailwindCSS",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js with TailwindCSS example"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  }
}
</script>
<style lang="scss">
  #social-link-fixed {
    position: fixed;
    bottom: 5rem;
    width: 5rem;
    margin: auto;
    text-align: center;
  }
  #social-link-fixed:before{
    content: "";
    height: 100%;
    left: 0;
    right: 0;
    width: 2px;
    background: white;
    height: 100px;
    z-index: 222;
    padding: 1px;
    display: block;
    bottom: -7rem;
    position: absolute;
    margin: auto;
  }
  .light-mode #social-link-fixed:before {
    background: #333;
  }
  #social-link-fixed li {
    padding-bottom: .5rem;
    padding-top: .5rem;
  }
  .user:hover .dropdown {
    opacity: 1;
    pointer-events: all;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  .user .dropdown {
    -webkit-transition: all .3s;
    transition: all .3s;
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .wrapper__content {
    flex-grow: 1;
  }
</style>