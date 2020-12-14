<template>
  <div id="app">
    <Notification/>
    <Navbar/>
    <router-view :key="this.$route.path" ></router-view>
  </div>
</template>

<script>
import router from './router/index'
import db from './main'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import gql from 'graphql-tag'
import Navbar from '@/components/Navbar';
import Notification from '@/components/AddedToCartNotification.vue';
import Client from 'shopify-buy';
import { setup } from '@vue-storefront/shopify-api'

setup({
  domain: 'womnz.myshopify.com',
  storefrontAccessToken: 'hello'
})
export default {
  data() {
    return {
      //shop: ''
    }
  },
  components: {
    Navbar,
    Notification
  },
  computed: {
      ...mapGetters(['GetCartItems'])
    },
    methods: {
      ...mapActions(['FetchNewProducts',]),
    },
    apollo: {

    },
    mounted () {
    },
}
</script>

<style lang="scss">
*,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body{
  box-sizing: border-box;
  background-color: rgb(250, 250, 250);
  position: relative;
}
html{
  font-family:'Jost', sans-serif;
  font-size: 62.5%; // 10px/16px = 62.5% | 1rem = 10px
  text-size-adjust: none;

  @include respond(tab-land){
      font-size:  50%; // 8px/16px = 50% | 1rem = 8px
  }
  @include respond(tab-port){
      font-size:  37.5%; // 6px/16px = 37.5% | 1rem = 6px
  }
  @include respond(phone){
    font-size: 30%; // 5px/16px = 30% | 1rem = 5px
  }
}
#app{
  overflow: hidden;
}
</style>
