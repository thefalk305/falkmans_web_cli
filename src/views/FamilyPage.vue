<!-- prettier-ignore-file -->
<script setup>
  import { reactive, ref, inject } from "vue";
  import axios from "axios";
  import NavBar from "../components/NavBar.vue";
  import ShowModal from "../components/ShowModal.vue";
  import bldRels from "../assets/js/buildRelatives.js";
  import GoBack from "../components/GoBack.vue";

  const props = defineProps({
    show: Boolean,
    id: Number,
    fromDaBoys: Boolean,
  });

  var record = {};
  // var id = ref(3);
  var bio = "";
  var pics = [];
  var tblArray = [];
  var infoTable = [];
  infoTable = inject("infoTable");

  record = infoTable[props.id - 1];
  var tblKeys = Object.keys(record);
  var tblValues = record.valueOf();
  tblArray = bldRels(tblKeys, infoTable, record);

  var fname = record.bio;
  readText("./bios/" + fname);
  const familySrchLink = `https://www.familysearch.org/tree/pedigree/landscape/LL4N-B4F`;
  const familypageURL = `http://localhost/new_falkmansweb/infopages/familypage.php?id=${record.id}`;

  pics.push("Al Sr Naval Voyages009.jpg");
  pics.push("Al Sr Naval Voyages010.jpg");
  pics.push("pic0003.jpg");
  pics.push("pic0004.jpg");
  pics.push("pic0005.jpg");
  // console.log(pics, record.name);
  function readText(fname) {
    axios
      .get(fname)
      .then(function (response) {
        bio = response.data;
      })
      .catch(function (error) {
        console.log(error);
        console.log(fname);
      });
  }
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" :style="{ top: fromDaBoys ? '400px' : '1400px' }">
      <section class="modal-container infopic">
        <!-- <section class="infocontainer modal-container infopic"> -->
        <!-- <p>familypage</p> -->
        <figure class="hdshot" style="top: -16px">
          <a :href="'/img/face2a.png'" data-lightbox="pics000" :title="pic">
            <img :src="'/img/face2a.png'" alt="photo" />
          </a>
        </figure>
        <NavBar :recordData="record" />
        <article class="infoarticle fpage" style="left: -55px; top: 0px; height: 363px">
          <h3>&nbsp;</h3>
          <h2>Family Name</h2>
          <h4 class="info black">ORIGINS: Here</h4>
          <!-- <h4 class="info black">{{ record.birthplace }}</h4> -->
          <p class="p1 infotxt" style="left: 0px; top: -10px; height: 171px">
            Each family and individual info page should have its own folder, with all
            images placed inside. The lighbox is featured here, but JS pop-ups would be
            simple to add. The sidebar's absolute position and padding make it easy to add
            more names. The lightbox scales images based on a max-height defined in the
            lightbox.css file. To avoid a scroolbar keep the max-height of your images
            below that of the container.
            <!-- The lighbox is featured here, but JS pop-ups would be simple to add.<br />
        <br />
        The lightbox scales images based on a max-width defined in the lightbox.css file.
        Increasing the max-width will force a scrollbar in the window. -->
          </p>
        </article>
        <!--insert relative's names into aside-->
        <aside class="fpageaside">
          <h4 class="info">Quick Pedigree:</h4>
          <p class="p2 infoaside">
            <a class="nolink" href="" title="0000 - 0000">First Last Name Here</a><br />
            &nbsp;<a class="nolink" href="" title="0000 - 0000">First Last Name Here</a
            ><br />
            &#8627;<br />
            <a class="nolink" href="" title="0000 - 0000">First Last Name Here</a><br />
            &nbsp;<a class="nolink" href="" title="0000 - 0000">First Last Name Here</a
            ><br />
            &#8627;<br />
            <a
              class="green"
              href="../infopage0001/infopage.php"
              title="link to page"
              onclick="spawnpopup('../infopage0001/infopage.php','infopopup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no','625','750','100','25','pixel');return false;"
              >First Last Name Here</a
            ><br />
            &nbsp;<a
              class="green"
              href="infopage.php"
              title="link to page"
              onclick="spawnpopup('../infopage0002/infopage.php','infopopup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no','625','750','100','25','pixel');return false;"
              >First Last Name Here</a
            ><br />
            &#8627;<br />
            <a
              class="green"
              href="../infopage0001/infopage.php"
              title="link to page"
              onclick="spawnpopup('../infopage0001/infopage.php','infopopup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no','625','750','100','25','pixel');return false;"
              >First Last Name Here</a
            ><br />
            &nbsp;<a
              class="green"
              href="infopage.php"
              title="link to page"
              onclick="spawnpopup('../infopage0002/infopage.php','infopopup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no','625','750','100','25','pixel');return false;"
              >First Last Name Here</a
            ><br />
            &#8627;<br />
            <a
              class="green"
              href="../infopage0001/infopage.php"
              title="link to page"
              onclick="spawnpopup('../infopage0001/infopage.php','infopopup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no','625','750','100','25','pixel');return false;"
              >First Last Name Here</a
            ><br />
          </p>
        </aside>

        <!-- <aside id="infoaside">
          <div v-for="item in tblArray" v-bind:key="item.id">
            <div v-if="item.id == 0">
              <h2>{{ item.name }}</h2>
            </div>
            <div v-else>
              <h2 style="border: none"><ShowModal :recordData="item" /></h2>
            </div>
          </div>
        </aside> -->
        <!--close 'aside'-->
        <!-- <div id="imgcontainers"> -->
        <div id="infopics" v-for="(pic, index) in pics" :key="index">
          <div
            v-if="pic != ''"
            class="imagecontainer infopic"
            :style="{
              left: index * 110 + 50 + 'px',
              top: '579px',
            }"
          >
            <a :href="'/img/' + pic" data-lightbox="pics000" :title="pic">
              <img :src="'/img/' + pic" alt="photo" />
            </a>
            <div
              :class="{ dncurve_l: index === 0, dncurve_r: index != 0 }"
              :style="{ left: index === 0 ? -10 + 'px' : -118 + 'px', top: -31 + 'px' }"
            ></div>
          </div>
        </div>
        <div id="iline" style="height: 350px; top: 135px"></div>
        <div id="iupcurve" style="top: 456px; width: 40px"></div>
        <div id="familysearch" style="right: 150px; bottom: 5px">
          <a class="green" title="Family Search" :href="familySrchLink">Family Search</a>
        </div>
        <button class="modal-default-button" @click="$emit('close')">Close</button>
      </section>
    </div>
  </Transition>
</template>

<style scoped>
  .modal-default-button {
    position: absolute;
    float: right;
    bottom: 10px;
    right: 10px;
  }
  .modal-default-button:hover {
    scale: 1.1;
    background-color: yellow;
  }

  .modal-mask {
    position: absolute;
    z-index: 9998;
    top: 1400px;
    left: 350px;
    height: 800px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 1.5s ease;
  }
  .modal-container {
    height: 95%;
    width: 600px;
    margin: auto;
    padding: 20px 30px;
    background-color: antiquewhite;
    opacity: 1;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(255, 0, 0, 0.83);
    transition: all 0.3s ease;
  }

  .modal-enter-from {
    opacity: 0;
  }

  .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-from .modal-container,
  .modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  .goBack {
    bottom: 2px;
    z-index: 111;
  }
  #infoaside {
    width: 202px;
    right: 26px;
    bottom: 230px;
    border-radius: 10px;
  }
  h2 {
    margin: 0px;

    text-align: center;
  }
  .infocontainer {
    position: absolute;
    left: 100px;
    top: 20px;
  }
  #imgcontainers {
    position: relative;
    bottom: 440px;
  }
  .imagecontainer.infopic {
    height: 75px;
    width: 75px;
    top: 448px;
    border: medium #006600 solid;
  }
  .imagecontainer.infopic:hover {
    background-color: rgba(0, 178, 0, 0.8);
    border: medium #00b200 solid;
    box-shadow: 2px 2px 7px rgba(0, 230, 0, 0.7);
  }
  .imagecontainer.infopic img {
    width: 75px;
    height: 75px;
  }
</style>
