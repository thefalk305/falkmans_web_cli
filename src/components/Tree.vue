<!-- prettier-ignore-file -->
<script setup>
  import { reactive, ref } from "vue";
  import Branch from "./Branch.vue";
  import ShowModal from "./ShowModal.vue";
  import ImageContainers from "../views/ImageContainers.vue";
  import ImageContainer from "./ImageContainer.vue";
  import FamilyPage from "../views/FamilyPage.vue";
  import treeData from "../assets/js/treeData.js";

  const props = defineProps({
    recordData: Object,
    infoTable: Array,
  });
  // var familyTree = ref([]);
  var branchData = [];
  var branchLoc = [];
  // var branchData = ref([]);
  // var branchLoc = ref([]);

  treeData.familyTree.forEach((value) => branchData.push(value));
  treeData.familyTreeLocs.forEach((value) => branchLoc.push(value));

  // these functions enable moving treewindow on screen
  window.onload = function () {
    // function draggable() {
    let draggableElem = document.getElementById("draggable-elem");
    let initialX = 0,
      initialY = 0;
    let moveElement = false;
    let stopMovement = false;
    let events = {
      mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
        dblclick: "dblclick",
      },
      touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
      },
    };

    let deviceType = "";

    const isTouchDevice = () => {
      try {
        //We try to create TouchEvent (it will fail for desktops and throw error)
        document.createEvent("touchEvent");
        deviceType = "touch";
        return true;
      } catch (e) {
        deviceType = "mouse";
        return false;
      }
    };

    isTouchDevice();
    // console.log(isTouchDevice());
    // Start (mouse down / touch start)
    draggableElem.addEventListener(events[deviceType].down, (e) => {
      e.preventDefault();
      // initial x and y points
      initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
      initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

      // start movement
      moveElement = true;
      console.log("mousedown");
    });

    draggableElem.addEventListener(events[deviceType].move, (e) => {
      if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem.style.top = draggableElem.offsetTop - (initialY - newY) + "px";
        draggableElem.style.left = draggableElem.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
        // console.log("mousemove");
        // console.log("newX", newX, "newY", newY);
      }
    });

    draggableElem.addEventListener(events[deviceType].dblclick, (e) => {
      e.preventDefault();
      let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
      let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
      // draggableElem.style.top = draggableElem.offsetTop - (0 + newY) + "px"; 334
      // draggableElem.style.left = draggableElem.offsetLeft - (0 + newX) + "px"; 618
      draggableElem.style.top = 10 + newY + "px";
      draggableElem.style.left = -60 + newX + "px";
      draggableElem.style.top = 930 + "px";
      draggableElem.style.left = 600 + "px";

      initialX = newX;
      initialY = newY;

      console.log("dblClick");
    });

    // mouse up / touch end

    draggableElem.addEventListener(
      events[deviceType].up,
      (stopMovement = (e) => {
        moveElement = false;
      })
    );

    draggableElem.addEventListener("mouseleave", stopMovement);
    draggableElem.addEventListener(events[deviceType].up, (e) => {
      moveElement = false;
    });
  };
  console.log(props.infoTable);
</script>

<template>
  <div id="treewindow">
    <img
      class="background"
      src="../assets/graphics/treewindow.gif"
      alt=""
      height="2000"
      style="left: 0px"
    />

    <div id="draggable-elem">
      <!--this is the main tree container. All "mgroup" inline positioning below is based from the position of the treepot in the tree window-->
      <div id="treepot">
        <Branch
          v-for="(branch, index) in branchData"
          :key="index"
          :class="branch"
          :index="index"
          :recordData="recordData"
          :infoTable="infoTable"
          :branchData="branch"
          :branchLoc="branchLoc[index]"
        />
        <!--INFOBOX 00-->
        <figure class="boxzero">
          <h4 class="figs">How To Use This Tree:</h4>
          <p class="p2" style="text-align: justify">
            Grab and drag the white surface to navigate the tree. You can also
            double-click on a spot to return to the 'home' position.<br />
            <br />
            Use the lightbox in the infopages for quick viewing, or right-click each photo
            link and open the full-sized image in a new tab or window&mdash;perfect for
            reading the documents, or if you wish to download anything.
          </p>
        </figure>
        <!-- <figure >
          <h4 class="figs">How To Use This Tree:</h4>
          <p class="p2" style="text-align: justify">
            Grab and drag the white surface to navigate the tree. You can also
            double-click on a spot to center it in the window.<br />
            <br />
            Use the lightbox in the infopages for quick viewing, or right-click each photo
            link and open the full-sized image in a new tab or window&mdash;perfect for
            reading the documents, or if you wish to download anything.
          </p>
        </figure> -->

        <!--INFOBOX 01-->
        <figure class="boxone" style="left: -620px">
          <h4 class="figs">&#8656;&nbsp;&nbsp;This Way To:</h4>
          <p class="p2" style="line-height: 200%" v-for="n in 5" :key="n">
            <!-- <FamilyPage :index="n" /> -->
          </p>
        </figure>

        <!--INFOBOX 02-->
        <figure class="boxtwo" style="left: 600px">
          <h4 class="figs">This Way To:&nbsp;&nbsp;&#8658;</h4>
          <p class="p2" style="line-height: 200%" v-for="n in 5" :key="n">
            <!-- <FamilyPage :index="n" /> -->
          </p>
        </figure>

        <!--INFOBOX 03-->
        <figure class="boxthree">
          <p class="p2" style="text-align: justify">New branches growing soon!</p>
        </figure>

        <!--INFOBOX 04-->
        <figure class="boxfour">
          <p class="p2" style="text-align: justify">New branches growing soon!</p>
        </figure>
      </div>
      <!--end treepot-->
    </div>
    <!--end treepot container-->
  </div>
  <!--end treewindow-->
</template>

<style scoped>
  /*
  figure.boxzero {
    left: -27px;
    bottom: -425px;
    width: 180px;
  }
  */

  #draggable-elem {
    position: absolute;
    background-color: white;
    font-size: 1.6em;
    left: 600px;
    height: 3700px;
    width: 8000px;
    top: 930px;
    transform: translate(-50%, -25%);
    display: grid;
    place-items: center;
    font-family: "Poppins", sans-serif;
    border-radius: 0.3em;
    cursor: move;
    z-index: 0;
    overflow-x: auto;
    white-space: nowrap;
  }

  h4 {
    background-color: transparent;
  }
  /*
.mgroup {
  left: 300px;
  top: 20px;
  position: absolute;
  width: 370px;
  height: 140px;
  border-radius: 12px 24px 24px 24px;
  border-top: thin #006600 solid;
  border-left: thin #006600 solid;
  border-right: thin #006600 solid;
  z-index: 1;
}
*/

  #treewindow {
    position: relative;
    margin: auto;
    /*    left: 400px;
        width: 250px;
    height: 250px;
 */
    width: 98%;
    height: 700px;
    display: block;
    background-color: white;
    background-image: url(../../public/graphics/treewindow.png);
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: url(../../public/graphics/openhand.cur), pointer;
    overflow: visible;
    z-index: 99;
  }
</style>
