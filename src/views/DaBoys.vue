<script setup>
  import { reactive, ref, watchEffect, inject } from "vue";
  import ImageContainer from "../components/ImageContainer.vue";
  import Relatives from "../components/Relatives.vue";
  import GoBack from "../components/GoBack.vue";

  import axios from "axios";

  const props = defineProps({
    hideRelatives: Boolean,
  });
  var showRelatives = true;
  if (props.hideRelatives) showRelatives = false;

  var brothersData = [];
  var infoTable = [];
  infoTable = inject("infoTable");
  for (var i = 0; i < 5; i++) {
    brothersData[i] = infoTable[i + 3];
  }

  // async function getProducts() {
  //   try {
  //     var response = await axios.get("http://localhost:5001/products");
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   items = response.data;
  //   infoTable = items;
  //   // copy info from db table for five brothers
  //   for (i = 0; i < 5; i++) {
  //     brothersData[i] = items[i + 3];
  //   }
  // }
  // getProducts();
</script>

<template>
  <h2 style="text-align: center; background-color: beige; color: brown">
    We are the chosen. In each family there is one who seems called to find the ancestors.
    To put flesh on their bones and make them live again. To tell the family story and to
    feel that somehow they know and approve. Doing genealogy is not a cold gathering of
    facts but, instead, breathing life into all who have gone before. We are the story
    tellers of the tribe. All tribes have one. We have been called, as it were, by our
    genes. Those who have gone before cry out to us: Tell our story. So, we do. In finding
    them, we somehow find ourselves. How many graves have I stood before now and cried? I
    have lost count. How many times have I told the ancestors, 'You have a wonderful
    family; you would be proud of us.'. How many times have I walked up to a grave and
    felt somehow there was love there for me? I cannot say. It goes beyond just
    documenting facts. It goes to who I am, and why I do the things I do. It goes to
    seeing a cemetery about to be lost forever to weeds and indifference and saying - I
    can't let this happen.<br /><br />
    Click on one of the images to get a bio of one of da'boys.
    <br /><br />
    Click on 'Show Relatives' to see the parents, spouse, siblings and children.<br /><br />Click
    on a Relative to see their bio.
  </h2>
  <div class="image-containers">
    <div id="brothersData" v-for="item in brothersData" :key="item.id">
      <div class="spacer" style="height: 132px"></div>
      <ImageContainer :recordData="item" :fromDaBoys="true" />
      <!-- <ImageContainer :recordData="item" :infoTable="infoTable" /> -->

      <Relatives v-if="showRelatives" :recordData="item" :infoTable="infoTable" />
    </div>
  </div>
</template>

<style scoped>
  .image-containers {
    /*
    position: relative;
    top: 134px;
    */
    display: flex;
    height: 1060px;
    width: 100%;
    justify-content: center;

    /*
  border: solid black 5px;
  background-color: antiquewhite;
  opacity: 0.9;
  border-radius: 30px;*/
  }

  .container:hover {
    cursor: pointer;
  }
</style>
