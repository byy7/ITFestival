<template>
  <div id="Index">
    <!-- Index Header -->
    <div class="page-header clear-filter" style="" filter-color="orange">
      <parallax class="page-header-image" style="background-image:url('img/bgitfest.jpg')">
      </parallax>
      <div class="container">
        <div class="row mt-3">
          <div class="col">
            <marquee direction="left">
              <!-- <h2>.</h2> -->
            </marquee>
          </div>
        </div>
        <div class="row logoit">
          <div class="col-sm-6 col-md-6 col-lg-6 logo mt-2">
            <img class="n-logo pb-2" src="img/logoitfest.png" width="90%" alt="" />
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 mt-5">
            
            <h4 class="h4-seo pt-5">
              Himpunan Mahasiswa Jurusan <br />
              Manajemen Informatika
            </h4>
            <h1><b>IT-FESTIVAL</b></h1>
            <h5 class="">"Sinergi Membangun Teknologi dalam Negeri"</h5>
            <!-- <router-link to="https://linktr.ee/ITFESTIVAL2021"> -->
              <a class="btn btn-neutral" href="https://linktr.ee/ITFESTIVAL2021" target="_blank">
                <i class=""></i>
                <b>Join Us</b>
              </a>
            <!-- </router-link> -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Index Header -->

    <!-- contents -->
    <div
      class="content"
      style="background-image:url('img/batik.png');
            background-size: 700px">
      <about />
      <div id="webinar"><webinar /></div>
      <div id="pelatihan"><pelatihan /></div>
      <div id="lomba"><perlombaan /></div>
      <oprec />
      <flashback />

    <div class="video text-center justify-content-center">
      <div class="container">
        <div class="row mt-5 mb-5">
          <div class="col"><h2>
                <b>
                  <font color="red">Contoh Video Time Lapse <br> Lomba Web Programming</font>
                </b>
              </h2>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/UlgC2-lnnJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>

      <contact />
    </div>
    <!-- End Contents -->
  </div>
</template>
<script>
import About from "./components/About.vue";
import Webinar from "./components/Webinar.vue";
import Pelatihan from "./components/Pelatihan.vue";
import Perlombaan from "./components/Perlombaan.vue";
import Oprec from "./components/Oprec.vue";
import Flashback from "./components/Flashback.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "index",
  bodyClass: "index-page",
  components: {
    About,
    Webinar,
    Pelatihan,
    Perlombaan,
    Oprec,
    Flashback,
    Contact
  },
};
</script>
<style></style>
