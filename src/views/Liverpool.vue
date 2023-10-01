<script>
  import BackToTop from "@/components/BackToTop.vue";
  import MiniNav from "@/components/MiniNav.vue";

  export default {
    components: {
      BackToTop,
      MiniNav,
    },
  };
</script>

<template>
  <div id="liverpool">
    <MiniNav />
    <h1 align="center">Liverpool, England</h1>
    <p class="dropcap">
      Welcome to Liverpool, England. Liverpool was one of the many ports through which
      immigrants traveled on their way to American, Canada, and even Australia.
    </p>
  </div>
  <BackToTop />
</template>

<style>
  #hamburg {
    padding: 30px;
  }
</style>
