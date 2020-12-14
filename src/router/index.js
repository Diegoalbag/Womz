import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ProductInfo from '../views/ProductInfo.vue';
import FallCollection from '../views/FallCollection.vue';
import Shoewear from '../views/Shoewear.vue';

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/products/:id',
      name: 'products',
      component: ProductInfo
    },
    {
      path: '/fallcol',
      name: 'Fall Collection',
      component: FallCollection
    },
    {
      path: '/shoewear',
      name: 'Shoewear',
      component: Shoewear
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
