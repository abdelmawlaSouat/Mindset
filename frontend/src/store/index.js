/*
 * index.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/10/5 13:08:45
 *
 * Copyright (c) 2020 Shuriken
 */

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    authenticated: false,
    user: {},
    dialog: {
      authenticationType: '',
      cardName: 'card-authentications-list',
      isOpen: false,
      userEmail: ''
    }
  },
  mutations: {
  },
  actions: {
    userAuth () {
      axios.get('http://localhost:3000/api/auth/', {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' }
      }).then(res => {
        console.log(res.data)
        if (res.data.authenticated) {
          this.state.authenticated = res.data.authenticated
          this.state.user = res.data.user
        }
      }).catch(err => console.log(err))
    }
  },
  modules: {
  }
})
