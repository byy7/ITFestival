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
                    <label for="nama"><b>Nama</b></label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="nama"
                      v-model="registevent.nama"
                      :class="{ 'is-invalid': $v.registevent.nama.$error }"
                    />
                  </div>
                  <div class="form-group">
                    <label for="instansi"><b>Asal Instansi</b></label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="instansi"
                      v-model="registevent.instansi"
                      :class="{ 'is-invalid': $v.registevent.instansi.$error }"
                    />
                  </div>
                  <div class="form-group">
                    <label for="jurusan"><b>Jurusan</b>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="jurusan"
                      v-model="registevent.jurusan"
                      :class="{ 'is-invalid': $v.registevent.jurusan.$error }"
                    />
                  </div>
                  <div class="form-group">
                    <label for="kontak"><b>Kontak</b>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="kontak"
                      v-model="registevent.kontak"
                      :class="{ 'is-invalid': $v.registevent.kontak.$error }"
                    />
                  </div>
                  <div class="form-group">
                    <label for="upload"><b>Upload foto/ktm</b>
                      <input type="file" class="form-control-file" id="exampleFormControlFile1" ref="file" @change="selectFile" v-on:change="handleFileUpload()"/>
                    </label>
                    <br>
                    <button v-on:click="submitFile()" class="btn btn-primary" @click="upload" >klik disini</button>
                  </div>
                  <div class="form-group">
                    <label for="lomba"><b>Cabang Lomba</b></label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="lomba"
                      v-model="registevent.lomba"
                      :class="{ 'is-invalid': $v.registevent.lomba.$error}"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1"><b>Email</b></label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="email"
                      v-model="registevent.email"
                      :class="{ 'is-invalid': $v.registevent.email.$error}"
                    />
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
import {
  required,
  maxLength,
  email
} from "vuelidate/lib/validators";
export default {
  name: "registevent-page",
  bodyClass: "registevent-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
    data() {
    return {
      file: '',
      registevent: {
        nama: "",
        instansi: "",
        jurusan: "",
        kontak: "",
        lomba: "",
        email: "",
      },
    };
  },
  validations: {
    registevent: {
      nama: {
        required,
        maxLength: maxLength(50),
      },
      instansi: {
        required,
        maxLength: maxLength(50),
      },
      jurusan: {
        required,
        maxLength: maxLength(100),
      },
      kontak: {
        required,
        maxLength: maxLength(13),
      },
      upload: {
        required,
        maxLength: maxLength(100),
      },
      lomba: {
        required,
        maxLength: maxLength(100),
      },
      email: {
        required,
        email,
        maxLength: maxLength(100),
      },
    },
  },
  methods: {
    handleFileUpload(){
      },
    submit() {
      this.$v.$touch();
      if (this.$v.$error) return;
      alert("Tes");
      console.log("isi: ", this.registevent)
    },
  },
};
</script>
<style></style>
