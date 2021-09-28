<template>
    <div id="oprec">
        <div class="container">
            <div class="row mt-5">
                <div class="col text-center justify-content-center">
                    <h2><b>Open Registration</b></h2>
                    <p style="font-weight: bold;">Registrasi Berakhir Dalam,</p>
                    <div class="hitungMundur">
              <div class="hari">
                <span id="Hari">0</span>
                <p>Hari</p>
              </div>
              <p class="ml-3 titik">:</p>
              <div class="jam ml-3">
                <span id="Jam">0</span>
                <p>Jam</p>
              </div>
              <p class="ml-3 titik">:</p>
              <div class="menit ml-3">
                <span id="Menit">0</span>
                <p>Menit</p>
              </div>
              <p class="ml-3 titik">:</p>
              <div class="detik ml-3">
                <span id="Detik">0</span>
                <p>Detik</p>
              </div>
            </div>
                    <img src="img/poster2.jpeg" alt=""> <br>
                        <router-link to="/login">
                            <a
                                class="btn btn-neutral mt-lg-5"
                                href="https://www.creative-tim.com/product/vue-now-ui-kit-pro"
                                target="_blank">
                                <i class=""></i>
                                <b>Daftar Sekarang!</b>
                            </a>
                        </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import { Card, FormGroupInput, Button } from '@/components';

export default {
  name: 'Oprec',
};
</script>