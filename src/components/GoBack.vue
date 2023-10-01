<template>
  <p class="go-back">
    <button @click="$router.back()">Go Back!</button>
  </p>
</template>

<style scoped>
  .go-back {
    left: 0px;
    right: 0;
    z-index: 120;
  }
</style>
