import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import DetailEvent from './pages/DetailEvent.vue';
import Guidebook from './pages/Guidebook.vue';
import Registevent from './pages/Registevent.vue';
import Upload from './pages/Upload.vue';
import Starter from './pages/Starter.vue';
import Dashboard from './pages/Dashboard.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 4000 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/landing',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 4000 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 4000 }
      }
    },
    {
      path: '/register',
      name: 'register',
      components: { default: Register, header: MainNavbar },
      props: {
        header: { colorOnScroll: 4000 }
      }
    },
    {
      path: '/detail-event',
      name: 'DetailEvent',
      components: { default: DetailEvent, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/upload',
      name: 'Upload',
      components: { default: Upload, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/guidebook',
      name: 'Guidebook',
      components: { default: Guidebook, footer: MainFooter },
      props: {
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/registevent',
      name: 'Registevent',
      components: { default: Registevent, header: MainNavbar },
      props: {
        header: { colorOnScroll: 4000 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/starter',
      name: 'starter',
      components: { default: Starter },
      props: {
        header: { colorOnScroll: 4000 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      components: { default: Dashboard },
      props: {
        header: { colorOnScroll: 4000 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
