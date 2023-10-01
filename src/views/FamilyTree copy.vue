<script setup>
  import { reactive, ref, watchEffect, inject } from "vue";
  import GoBack from "../components/GoBack.vue";
  import BackToTop from "../components/BackToTop.vue";
  import Animation from "../components/Animation.vue";
  import Tree from "../components/Tree.vue";
  import ShowFamilyPage from "@/components/ShowFamilyPage.vue";
  import axios from "axios";

  let treePics = "../assets/treepics";
  let json = "../assets/infotable.json";

  var brothersData = [];
  // console.log(infoTable.value);
  var items = [];
  var infoTable = [];
  infoTable = inject("infoTable");
  // brother's id's are 4 thru 8
  for (var i = 0; i < 5; i++) {
    brothersData[i] = infoTable[i + 3];
  }

  // async function uniqueValues() {
  //   const files = await readdir(filesDir);
  //   const filesContent = await Promise.all(
  //     files.map((file) => {
  //       return readFile(filesDir + "/" + file, "utf8");
  //     })
  //   );
  //   const arr = filesContent.reduce((acc, data) => {
  //     acc.push(data.toString().split("\n"));
  //     return acc;
  //   }, []);

  //   return new Set(arr);
  // }

  // uniqueValues().then((values) => {
  //   console.log(values);
  // });
</script>

<template>
  <!-- <div v-if="familyTree.length > 2"> -->
  <div id="family-tree">
    <div id="family-tree-header">
      <!--page title, tagline and main graphic-->
      <div id="hgroup">
        <div id="headerimage"></div>
        <!--main page graphic or logo-->
        <!--main title group-->
        <h1>From Tree to Tree</h1>
        <h2>Genealogical Website<br />for the "Falkman Family"</h2>
      </div>
      <!--end main title group-->

      <!--DO NOT REMOVE!-->
      <div class="clear"></div>

      <br />
      <!--spacer-->

      <div
        class="sectionline"
        style="float: right; margin: 0px 15px 0px 0px; width: 52%"
      ></div>
      <!--section divider-->
    </div>
    <!--end page header-->

    <!--for links: onclick triggers JS pop-up window. Maintain href links for those not using JavaScript-->

    <section class="intro" style="left: 0px; top: -20px; right: -100px; width: 1024px">
      <!--intro section-->
      <img src="../assets/graphics/animation2.gif" alt="familygif" />

      <article class="introarticle">
        <h3>This is a Website of the Falkman Family History</h3>
        <p class="dropcap">
          I started this adventure back in 1978. There were no online services at the
          time. All of the research was done by hand. I spent months and months searching
          through records and micro-fiche files for scraps of information. It took my wife
          and myself almost two (2) years just to find my great-grandfather's ship
          manifest. But that was just the start. Then came my great-grandmother's records,
          and after that, aunts, uncles and cousins. I hope you enjoy looking at the
          records and pictures as much as I did while putting this site together.
          <br />
          <br />
          This website was first published in 2010. The canvas didn't change much for many
          years but, now with the help of my family, I am updating the website, adding new
          templates and a lot of new information that has been discovered over the years.
          I want to thank all my family for the information and support that they have
          given.
        </p>
        <p style="position: relative; left: 450px">Tinker Al</p>
      </article>
      <Animation />
      <aside class="panel">
        <h4 style="top: -20px">Page Links Here</h4>
        <div class="panelleft">
          <p class="p2" style="line-height: 200%" v-for="n in 5" :key="n">
            <AppLink to="/ShowFamilyPage" :id="n" :recordData="brothersData[0]"
              >FamilyPage {{ n }}
            </AppLink>

            <!-- <router-link to="/FamilyPage">FamilyPage</router-link> -->
          </p>
        </div>
        <div class="panelright">
          <p class="p2" style="line-height: 200%" v-for="n in 5" :key="n">
            <!-- <FamilyPage :index="n" />> -->
          </p>
        </div>
      </aside>

      <div class="clear"></div>
      <div class="sectionline"></div>
    </section>

    <div v-if="brothersData">
      <Tree :recordData="brothersData[0]" :infoTable="infoTable" />
    </div>
  </div>
  <BackToTop />
</template>

<style scoped>
  /* @import "../assets/css/familytree.css"; */
  @import "../../public/css/familytree.css";

  #family-tree-header {
    width: 100%;
  }
  .go-back {
    left: 50px;
    width: 100px;
  }

  h4 {
    background-color: transparent;
  }

  aside.panel {
    top: 90px;
    right: 20px;
    height: 180px;
    width: 165px;
    text-align: center;
  }
  h2 {
    float: right;
  }
  #hgroup {
    width: 750px;
    left: 200px;
    float: none;
  }
  .p2 {
    margin: 0px;
  }
  .panelleft {
    left: 0px;
  }
  .panelright {
    right: 0px;
  }

  #family-tree {
    background-color: beige;
    height: 4600px;
    /*
  position: absolute;
  width: 100%;*/
  }

  h1 {
    position: relative;
    margin: 0px 0px 0px 0px;
    font-family: Carolingia;
    font-size: 5em;
    color: #00b200;
    text-shadow: 2px 2px 10px rgba(0, 102, 0, 0.8);
    letter-spacing: 1px;
    line-height: 100%;
    background-color: inherit;
  }
</style>
