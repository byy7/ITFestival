<template>
  <div id="flashback">
    <!-- flashback header -->
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url(img/itfest2019.JPG)"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <div class="text-center">
          </div>
        </div>
      </div>
    </div>
    <!-- end flashback header -->

    <!-- contents -->
    <div
      id="content"
      style="
        background-image: url('img/batik.png');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: center;">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">IT Festival 2019</h2>
            <h6>25 Oktober - 19 November 2019</h6>
            <h4>"Sinergi Membangun Teknologi Dalam Negeri"</h4>
            <br />
            <h5 class="description"></h5>
          </div>
        </div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/pelatihan4.jpg')">
              </div>
            </div>
            <div class="col-md-5 text-center">
              <div
                class="image-container image-right"
                style="background-image: url('img/pelatihan3.jpg')">
              </div>
            </div>
          </div>
        </div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/lomba2.JPG')">
              </div>
            </div>
            <div class="col-md-5 text-center">
              <div
                class="image-container image-right"
                style="background-image: url('img/lomba.JPG')">
              </div>
            </div>
          </div>
        </div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/seminar.JPG')">
              </div>
            </div>
            <div class="col-md-5 text-center">
              <div
                class="image-container image-right"
                style="background-image: url('img/seminar.JPG')">
              </div>
            </div>
          </div>
        </div>
      </div>
      <contact />
    </div>
    <!-- end contents -->
  </div>
</template>
<script>
import Contact from "./components/Contact.vue";

export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    Contact
  }
};
</script>
<style></style>
