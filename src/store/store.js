import Vue from 'vue'
import Vuex from 'vuex'
import getValues from './modules/getValues'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  // strict: process.env.NODE_ENV !== 'production',
  modules: {
    getValues
  },
  plugins: [
    createPersistedState({
      paths: ['getValues'],
      storage: window.sessionStorage,
      key: 'session_values'
    })
  ]
})
