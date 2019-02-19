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
    menuLang: "english",

    order: {
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      forTime: "",
      fromGuest: undefined,
      items: []
    },
    orderItems: []

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
    orderItems(state, payload) {
      state.orderItems = payload
    },
    menuLang(state, payload) {
      state.menuLang = payload
    }

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
    },
    getOrderItems({ commit }) {
      // return state.
      axios.get('http://127.0.0.1:8000/order_items')
        .then(response => {
          commit('orderItems', response.data)
        })
        .catch(err => console.log(err))
    },
    changeMenuLang({ commit }, language) {
      console.log("this is the language passed into this action: ", language)
      commit('menuLang', language)
    }
  },
  //these can be thought of as computed properties, like a filtered from of a list
  getters: {
    mostPopularItems(state) {
      let mostPopularItems = state.orderItems.reduce((acc, item) => {
        if (acc.findIndex(thisItem => thisItem.menu_id === item.menu_id) > 0) {
          acc[acc.findIndex(thisItem => thisItem.menu_id === item.menu_id)] = {
            ...item,
            orderFrequency: acc[acc.findIndex(thisItem => thisItem.menu_id === item.menu_id)].orderFrequency + 1
          }
        } else {
          acc.push({
            ...item,
            orderFrequency: 1
          })
        }

        return acc
      }, [])
      return mostPopularItems.sort((a, b) => b.orderFrequency - a.orderFrequency).slice(0, 6)
    }
  }
})
