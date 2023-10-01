import { createApp } from "vue";
// import "./style.css"
// import { createRouter, createWebHistory } from "vue-router";
import AppLink from "./components/AppLink.vue";
import GoBack from "./components/GoBack.vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

var usejson = true
var infoTableData = []

function createAp() {
  createApp(App)
    .provide("infoTable", infoTableData)
    .component("AppLink", AppLink)
    .use(router)
    .mount("#app");
  }

async function getProducts() {
  try {
    var response = await axios.get("http://localhost:5001/products");
  } catch (err) {
    console.log(err);
  }
  infoTableData = response.data;

createAp()
  // .provide('infoTable', infoTableData)
  // .provide('usejson', usejson)
  // .component('AppLink', AppLink)
  // .component('GoBack', GoBack)
  // .use(router)
  // .mount('#app')
}

if (usejson) {
  infoTableData = require("@/assets/infotable.json");
  console.log(infoTableData, "infotable from .json");
  createAp()
  // .provide('infoTable', infoTableData)
  // .provide('usejson', usejson)
  // .component('AppLink', AppLink)
  // .use(router)
  // .mount('#app')
} else {
  getProducts();
console.log(infoTableData, "infotable from database");
}




// import infoTableData from "./assets/infotable.json";

// console.log(infoTableData, "infotable from json");

