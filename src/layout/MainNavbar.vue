<template>
  <navbar
    position="fixed"
    type="danger"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        <h3><b>ITFest</b>ival<br></h3>
      </router-link>
      <!-- <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Designed by Invision. Coded by Creative Tim
        </div>
      </el-popover> -->
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          href=""
        >
          <i class="now-ui-icons business_bank"></i>
          <p>Home</p>
        </a>
      </li>
      <drop-down
        tag="li"
        title="Event"
        icon="now-ui-icons ui-1_calendar-60"
        class="nav-item"
      >
        <nav-link to="#pelatihan">
          <i class="event"></i> Pelatihan
        </nav-link>
        <a
          href="#lomba"
          target=""
          class="dropdown-item"
        >
          <i class="event"></i> Perlombaan
        </a>
        <a
          href="#webinar"
          target=""
          class="dropdown-item"
        >
          <i class="event"></i> Webinar
        </a>
      </drop-down>
      <drop-down
              tag="li"
              title="Flashback"
              icon="now-ui-icons loader_refresh"
              class="nav-item"
      >
        <nav-link to="/landing">
          <i class="flashback"></i> IT Festival 2019
        </nav-link>
      </drop-down>
      <li class="nav-item">
        <!-- <router-link to=""> -->
          <a
          class="nav-link"
          href="https://linkr.bio/6nm69"
        >
          <i class="now-ui-icons education_paper"></i>
          <p>Guide Book</p>
        </a>
        <!-- </router-link> -->
      </li>
      <!-- <router-link to="https://linktr.ee/ITFESTIVAL2021"> -->
                <a
          class="nav-link btn-danger"
          href="https://forms.gle/Fk3qzq24SzyQrESv6"
          target="_blank"
        >
          <i class=""></i>
          <p>Upload Karya</p>
        </a>
      <!-- </router-link> -->
      <!-- <li class="nav-item"> -->
<!-- 
      
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/HMJ-Manajemen-Informatika-439911259699733"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://instagram.com/itfestpolsri?utm_medium=copy_link"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li> -->
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
