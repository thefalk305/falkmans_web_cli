<script>
import BackToTop from "@/components/BackToTop.vue";
// import MiniNav from "@/components/MiniNav.vue";

export default {
  components: {
    BackToTop,
    // MiniNav,
  },
};
</script>

<template>
  <div id="passengerlist">
    <div id="content" style="width: 440; height: 2778">
      <p style="text-align: center">
        <img border="0" src="@/assets/img/britpasslist1.jpg" width="902" height="1378" />
        <b style="color: fuchsia"></b>
      </p>
      <center>
        <b style="color: fuchsia"
          >At the bottom of the page is where you'll find N.P. Falkman.</b
        >
      </center>
      <p style="text-align: center">
        <img border="0" src="@/assets/img/britpasslist2.jpg" width="910" height="1292" />
      </p>
      <h2 style="text-align: center">
        <a href="http://falkman.com/britannic.html">Return</a>
      </h2>
      <p style="text-align: center">&nbsp;</p>
    </div>
    <div id="footer">
      <p>Copyright 2021 | All Rights Reserved</p>
      <p class="smtxt">
        Template Design:
        <a
          href="http://www.genealogy-web-creations.com/"
          title="Genealogy Web Creations."
        >
          Genealogy Web Creations</a
        >
      </p>
    </div>
  </div>
  <BackToTop />
</template>
