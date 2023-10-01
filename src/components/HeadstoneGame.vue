<script setup>
  import { reactive, ref } from "vue";
  import NavBar from "./NavBar.vue";
  import axios from "axios";
  // import JSConfetti from "js-confetti";

  const props = defineProps({
    show: Boolean,
    stone: String,
    headstones: Array,
    totalScore: Number,
  });
  defineEmits(["update:totalScore"]);

  var showAnswers = true;
  var selected = "";
  var points = 5;
  var myScore = "0";
  var showResults = false;
  var headstoneNames = ref([]);

  var correct = false;
  var incorrect = false;
  myScore = parseInt(localStorage.getItem("totalScore"));
  props.headstones.forEach(trim);
  var image = document.getElementById("headstone");

  // search for files with an image extension (jpg|jpeg|png|gif|svg)
  function trim(stone) {
    stone = stone.split(".")[0];
    headstoneNames.value.push(stone); // push stone onto the array
  }
  // blur/deblur image
  var blurValue;
  var blurString;
  function blur(e) {
    image = document.getElementById("headstone");
    var regex = /\d+/g;
    var blurValue = 1;
    // var image = e.target.parentNode.childNodes[0];
    blurString = image.style.filter;
    if (blurString != "none") {
      blurValue = parseInt(blurString.match(regex)[0]);
      // var blurValue = Number(blurString.match(regex)[0] + "." + blurString.match(regex)[1]);
    }
    if (blurValue > 0) {
      e.target.innerHTML === "blur" ? blurValue++ : blurValue--;
      blurString = "blur(" + blurValue + "px)";
      image.style.filter = blurString + "sepia(1)";
    } else {
      image.style.filter = "none";
    }
    console.log(blurValue);
  }

  function checkAnswer() {
    var regex = /\d+/g;
    image = document.getElementById("headstone");
    blurString = image.style.filter;

    if (selected === "") {
      alert("Please select a headstone name.");
    } else {
      showResults = true;
      if (selected === props.stone.split(".")[0]) {
        if (!correct) {
          var tempScore = parseInt(localStorage.getItem("totalScore"));
          localStorage.setItem("totalScore", tempScore + points);
          myScore = tempScore + points;

          correct = true;
          // showConfetti();
          // alert(
          //   "Correct answer. You've scored " +
          //     points +
          //     " points. Try the next headstone."
          // );
          selected = "";

          image.style = "filter: sepia(1)";
          headstoneNames.value = [];
        }
      } else {
        // alert("Wrong answer. Please try again.");
        $.each(jQuery(".radioBtn"), function (index, item) {
          item.checked = false;
        });
        headstoneNames.value = headstoneNames.value.filter((stone) => {
          return stone != selected;
        });
        selected = "";
        points--;
        blurValue = parseInt(blurString.match(regex)[0]);
        image.style.filter = "blur(" + --blurValue + "px)" + "sepia(1)";
      }
    }
  }

  function clearShowResults() {
    showResults = false;
  }
  window.onbeforeunload = function (e) {
    window.parent.functonToCallBeforeThisWindowCloses();
  };
  // console.log(props.stone);
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <h2>
          Match the headstone with the name. Five tries. Points count down with each try!
        </h2>
        <div class="modal-body">
          <img
            id="headstone"
            :src="require('@/assets/img/headstones/' + stone)"
            alt="photo"
            style="filter: blur(8px) sepia(1)"
          />
          <button @click="blur">blur</button>
          <button @click="blur">deblur</button>
          <!-- </div>
    </div> -->
        </div>
        <div class="modal-header">
          <slot name="header">
            <!-- <form action="checkAnswer()"> -->
            <div v-if="showAnswers">
              <div v-for="(headstone, index) in headstoneNames" :key="index">
                <input
                  class="radioBtn"
                  type="radio"
                  name="hstone"
                  v-model="selected"
                  :value="headstone"
                  :id="'item#' + index"
                />
                <label for="id"> {{ headstone }} </label>
              </div>
            </div>
            <span id="selected"> You chose {{ selected }} </span>
          </slot>
          <span v-show="showResults">
            <button @click="clearShowResults">Clear Results</button>
            <p>
              Your selection was
              {{
                correct
                  ? "correct!!!! Please try the next headstone."
                  : "inncorect!!! Please try again."
              }}
            </p>
          </span>
        </div>
        <p>&nbsp;</p>
        <div class="modal-footer">
          <slot name="body">
            <button id="checkAnswer" @click="checkAnswer">Check Selection</button>
            <button id="checkAnswer" @click="checkAnswer">Points: {{ points }}</button>
            <button id="checkAnswer" @click="checkAnswer">
              Total Score: {{ myScore }}
            </button>
            <button @click="$emit('close')">Close</button>
            <!-- <button class="modal-default-button" @click="$emit('close')">Close</button> -->
          </slot>
          <slot name="footer">
            <!-- default footer -->
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
  .modal-footer {
    position: absolute;
    bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 90%;
  }
  #selected {
    color: red;
  }

  img {
    width: 100%;
    max-height: 300px;
  }
  img:hover {
    scale: 1.1;
  }

  .modal-mask {
    position: absolute;
    z-index: 9998;
    top: 440px;
    left: 100px;
    width: 750px;
    height: 700px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 1.5s ease;
  }
  .modal-container {
    width: 88%;
    height: 90%;
    margin: auto;
    padding: 20px 30px;
    background-color: antiquewhite;
    opacity: 1;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(255, 0, 0, 0.83);
    transition: all 0.3s ease;
  }
  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }
  .modal-body {
    margin: 20px 0;
  }
  #checkAnswer {
    margin: 20px;
  }

  .modal-default-button {
    height: 24px;
  }
  .infotxt {
    margin: 25px 0px 0px 0px;
    line-height: 150%;
  }
  /*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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
</style>
