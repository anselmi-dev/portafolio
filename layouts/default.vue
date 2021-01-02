<template>
    <div>
        <Header/>
        <Nuxt />
        <Footer/>
    </div>
</template>

<style>
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
</style>