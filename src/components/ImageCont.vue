<!-- prettier-ignore-file -->
<script setup>
  import { reactive, ref } from "vue";
  import { RouterLink } from "vue-router";
  import ShowInfoPage from "../components/ShowInfoPage.vue";
  import ShowFamilyPage from "../components/ShowFamilyPage.vue";

  const props = defineProps({
    recordData: Object,
    id: Number,
    fromDaBoys: Boolean,
  });

  var showTest = false;
  const infopageURL = `http://localhost/new_falkmansweb/infopages/infopage.php?id=${props.recordData.id}`;
  const familypageURL = `http://localhost/new_falkmansweb/infopages/familypage.php?id=${props.recordData.id}`;
</script>

<template>
  <div id="imagecontainer" class="imagecontainer">
    <div>
      <ShowInfoPage :recordData="recordData" :fromDaBoys="fromDaBoys" />
    </div>
    <div>
      <ShowFamilyPage :recordData="recordData" :id="id" :fromDaBoys="fromDaBoys" />
    </div>
  </div>
</template>

<style>
  .male-female {
    top: 174px;
    left: 150px;
  }
</style>
