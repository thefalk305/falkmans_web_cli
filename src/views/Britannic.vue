<script>
  import BackToTop from "@/components/BackToTop.vue";
  import MiniNav from "@/components/MiniNav.vue";

  export default {
    components: {
      BackToTop,
      MiniNav,
    },
  };
</script>

<template>
  <div class="transportation">
    <MiniNav />
    <h1 align="center">H.M.S. Britannic</h1>
    <p class="dropcap">
      This is the ship that Nils Falkman sailed on from Liverpool to America. (New York
      city)
    </p>

    <p align="center">
      <img border="0" src="@/assets/img/brit1.jpg" width="401" height="266" />
    </p>

    <p align="center">H.M.S. Britannic. From Liverpool To New York city, direct.</p>

    <div id="content">
      <map name="FPMap0">
        <area
          href="http://falkman.com/britpasslist.html"
          shape="rect"
          coords="3, 1300, 322, 1323"
        />
      </map>

      <p align="center">
        <img
          border="0"
          src="@/assets/img/brit2.jpg"
          usemap="#FPMap0"
          width="80%"
          height="2778"
        />
      </p>
    </div>
  </div>
  <BackToTop />
</template>
