/**************************************
              IMPORTS
**************************************/
import Vue from 'vue'
import Vuex from 'vuex'
import Settings from './modules/Settings'
import NewProducts from './modules/NewProducts'
import ShoppingCart from './modules/ShoppingCart'
import Notification from './modules/Notification'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Settings,
    NewProducts,
    ShoppingCart,
    Notification
  }
});
