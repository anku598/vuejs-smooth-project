import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue';
import Project from '../views/Project.vue';
// import Studio from '../views/Studio.vue';
// import Press from '../views/Press.vue';
// import Contact from '../views/Contact.vue';
// import BaseView from '../views/BaseView.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:page(portfolio)',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/project',
    name: 'project',
    component: Project
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router