import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  //removes strict mode for deployment
  strict: process.env.NODE_ENV !== 'production',

  state: {
    menu: {},
    menuError: null,
    loadingMenu: false,
    menuLang: "english",
    searchString: "",

    order: {
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      forTime: "",
      fromGuest: undefined,
      items: [],
      itemId: 0,
      newOrderId: undefined,
      orderMessage: ""
    },

    orderItems: [],
    adminOrders: []

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
    },
    addToCart(state, payload) {
      state.order.items.push(payload)
      state.order.itemId++
    },
    removeFromCart(state, payload) {
      state.order.items = state.order.items.filter(item => item.id !== payload.id)
    },
    decrementQuantity(state, payload) {
      state.order.items = state.order.items.map(item => {
        if (item.id === payload) {
          return {
            ...item,
            quantity: item.quantity - 1
          }
        } else {
          return item
        }
      })
    },
    incrementQuantity(state, payload) {
      state.order.items = state.order.items.map(item => {
        if (item.id === payload) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        } else {
          return item
        }
      })
    },
    submitOrderForm(state, payload) {
      state.order.customerName = payload.customerName,
        state.order.customerEmail = payload.customerEmail,
        state.order.customerPhone = payload.customerPhone
    },
    submitOrder(state, payload) {
      state.order.newOrderId = payload.orderId,
        state.order.orderMessage = payload.message
    },
    gotOrders(state, orders) {
      state.adminOrders = orders
    },
    changeSearchString(state, filterString) {
      console.log(filterString)
      state.searchString = filterString
    }

  },
  //asynchronous logic can be performed with an action, then the mutation can be committed 
  //actions take a context object that has a commit property
  actions: {
    getMenu({ commit }) {
      commit('loadingMenu')
      axios.get('http://127.0.0.1:8000/menu')
        .then(response => {
          commit('getMenu', response.data)

        })
        .catch(err => {
          commit('menuError', err.response.status)
        })
    },
    getOrderItems({ commit }) {
      // return state.
      axios.get('http://127.0.0.1:8000/order_items')
        .then(response => {
          commit('orderItems', response.data)
        })
        .catch(err => commit('menuError', err.response.status))
    },
    getOrders({ commit }) {
      axios.get('http://127.0.0.1:8000/orders')
        .then(orders => {
          commit("gotOrders", orders.data)
        })
        .catch(err => console.log(err))

    },
    changeMenuLang({ commit }, language) {
      commit('menuLang', language)
    },
    addToCart({ commit }, item) {
      commit('addToCart', item)
    },
    removeFromCart({ commit }, item) {
      commit('removeFromCart', item)
    },
    decrementQuantity({ commit }, id) {
      commit('decrementQuantity', id)
    },
    incrementQuantity({ commit }, id) {
      commit('incrementQuantity', id)
    },
    submitOrderForm({ commit }, orderInfo) {
      commit('submitOrderForm', orderInfo)
    },
    submitOrder({ commit }) {
      axios.post('http://127.0.0.1:8000/orders', {
        customer_name: this.state.order.customerName,
        customer_email: this.state.order.customerEmail,
        customerPhoneNumber: this.state.order.customerPhone,
        items: this.state.order.items.map(item => {
          return {
            menu_id: item.menu_id,
            quantity: item.quantity
          }
        })
      })
        .then(response => {
          commit("submitOrder", response.data)
        })
        .catch(err => console.log(err))
    },
    searchMenu({ commit }, searchString) {
      commit('changeSearchString', searchString)
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
    },
    searchedMenu(state) {
      let filteredMenu = state.menu.menu_items ? state.menu.menu_items.filter(item => item.eng_name.toLowerCase().includes(state.searchString.toLowerCase()) || item.ch_name.includes(state.searchString)) : []
      return filteredMenu
    },
    receivedOrders(state) {
      let pendingOrders = Object.keys(state.adminOrders)
        .filter(order => state.adminOrders[order].status === "received")
        .map(pendingOrder => {
          return {
            ...state.adminOrders[pendingOrder],
            created_at: moment(state.adminOrders[pendingOrder].created_at).format('MMMM Do YYYY, h:mm:ss a')
          }
        })
        .sort((a, b) => a.created_at - b.created_at)
      return pendingOrders
    },
    readyForPickup(state) {
      let ready = Object.keys(state.adminOrders)
        .filter(order => state.adminOrders[order].status === "ready")
        .map(readyOrder => {
          return {
            ...state.adminOrders[readyOrder],
            created_at: moment(state.adminOrders[readyOrder].created_at).format('MMMM Do YYYY, h:mm:ss a')
          }
        })
        .sort((a, b) => a.created_at - b.created_at)
      return ready
    },
    cooking(state) {
      let cookingOrders = Object.keys(state.adminOrders)
        .filter(order => state.adminOrders[order].status === "cooking")
        .map(cookingOrder => {
          return {
            ...state.adminOrders[cookingOrder],
            created_at: moment(state.adminOrders[cookingOrder].created_at).format('MMMM Do YYYY, h:mm:ss a')
          }
        })
        .sort((a, b) => a.created_at - b.created_at)
      return cookingOrders
    },
    completeOrders(state) {
      let completed = Object.keys(state.adminOrders)
        .filter(order => state.adminOrders[order].status === "completed")
        .map(completedOrder => {
          return {
            ...state.adminOrders[completedOrder],
            created_at: moment(state.adminOrders[completedOrder].created_at).format('MMMM Do YYYY, h:mm:ss a')
          }
        })
        .sort((a, b) => a.created_at - b.created_at)
      return completed
    }
  }
})
