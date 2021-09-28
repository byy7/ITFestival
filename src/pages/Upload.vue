<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div class="page-header-image" style="background-image: url('img/bgitfest.jpg')"></div>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col">
            <h4>Upload Karya</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 ml-auto mr-auto">
            <card>
                <form>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Cabang Lomba</label>
                    <input type="password" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1"><b>Upload karya</b></label>
                    <input type="email" class="form-control" aria-describedby="emailHelp">
                    <input type="file" class="form-control-file" id="exampleFormControlFile1">
                    <small id="emailHelp" class="form-text text-muted">click here</small>
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
import {Button, FormGroupInput } from "@/components";
export default {
  name: "login-page",
  bodyClass: "login-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
};
</script>
<style></style>
