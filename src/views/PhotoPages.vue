<script setup>
  import { ref, watch, inject } from "vue";

  import Britannic from "@/views/Britannic.vue";
  import Vue from "vue";
  // import Goteborg from "@/views/Goteborg.vue";
  // import Albany from "@/views/Albany.vue";
  // import Hull from "@/views/Hull.vue";
  // import Hamburg from "@/views/Hamburg.vue";
  // import Liverpool from "@/views/Liverpool.vue";
  // import Bremen from "@/views/Bremen.vue";
  // import NewYorkCity from "@/views/NewYorkCity.vue";
  // import Hudiksvall from "@/views/Hudiksvall.vue";
  // import Arbra from "@/views/Arbra.vue";
  // import Ogdensburg from "@/views/Ogdensburg.vue";
  // import Romeo from "@/views/Romeo.vue";
  // import Trave from "@/views/Trave.vue";
  // import Norden from "@/views/Norden.vue";
  // import Chicago from "@/views/Chicago.vue";
  // import DuBois from "@/views/DuBois.vue";
  // import PassengerTraffic from "@/views/PassengerTraffic.vue";
  // import HeadStones from "@/views/HeadStones.vue";
  import GoBack from "../components/GoBack.vue";
  import BackToTop from "@/components/BackToTop.vue";
  import MiniNav from "@/components/MiniNav.vue";
  import Places from "@/views/Places.vue";
  import axios from "axios";
  import ShowModal from "@/components/ShowModal.vue";
  import PhotoPages2 from "@/views/PhotoPages2.vue";

  const ulList = ref([
    { route: "PhotoPages", text: "Family Photos 1" },
    { route: "PhotoPages2", text: "Family Photos 2" },
    { route: "PhotoPages", text: "Family Photos 3" },
    { route: "PhotoPages", text: "Family Photos 4" },
    { route: "PhotoPages", text: "Family Photos 5" },
    { route: "PhotoPages", text: "Family Photos 6" },
  ]);
  const llList = ref([
    { route: "PhotoPages", text: "Family Photos 1" },
    { route: "PhotoPages2", text: "Family Photos 2" },
    { route: "PhotoPages", text: "Family Photos 3" },
    { route: "PhotoPages", text: "Family Photos 4" },
    { route: "PhotoPages", text: "Family Photos 5" },
    { route: "PhotoPages", text: "Family Photos 6" },
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
    { route: "PassengerTraffic", text: "Passenger Traffic" },
    { route: "/", text: "Sub Heading l3" },
    { route: "/", text: "Sub Heading l4" },
    { route: "/", text: "Sub Heading l5" },
    { route: "/", text: "Sub Heading l6" },
  ]);

  const photos = [
    "Frank T Alexander",
    "Ida (Aldolfina) Chytra",
    "Violet Alexander",
    "Helen K Alexander",
    "Frank J Alexander",
  ];

  var recordData = [];
  var infoTable = [];
  infoTable = inject("infoTable");
  for (var i = 0; i < photos.length; i++) {
    for (var j = 0; j < infoTable.length; j++) {
      if (photos[i] === infoTable[j].name) {
        recordData.push(infoTable[j]);
        break;
      }
    }
  }
  // var items = [{}];
  // async function getUsers() {
  //   try {
  //     var response = await axios.get("http://localhost:5001/products");
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   items = response.data;
  //   // wholeArray = items;
  //   // copy info from db table for five brothers
  //   for (var i = 0; i < photos.length; i++) {
  //     for (var j = 0; j < items.length; j++) {
  //       if (photos[i] === items[j].name) {
  //         recordData.push(items[j]);
  //         break;
  //       }
  //     }
  //   }
  // }
  // getUsers();
</script>

<template>
  <div id="photo-pages">
    <MiniNav />
    <div id="leftnav">
      <b>Picture Pages</b>
      <ul>
        <li v-for="{ route, text } in ulList" :key="route">
          <AppLink :to="route">{{ text }} </AppLink>
        </li>
      </ul>
      <b>Places</b>
      <ul>
        <li v-for="{ route, text } in llList" :key="route">
          <AppLink :to="route">{{ text }}</AppLink>
        </li>
      </ul>
    </div>
    <div id="rightnav">
      <b>Transportation</b>
      <ul>
        <li v-for="{ route, text } in urList" :key="route">
          <AppLink :to="route">{{ text }}</AppLink>
        </li>
      </ul>
      <b>Other</b>
      <ul>
        <li v-for="{ route, text } in lrList" :key="route">
          <AppLink :to="route">{{ text }}</AppLink>
        </li>
      </ul>
    </div>
    <div id="content">
      <div id="photoGallery">
        <div id="Photo" v-for="photo in recordData" :key="photo">
          <p id="photoName">
            <!-- {{ Photo.name }} -->
            <img :src="require('@/assets/img/' + photo.pic)" alt="photo" />
            <ShowModal :recordData="photo" />
            <!-- <AppLink
              :to="`http://localhost/new_falkmansweb/photopages/photomini.php?name=${Photo.name}`">
              <img :src="require('@/assets/img/' + Photo.pic)" alt="photo" />
            </AppLink> -->
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- <BackToTop /> -->
</template>

<style scoped>
  #photo-pages {
    margin: 10px;
    width: 100%;
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
    z-index: 22;
    position: relative;
  }
  h1 {
    z-index: -1;
    text-align: center;
  }
  #Photo {
    height: fit-content;
    border: solid black 2px;
    margin: 5px;
    width: 200px;
  }
  img {
    width: 200px;
  }
</style>
