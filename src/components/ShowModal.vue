<!-- prettier-ignore-file -->
<!-- prettier-ignore-file -->
<script setup>
  import Modal from "./Modal.vue";
  import { ref } from "vue";

  const props = defineProps({
    recordData: Object,
  });

  const showModal = ref(false);
</script>

<template>
  <button class="modal-button" style="position: relative" @click="showModal = true">
    {{ recordData.name }}
  </button>

  <Teleport to="body" :disabled="false">
    <!-- use the modal component, pass in the prop -->
    <Modal :show="showModal" @close="showModal = false" :recordData="recordData">
      <template #header></template>
    </Modal>
  </Teleport>
</template>

<style>
  #show-modal {
    position: relative;
    width: 200px;
  }
  .modal-button {
    border: none;
    width: 200px;
  }
  .modal-button:hover {
    scale: 1.1;
    background-color: rgba(167, 253, 167, 0.9);
    border-radius: 10px;
  }
</style>
