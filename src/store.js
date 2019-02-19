import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  //removes strict mode for deployment
  strict: process.env.NODE_ENV !== 'production',

  state: {
    menu: {},
    menuError: null,
    loadingMenu: false,

  },
  //synchronous functions that take state and a payload as arguments
  mutations: {
    getMenu(state, payload) {
      state.menu = payload,
        state.loadingMenu = false
    },
    menuError(state, payload) {
      state.menuError = payload
    },
    loadingMenu(state) {
      state.loadingMenu = true
    },

  },
  //asynchronous logic can be performed with an action, then the mutation can be committed 
  //actions take a context object that has a commit property
  actions: {
    getMenu({ commit }) {
      commit('loadingMenu')
      axios.get('http://127.0.0.1:8000/menu')
        .then(response => {
          console.log(response)
          commit('getMenu', response.data)

        })
        .catch(err => {
          console.log(err)
          commit('menuError', err.response.status)
        })
    }
  },
  //these can be thought of as computed properties, like a filtered from of a list
  getters: {

  }
})
