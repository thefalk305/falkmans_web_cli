<!-- prettier-ignore-file -->
<!-- prettier-ignore-file -->
<script setup>
  import Modal from "./Modal.vue";
  import { ref } from "vue";
  import InfoPage from "../views/InfoPage.vue";

  const props = defineProps({
    recordData: Object,
    fromDaBoys: Boolean,
  });

  const showInfoPage = ref(false);

  $(document).ready(function () {
    var images = [];
    images = $("img");
    var i = 1;
  });
  // console.log("ShowInfoPage");
</script>

<template>
  <div @click="showInfoPage = true">
    <!-- <img :src="'/src/assets/img/' + recordData.pic" alt="photo" /> -->
    <img :src="require('../assets/img/' + recordData.pic)" alt="photo" />
    <p v-if="!fromDaBoys" style="font-size: 16px; position: relative; left: -30px">
      {{ recordData.name }}
    </p>
  </div>

  <Teleport to="body" :disabled="false">
    <!-- use the modal component, pass in the prop -->
    <InfoPage
      :show="showInfoPage"
      @close="showInfoPage = false"
      :id="recordData.id"
      :fromDaBoys="fromDaBoys"
    >
    </InfoPage>
  </Teleport>
</template>

<style scoped>
  .modal-button:hover {
    scale: 1.1;
    background-color: rgba(167, 253, 167, 0.9);
    border-radius: 10px;
  }
</style>
