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
  <div id="newyorkcity">
    <MiniNav />
    <h1 align="center">New York City, New York</h1>
    <p class="dropcap">
      Welcome to New York, N.Y., USA. New York was one of the many ports in America that
      the immigrants came to after leaving Europe.
    </p>
  </div>
  <BackToTop />
</template>

<style>
#hamburg {
  padding: 30px;
}
</style>
