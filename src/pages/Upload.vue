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
                    <label for="nama">Nama</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nama"
                      v-model="upload.nama"
                      :class="{ 'is-invalid': $v.upload.nama.$error}"
                    />
                  </div>
                  <div class="form-group">
                    <label for="lomba">Cabang Lomba</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Cabang Lomba"
                      v-model="upload.lomba"
                      :class="{ 'is-invalid': $v.upload.lomba.$error }"
                    />
                  </div>
                  <div class="form-group">
                    <label for="karya">Karya</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Karya"
                      v-model="upload.karya"
                      :class="{ 'is-invalid': $v.upload.karya.$error }"
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
import {Button, FormGroupInput } from "@/components";
import {
  required,
  maxLength
} from "vuelidate/lib/validators";
export default {
  name: "upload",
  bodyClass: "upload-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      upload: {
        nama: "",
        lomba: "",
        karya: "",
      },
    };
  },
  validations: {
    upload: {
      nama: {
        required,
        maxLength: maxLength(50),
      },
      lomba: {
        required,
      },
      karya: {
        required,
        maxLength: maxLength(100),
      },
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$error) return;
      alert("Tes");
      console.log("isi: ", this.upload)
    },
  },
};
</script>
<style></style>
