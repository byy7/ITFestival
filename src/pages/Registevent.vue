<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div class="page-header-image" style="background-image: url('img/bgitfest.jpg')">
    </div>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col">
            <h4><b>Form Pendaftaran</b></h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 ml-auto mr-auto">
            <card>
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1"><b>Nama</b></label>
                    <input type="email" class="form-control" aria-describedby="emailHelp">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1"><b>Asal Instansi</b></label>
                    <input type="email" class="form-control" aria-describedby="emailHelp">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1"><b>Jurusan</b></label>
                    <input type="email" class="form-control" aria-describedby="emailHelp">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1"><b>Kontak</b></label>
                    <input type="email" class="form-control" aria-describedby="emailHelp">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1"><b>Upload pasfoto/ktm/ktp</b></label>
                    <input type="email" class="form-control" aria-describedby="emailHelp">
                    <input type="file" class="form-control-file" id="exampleFormControlFile1">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1"><b>Cabang Lomba</b></label>
                    <input type="email" class="form-control" aria-describedby="emailHelp">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1"><b>Email</b></label>
                    <input type="email" class="form-control" aria-describedby="emailHelp">
                  </div>
                  <router-link to="/">
                    <button class="btn btn-primary">Kembali</button>
                  </router-link>
                  <button type="submit" class="btn btn-primary">Simpan</button>
                </form>
            </card>
        </div>
        </div>
        
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Button, FormGroupInput } from "@/components";
export default {
  name: "registevent-page",
  bodyClass: "registevent-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
};
</script>
<style></style>
