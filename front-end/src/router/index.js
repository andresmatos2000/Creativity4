import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Build from '../views/Build.vue'
import Cart from '../views/Cart.vue'
import Edit from '../views/Edit.vue'
import Members from '../views/Members.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/build',
    name: 'Build',
    component: Build
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/edit/:slug',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/members',
    name: 'Members',
    component: Members
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
