<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div class="page-header-image" style="background-image: url('img/bgitfest.jpg')"></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/logoitfest.png'" alt="" />
            </div>
            <fg-input class="no-border input-lg" 
                      addon-left-icon="now-ui-icons users_circle-08" 
                      placeholder="email..."
                      v-model="user.email"
                      :class="{ 'is-invalid': $v.user.email.$error }">
            </fg-input>

            <fg-input class="no-border input-lg" 
                      addon-left-icon="now-ui-icons text_caps-small" 
                      placeholder="Password..."
                      v-model="user.password"
                      :class="{ 'is-invalid': $v.user.password.$error }"> 
            </fg-input>

            <template slot="raw-content">
              <div class="card-footer text-center">
                <a href="/" class="btn btn-primary btn-round btn-lg btn-block">Sign In</a>
              </div>
              <div class="pull-center">
                <router-link to="/Register">
                  <h6>Belum punya akun? <a class="text-white">Daftar Sekarang</a></h6>
                </router-link>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
import MainFooter from "@/layout/MainFooter";
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
} from "vuelidate/lib/validators";
// import axios from "axios";
export default {
  name: "login-page",
  bodyClass: "login-page",
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    user: {
      email: {
        required,
        email,
        maxLength: maxLength(50),
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$error) return;
      alert("Tes");
      console.log("isi: ", this.user)
    },
  },
};
</script>
<style></style>
