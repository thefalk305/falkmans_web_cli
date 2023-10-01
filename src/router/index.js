import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InfoTable from "../views/InfoTable.vue";
import FamilyTree from "../views/FamilyTree.vue";
import Edit from "../views/Edit.vue";
import Create from "../views/Create.vue";

const routesArray = ['Test', 'Chicago', 'DuBois', 'Norden', 'Trave', 'Romeo', 'Ogdensburg', 'Arbra', 'Hudiksvall', 'NewYorkCity', 'Bremen', 'Liverpool', 'Hamburg', 'Britannic', 'PassengerList', 'Göteborg', 'Albany', 'Hull', 'HeadStones', 'PassengerTraffic', 'InfoTable', 'FamilyHistory', 'PhotoPages', 'PhotoPages2', 'DaBoys', 'ShowInfoPage', 'ImageContainers', 'ShowFamilyPage', 'Blog', 'Links','tng2']


const routes = [
  { path: "/InfoTable", name: "/InfoTable", component: InfoTable },
  { path: "/", name: "FamilyTree", component: FamilyTree },
  // {
  //   path: "/",
  //   name: "/HomeView",
  //   component: () =>
  //   import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  // },
  {
    name: "Create",
    path: "/create",
    component: Create,
        meta: {
      requiresAuth: true
    }
  },

  {
    name: "Edit",
    path: "/edit/:id",
      component: Edit,
        meta: {
      requiresAuth: true
    }
  },

  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/DaBoys",
    name: "DaBoys",
    component: () =>
      import(/* webpackChunkName: "DaBoys" */ "../views/DaBoys.vue"),
  },

];

// add remainder of routes from routesArray
routesArray.forEach(buildRoutes)
function buildRoutes(route) { routes.push({ name: route, path: '/' + route, component: () => import('@/views/' + route + '.vue') }) }


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
