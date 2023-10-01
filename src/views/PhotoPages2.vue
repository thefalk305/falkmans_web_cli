<script setup>
  import { ref, watch, inject } from "vue";
  import axios from "axios";
  import Vue from "vue";
  import GoBack from "../components/GoBack.vue";
  import BackToTop from "@/components/BackToTop.vue";
  import MiniNav from "@/components/MiniNav.vue";
  import ShowModal from "@/components/ShowModal.vue";

  const ulList = ref([
    { route: "PhotoPages", text: "Family Photos 1" },
    { route: "PhotoPages", text: "Family Photos 2" },
    { route: "PhotoPages", text: "Family Photos 3" },
    { route: "PhotoPages", text: "Family Photos 4" },
    { route: "PhotoPages", text: "Family Photos 5" },
    { route: "PhotoPages", text: "Family Photos 6" },
  ]);
  const llList = ref([
    { route: "Hudiksvall", text: "Hudiksvall, Sweden" },
    { route: "Arbra", text: "Arbrå, Sweden" },
    { route: "DuBois", text: "DuBois, PA. USA" },
    { route: "Chicago", text: "Chicago, IL. USA" },
    { route: "Albany", text: "Albany, N.Y. USA" },
    { route: "Ogdensburg", text: "Ogdensburg, N.J. USA" },
  ]);
  const urList = ref([
    { route: "Romeo", text: "S.S. Romeo" },
    { route: "Britannic", text: "R.M.S. Britannic" },
    { route: "Norden", text: "S.S. Norden" },
    { route: "Trave", text: "S.S. Trave<" },
    { route: "/", text: "Sub Heading u5" },
    { route: "/", text: "Sub Heading u6" },
  ]);
  const lrList = ref([
    { route: "HeadStones", text: "Head Stones" },
    { route: "PassengerTraffic", text: ">Passenger Traffic" },
    { route: "/", text: "Sub Heading l3" },
    { route: "/", text: "Sub Heading l4" },
    { route: "/", text: "Sub Heading l5" },
    { route: "/", text: "Sub Heading l6" },
  ]);

  var photos = [];
  var infoTable = [];
  infoTable = inject("infoTable");

  // filter out any records that have identical photos
  infoTable.forEach((record) => {
    var duplicate = false;
    for (var i = 0; i < photos.length; i++) {
      if (record.pic === photos[i].pic) duplicate = true;
    }
    if (!duplicate) photos.push(record);
  });

  function blur(e) {
    var image = document.getElementById(e.target.id);
    if (image.style.filter == "blur(8px) sepia(1)") {
      image.style.filter = "blur(0px) sepia(0)";
    } else {
      image.style.filter = "blur(8px) sepia(1)";
    }
  }

  function deblurAll(e) {
    var pics = [];
    pics = $("img");
    for (var i = 0; i < pics.length; i++) {
      pics[i].style.filter = "";
    }
  }

  console.log(photos);
</script>

<template>
  <div id="photo-pages">
    <MiniNav />
    <div id="flex-container">
      <div id="leftnav">
        <b>Picture Pages</b>
        <ul class="u-list">
          <li v-for="{ route, text } in ulList" :key="route">
            <AppLink :to="route">{{ text }}</AppLink>
          </li>
        </ul>
        <b>Places</b>
        <ul class="u-list">
          <li v-for="{ route, text } in llList" :key="route">
            <AppLink :to="route">{{ text }}</AppLink>
          </li>
        </ul>
      </div>
      <div id="rightnav">
        <b>Transportation</b>
        <ul class="u-list">
          <li v-for="{ route, text } in urList" :key="route">
            <AppLink :to="route">{{ text }}</AppLink>
          </li>
        </ul>
        <b>Other</b>
        <ul class="u-list">
          <li v-for="{ route, text } in lrList" :key="route">
            <AppLink :to="route">{{ text }}</AppLink>
          </li>
        </ul>
      </div>
      <div id="content">
        <!-- <div> -->
        <button class="center" @click="deblurAll">Deblur All</button>
        <div id="photoGallery">
          <div class="photos" :id="index" v-for="(photo, index) in photos" :key="index">
            <p id="photoName">
              <!-- {{ photo.name }} -->
              <img
                :id="'photo' + index"
                @click="blur"
                :src="require('@/assets/img/' + photo.pic)"
                style="filter: blur(8px) sepia(1)"
                alt="photo"
              />
              <ShowModal :recordData="photo" />
              <!-- <AppLink
              :to="`http://localhost/new_falkmansweb/photopages/photomini.php?name=${photos.name}`">
              <img :src="require('@/assets/img/' + photos.pic)" alt="photo" />
            </AppLink> -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <BackToTop />
</template>

<style scoped>
  #photo-pages {
    margin: 10px;
    width: 100%;
  }
  .u-list {
    width: max-content;
    padding: 10px;
  }
  #photoName {
    text-align: center;
  }
  #photoGallery {
    justify-content: flex-start;
    align-items: start;
    align-content: flex-start;
    display: flex;
    width: 700px;
    flex-wrap: wrap;
    margin: auto;
  }
  #leftnav,
  #rightnav {
    color: rgb(0, 128, 100);
    background-color: bisque;
    text-align: left;
    height: fit-content;
    z-index: 22;
    position: relative;
  }
  h1 {
    z-index: -1;
    text-align: center;
  }
  .photos {
    height: fit-content;
    border: solid black 2px;
    margin: 5px;
    width: 200px;
  }
  img {
    width: 200px;
  }
</style>
