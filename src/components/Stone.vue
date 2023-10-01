<script setup>
  import { reactive, ref } from "vue";
  import ShowHeadstoneGame from "@/components/ShowHeadstoneGame.vue";
  import HeadstoneGame from "@/components/HeadstoneGame.vue";

  const props = defineProps({
    stone: String,
    headstones: Array,
  });
  const showHeadstoneGame = ref(false);

  // console.log(props.stone);
</script>

<template>
  <div @click="showHeadstoneGame = true">
    <img
      :id="'hs' + stone"
      :src="require('@/assets/img/headstones/' + stone)"
      style="filter: blur(8px) sepia(1)"
      alt="photo"
    />
  </div>

  <Teleport to="body" :disabled="false">
    <!-- use the modal component, pass in the prop -->
    <HeadstoneGame
      :show="showHeadstoneGame"
      @close="showHeadstoneGame = false"
      :stone="stone"
      :headstones="headstones"
    />
  </Teleport>

  <!-- <div>
    <HeadstoneGame
      :stone="stone"
      :headstones="headstones"
      v-model:totalScore="totalScore"
    />
  </div>
 -->
</template>

<style scoped>
  #btns {
    display: inline;
  }
  div {
    height: 286px;
    vertical-align: top;
    align-content: center;
    padding: 20px;
    flex-wrap: wrap;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    align-content: center;
    width: 100%;
    height: 154px;
    filter: sepia(100%);
    margin: 5px;
    border: solid 4px black;
    border-radius: 32px;
    padding: 0px;
  }
  img:hover {
    scale: 1.25;
  }
</style>
