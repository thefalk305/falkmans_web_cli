<template>
  <div id="cross-fade" class="shadow">
    <img
      id="bottom"
      class="bottom"
      :src="require('@/assets/img/Allen Falkman Sr.jpg')"
      alt=""
    />
    <img
      id="top"
      class="top"
      :src="require('@/assets/img/Allen Falkman Sr.jpg')"
      alt=""
    />
    <h5 id="caption" class="top" style="text-align: center"></h5>
  </div>
</template>

<script setup>
  import { reactive, ref } from "vue";

  var dir = "../assets/treepics";
  var treePics = require.context("../assets/treepics", true, /^.*\.*$/);
  let keys = treePics.keys();
  var animationPics = keys.map(treePics);
  // this script will display all image files in the folder 'treepics'
  // this is done by setting the img 'src' to the contents of one of the images in the image array, one at a time

  const images = []; // create array to hold image filenames
  var index = 0; // array index
  var odd = true; //
  var img;
  var cap;
  var delay = 0;
  var bottom = document.getElementById("bottom");
  var top = document.getElementById("top");
  // isolate image files in directory into 'images[]'
  animationPics.forEach(getImages);
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
  // Each time called, updateScr() will alternately update one of the two images with an image from the image folder.
  function updateSrc() {
    //    index = index + 1;
    odd = !odd;
    if (odd) {
      document.getElementById("bottom").src = require("@/assets/treepics/" +
        images[index]);
    } else {
      document.getElementById("top").src = require("@/assets/treepics/" + images[index]);
    }
    document.getElementById("cross-fade").style.visibility = "visible";
    document.getElementById("caption").innerHTML = images[index].split(".")[0]; //strip off filetype;
    if (++index == images.length) index = 0;
  }
  function updateCap() {}
  // call 'updateList' every xxxxms
  var even = true;
  var backgroundInterval = setInterval(function () {
    if (even) {
      updateCap();
    } else {
      if (document.getElementById("top") != null) updateSrc();
    }
    even = !even;
    delay++;
  }, 4000); // every 4000 ms, or 4s
</script>
<!--
The two images here (top and bottom) just are placeholders.  The are 
alternately replaced with an image from the image folder.
The style below causes one image to fade as the other is shown.
-->

<style>
  #cross-fade {
    position: relative;
    height: 250px;
    width: 200px;
    margin: 10px;
    opacity: 0.5;
    top: 64px;
    left: 650px;
  }
  @-webkit-keyframes FadeInOut {
    0% {
      opacity: 1;
    }

    25% {
      opacity: 1;
    }

    75% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes FadeInOut {
    0% {
      opacity: 1;
    }

    25% {
      opacity: 1;
    }

    75% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }

  @-o-keyframes FadeInOut {
    0% {
      opacity: 1;
    }

    25% {
      opacity: 1;
    }

    75% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes FadeInOut {
    0% {
      opacity: 1;
    }

    20% {
      opacity: 1;
    }

    80% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }

  #cross-fade img {
    position: absolute;
    height: 250px;
    width: 200px;
    border-radius: 20%;
    filter: sepia(100%);
    /* border: 2px solid black; */
  }

  #cross-fade img.top {
    -webkit-animation-name: FadeInOut;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-duration: 4s;
    -webkit-animation-direction: alternate;

    -moz-animation-name: FadeInOut;
    -moz-animation-timing-function: ease-in-out;
    -moz-animation-iteration-count: infinite;
    -moz-animation-duration: 4s;
    -moz-animation-direction: alternate;

    -o-animation-name: FadeInOut;
    -o-animation-timing-function: ease-in-out;
    -o-animation-iteration-count: infinite;
    -o-animation-duration: 4s;
    -o-animation-direction: alternate;

    animation-name: FadeInOut;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-direction: alternate;
  }

  h5 {
    /*main subtitle*/
    position: absolute;

    font-family: Decker;
    font-size: 1.525em;
    color: #006600;
    text-shadow: 1px 1px 7px rgba(0, 178, 0, 0.8);
    letter-spacing: 2px;
    margin: 2px;
    left: -20px;
    top: 260px;
    width: 250px;
  }
</style>
