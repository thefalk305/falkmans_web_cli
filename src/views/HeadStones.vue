<script setup>
  import { ref, watch } from "vue";
  import GoBack from "../components/GoBack.vue";
  import BackToTop from "@/components/BackToTop.vue";
  import MiniNav from "@/components/MiniNav.vue";
  import Stone from "@/components/Stone.vue";

  const images = []; // create array to hold image filenames

  var dir = "@/assets/img/headstones";
  var headstonesDir = require.context("@/assets/img/headstones", true, /^.*\.*$/);
  let keys = headstonesDir.keys();
  var headstones = keys.map(headstonesDir);
  var newstones = [];
  // localStorage.setItem("totalScore", 222);

  headstones = headstones.filter((stone) => {
    return stone.search("stone") < 0;
  });

  headstones.forEach(getImages);
  // search for files with an image extension (jpg|jpeg|png|gif|svg)
  function getImages(image) {
    if (image.search(/.(jpg|jpeg|png|gif|svg)$/i) > 0) {
      image = image.split("/img")[1];
      var ext = "." + image.split(".")[2];
      image = image.split(".")[0];
      image = image.split("/")[1] + ext;
      images.push(image); // push image onto the array
    }
  }
  function deblurAll(e) {
    var pics = [];
    pics = $("img");
    for (var i = 0; i < pics.length; i++) {
      pics[i].style.filter = "";
    }
  }
  // $(document).ready(function () {
  //   var images = [];
  //   images = $("img");
  //   var i = 1;
  // });

  // console.log(images.value);
  var totScore = ref("0");

  function refreshScore() {
    totScore.value = localStorage.getItem("totalScore");
  }
</script>

<template>
  <div id="headstones">
    <MiniNav />
    <h1 align="center">Head Stones &amp; Grave Markers</h1>

    <p align="center">(Can you identify them?)</p>
    <p class="headstoneGame">
      Below you will find several pictures of head stones, or grave markers if you prefer.
      Each one a little bit out of focus. Your task is to pick the right name with the
      right head stone... Five misses and you'll have to start over... Good Luck.. OR you
      can <button @click="deblurAll">Deblur All</button>
    </p>

    <p>Total Score = {{ totScore }}</p>
    <hr />
    <div>
      <button @click="refreshScore">Refresh Score</button>
    </div>

    <div class="grid-container">
      <div class="stones" v-for="(stone, index) in images" :key="index">
        <Stone
          :id="'items#' + index"
          :class="stone"
          :stone="stone"
          :headstones="images"
        />
      </div>
    </div>
    <BackToTop />
  </div>
</template>

<style scoped>
  #headstones {
  }
  .headstoneGame {
    width: 90%;
    margin: auto;
  }
  p {
    text-indent: 24px;
  }
  .grid-container {
    display: grid;
    justify-items: center;
    grid-template-columns: auto auto auto;
    gap: 10px;
    background-color: beige;
    padding: 10px;
    height: fit-content;
  }
</style>
