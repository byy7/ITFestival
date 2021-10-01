<template>
      <div id="flashback mt-5">
        <div class="container mb-5">
          <div class="row mt-5 text-center justify-content-center">
            <div class="col">
              <h2>
                <b>
                  <font color="red">Kilas Balik IT Festival 2019</font>
                </b>
              </h2>
            </div>
          </div>
          <div class="row mt-5 text-center justify-content-center">
            <div class="col-lg-4">
              <div class="card" style="width: 18rem">
                <img src="img/pelatihan2.JPG" class="card-img-top" alt="" />
                <div class="card-body">
                  <h5 class="card-title">Pelatihan</h5>
                  <p class="card-text">
                    Pelatihan dalam bidang IT yang menambah pengetahuan dan wawasan peserta mengenai Web Design dan Android
                  </p>
                  <router-link to="/landing" class="btn btn-primary">Selengkapnya</router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card" style="width: 18rem">
                <img src="img/lomba.JPG" class="card-img-top" alt="" />
                <div class="card-body">
                  <h5 class="card-title">Perlombaan</h5>
                  <p class="card-text">
                    Ajang kompetisi yang memacu kreativitas dan kemampuan dalam Lomba Web Programming, Short Movie, dan e-sport
                  </p>
                  <router-link to="/landing" class="btn btn-primary">Selengkapnya</router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card" style="width: 18rem">
                <img src="img/seminar.JPG" class="card-img-top" alt="" />
                <div class="card-body">
                  <h5 class="card-title">Seminar & Talkshow</h5>
                  <p class="card-text">
                    Seminar yang membahas hal terbaru dalam dunia IT, serta talkshow yang mengundang content creator terkenal di indonesia
                  </p>
                  <router-link to="/landing" class="btn btn-primary">Selengkapnya</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>

export default {
  name: 'Flashback',
};
</script>