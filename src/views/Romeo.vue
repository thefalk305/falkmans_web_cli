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
    <h1 align="center">S.S. Romeo</h1>
    <div id="content">
      <p class="dropcap">
        <b
          >This is the ship that Nils P. Falkman sailed on from G�teborg to Hull,
          England.<br />
          The high lighted text will take you to the ships manifest.</b
        >
      </p>
      <b>
        <map name="FPMap0">
          <area
            href="http://falkman.com/RomeoList.html"
            shape="rect"
            coords="750, 798, 895, 818"
          />
        </map>
        <p align="center">
          <img
            border="0"
            src="@/assets/img/romeo.jpg"
            width="80%"
            height="200%"
            usemap="#FPMap0"
          />
        </p>
      </b>
    </div>
  </div>
  <BackToTop />
</template>
